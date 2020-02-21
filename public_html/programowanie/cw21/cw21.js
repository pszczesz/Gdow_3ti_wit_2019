window.onload = function(){
    document.querySelector("#zatwierdz").onclick = function(){
        let loginElem = document.querySelector("#login");
        let pass1Elem = document.querySelector("#password1");
        let pass2Elem = document.querySelector("#password2");
        let loginOK = ValidateLogin(loginElem);
        let pas1OK = ValidatePass1(pass1Elem);
        let passSameOK = ValidateSame(pass1Elem,pass2Elem);
    }
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
    let value = elem2.value;
    let next = elem2.nextElementSibling;
    if(elem1.value==elem2.value){
        next.innerHTML = "";
        return true;
    }else{
        next.innerHTML = "Hasła się różnią!!!!";
        return false;
    }
}