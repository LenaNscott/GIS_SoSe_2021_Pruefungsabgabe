let highscoreEintrag: HTMLElement = document.getElementById("fertig");
let eingabeNamen: HTMLElement = document.getElementById("nameEintrag");
highscoreEintrag.addEventListener("click", cookie);

let cookieZeit: string;
if (document.cookie) {
    cookieZeit = document.cookie;
}

function cookie(): void {
    let formData: FormData = new FormData(document.forms[0]);
    let query: URLSearchParams = new URLSearchParams(<any>formData);
    document.cookie = query.toString();
    console.log(document.cookie);
    
    let cookieSplit: string [] = document.cookie.split(";");
    let versuch: string [] = cookieSplit.splice(0, 1);
    let anzeigeZeit: HTMLElement = document.createElement("div");
    anzeigeZeit.textContent = versuch[0].split("=")[1];
    let eingabeSpieler: string [] = [];

    eintragDatenbank(cookieSplit); 
    for (let i: number = 0; i < cookieSplit.length; i++) {
        eingabeSpieler = eingabeSpieler.concat(cookieSplit[i].split("="));
    }
    console.log(anzeigeZeit);
    let zahl: number[] = [];
    for (let i: number = 0; i < eingabeSpieler.length; i++) {
        zahl = zahl.concat(parseInt(eingabeSpieler[1][i]));
    }

    let geloescht: string[] = eingabeSpieler.splice(0, 1);
    geloescht.concat(eingabeSpieler.splice(1, 1));
    console.log(eingabeSpieler);
    weiterleitungSeite(highscoreEintrag.id);
}

