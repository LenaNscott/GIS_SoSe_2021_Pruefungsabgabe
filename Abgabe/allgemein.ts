interface Bild {
    _id: string;
    url: string;
}

interface HighscoreEintrag {
    name: string;
    sec: number;
    punkte: number;
    klicks: number;
}

let bilderArray: Bild[];
let bilderAdminAnzeigen: boolean = false;
let serverBaseUrl: string = "https://lenasfancyapp.herokuapp.com"; //"http://localhost:8100";


async function versenden(serverUrl: string): Promise<string> {
    
    let response: Response = await fetch(serverUrl);
    //console.log(response);
    let responseText: string = await response.text();
    return responseText;  
     
}


async function bildUrlHinzufuegen(): Promise<void> {
    let serverUrl: string = serverBaseUrl + "/abschicken";
    
    let formData: FormData = new FormData(document.forms[0]); 
    let query: URLSearchParams = new URLSearchParams(<any>formData);
    await versenden(serverUrl + "?" + query.toString());
 
    let pname: string = window.location.pathname;
    let geschnittenerPathname: string = pname.slice(0, pname.lastIndexOf("/"));
    window.location.pathname = geschnittenerPathname + "/admin.html";
}

async function bilderUrlHolen(): Promise<Bild[]> {
    let serverUrl: string = serverBaseUrl + "/holen";
   
    let responseText: string = await versenden(serverUrl);
    //console.log(responseText);
    bilderArray = JSON.parse(responseText);
    //console.log(bilderArray);
    return bilderArray;
}


async function BilderLoeschen(loeschendeImg: string): Promise<void> {
    let serverUrl: string = serverBaseUrl + "/loeschen";
    //console.log(loeschendeImg);
    await versenden(serverUrl + "?" + loeschendeImg);
}

async function eintragDatenbank(dbParameter: string[]): Promise<void> {

    let serverUrl: string = serverBaseUrl + "/eintrag";
    await versenden(serverUrl + "?" + dbParameter[0] + "&" + dbParameter[1] + "&" + dbParameter[2] + "&" + dbParameter[3]);
    //console.log(responseText);
}

async function scoreHolen(): Promise<string> {
    let serverUrl: string = serverBaseUrl + "/holenscore";
    let responseText: string = await versenden(serverUrl);
    return responseText;
}


function weiterleitungSeite(_id: string): void {
    let pname: string = window.location.pathname;
    let geschnittenerPathname: string = pname.slice(0, pname.lastIndexOf("/"));
    if (_id == "start") {
        window.location.pathname = geschnittenerPathname + "/spiel.html";
    }

    else if (_id == "startHome") {
        window.location.pathname = geschnittenerPathname + "/spiel.html";
    }
    
    else if (_id == "fertig") {
        window.location.pathname = geschnittenerPathname + "/score.html";
    }

    else if (_id == "eintragSeite") {
        window.location.pathname = geschnittenerPathname + "/eintrag.html";
    }
}

function secString(_zeitSec: string): string {
    let zeitAnzeige: string;
    let zeit: number = parseInt(_zeitSec);
    let hrs: number = 0;
    let sec: number = zeit % 60;
    let min: number = (zeit - sec) / 60;
    //console.log(min);
    //console.log(sec);
    zeitAnzeige = (hrs > 9 ? hrs : "0" + hrs) + ":" + (min > 9 ? min : "0" + min) + ":" + (sec > 9 ? sec : "0" + sec);
    return zeitAnzeige;
}