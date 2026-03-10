let products = [
    { id: 1, name: "Laptop", price: 800 },
    { id: 2, name: "Phone", price: 500 },
    { id: 3, name: "Headphones", price: 100 }
];

let cart = [];

function displayProducts() {
    let container = document.getElementById("products");
    products.forEach(p => {
        container.innerHTML += `
            <div class="product">
                ${p.name} - $${p.price}
                <button onclick="addToCart(${p.id})">Add</button>
            </div>
        `;
    });
}

function addToCart(id) {
    let item = cart.find(p => p.id === id);
    if (item) {
        item.quantity++;
    } else {
        let product = products.find(p => p.id === id);
        cart.push({ ...product, quantity: 1 });
    }
    updateCart();
}

function removeFromCart(id) {
    cart = cart.filter(p => p.id !== id);
    updateCart();
}

function updateCart() {
    let cartDiv = document.getElementById("cart");
    cartDiv.innerHTML = "";
    let total = 0;

    cart.forEach(p => {
        total += p.price * p.quantity;
        cartDiv.innerHTML += `
            <div class="cart-item">
                ${p.name} - $${p.price} x 
                <input type="number" value="${p.quantity}" min="1"
                onchange="changeQty(${p.id}, this.value)">
                <button onclick="removeFromCart(${p.id})">Remove</button>
            </div>
        `;
    });

    document.getElementById("total").innerText = total;
}

function changeQty(id, qty) {
    let item = cart.find(p => p.id === id);
    item.quantity = parseInt(qty);
    updateCart();
}

displayProducts();