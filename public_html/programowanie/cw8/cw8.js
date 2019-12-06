window.onload = start;
function start(){
<<<<<<< HEAD
    document.querySelector("#wyswietl").onclick = wyswietl;
}
function wyswietl(){
    const imie = document.querySelector("#imie").value;
    const nazwisko = document.querySelector("#nazwisko").value;
    document.querySelector("#wynik").innerHTML = "Witaj "+imie+ " "+nazwisko+" dzisiaj mamy: "
       +(new Date().toLocaleDateString());
=======
    document.querySelector("#generuj").onclick = generuj;    
}
function generuj(){
    const text = document.querySelector("#text").innerHTML;
    let html = ""
    for(let i=0;i<10;i++){
        html += "<p>"+text+"</p>";
    }
    document.querySelector("#wynik").innerHTML = html;
>>>>>>> 10642c4d4e573e90622649ff0cab40fc460a6670
}