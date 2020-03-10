window.onload = function(){
    document.querySelector("#text").onkeydown = function(e){
        console.log(e);
        console.log("zdarzenie onkeydown");
        
    };
    document.querySelector("#text").onkeypress = function(e){
        console.log(e);
        console.log("zdarzenie onkeypress");
        document.querySelector("#wynik").innerHTML = e.key.toUpperCase()
           +document.querySelector("#wynik").innerHTML;
    };
    document.querySelector("#text").onkeyup = function(e){
        console.log(e);
        console.log("zdarzenie onkeyup");
    };
};