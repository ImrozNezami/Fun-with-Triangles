var btn = document.querySelector("#fs");
var score = 0;
var r11 = document.querySelector("#r11");
var r12 = document.querySelector("#r12");
var r21 = document.querySelector("#r21");
var r22 = document.querySelector("#r22");
var r31 = document.querySelector("#r31");
var r32 = document.querySelector("#r32");
var r41 = document.querySelector("#r41");
var r42 = document.querySelector("#r42");
var r51 = document.querySelector("#r51");
var r52 = document.querySelector("#r52");
var r61 = document.querySelector("#r61");
var r62 = document.querySelector("#r62");
var r71 = document.querySelector("#r71");
var r72 = document.querySelector("#r72");
var r81 = document.querySelector("#r81");
var r82 = document.querySelector("#r82");
var r91 = document.querySelector("#r91");
var r92 = document.querySelector("#r92");
var r101 = document.querySelector("#r101");
var r102 = document.querySelector("#r102");
function checked() {
    if (r11.checked) {
        score = score + 1;
    }
    if (r21.checked) {
        score = score + 1;
    }
    if (r31.checked) {
        score = score + 1;
    }
    if (r41.checked) {
        score = score + 1;
    }
    if (r52.checked) {
        score = score + 1;
    }
    if (r61.checked) {
        score = score + 1;
    }
    if (r72.checked) {
        score = score + 1;
    }
    if (r81.checked) {
        score = score + 1;
    }
    if (r92.checked) {
        score = score + 1;
    }
    if (r102.checked) {
        score = score + 1;
    }
    if (r12.checked) {
        document.querySelector("#group1").style.backgroundColor = "#ff6666";
    }
    if (r22.checked) {
        document.querySelector("#group2").style.backgroundColor = "#ff6666";
    }
    if (r32.checked) {
        document.querySelector("#group3").style.backgroundColor = "#ff6666";
    }
    if (r42.checked) {
        document.querySelector("#group4").style.backgroundColor = "#ff6666";
    }
    if (r51.checked) {
        document.querySelector("#group5").style.backgroundColor = "#ff6666";
    }
    if (r62.checked) {
        document.querySelector("#group6").style.backgroundColor = "#ff6666";
    }
    if (r71.checked) {
        document.querySelector("#group7").style.backgroundColor = "#ff6666";
    }
    if (r82.checked) {
        document.querySelector("#group8").style.backgroundColor = "#ff6666";
    }
    if (r91.checked) {
        document.querySelector("#group9").style.backgroundColor = "#ff6666";
    }
    if (r101.checked) {
        document.querySelector("#group10").style.backgroundColor = "#ff6666";
    }
    document.querySelector("#ofs").innerText = score;
    btn.style.display = "none";
}

btn.addEventListener("click", checked);
