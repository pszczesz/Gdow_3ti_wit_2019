window.onload = function(){
    document.querySelector("#oblicz").onclick = function(){
        document.querySelector("#wynik").innerHTML 
                       = document.querySelector("#data").value;
    }
}