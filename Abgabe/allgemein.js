"use strict";
let bilderArray;
let bilderAdminAnzeigen = false;
let serverBaseUrl = "https://lenasfancyapp.herokuapp.com"; //"http://localhost:8100";
async function versenden(serverUrl) {
    let response = await fetch(serverUrl);
    //console.log(response);
    let responseText = await response.text();
    return responseText;
}
async function bildUrlHinzufuegen() {
    let serverUrl = serverBaseUrl + "/abschicken";
    let formData = new FormData(document.forms[0]);
    let query = new URLSearchParams(formData);
    await versenden(serverUrl + "?" + query.toString());
    let pname = window.location.pathname;
    let geschnittenerPathname = pname.slice(0, pname.lastIndexOf("/"));
    window.location.pathname = geschnittenerPathname + "/admin.html";
}
async function bilderUrlHolen() {
    let serverUrl = serverBaseUrl + "/holen";
    let responseText = await versenden(serverUrl);
    //console.log(responseText);
    bilderArray = JSON.parse(responseText);
    //console.log(bilderArray);
    return bilderArray;
}
async function BilderLoeschen(loeschendeImg) {
    let serverUrl = serverBaseUrl + "/loeschen";
    //console.log(loeschendeImg);
    await versenden(serverUrl + "?" + loeschendeImg);
}
async function eintragDatenbank(dbParameter) {
    let serverUrl = serverBaseUrl + "/eintrag";
    await versenden(serverUrl + "?" + dbParameter[0] + "&" + dbParameter[1] + "&" + dbParameter[2] + "&" + dbParameter[3]);
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
function secString(_zeitSec) {
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
//# sourceMappingURL=allgemein.js.map