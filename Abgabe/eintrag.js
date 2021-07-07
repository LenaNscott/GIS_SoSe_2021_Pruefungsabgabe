"use strict";
let highscoreEintrag = document.getElementById("fertig");
let eingabeNamen = document.getElementById("nameEintrag");
highscoreEintrag.addEventListener("click", cookie);
let cookieZeit;
if (document.cookie) {
    cookieZeit = document.cookie;
}
let anzeigeZeit = document.createElement("timer");
//document.getElementById("body").appendChild(anzeigeZeit);
function cookie() {
    let formData = new FormData(document.forms[0]);
    let query = new URLSearchParams(formData);
    document.cookie = query.toString();
    console.log(document.cookie);
    let cookieSplit = document.cookie.split(";");
    let eingabeSpieler = [];
    for (let i = 0; i < cookieSplit.length; i++) {
        eingabeSpieler = eingabeSpieler.concat(cookieSplit[i].split("="));
    }
    let anzahlKlicks = parseInt(eingabeSpieler[1]);
    console.log(anzahlKlicks);
    let sekunden = parseInt(eingabeSpieler[3]) / 3;
    let punkte = Math.round(80000 / (anzahlKlicks + sekunden));
    console.log(punkte);
    let zeit = parseInt(eingabeSpieler[3]);
    let hrs = 0;
    let sec = zeit % 60;
    let min = (zeit - sec) / 60;
    console.log(min);
    console.log(sec);
    anzeigeZeit.textContent = (hrs > 9 ? hrs : "0" + hrs) + ":" + (min > 9 ? min : "0" + min) + ":" + (sec > 9 ? sec : "0" + sec);
    console.log(anzeigeZeit.textContent);
    let eintrag = ["punkte=" + punkte, cookieSplit[1], cookieSplit[2]];
    console.log(eintrag);
    eintragDatenbank(eintrag);
    weiterleitungSeite(highscoreEintrag.id);
}
//# sourceMappingURL=eintrag.js.map