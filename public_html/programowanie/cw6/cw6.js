window.onload = start;

function start(){
    document.querySelector("#suwak").oninput = zmiana;
}

function zmiana(){
    const obrazki = document.querySelectorAll("img");
    console.log(obrazki);
    for(let i=0; i<obrazki.length;i++){
        obrazki[i].style.height = this.value+"px";
    }
}