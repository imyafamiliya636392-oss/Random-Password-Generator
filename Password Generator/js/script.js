const passwordField = document.getElementById("password");
const lengthSlider = document.getElementById("length");
const lengthValue = document.getElementById("lengthValue");

const upper = document.getElementById("upper");
const lower = document.getElementById("lower");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");

const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");

lengthSlider.oninput = () => {
    lengthValue.innerText = lengthSlider.value;
};

function generatePassword() {
    const len = lengthSlider.value;

    const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerSet = "abcdefghijklmnopqrstuvwxyz";
    const numberSet = "0123456789";
    const symbolSet = "!@#$%^&*()_+-=";

    let chars = "";
    if (upper.checked) chars += upperSet;
    if (lower.checked) chars += lowerSet;
    if (numbers.checked) chars += numberSet;
    if (symbols.checked) chars += symbolSet;

    if (chars === "") {
        alert("Hech bo‘lmaganda bitta parametrni tanlang!");
        return "";
    }

    let pass = "";
    for (let i = 0; i < len; i++) {
        pass += chars[Math.floor(Math.random() * chars.length)];
    }

    return pass;
}

generateBtn.onclick = () => {
    passwordField.value = generatePassword();
};

copyBtn.onclick = () => {
    if (!passwordField.value) return;
    navigator.clipboard.writeText(passwordField.value);
    copyBtn.innerText = "Copied!";
    setTimeout(() => (copyBtn.innerText = "Copy"), 1500);
};
