"use strict";
let bilderArray;
let bilderAdminAnzeigen = false;
async function versenden(serverUrl) {
    let response = await fetch(serverUrl);
    console.log(response);
    let responseText = await response.text();
    return responseText;
}
async function bildUrlHinzufuegen() {
    let serverUrl = "http://localhost:8100/abschicken"; // https://lenasfancyapp.herokuapp.com
    //console.log(document.getElementById("URL").innerHTML);
    //let responseText: string = await versenden(serverUrl, "?" + document.getElementById("URL").innerHTML);
    let formData = new FormData(document.forms[0]);
    let query = new URLSearchParams(formData);
    let responseText = await versenden(serverUrl + "?" + query.toString());
    console.log(responseText);
    let pname = window.location.pathname;
    let geschnittenerPathname = pname.slice(0, pname.lastIndexOf("/"));
    window.location.pathname = geschnittenerPathname + "/admin.html";
}
async function bilderUrlHolen() {
    let serverUrl = "http://localhost:8100/holen"; // https://lenasfancyapp.herokuapp.com
    let responseText = await versenden(serverUrl);
    console.log(responseText);
    bilderArray = JSON.parse(responseText);
    console.log(bilderArray);
    return bilderArray;
}
async function BilderLoeschen(loeschendeImg) {
    let serverUrl = "http://localhost:8100/loeschen"; // https://lenasfancyapp.herokuapp.com
    console.log(loeschendeImg);
    let responseText = await versenden(serverUrl + "?" + loeschendeImg);
    console.log(responseText);
    //bilderUrlHolen();
}
async function eintragDatenbank(_gespielteZeit) {
    let serverUrl = "http://localhost:8100/eintrag"; // https://lenasfancyapp.herokuapp.com
    let responseText = await versenden(serverUrl + "?" + _gespielteZeit[0] + "&" + _gespielteZeit[1] + "&" + _gespielteZeit[2]);
    console.log(responseText);
}
function weiterleitungSeite(_id) {
    let pname = window.location.pathname;
    let geschnittenerPathname = pname.slice(0, pname.lastIndexOf("/"));
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
//# sourceMappingURL=memory.js.map