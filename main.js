
var input = document.guerySelector("#input");

input.addEventListener("input", convert);

function convert() {
var value = input.value;
var output = document.querySelector("#output")
if (value!== "") {
 output.style.display = "block"
} else {
    output.style.display = "none"
}

document.querySelector("#gram").textContent = value * 453.592

document.querySelector("#kilogram").textContent = value * 453.592 / 1000;

document.querySelector("#ounces").textContent = value * 16
}
