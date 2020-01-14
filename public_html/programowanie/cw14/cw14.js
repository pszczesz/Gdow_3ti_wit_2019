window.onload = function(){
    document.querySelector("#oblicz").onclick = function(){
        document.querySelector("#wynik").innerHTML = "";
        let elem = document.querySelector("#n");
        if(Validate(elem)){
            let n = parseInt(elem.value);            
            if(document.querySelector("#iter").checked){
                document.querySelector("#wynik").innerHTML = n+"! = "
                +silniaIter(n)+ " - metoda iteracyjna";
            }else{
                document.querySelector("#wynik").innerHTML = n+"! = "
                +silniaRek(n)+ " - metoda rekurencyjna";
            }
           
        }
    };
};
function silniaRek(n){
    if(n<=1) return 1;
    return silniaRek(n-1)*n;
}
function silniaIter(n){
    if(n<1) return 1;
    let wynik = 1;
    for(let i=1;i<=n;i++){
        wynik = wynik*i;
    }
    return wynik;
}
function Validate(elem){
    let span = elem.nextElementSibling;
    span.innerHTML = "";
    let value = parseInt(elem.value);
    if(isNaN(value)){
        span.innerHTML = "Błędne dane!!!";
        return false;
    }
    if(value<1 || value>20){
        span.innerHTML = "Liczba spoza zakresu!!!";
        return false;
    }
    return true;
}