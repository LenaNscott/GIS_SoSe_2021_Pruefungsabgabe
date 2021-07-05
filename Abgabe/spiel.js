"use strict";
kartenVerteilen();
let spielende = false;
let gefundenePaare = 0;
let gemischteKarten;
let bild1 = document.createElement("img");
bild1.style.position = "absolute";
bild1.style.height = "300px";
bild1.style.width = "300px";
bild1.style.left = "575px";
bild1.style.top = "275px";
let bild2 = document.createElement("img");
bild2.style.position = "absolute";
bild2.style.height = "300px";
bild2.style.width = "300px";
bild2.style.left = "575px";
bild2.style.top = "275px";
let klickenVerarbeitet = true;
async function kartenVerteilen() {
    let ausgewaehlteKarten = [];
    let bildUrlId = await urlHolen();
    for (let i = 0; i < 10; i++) {
        //let zahl: bild = bildUrlId[Math.floor(Math.random() * bildUrlId.length)];
        let zahl = bildUrlId[9 - i]; // nur zum testen
        ausgewaehlteKarten.splice(0, 0, zahl);
        let z = bildUrlId.indexOf(zahl);
        bildUrlId.splice(z, 1);
    }
    let neuArrayBilder = ausgewaehlteKarten.concat(ausgewaehlteKarten);
    console.log(ausgewaehlteKarten);
    console.log(neuArrayBilder);
    gemischteKarten = neuArrayBilder;
}
function Sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}
let anzeige = document.getElementById("timer");
let start = document.getElementById("spielstart");
start.addEventListener("click", function () {
    start.parentNode.removeChild(start);
    add();
});
let sec = 0;
let min = 0;
let hrs = 0;
let stoppen = false;
let gespielteZeit;
function timerLaeuft() {
    if (stoppen == false) {
        sec++;
        if (sec >= 60) {
            sec = 0;
            min++;
            if (min >= 60) {
                min = 0;
                hrs++;
            }
        }
    }
}
function add() {
    timerLaeuft();
    anzeige.textContent = (hrs > 9 ? hrs : "0" + hrs) + ":" + (min > 9 ? min : "0" + min) + ":" + (sec > 9 ? sec : "0" + sec);
    timer();
}
function timer() {
    setTimeout(add, 1000);
}
function vonVorne() {
    anzeige.textContent = "00:00:00";
    sec = 0;
    min = 0;
    hrs = 0;
    seitenWechseln("start");
}
for (let i = 1; i <= 20; i++) {
    let karte = document.getElementById("nr" + [i]);
    karte.addEventListener("click", function () {
        spielKarten(karte);
    });
}
let erste = false;
let karteZwei = false;
async function spielKarten(_karte) {
    if (klickenVerarbeitet == true) {
        klickenVerarbeitet = false;
        let i = document.createElement("img");
        switch (_karte.id) {
            case "nr1":
                i.id = "bild1";
                i.src = gemischteKarten[0].url;
                break;
            case "nr2":
                i.id = "bild2";
                i.src = gemischteKarten[1].url;
                break;
            case "nr3":
                i.id = "bild3";
                i.src = gemischteKarten[2].url;
                break;
            case "nr4":
                i.id = "bild4";
                i.src = gemischteKarten[3].url;
                break;
            case "nr5":
                i.id = "bild5";
                i.src = gemischteKarten[4].url;
                break;
            case "nr6":
                i.id = "bild6";
                i.src = gemischteKarten[5].url;
                break;
            case "nr7":
                i.id = "bild7";
                i.src = gemischteKarten[6].url;
                break;
            case "nr8":
                i.id = "bild8";
                i.src = gemischteKarten[7].url;
                break;
            case "nr9":
                i.id = "bild9";
                i.src = gemischteKarten[8].url;
                break;
            case "nr10":
                i.id = "bild10";
                i.src = gemischteKarten[9].url;
                break;
            case "nr11":
                i.id = "bild11";
                i.src = gemischteKarten[10].url;
                break;
            case "nr12":
                i.id = "bild12";
                i.src = gemischteKarten[11].url;
                break;
            case "nr13":
                i.id = "bild13";
                i.src = gemischteKarten[12].url;
                break;
            case "nr14":
                i.id = "bild14";
                i.src = gemischteKarten[13].url;
                break;
            case "nr15":
                i.id = "bild15";
                i.src = gemischteKarten[14].url;
                break;
            case "nr16":
                i.id = "bild16";
                i.src = gemischteKarten[15].url;
                break;
            case "nr17":
                i.id = "bild17";
                i.src = gemischteKarten[16].url;
                break;
            case "nr18":
                i.id = "bild18";
                i.src = gemischteKarten[17].url;
                break;
            case "nr19":
                i.id = "bild19";
                i.src = gemischteKarten[18].url;
                break;
            case "nr20":
                i.id = "bild20";
                i.src = gemischteKarten[19].url;
                break;
        }
        if (erste == false) {
            bild1.src = i.src;
            bild1.id = i.id;
            document.getElementById("body").appendChild(bild1);
            erste = true;
            klickenVerarbeitet = true;
        }
        else if (erste == true) {
            bild2.src = i.src;
            bild2.id = i.id;
            document.getElementById("body").appendChild(bild2);
            erste = false;
            await Sleep(2000);
            if (bild1.src == bild2.src) {
                gefundenePaare += 1;
                /*
                for (let i: number = 0; i <= gemischteKarten.length; i++) {
                    if (gemischteKarten[i].url == bild1.src) {
                        gemischteKarten.splice(i, 1);
                    }
                }
                */
                let zahl = bild1.id.split("d");
                console.log(zahl);
                let nr = "nr" + zahl[1];
                let img1 = document.getElementById(nr);
                img1.parentNode.removeChild(img1);
                let zahl2 = bild2.id.split("d");
                let nr2 = "nr" + zahl2[1];
                let img2 = document.getElementById(nr2);
                img2.parentNode.removeChild(img2);
            }
            document.getElementById("body").removeChild(bild1);
            document.getElementById("body").removeChild(bild2);
            klickenVerarbeitet = true;
        }
        if (gefundenePaare == 10) {
            spielende = true;
            stoppen = true;
            gespielteZeit = anzeige.textContent;
            seitenWechseln("eintragSeite");
        }
    }
}
//# sourceMappingURL=spiel.js.map