"use strict";
urlHolen();
let spielende = false;
let gefundenePaara = 0;
let gemischteKarten;
let bild1 = document.createElement("img");
let bild2 = document.createElement("img");
let i = document.createElement("img");
let start = document.getElementById("spielstart");
start.addEventListener("click", spielStarten);
/* start.addEventListener("click", function(): void {
    spielStarten("timer", "10");
}); */
function kartenVerteilen(_bilder) {
    let ausgewaehlteKarten = [];
    let bildUrlId = _bilder;
    for (let i = 0; i < 10; i++) {
        let zahl = bildUrlId[Math.floor(Math.random() * bildUrlId.length)];
        ausgewaehlteKarten.splice(0, 0, zahl);
        let z = bildUrlId.indexOf(zahl);
        bildUrlId.splice(z, 1);
    }
    let neuArrayBilder = ausgewaehlteKarten.concat(ausgewaehlteKarten);
    console.log(ausgewaehlteKarten);
    console.log(neuArrayBilder);
    gemischteKarten = neuArrayBilder;
}
function spielStarten() {
    start.remove();
    //document.getElementById(id).innerHTML = _string;
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
while (spielende == false) {
    for (let i = 1; i <= 20; i++) {
        let karte = document.getElementById("nr" + [i]);
        karte.addEventListener("click", function () {
            bilder(karte);
        });
    }
    let erste = false;
    let zweite = false;
    let _id1;
    let _id2;
    let _id1Nr;
    let _id2Nr;
    function karteAnzeigen(_id) {
        if (erste == false) {
            for (let i = 1; i <= 20; i++) {
                let karte = document.getElementById("nr" + [i]);
                karte.removeEventListener("click", function () {
                    bilder(karte);
                });
            }
            bild1.style.position = "absolute";
            bild1.style.height = "300px";
            bild1.style.width = "300px";
            bild1.style.left = "575px";
            bild1.style.top = "275px";
            bild1.src = i.src;
            bild1.id = i.id;
            document.getElementById("body").appendChild(bild1);
            _id1 = "nr" + _id;
            _id1Nr = _id;
            erste = true;
            //zweite = false;
        }
        else if (erste == true) {
            bild2.style.position = "absolute";
            bild2.style.height = "300px";
            bild2.style.width = "300px";
            bild2.style.left = "575px";
            bild2.style.top = "275px";
            bild2.src = i.src;
            bild2.id = i.id;
            document.getElementById("body").appendChild(bild2);
            _id2 = "nr" + _id;
            _id2Nr = _id;
            erste = false;
            setTimeout(gleicheKarten, 2000);
        }
    }
    function gleicheKarten() {
        if (bild1.src == bild2.src) {
            gefundenePaara += 1;
            gefundenePaara += 1;
            bild1.id = "move1";
            bild2.id = "move2";
        }
        else {
            bild1.src = "https://www.trademore.de/isotope/i/id-001-4517-204_quilters-basic-memory.jpg";
            bild2.src = "https://www.trademore.de/isotope/i/id-001-4517-204_quilters-basic-memory.jpg";
        }
    }
    async function bilder(_bild) {
        switch (_bild.id) {
            case "nr1":
                i.id = "bild1";
                i.src = gemischteKarten[0].url;
                karteAnzeigen(1);
                break;
            case "nr2":
                i.id = "bild2";
                i.src = gemischteKarten[1].url;
                karteAnzeigen(2);
                break;
            case "nr3":
                i.id = "bild3";
                i.src = gemischteKarten[2].url;
                karteAnzeigen(3);
                break;
            case "nr4":
                i.id = "bild4";
                i.src = gemischteKarten[3].url;
                karteAnzeigen(4);
                break;
            case "nr5":
                i.id = "bild5";
                i.src = gemischteKarten[4].url;
                karteAnzeigen(5);
                break;
            case "nr6":
                i.id = "bild6";
                i.src = gemischteKarten[5].url;
                karteAnzeigen(6);
                break;
            case "nr7":
                i.id = "bild7";
                i.src = gemischteKarten[6].url;
                karteAnzeigen(7);
                break;
            case "nr8":
                i.id = "bild8";
                i.src = gemischteKarten[7].url;
                karteAnzeigen(8);
                break;
            case "nr9":
                i.id = "bild9";
                i.src = gemischteKarten[8].url;
                karteAnzeigen(9);
                break;
            case "nr10":
                i.id = "bild10";
                i.src = gemischteKarten[9].url;
                karteAnzeigen(10);
                break;
            case "nr11":
                i.id = "bild11";
                i.src = gemischteKarten[10].url;
                karteAnzeigen(11);
                break;
            case "nr12":
                i.id = "bild12";
                i.src = gemischteKarten[11].url;
                karteAnzeigen(12);
                break;
            case "nr13":
                i.id = "bild13";
                i.src = gemischteKarten[12].url;
                karteAnzeigen(13);
                break;
            case "nr14":
                i.id = "bild14";
                i.src = gemischteKarten[13].url;
                karteAnzeigen(14);
                break;
            case "nr15":
                i.id = "bild15";
                i.src = gemischteKarten[14].url;
                karteAnzeigen(15);
                break;
            case "nr16":
                i.id = "bild16";
                i.src = gemischteKarten[15].url;
                karteAnzeigen(16);
                break;
            case "nr17":
                i.id = "bild17";
                i.src = gemischteKarten[16].url;
                karteAnzeigen(17);
                break;
            case "nr18":
                i.id = "bild18";
                i.src = gemischteKarten[17].url;
                karteAnzeigen(18);
                break;
            case "nr19":
                i.id = "bild19";
                i.src = gemischteKarten[18].url;
                karteAnzeigen(19);
                break;
            case "nr20":
                i.id = "bild20";
                i.src = gemischteKarten[19].url;
                karteAnzeigen(20);
                break;
        }
    }
    if (gefundenePaara == 20) {
        spielende = true;
    }
}
//# sourceMappingURL=spiel.js.map