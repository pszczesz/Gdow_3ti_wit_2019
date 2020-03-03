window.onload = function(){
    document.querySelector("#start").onclick = function(){
        const rows = parseInt(document.querySelector("#rows").value);
        const cols = parseInt(document.querySelector("#cols").value);
        if(!isNaN(rows) && !isNaN(cols) && rows>=10 && rows<=100
            && cols>=10 && cols<=100){
            document.querySelector("#tab").innerHTML = generTab(rows,cols);
            const tds = document.querySelectorAll("td");
            for(let i=0;i<tds.length;i++){
                tds[i].onmousedown = function(e){
                    //console.log(e);
                    switch(e.buttons){
                        case 1 : this.innerHTML = "<img src='x.png' alt='x'>";
                            break;
                        case 2 :this.innerHTML = "<img src='o.png' alt='o'>";
                        break;
                        default : this.innerHTML = "";
                    }
                }
                tds[i].oncontextmenu = function(e){
                    e.preventDefault();
                    return false;
                }
            }

        }
    };
};
function generTab(rows,cols){
    let html = "<table>";
    for(let i=0;i<rows;i++){
        html += "<tr>";
        for(let j=0;j<cols;j++){
            html += "<td></td>";
        }
        html +="</tr>";
    }
    return html +="</table>";
}