window.onload = function(){
    document.querySelector("#zatwierdz").onclick = function(){
        let loginElem = document.querySelector("#login");
        let pass1Elem = document.querySelector("#password1");
        let pass2Elem = document.querySelector("#password2");
        let loginOK = ValidateLogin(loginElem);
        let pas1OK = ValidatePass1(pass1Elem);
        let passSameOK = ValidateSame(pass1Elem,pass2Elem);
        if(loginOK && pas1OK && passSameOK){
            let formDane = {
                login:document.querySelector("#login").value,
                password:document.querySelector("#password1").value,
                klasa:document.querySelector("#klasa").value,
                others:getInfo(),
                info : function(){
                    let html = "<ul>";
                    html+="<li>login: "+this.login+"</li>";
                    html+="<li>hasło: "+this.password+"</li>";
                    html+="<li>klasa: "+this.klasa+"</li>";
                    html+="<li>dodoatkowe informacje: <ul>";
                    for(let i=0;i<this.others.length;i++){
                        html += "<li>"+this.others[i]+"</li>"
                    }

                    html +="</ul></li>";
                    return html;
                }
            };
            console.log(formDane);
            document.querySelector("#wynik").innerHTML = formDane.info();
        }
    }
}
function getInfo(){
    let checkBoxes = document.querySelectorAll("input[type=checkbox]");
    let dane = [];
    for(let i=0;i<checkBoxes.length;i++){
        if(checkBoxes[i].checked){
            dane.push(checkBoxes[i].value);
        }
    }
    return dane;
}
function ValidateLogin(elem){
    //console.log(elem);
    let value = elem.value;
    let next = elem.nextElementSibling;
    //console.log(next);
    if(value.trim().length>2){
        next.innerHTML = "";
        return true;
    }else{
        next.innerHTML = "Błedny lub zbyt krótki login!!";
        return false;
    }
}
function ValidatePass1(elem){
    let value = elem.value;
    let next = elem.nextElementSibling;
    let pat = /\d/;
    if(value.trim().length>5 && pat.test(value)){
        next.innerHTML = "";
        return true;
    }else{
        next.innerHTML = "Login musi mieć co najmniej 6 znaków i co najmniej jedną cyfrę!!!";
        return false;
    }
}
function ValidateSame(elem1,elem2){    
    let next = elem2.nextElementSibling;
    if(elem1.value==elem2.value){
        next.innerHTML = "";
        return true;
    }else{
        next.innerHTML = "Hasła się różnią!!!!";
        return false;
    }
}