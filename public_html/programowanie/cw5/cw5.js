window.onload = start;//wykonanie skryptu po zaladowaniu strony


function start(){
    const btn1 = document.querySelector("#btn1");
    console.log(btn1);
    const btn2 = document.querySelector("#btn2");
    console.log(btn2);
    const btn3 = document.querySelector("#btn3");
    console.log(btn3);
    //zdefiniowanie zdarzenia onclick dla przyciskow
    btn1.onclick = klik1;
    btn2.onclick = klik2;
    btn3.onclick = klik3;
    document.querySelector("#suwak1").oninput = zmiana;
}
function zmiana(){
    document.querySelector("#karta").style.opacity = this.value;
}
function klik1(){
    console.log("kliknieto btn1");       
    document.querySelector("#karta").style.backgroundColor = "red";
    
}   
function klik2(){
    console.log("kliknieto btn2");
    document.querySelector("#karta").style.backgroundColor = "green";
}
function klik3(){
    console.log("kliknieto btn3");
    document.querySelector("#karta").style.backgroundColor = "blue";
}