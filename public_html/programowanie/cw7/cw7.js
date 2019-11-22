window.onload = start;
let runda = 0;
const losowa = Math.floor(Math.random()*100+1);
function start(){
    document.querySelector("#sprawdz").onclick = sprawdz;
}
function sprawdz(){    
    const liczba = parseInt(document.querySelector("#liczba").value);
    runda++;
    if(isNaN(liczba)){
        document.querySelector("#wynik").innerHTML += "<div class='error'>Błędne dane!!!</div>";
        return;
    }
    if(liczba===losowa){
        document.querySelector("#wynik")
            .innerHTML += `<div class='sukces'>Udało Ci się zgadnąć. Ilość prób: ${runda}</div>`;
        return;
    }
    if(liczba<losowa){
        document.querySelector("#wynik")
            .innerHTML += `<div class='malo'>Za mała liczba: ${liczba}. Ilość prób: ${runda}</div>`;
        return;
    }
    if(liczba>losowa){
        document.querySelector("#wynik")
            .innerHTML += `<div class='duzo'>Za duża liczba: ${liczba}. Ilość prób: ${runda}</div>`;
        return;
    }
}