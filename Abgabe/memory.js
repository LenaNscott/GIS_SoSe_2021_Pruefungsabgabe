"use strict";
function seitenWechseln() {
    let pname = window.location.pathname;
    let geschnittenerPathname = pname.slice(0, pname.lastIndexOf("/"));
    window.location.pathname = geschnittenerPathname + "/spiel.html";
}
async function urlHinzufuegen() {
    let formData = new FormData(document.forms[0]);
    let url = "http://localhost:8100/abschicken"; // https://lenasfancyapp.herokuapp.com
    let query = new URLSearchParams(formData);
    let response = await fetch(url + "?" + query.toString());
    let responseText = await response.text();
    return responseText;
}
async function urlHolen() {
    let formData = new FormData(document.forms[0]);
    let url = "http://localhost:8100/holen"; // https://lenasfancyapp.herokuapp.com
    let query = new URLSearchParams(formData);
    let response = await fetch(url + "?" + query.toString());
    let responseText = await response.text();
    let geschnittenerPathname = responseText.slice(0, responseText.lastIndexOf("url:"));
    console.log(geschnittenerPathname);
    return (geschnittenerPathname);
}
//# sourceMappingURL=memory.js.map