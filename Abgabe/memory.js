"use strict";
let bilderArray;
let bilderAdminAnzeigen = false;
async function versenden(serverUrl) {
    let response = await fetch(serverUrl);
    //console.log(response);
    let responseText = await response.text();
    return responseText;
}
async function bildUrlHinzufuegen() {
    let serverUrl = "https://lenasfancyapp.herokuapp.com/abschicken"; //  "http://localhost:8100/abschicken"
    let formData = new FormData(document.forms[0]);
    let query = new URLSearchParams(formData);
    await versenden(serverUrl + "?" + query.toString());
    let pname = window.location.pathname;
    let geschnittenerPathname = pname.slice(0, pname.lastIndexOf("/"));
    window.location.pathname = geschnittenerPathname + "/admin.html";
}
async function bilderUrlHolen() {
    let serverUrl = "https://lenasfancyapp.herokuapp.com/holen"; //  "http://localhost:8100/holen"
    let responseText = await versenden(serverUrl);
    //console.log(responseText);
    bilderArray = JSON.parse(responseText);
    //console.log(bilderArray);
    return bilderArray;
}
async function BilderLoeschen(loeschendeImg) {
    let serverUrl = "https://lenasfancyapp.herokuapp.com/loeschen"; //  "http://localhost:8100/loeschen"
    //console.log(loeschendeImg);
    await versenden(serverUrl + "?" + loeschendeImg);
}
async function eintragDatenbank(_gespielteZeit) {
    let serverUrl = "https://lenasfancyapp.herokuapp.com/eintrag"; // "http://localhost:8100/eintrag"
    await versenden(serverUrl + "?" + _gespielteZeit[0] + "&" + _gespielteZeit[1] + "&" + _gespielteZeit[2] + "&" + _gespielteZeit[3]);
    //console.log(responseText);
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
//# sourceMappingURL=memory.js.map