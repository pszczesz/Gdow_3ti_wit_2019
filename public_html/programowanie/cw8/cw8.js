window.onload = start;
function start(){
    document.querySelector("#wyswietl").onclick = wyswietl;
}
function wyswietl(){
    const imie = document.querySelector("#imie").value;
    const nazwisko = document.querySelector("#nazwisko").value;
    document.querySelector("#wynik").innerHTML = "Witaj "+imie+ " "+nazwisko+" dzisiaj mamy: "
       +(new Date().toLocaleDateString());
}