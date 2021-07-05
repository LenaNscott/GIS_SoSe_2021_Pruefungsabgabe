interface Bild {
    _id: string;
    url: string;
}

let bilderArray: Bild[];
let bilderAdminAnzeigen: boolean = false;

function seitenWechseln(_id: string): void {
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


async function urlHinzufuegen(): Promise<void> {
    let url: string = "http://localhost:8100/abschicken";   // https://lenasfancyapp.herokuapp.com
    let responseText: string = await versenden(url);
    console.log(responseText);
}

async function urlHolen(): Promise<Bild[]> {
    let url: string = "http://localhost:8100/holen";   // https://lenasfancyapp.herokuapp.com
   
    let responseText: string = await versenden(url);
    console.log(responseText);
    bilderArray = JSON.parse(responseText);
    console.log(bilderArray);
    return bilderArray;
}


async function versenden(url: string): Promise<string> {
    
    let formData: FormData = new FormData(document.forms[0]);
       
    let query: URLSearchParams = new URLSearchParams(<any>formData);
    let response: Response = await fetch(url + "?" + query.toString());
    let responseText: string = await response.text();
    return responseText;  
     
}
