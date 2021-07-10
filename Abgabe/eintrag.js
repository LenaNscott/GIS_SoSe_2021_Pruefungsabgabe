"use strict";
let highscoreEintrag = document.getElementById("fertig");
highscoreEintrag.addEventListener("click", datenbankSchreiben);
let anzeigeZeit = document.getElementById("timerAnzeige");
let anzeigeScore = document.getElementById("punkteAnzeige");
let cookiesSplit = [];
//console.log(document.cookie);
cookiesSplit = document.cookie.split("; ");
//console.log(cookiesSplit);
let klicks = parseInt(cookiesSplit[0].split("=")[1]);
let sek = parseInt(cookiesSplit[1].split("=")[1]);
let punkte = Math.round(80000 / (klicks + (sek / 3)));
anzeigeScore.innerHTML = punkte.toString();
anzeigeZeit.innerHTML = secString(sek.toString());
async function datenbankSchreiben() {
    let formData = new FormData(document.forms[0]);
    let query = new URLSearchParams(formData);
    let name = query.toString();
    let datenbankEintrag = ["punkte=" + punkte, "sec=" + sek, name, "klicks=" + klicks];
    //console.log(datenbankEintrag);
    await eintragDatenbank(datenbankEintrag);
    weiterleitungSeite(highscoreEintrag.id);
}
//# sourceMappingURL=eintrag.js.map