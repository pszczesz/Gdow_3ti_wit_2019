window.onload = function () {
    const zyczenia = [`W dniu Bożego Narodzenia składamy najlepsze życzenia: by ta gwiazdka pierwsza na niebie, zabłysnęła właśnie dla Ciebie i przyniosła szczęście i zdrowie całej Rodzinie i Tobie.`,
        `W te Święta Bożego Narodzeniaprzyjmijcie gorące życzeniawiadomo: zdrowia, no i powodzenia,uśmiechu, radości i zadowolenia.`,
        `Już gwiazdka pierwsza zabłysła,czas zasiadać za stołem. Choinka, a na niej ozdób trzysta, wśród nich Mikołaj z aniołem.
            Mikołaj przyniesie prezenty, anioł szczęście nich ześle z nieba. Miłość niech błyszczy, jak diamenty
            i niech nigdy nie zabraknie chleba.`
    ];
    document.querySelector("#choinka").onclick = function () {
        let los = Math.floor(Math.random() * zyczenia.length);
        document.querySelector("#zyczenia").innerHTML = zyczenia[los];
    }

}