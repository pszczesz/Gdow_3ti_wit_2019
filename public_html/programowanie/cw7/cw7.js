window.onload = start;

function start(){
    document.querySelector("#text").onkeyup = zmiana;
}

function zmiana(){
    document.querySelector("#wynik").innerHTML = this.value.toUpperCase();
}