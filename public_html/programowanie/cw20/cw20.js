window.onload = function(){
    document.querySelector("#kwadrat").onmouseover = function(){
        document.querySelector("#info")
        .innerHTML+="<span class='nad'>Myszka nad kwadratem: "
            +(new Date()).toLocaleTimeString()+"</span> ";
    };
    document.querySelector("#kwadrat").onmouseout = function(){
        document.querySelector("#info")
        .innerHTML+="<span class='obok'>Myszka poza kwadratem: "
            +(new Date()).toLocaleTimeString()+"</span> ";
    };
};