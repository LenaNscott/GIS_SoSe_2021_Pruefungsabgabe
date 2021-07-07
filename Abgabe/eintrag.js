"use strict";
let highscoreEintrag = document.getElementById("fertig");
let eingabeNamen = document.getElementById("nameEintrag");
highscoreEintrag.addEventListener("click", cookie);
let cookieZeit;
if (document.cookie) {
    cookieZeit = document.cookie;
}
function cookie() {
    let formData = new FormData(document.forms[0]);
    let query = new URLSearchParams(formData);
    document.cookie = query.toString();
    console.log(document.cookie);
    let cookieSplit = document.cookie.split(";");
    let versuch = cookieSplit.splice(0, 1);
    let anzeigeZeit = document.createElement("div");
    anzeigeZeit.textContent = versuch[0].split("=")[1];
    let eingabeSpieler = [];
    eintragDatenbank(cookieSplit);
    for (let i = 0; i < cookieSplit.length; i++) {
        eingabeSpieler = eingabeSpieler.concat(cookieSplit[i].split("="));
    }
    console.log(anzeigeZeit);
    let geloescht = eingabeSpieler.splice(0, 1);
    geloescht.concat(eingabeSpieler.splice(1, 1));
    console.log(eingabeSpieler);
    weiterleitungSeite(highscoreEintrag.id);
}
//# sourceMappingURL=eintrag.js.map