let klickenVerarbeitet: boolean = true;
let karteEins: boolean = true;
let karteZwei: boolean = false;
let zuletztAngeklicktesBildIndex: string = "";

let spielende: boolean = false;
let gefundenePaare: number = 0;
let gemischteKarten: Bild[];

let erstesAngeklicktesBild: HTMLImageElement = document.createElement("img");
erstesAngeklicktesBild.style.position = "absolute";

let zweitesAngeklicktesBild: HTMLImageElement = document.createElement("img");
zweitesAngeklicktesBild.style.position = "absolute";

let sec: number = 0;
let min: number = 0;
let hrs: number = 0;
let sekunden: number = 0;
let stoppen: boolean = false;
let anzahlKlicks: number = 0;


let anzeigeLaufendeZeit: HTMLElement = document.getElementById("timer");
let start: HTMLElement = document.getElementById("spielstart");
start.addEventListener("click", function(): void {
    start.parentNode.removeChild(start);
    for (let i: number = 1; i <= 20; i++) {
        let karte: HTMLElement = document.getElementById("nr" + [i]);
        karte.addEventListener("click" , function(): void {
        spielKarten(karte);
        });   
    }
    
    add();
});

let neuStart: HTMLElement = document.getElementById("neuesSpiel");
neuStart.addEventListener("click", reload);



async function kartenVerteilen(): Promise<void> {

    let geholteBilder: Bild[] = await bilderUrlHolen();
    //console.log(geholteBilder);
    let doppelGeholteBilder: Bild[] = kartenMischen(geholteBilder, 10); //es werden 10 Karten gemischt zurück gegeben 
    //console.log(doppelGeholteBilder);
    doppelGeholteBilder = doppelGeholteBilder.concat(doppelGeholteBilder);
    //console.log(doppelGeholteBilder);
    
    gemischteKarten = kartenMischen(doppelGeholteBilder, 20); //es werden 20 Karten gemischt zurück gegeben
    //gemischteKarten = doppelGeholteBilder; //Erzeugt sortiertes Array, zum testen
    //console.log(gemischteKarten);
}

function kartenMischen(_arrayBilder: Bild[], _anzahl: number): Bild[] { //es wir eine nummer genommen und ans array angehaengt
    
    let gefuelltesGemischtesBildArray: Bild[] = [];
    for (let i: number = 0; i < _anzahl; i++) {
        let randomNumber: number = Math.floor(Math.random() * _arrayBilder.length);
        let img: Bild = _arrayBilder[randomNumber];  
        gefuelltesGemischtesBildArray.splice(0, 0, img);
        _arrayBilder.splice(randomNumber, 1);
    }
    return gefuelltesGemischtesBildArray;
}

async function spielKarten(_karte: HTMLElement): Promise<void> {

    let neuAngeklicktesBildIndex: string = _karte.id.slice(2);
   
    if (klickenVerarbeitet == true && neuAngeklicktesBildIndex != zuletztAngeklicktesBildIndex) { //wenn die id nicht die gleiche ist
        anzahlKlicks++;
        klickenVerarbeitet = false;
                
        let i: HTMLImageElement = document.createElement("img");

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
             
                let idZahleins: string [] = erstesAngeklicktesBild.id.split("d"); //die id des HTML Elements herausfinden und loeschen
                //console.log(idZahleins);
                let nr: string = "nr" + idZahleins[1];
                let img1: HTMLElement = document.getElementById(nr);
                img1.parentNode.removeChild(img1);
                let idZahlZwei: string [] = zweitesAngeklicktesBild.id.split("d");
                let nr2: string = "nr" + idZahlZwei[1];
                let img2: HTMLElement = document.getElementById(nr2);
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
function timerLaeuft(): void { // Quelle: https://www.delftstack.com/de/howto/javascript/javascript-stopwatch/
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

function add(): void {
    timerLaeuft();
    anzeigeLaufendeZeit.textContent = (hrs > 9 ? hrs : "0" + hrs) + ":" + (min > 9 ? min : "0" + min) + ":" + (sec > 9 ? sec : "0" + sec);
    timer();
}

function timer(): void {
    setTimeout(add, 1000);
}
   
function timerAufNull(): void {
    anzeigeLaufendeZeit.textContent = "00:00:00";
    sec = 0; 
    min = 0; 
    hrs = 0;
    weiterleitungSeite("start");
}
//"
function reload(): void {
    window.location.href = window.location.href;
}

kartenVerteilen();


