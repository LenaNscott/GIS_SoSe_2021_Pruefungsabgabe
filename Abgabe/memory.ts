interface bild {
    _id: string;
    url: string;
}

let bilderArray: bild[];


function seitenWechseln(): void {
    let pname: string = window.location.pathname;
    let geschnittenerPathname: string = pname.slice(0, pname.lastIndexOf("/"));
    window.location.pathname = geschnittenerPathname + "/spiel.html";   
}


async function urlHinzufuegen(): Promise<void> {
    let url: string = "http://localhost:8100/abschicken";   // https://lenasfancyapp.herokuapp.com
    let responseText: string = await versenden(url);
    console.log(responseText);
}

async function urlHolen(): Promise<void> {
    let url: string = "http://localhost:8100/holen";   // https://lenasfancyapp.herokuapp.com
   
    let responseText: string = await versenden(url);
    console.log(responseText);
    bilderArray = JSON.parse(responseText);
    console.log(bilderArray);
    kartenVerteilen(bilderArray);
}


async function versenden(url: string): Promise<string> {
    
    let formData: FormData = new FormData(document.forms[0]);
       
    let query: URLSearchParams = new URLSearchParams(<any>formData);
    let response: Response = await fetch(url + "?" + query.toString());
    let responseText: string = await response.text();
    return responseText;  
     
}
