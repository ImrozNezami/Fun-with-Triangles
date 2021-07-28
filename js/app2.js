var first = document.querySelector("#f");
var second = document.querySelector("#s");
var op = document.querySelector("#op");
var btn = document.querySelector("#angle");
function calculate() {
    if (first.value == "" || second.value == "" || Number(first.value) <= 0 || Number(second.value) <= 0) {
        op.innerText = "Please enter correct value";
    }
    else {
        var c = Number(first.value) * Number(first.value) + Number(second.value) * Number(second.value);
        var fin = Math.sqrt(c);
        op.innerText = fin;
    }
}
btn.addEventListener("click", calculate);