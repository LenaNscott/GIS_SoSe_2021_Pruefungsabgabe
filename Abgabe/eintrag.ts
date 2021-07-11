let anzeigeZeit: HTMLElement = document.getElementById("timerAnzeige");
let anzeigeScore: HTMLElement = document.getElementById("punkteAnzeige");
let highscoreEintrag: HTMLElement = document.getElementById("fertig");

let cookiesSplit: string [] = [];
//console.log(document.cookie);
cookiesSplit = document.cookie.split("; ");
//console.log(cookiesSplit);
let klicks: number = parseInt(cookiesSplit[0].split("=")[1]);
let sek: number = parseInt(cookiesSplit[1].split("=")[1]);
let punkte: number = Math.round(80000 / (klicks + (sek / 3)));

let video: HTMLVideoElement = document.createElement("video");
video.id = "video";
video.src = "Medien/NeverGonnaGiveYouUpVideo.mp4";
video.autoplay = true;
video.playsInline = true;
video.load();
document.getElementById("body").appendChild(video);
video.onended = function() {
    document.getElementById("body").removeChild(video);
    anzeigeScore.innerHTML = punkte.toString();
    anzeigeZeit.innerHTML = secString(sek.toString());
    highscoreEintrag.addEventListener("click", datenbankSchreiben);
};

async function datenbankSchreiben(): Promise <void> {
    let formData: FormData = new FormData(document.forms[0]);
    let query: URLSearchParams = new URLSearchParams(<any>formData);
    let name: string = query.toString();

    let datenbankEintrag: string[] = ["punkte=" + punkte, "sec=" + sek, name, "klicks=" + klicks];
    //console.log(datenbankEintrag);
    await eintragDatenbank(datenbankEintrag); 
    weiterleitungSeite(highscoreEintrag.id);
}
