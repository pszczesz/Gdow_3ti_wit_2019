window.onload = start;

function start() {
    ustawZyczenia(zyczenia);
    setInterval(function(){ustawZyczenia(zyczenia);},5000);
}
function ustawZyczenia(zyczenia){
    const losowa = Math.floor(Math.random()*zyczenia.length);
    document.querySelector("#zyczenia").innerHTML = zyczenia[losowa];
}
const zyczenia = [`Gdy rodzina wokół siądzie,
    Już nie ważne są pieniądze,
    Bo najlepszy prezent na świecie,
    To gdy bliscy są w komplecie `,
        `Choinki świecącej, gwiazdy błyszczącej.
    Pysznej kolacji i sylwestrowej libacji.
    Gwiazdora trzeźwego, kaca ogromnego,
    wspaniałych wrażeń i spełnienia marzeń. `,
        `Spokojnych świąt Bożego Narodzenia, spędzonych z bliskimi, w ciepłej, rodzinnej atmosferze, oraz samych szczęśliwych dni w nadchodzącym nowym roku życzy...`,
        `Życzenia radosnych Świąt Bożego Narodzenia, odpoczynku w rodzinnym gronie oraz pasma sukcesów i spełnienia najskrytszych marzeń w nadchodzącym Nowym Roku przesyła ... `
    ];