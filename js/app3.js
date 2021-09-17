var afirst = document.querySelector("#f1");
var bfirst = document.querySelector("#s1");
var cfirst = document.querySelector("#t1");
var btnop1 = document.querySelector("#areaop1");
var aop1 = document.querySelector("#aop1");
var asecond = document.querySelector("#f2");
var bsecond = document.querySelector("#s2");
var angle = document.querySelector("#t2");
var btnop2 = document.querySelector("#areaop4");
var aop2 = document.querySelector("#aop2");
var athird = document.querySelector("#f3");
var bthird = document.querySelector("#s3");
var btnop3 = document.querySelector("#areaop5");
var aop3 = document.querySelector("#aop3");
var rb1 = document.querySelector("#rb1");
var rb2 = document.querySelector("#rb2");
var rb3 = document.querySelector("#rb3");

function areaop2() {
    var s = Number(afirst.value) + Number(bfirst.value) + Number(cfirst.value);
    var os = s / 2;
    var cont =
        os * (os - afirst.value) * (os - bfirst.value) * (os - cfirst.value);
        var finalcont = Math.sqrt(cont);
        if(Number(afirst.value) + Number(bfirst.value) < Number(cfirst.value) ||
            Number(bfirst.value) + Number(cfirst.value)< Number(afirst.value) ||
            Number(afirst.value) + Number(cfirst.value) < Number(bfirst.value)){
            aop1.innerText="Enter valid length of sides";
        }
        else if(Number(afirst.value)<=0 || Number(bfirst.value)<=0 ||Number(cfirst.value)<=0){
            aop1.innerText="Enter correct value";
    }
    else {
        aop1.innerText = finalcont;
    }
}
function areaangle() {
    var angval = Number(angle.value);
    var val =
        Number(asecond.value) *
        Number(bsecond.value) *
        Math.sin((angval * Math.PI) / 180);

    var fv = val / 2;
    if(angval<=0 || asecond.value<=0 || bsecond.value<=0 || fv<=0){
        aop2.innerText="Enter correct value";
    }
    else {
        aop2.innerText = fv;
    }
}
function bh() {
    var bha = Number(athird.value) * Number(bthird.value) / 2;
    if(athird.value<=0 || bthird.value<=0){
        aop3.innerText="Enter correct value";
    }
    else{
    aop3.innerText = bha;
    }
}

function rb1disp() {
    document.querySelector("#op2").style.display = "none";
    document.querySelector("#op3").style.display = "none";
    document.querySelector("#op1").style.display = "block";
}
function rb2disp() {
    document.querySelector("#op1").style.display = "none";
    document.querySelector("#op3").style.display = "none";
    document.querySelector("#op2").style.display = "block";
}
function rb3disp() {
    document.querySelector("#op1").style.display = "none";
    document.querySelector("#op2").style.display = "none";
    document.querySelector("#op3").style.display = "block";
}
btnop1.addEventListener("click", areaop2);
btnop2.addEventListener("click", areaangle);
btnop3.addEventListener("click", bh);

rb1.addEventListener("click", rb1disp);
rb2.addEventListener("click", rb2disp);
rb3.addEventListener("click", rb3disp);