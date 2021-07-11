"use strict";
let klickenVerarbeitet = true;
let karteEins = true;
let karteZwei = false;
let zuletztAngeklicktesBildIndex = "";
let spielende = false;
let gefundenePaare = 0;
let gemischteKarten;
let erstesAngeklicktesBild = document.createElement("img");
erstesAngeklicktesBild.style.position = "absolute";
let zweitesAngeklicktesBild = document.createElement("img");
zweitesAngeklicktesBild.style.position = "absolute";
let sec = 0;
let min = 0;
let hrs = 0;
let sekunden = 0;
let stoppen = false;
let anzahlKlicks = 0;
let anzeigeLaufendeZeit = document.getElementById("timer");
let start = document.getElementById("spielstart");
start.addEventListener("click", function () {
    start.parentNode.removeChild(start);
    for (let i = 1; i <= 20; i++) {
        let karte = document.getElementById("nr" + [i]);
        karte.addEventListener("click", function () {
            spielKarten(karte);
        });
    }
    add();
});
let neuStart = document.getElementById("neuesSpiel");
neuStart.addEventListener("click", reload);
async function kartenVerteilen() {
    let geholteBilder = await bilderUrlHolen();
    //console.log(geholteBilder);
    let doppelGeholteBilder = kartenMischen(geholteBilder, 10); //es werden 10 Karten gemischt zurück gegeben 
    //console.log(doppelGeholteBilder);
    doppelGeholteBilder = doppelGeholteBilder.concat(doppelGeholteBilder);
    //console.log(doppelGeholteBilder);
    gemischteKarten = kartenMischen(doppelGeholteBilder, 20); //es werden 20 Karten gemischt zurück gegeben
    //gemischteKarten = doppelGeholteBilder; //Erzeugt sortiertes Array, zum testen
    //console.log(gemischteKarten);
}
function kartenMischen(_arrayBilder, _anzahl) {
    let gefuelltesGemischtesBildArray = [];
    for (let i = 0; i < _anzahl; i++) {
        let randomNumber = Math.floor(Math.random() * _arrayBilder.length);
        let img = _arrayBilder[randomNumber];
        gefuelltesGemischtesBildArray.splice(0, 0, img);
        _arrayBilder.splice(randomNumber, 1);
    }
    return gefuelltesGemischtesBildArray;
}
async function spielKarten(_karte) {
    let neuAngeklicktesBildIndex = _karte.id.slice(2);
    if (klickenVerarbeitet == true && neuAngeklicktesBildIndex != zuletztAngeklicktesBildIndex) { //wenn die id nicht die gleiche ist
        anzahlKlicks++;
        klickenVerarbeitet = false;
        let i = document.createElement("img");
        i.id = "bild" + neuAngeklicktesBildIndex;
        i.src = gemischteKarten[parseInt(neuAngeklicktesBildIndex) - 1].url;
        if (karteEins == true) {
            zuletztAngeklicktesBildIndex = neuAngeklicktesBildIndex;
            erstesAngeklicktesBild.src = i.src;
            erstesAngeklicktesBild.id = i.id;
            document.getElementById("body").appendChild(erstesAngeklicktesBild);
            karteEins = false;
            klickenVerarbeitet = true;
        }
        else if (karteEins == false) {
            zuletztAngeklicktesBildIndex = "";
            zweitesAngeklicktesBild.src = i.src;
            zweitesAngeklicktesBild.id = i.id;
            document.getElementById("body").appendChild(zweitesAngeklicktesBild);
            karteEins = true;
            await sleep(2000);
            if (erstesAngeklicktesBild.src == zweitesAngeklicktesBild.src) {
                gefundenePaare += 1;
                let idZahleins = erstesAngeklicktesBild.id.split("d"); //die id des HTML Elements herausfinden und loeschen
                //console.log(idZahleins);
                let nr = "nr" + idZahleins[1];
                let img1 = document.getElementById(nr);
                img1.parentNode.removeChild(img1);
                let idZahlZwei = zweitesAngeklicktesBild.id.split("d");
                let nr2 = "nr" + idZahlZwei[1];
                let img2 = document.getElementById(nr2);
                img2.parentNode.removeChild(img2);
            }
            document.getElementById("body").removeChild(erstesAngeklicktesBild);
            document.getElementById("body").removeChild(zweitesAngeklicktesBild);
            klickenVerarbeitet = true;
        }
        if (gefundenePaare == 10) {
            spielende = true;
            stoppen = true;
            klickenVerarbeitet = false;
            //console.log(anzeige.textContent);
            document.cookie = "klicks=" + anzahlKlicks;
            document.cookie = "sec=" + sekunden;
            //console.log(document.cookie);
            //console.log(sekunden);
            //console.log(anzahlKlicks);
            weiterleitungSeite("eintragSeite");
        }
    }
}
//"
function timerLaeuft() {
    if (stoppen == false) {
        sec++;
        sekunden++;
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
    anzeigeLaufendeZeit.textContent = (hrs > 9 ? hrs : "0" + hrs) + ":" + (min > 9 ? min : "0" + min) + ":" + (sec > 9 ? sec : "0" + sec);
    timer();
}
function timer() {
    setTimeout(add, 1000);
}
function timerAufNull() {
    anzeigeLaufendeZeit.textContent = "00:00:00";
    sec = 0;
    min = 0;
    hrs = 0;
    weiterleitungSeite("start");
}
//"
function reload() {
    window.location.href = window.location.href;
}
kartenVerteilen();
//# sourceMappingURL=spiel.js.map