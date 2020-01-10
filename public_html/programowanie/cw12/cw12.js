window.onload = start;

function start() {
    let vis = document.querySelector("#vis");
    let dis = document.querySelector("#dis");
    vis.onclick = visClick;
    dis.onclick = disClick;
    document.querySelector("#btn1").onmousedown = function () {
        this.setAttribute("src", "guzik3.png");
    }
    document.querySelector("#btn1").onmouseup = function () {
        this.setAttribute("src", "guzik1.png");
    }
    document.querySelector("#btn1").onclick = visClick;
}
function visClick() {
    let scene = document.querySelector("#scene");
    if (scene.style.visibility != "hidden") {
        scene.style.visibility = "hidden";
    } else {
        scene.style.visibility = "visible";
    }
}
function disClick() {
    let scene = document.querySelector("#scene");
    if (scene.style.display != "none") {
        scene.style.display = "none";
    } else {
        scene.style.display = "block";
    }
}