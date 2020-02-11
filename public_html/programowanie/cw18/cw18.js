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
}
function Validate(color){
    return !isNaN(color) && color>=0 && color<=255;
}