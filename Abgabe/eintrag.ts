videoAbspielen();

async function videoAbspielen(): Promise<void> {
let video: HTMLVideoElement = document.createElement("video");
video.id = "video";
video.src = "Medien/NeverGonnaGiveYouUpVideo.mp4";
video.autoplay = true;
video.load();
document.getElementById("body").appendChild(video);
await SleepVideo(9000);
document.getElementById("body").removeChild(video);
}

let highscoreEintrag: HTMLElement = document.getElementById("fertig");
highscoreEintrag.addEventListener("click", datenbankSchreiben);


let anzeigeZeit: HTMLElement = document.getElementById("timerAnzeige");
let anzeigeScore: HTMLElement = document.getElementById("punkteAnzeige");

let cookiesSplit: string [] = [];
//console.log(document.cookie);
cookiesSplit = document.cookie.split("; ");
//console.log(cookiesSplit);
let klicks: number = parseInt(cookiesSplit[0].split("=")[1]);
let sek: number = parseInt(cookiesSplit[1].split("=")[1]);
let punkte: number = Math.round(80000 / (klicks + (sek / 3)));

anzeigeScore.innerHTML = punkte.toString();
anzeigeZeit.innerHTML = secString(sek.toString());


async function datenbankSchreiben(): Promise <void> {
    let formData: FormData = new FormData(document.forms[0]);
    let query: URLSearchParams = new URLSearchParams(<any>formData);
    let name: string = query.toString();

    let datenbankEintrag: string[] = ["punkte=" + punkte, "sec=" + sek, name, "klicks=" + klicks];
    //console.log(datenbankEintrag);
    await eintragDatenbank(datenbankEintrag); 
    weiterleitungSeite(highscoreEintrag.id);
}

function SleepVideo(milliseconds: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
   }

