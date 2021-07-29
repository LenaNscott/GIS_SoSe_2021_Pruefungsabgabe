"use strict";
let bilderArray;
let bilderAdminAnzeigen = false;
let serverBaseUrl = "https://lenasfancyapp.herokuapp.com";
//let serverBaseUrl: string = "http://localhost:8100";
async function versenden(_serverUrl) {
    let response = await fetch(_serverUrl);
    //console.log(response);
    let responseText = await response.text();
    return responseText;
}
async function bildUrlHinzufuegen() {
    let formData = new FormData(document.forms[0]);
    let query = new URLSearchParams(formData);
    console.log(query.toString());
    if (query.toString() != "url=") {
        let serverUrl = serverBaseUrl + "/abschicken";
        await versenden(serverUrl + "?" + query.toString());
        let pname = window.location.pathname;
        let geschnittenerPathname = pname.slice(0, pname.lastIndexOf("/"));
        window.location.pathname = geschnittenerPathname + "/admin.html";
    }
}
async function bilderUrlHolen() {
    let serverUrl = serverBaseUrl + "/holen";
    let responseText = await versenden(serverUrl);
    //console.log(responseText);
    bilderArray = JSON.parse(responseText);
    //console.log(bilderArray);
    return bilderArray;
}
async function bilderLoeschen(_loeschendeImg) {
    let serverUrl = serverBaseUrl + "/loeschen";
    //console.log(loeschendeImg);
    await versenden(serverUrl + "?" + _loeschendeImg);
}
async function eintragDatenbank(_spielerDaten) {
    let serverUrl = serverBaseUrl + "/eintrag";
    await versenden(serverUrl + "?" + _spielerDaten[0] + "&" + _spielerDaten[1] + "&" + _spielerDaten[2] + "&" + _spielerDaten[3]);
    //console.log(responseText);
}
async function scoreHolen() {
    let serverUrl = serverBaseUrl + "/holenscore";
    let responseText = await versenden(serverUrl);
    return responseText;
}
function weiterleitungSeite(_id) {
    let pname = window.location.pathname;
    let geschnittenerPathname = pname.slice(0, pname.lastIndexOf("/"));
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
function zeitString(_zeitSec) {
    let zeitAnzeige;
    let zeit = parseInt(_zeitSec);
    let hrs = 0;
    let sec = zeit % 60;
    let min = (zeit - sec) / 60;
    //console.log(min);
    //console.log(sec);
    zeitAnzeige = (hrs > 9 ? hrs : "0" + hrs) + ":" + (min > 9 ? min : "0" + min) + ":" + (sec > 9 ? sec : "0" + sec);
    return zeitAnzeige;
}
//"
function sleep(_milliseconds) {
    return new Promise(resolve => setTimeout(resolve, _milliseconds)); // kurze pause, sleep Funktion, Quelle: https://www.sitepoint.com/delay-sleep-pause-wait/
}
//"
//# sourceMappingURL=allgemein.js.map