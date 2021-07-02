"use strict";
urlHolen();
let start = document.getElementById("spielstart");
start.addEventListener("click", function () {
    spielStarten("timer", "10");
});
function spielStarten(id, _string) {
    start.remove();
    document.getElementById(id).innerHTML = _string;
    let stoppen = document.getElementById("stop");
    //stoppen.addEventListener("click", function());  
    let stoppuhr = (function () {
        let stop = 1;
        let hrs = 0;
        let mins = 0;
        let secs = 0;
        let msecs = 0;
    });
}
for (let i = 1; i <= 20; i++) {
    let karte = document.getElementById("nr" + [i]);
    karte.addEventListener("click", function () {
        bilder(karte);
    });
}
let bild1 = document.createElement("img");
function karteAnzeigen() {
    bild1.style.position = "absolute";
    bild1.style.height = "300px";
    bild1.style.width = "300px";
    bild1.style.left = "575px";
    bild1.style.top = "275px";
    document.getElementById("body").appendChild(bild1);
}
async function bilder(_bild) {
    switch (_bild.id) {
        case "nr1":
            bild1.id = "bild1";
            karteAnzeigen();
            break;
        case "nr2":
            bild1.id = "bild2";
            karteAnzeigen();
            break;
        case "nr3":
            bild1.id = "bild3";
            karteAnzeigen();
            break;
        case "nr4":
            bild1.id = "bild4";
            karteAnzeigen();
            break;
        case "nr5":
            bild1.id = "bild5";
            karteAnzeigen();
            break;
        case "nr6":
            bild1.id = "bild6";
            karteAnzeigen();
            break;
        case "nr7":
            bild1.id = "bild7";
            karteAnzeigen();
            break;
        case "nr8":
            bild1.id = "bild8";
            karteAnzeigen();
            break;
        case "nr9":
            bild1.id = "bild9";
            karteAnzeigen();
            break;
        case "nr10":
            bild1.id = "bild10";
            karteAnzeigen();
            break;
        case "nr11":
            bild1.id = "bild11";
            karteAnzeigen();
            break;
        case "nr12":
            bild1.id = "bild12";
            karteAnzeigen();
            break;
        case "nr13":
            bild1.id = "bild13";
            karteAnzeigen();
            break;
        case "nr14":
            bild1.id = "bild14";
            karteAnzeigen();
            break;
        case "nr15":
            bild1.id = "bild15";
            karteAnzeigen();
            break;
        case "nr16":
            bild1.id = "bild16";
            karteAnzeigen();
            break;
        case "nr17":
            bild1.id = "bild17";
            karteAnzeigen();
            break;
        case "nr18":
            bild1.id = "bild18";
            karteAnzeigen();
            break;
        case "nr19":
            bild1.id = "bild19";
            karteAnzeigen();
            break;
        case "nr20":
            bild1.id = "bild20";
            karteAnzeigen();
            break;
    }
}
//# sourceMappingURL=spiel.js.map