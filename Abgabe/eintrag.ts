let highscoreEintrag: HTMLElement = document.getElementById("fertig");
let eingabeNamen: HTMLElement = document.getElementById("nameEintrag");
highscoreEintrag.addEventListener("click", cookie);

let cookieZeit: string;
if (document.cookie) {
    cookieZeit = document.cookie;
}
let anzeigeZeit: HTMLElement = document.createElement("timer");
//document.getElementById("body").appendChild(anzeigeZeit);

function cookie(): void {
    let formData: FormData = new FormData(document.forms[0]);
    let query: URLSearchParams = new URLSearchParams(<any>formData);
    document.cookie = query.toString();
    console.log(document.cookie);
    
    let cookieSplit: string [] = document.cookie.split(";");
    let eingabeSpieler: string [] = [];
    
    
    for (let i: number = 0; i < cookieSplit.length; i++) {
        eingabeSpieler = eingabeSpieler.concat(cookieSplit[i].split("="));
    }
    let anzahlKlicks: number = parseInt(eingabeSpieler[1]);
    console.log(anzahlKlicks);
    let sekunden: number = parseInt(eingabeSpieler[3]) / 3;
    let punkte: number = Math.round(80000 / (anzahlKlicks + sekunden));
    console.log(punkte);

    let zeit: number = parseInt(eingabeSpieler[3]);
    let hrs: number = 0;
    let sec: number = zeit % 60;
    let min: number = (zeit - sec) / 60;
    console.log(min);
    console.log(sec);
    anzeigeZeit.textContent = (hrs > 9 ? hrs : "0" + hrs) + ":" + (min > 9 ? min : "0" + min) + ":" + (sec > 9 ? sec : "0" + sec);
    console.log(anzeigeZeit.textContent);
    let eintrag: string[] = ["punkte=" + punkte, cookieSplit[1], cookieSplit[2]];
    console.log(eintrag);
    eintragDatenbank(eintrag); 
    weiterleitungSeite(highscoreEintrag.id);
}

