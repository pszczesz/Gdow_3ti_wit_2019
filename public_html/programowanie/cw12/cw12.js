window.onload = start;

function start(){
    let vis = document.querySelector("#vis");
    let dis = document.querySelector("#dis");
    vis.onclick = visClick;
    dis.onclick = disClick;
}
function visClick(){
    let scene = document.querySelector("#scene");
    if(scene.style.visibility != "hidden"){
        scene.style.visibility = "hidden";
    }else{
        scene.style.visibility = "visible";
    }    
}
function disClick(){
    let scene = document.querySelector("#scene");
    if(scene.style.display != "none"){
        scene.style.display = "none";
    }else{
        scene.style.display = "block";
    }    
}