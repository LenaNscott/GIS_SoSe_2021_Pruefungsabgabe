

function seitenWechseln(): void {
    let pname: string = window.location.pathname;
    let geschnittenerPathname: string = pname.slice(0, pname.lastIndexOf("/"));
    window.location.pathname = geschnittenerPathname + "/spiel.html";   
}


async function urlHinzufuegen(): Promise<string> {
    let formData: FormData = new FormData(document.forms[0]);
    let url: string = "http://localhost:8100/abschicken";   // https://lenasfancyapp.herokuapp.com
    let query: URLSearchParams = new URLSearchParams(<any>formData);
    let response: Response = await fetch(url + "?" + query.toString());
    let responseText: string = await response.text();
    responseText = JSON.parse(responseText);
    console.log(responseText);
    return responseText;   
}

async function urlHolen(): Promise<string> {
    let formData: FormData = new FormData(document.forms[0]);
    let url: string = "http://localhost:8100/holen";   // https://lenasfancyapp.herokuapp.com
    let query: URLSearchParams = new URLSearchParams(<any>formData);
    let response: Response = await fetch(url + "?" + query.toString());
    let responseText: string = await response.text();
    
    return responseText;  
}