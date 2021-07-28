var first = document.querySelector("#f");
var second = document.querySelector("#s");
var third = document.querySelector("#t");
var btn = document.querySelector("#angle");

function check() {
    if (Number(first.value) + Number(second.value) + Number(third.value) === 180) {
        document.querySelector("#op").innerText = "Yes,these angles make a triangle";
    }
    else if (first.value == "" || second.value == "" || third.value == "" || Number(first.value) < 0 || Number(second.value) < 0 || Number(third.value) < 0) {
        document.querySelector("#op").innerText = "Please enter correct value";
    }
    else {
        document.querySelector("#op").innerText = "No,these angles do not make a triangle";
    }
}
btn.addEventListener("click", check);