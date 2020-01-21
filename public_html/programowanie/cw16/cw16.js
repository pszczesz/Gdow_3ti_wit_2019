window.onload = function() {
  document.querySelector("#zegar").innerHTML = new Date().toLocaleTimeString();
  setActualDate();
  setInterval(function() {
    let d = new Date();
    document.querySelector("#zegar").innerHTML = d.toLocaleTimeString();
  }, 1000);
};
function setActualDate(){
    let months = ["Styczeń","Luty","Marzec","Kwiecień","Maj","Czerwiec","Lipiec",
                "Sierpień","Wrzesień","Październik","Listopad","Grudzień"];
    let days = ["Niedziela","Poniedziałek","Wtorek","Środa","Czwartek","Piątek",
                "Sobota"];
    let current = new Date();
    let data = {month:months[current.getMonth()],
                date:current.getDate(),
                day:days[current.getDay()],
                year: current.getFullYear()
            };
    console.log(data);
    document.querySelector("#month").innerHTML = data.month;        
    document.querySelector("#day").innerHTML = data.date;        
    document.querySelector("#weekDay").innerHTML = data.day;        
    document.querySelector("#year").innerHTML = data.year;        
}