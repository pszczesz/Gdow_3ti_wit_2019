window.onload = function(){
    document.querySelector("#zmien").onclick = function(){
        const color = document.querySelector("#color").value;
        console.log(color);
        document.querySelector("#kwadrat")
           .style.backgroundColor = color;
    }
    document.querySelector("#zmien2").onclick = function(){
        const red = parseInt(document.querySelector("#red").value);
        const green = parseInt(document.querySelector("#green").value);
        const blue = parseInt(document.querySelector("#blue").value);
        if(Validate(red) && Validate(green) && Validate(blue)){
            document.querySelector("#kwadrat")
            .style.backgroundColor = "rgb("+red+","+green+","+blue+")";
        }else{
            alert("Błędne wartości kolorów!!!");
        }       
    }
    let suwaki = document.querySelectorAll("input[type=range]");
    for(let i=0;i<suwaki.length;i++){
        suwaki[i].oninput = function(){
            const red = parseInt(document.querySelector("#redS").value);
            const green = parseInt(document.querySelector("#greenS").value);
            const blue = parseInt(document.querySelector("#blueS").value);
            document.querySelector("#kwadrat")
                .style.backgroundColor = "rgb("+red+","+green+","+blue+")";
        }       
    }
}
function Validate(color){
    return !isNaN(color) && color>=0 && color<=255;
}