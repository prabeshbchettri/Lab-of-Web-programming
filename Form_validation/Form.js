document.getElementById("myForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let valid = true;

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("passError").innerText = "";

    if (name.length < 3) {
        document.getElementById("nameError").innerText = "Name must be at least 3 characters";
        valid = false;
    }

    if (!email.includes("@")) {
        document.getElementById("emailError").innerText = "Enter valid email";
        valid = false;
    }

    if (password.length < 6) {
        document.getElementById("passError").innerText = "Password must be at least 6 characters";
        valid = false;
    }

    if (valid) {
        alert("Form submitted successfully!");
    }
});