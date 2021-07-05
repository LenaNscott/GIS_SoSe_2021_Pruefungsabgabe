"use strict";
let bilderArray;
let bilderAdminAnzeigen = false;
function seitenWechseln(_id) {
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
async function urlHinzufuegen() {
    let url = "http://localhost:8100/abschicken"; // https://lenasfancyapp.herokuapp.com
    let responseText = await versenden(url);
    console.log(responseText);
}
async function urlHolen() {
    let url = "http://localhost:8100/holen"; // https://lenasfancyapp.herokuapp.com
    let responseText = await versenden(url);
    console.log(responseText);
    bilderArray = JSON.parse(responseText);
    console.log(bilderArray);
    return bilderArray;
}
async function versenden(url) {
    let formData = new FormData(document.forms[0]);
    let query = new URLSearchParams(formData);
    let response = await fetch(url + "?" + query.toString());
    let responseText = await response.text();
    return responseText;
}
//# sourceMappingURL=memory.js.map