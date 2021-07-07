interface Bild {
    _id: string;
    url: string;
}

interface HighscoreEintrag {
    name: string;
    sec: number;
    punkte: number;
}

let bilderArray: Bild[];
let bilderAdminAnzeigen: boolean = false;


async function versenden(serverUrl: string): Promise<string> {
    
    let response: Response = await fetch(serverUrl);
    console.log(response);
    let responseText: string = await response.text();
    return responseText;  
     
}


async function bildUrlHinzufuegen(): Promise<void> {
    let serverUrl: string = "http://localhost:8100/abschicken";   // https://lenasfancyapp.herokuapp.com
    //console.log(document.getElementById("URL").innerHTML);
    //let responseText: string = await versenden(serverUrl, "?" + document.getElementById("URL").innerHTML);
    let formData: FormData = new FormData(document.forms[0]); 
    let query: URLSearchParams = new URLSearchParams(<any>formData);
    let responseText: string = await versenden(serverUrl + "?" + query.toString());
    console.log(responseText);
    let pname: string = window.location.pathname;
    let geschnittenerPathname: string = pname.slice(0, pname.lastIndexOf("/"));
    window.location.pathname = geschnittenerPathname + "/admin.html";
}


async function bilderUrlHolen(): Promise<Bild[]> {
    let serverUrl: string = "http://localhost:8100/holen";   // https://lenasfancyapp.herokuapp.com
   
    let responseText: string = await versenden(serverUrl);
    console.log(responseText);
    bilderArray = JSON.parse(responseText);
    console.log(bilderArray);
    return bilderArray;
}


async function BilderLoeschen(loeschendeImg: string): Promise<void> {
    let serverUrl: string = "http://localhost:8100/loeschen";   // https://lenasfancyapp.herokuapp.com
    console.log(loeschendeImg);
    let responseText: string = await versenden(serverUrl + "?" + loeschendeImg);
    console.log(responseText);
    //bilderUrlHolen();
}

async function eintragDatenbank(_gespielteZeit: string[]): Promise<void> {

    let serverUrl: string = "http://localhost:8100/eintrag";   // https://lenasfancyapp.herokuapp.com
    let responseText: string = await versenden(serverUrl + "?" + _gespielteZeit[0] + "&" + _gespielteZeit[1] + "&" + _gespielteZeit[2]);
    console.log(responseText);
}



function weiterleitungSeite(_id: string): void {
    let pname: string = window.location.pathname;
    let geschnittenerPathname: string = pname.slice(0, pname.lastIndexOf("/"));
    if (_id == "start") {
        window.location.pathname = geschnittenerPathname + "/spiel.html";
    }
    
    else if (_id == "fertig") {
        window.location.pathname = geschnittenerPathname + "/score.html";
    }

    else if (_id == "eintragSeite") {
        window.location.pathname = geschnittenerPathname + "/eintrag.html";
    }
}
