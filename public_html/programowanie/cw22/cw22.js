window.onload = function(){
    let skarb = document.querySelector("#skarb");
    let size = 15;
    skarb.style.width = size+"%";
    skarb.style.height = size+"%";
    console.log(skarb.style.width);
    const left = Math.floor(Math.random()*90);
    const top = Math.floor(Math.random()*90);
    
    skarb.style.left = left+"%";
    skarb.style.top = top+"%";
    console.log("left: "+left+" top: "+top);
    skarb.onmouseenter = function(){
        document.querySelector("#info")
           .innerHTML = "BRAWO znaleziono skarb!!!!";
    }
    skarb.onmouseout = function(){
        document.querySelector("#info").innerHTML = "";
    }
}