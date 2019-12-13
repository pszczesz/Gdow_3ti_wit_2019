window.onload = start;
function dd(elem){
    return elem;
}
const tab = ["asas",23,dd,89];
console.log(tab);
console.log(tab[2]("ala ma kota"));
function start() {
    document.querySelector("#prezent").onchange = sprawdz;

}
function sprawdz() {
    if (!czyGrzeczny()) {
        document.querySelector("#wynik").innerText = "Niestety brak prezentu!!"
            + this.value;;
        return;
    }
    document.querySelector("#wynik").innerText = "Bardzo proszę oto prezent: "
        + this.value;
}
function czyGrzeczny() {
    const liczba = Math.floor(Math.random() * 10 + 1);
    return liczba % 2 == 0 ? true : false;
}