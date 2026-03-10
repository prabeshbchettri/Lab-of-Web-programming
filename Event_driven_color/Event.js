let defaultTheme = {
    background: "#ffffff",
    text: "#000000",
    button: "#986558"
};

let currentTheme = { ...defaultTheme };

const bgInput = document.getElementById("bgColor");
const textInput = document.getElementById("textColor");
const btnInput = document.getElementById("btnColor");

const applyBtn = document.getElementById("applyBtn");
const resetBtn = document.getElementById("resetBtn");

applyBtn.addEventListener("click", function () {

    currentTheme.background = bgInput.value;
    currentTheme.text = textInput.value;
    currentTheme.button = btnInput.value;

    applyTheme();
});

resetBtn.addEventListener("click", function () {

    currentTheme = { ...defaultTheme };

    bgInput.value = defaultTheme.background;
    textInput.value = defaultTheme.text;
    btnInput.value = defaultTheme.button;

    applyTheme();
});

function applyTheme() {

    document.body.style.background = currentTheme.background;
    document.body.style.color = currentTheme.text;

    document.querySelectorAll("button").forEach(btn => {
        btn.style.backgroundColor = currentTheme.button;
        btn.style.color = "white";
    });

}