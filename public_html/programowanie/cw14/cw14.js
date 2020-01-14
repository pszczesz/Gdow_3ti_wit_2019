window.onload = function(){
    document.querySelector("#oblicz").onclick = function(){
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
    return true;
}