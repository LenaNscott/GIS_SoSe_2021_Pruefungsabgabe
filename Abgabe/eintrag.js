"use strict";
let anzeigeZeit = document.getElementById("timerAnzeige");
let anzeigeScore = document.getElementById("punkteAnzeige");
let buttonDatenbankEintrag = document.getElementById("fertig");
let cookiesSplit = [];
//console.log(document.cookie);
cookiesSplit = document.cookie.split("; ");
//console.log(cookiesSplit);
let klicks = parseInt(cookiesSplit[0].split("=")[1]);
let sek = parseInt(cookiesSplit[1].split("=")[1]);
let punkte = Math.round(80000 / (klicks + (sek / 3)));
anzeigeScore.innerHTML = punkte.toString();
anzeigeZeit.innerHTML = zeitString(sek.toString());
let video = document.createElement("video");
video.id = "video";
video.src = "Medien/video.mp4";
video.playsInline = true;
video.load();
document.getElementById("body").appendChild(video);
video.onended = function () {
    document.getElementById("body").removeChild(video);
};
video.play();
listenerNachVideo();
async function datenbankSchreiben() {
    let formData = new FormData(document.forms[0]);
    let query = new URLSearchParams(formData);
    let name = query.toString();
    let datenbankEintragDaten = ["punkte=" + punkte, "sec=" + sek, name, "klicks=" + klicks];
    //console.log(datenbankEintrag);
    await eintragDatenbank(datenbankEintragDaten);
    weiterleitungSeite(buttonDatenbankEintrag.id);
}
async function listenerNachVideo() {
    await sleep(8000);
    buttonDatenbankEintrag.addEventListener("click", datenbankSchreiben);
}
//# sourceMappingURL=eintrag.js.map