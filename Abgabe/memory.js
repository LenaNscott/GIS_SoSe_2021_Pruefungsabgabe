"use strict";
let bilderArray;
function seitenWechseln() {
    let pname = window.location.pathname;
    let geschnittenerPathname = pname.slice(0, pname.lastIndexOf("/"));
    window.location.pathname = geschnittenerPathname + "/spiel.html";
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
}
async function versenden(url) {
    let formData = new FormData(document.forms[0]);
    let query = new URLSearchParams(formData);
    let response = await fetch(url + "?" + query.toString());
    let responseText = await response.text();
    return responseText;
}
//# sourceMappingURL=memory.js.map