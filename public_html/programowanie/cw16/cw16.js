window.onload = function() {
  document.querySelector("#zegar").innerHTML = new Date().toLocaleTimeString();
  setInterval(function() {
    let d = new Date();
    document.querySelector("#zegar").innerHTML = d.toLocaleTimeString();
  }, 1000);
};
