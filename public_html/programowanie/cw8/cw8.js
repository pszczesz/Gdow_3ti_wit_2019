window.onload = start;
function start(){
    document.querySelector("#generuj").onclick = generuj;    
}
function generuj(){
    const text = document.querySelector("#text").innerHTML;
    let html = ""
    for(let i=0;i<10;i++){
        html += "<p>"+text+"</p>";
    }
    document.querySelector("#wynik").innerHTML = html;
}