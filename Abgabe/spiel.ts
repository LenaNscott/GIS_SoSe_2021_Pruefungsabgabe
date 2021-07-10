let klickenVerarbeitet: boolean = true;
let karteEins: boolean = true;
let karteZwei: boolean = false;
let zuletztAngeklicktesBildIndex: string = "";

let spielende: boolean = false;
let gefundenePaare: number = 0;
let gemischteKarten: Bild[];

let bild1: HTMLImageElement = document.createElement("img");
bild1.style.position = "absolute";
bild1.style.height = "300px";
bild1.style.width = "300px";
bild1.style.left = "575px";
bild1.style.top = "275px";

let bild2: HTMLImageElement = document.createElement("img");
bild2.style.position = "absolute";
bild2.style.height = "300px";
bild2.style.width = "300px";
bild2.style.left = "575px";
bild2.style.top = "275px";

let sec: number = 0;
let min: number = 0;
let hrs: number = 0;
let sekunden: number = 0;
let stoppen: boolean = false;
let anzahlKlicks: number = 0;


let anzeige: HTMLElement = document.getElementById("timer");
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
    let doppelGeholteBilder: Bild[] = kartenMischen(geholteBilder, 10);
    //console.log(doppelGeholteBilder);
    doppelGeholteBilder = doppelGeholteBilder.concat(doppelGeholteBilder);
    //console.log(doppelGeholteBilder);
    
    gemischteKarten = kartenMischen(doppelGeholteBilder, 20);
    //gemischteKarten = doppelGeholteBilder; //Erzeugt sortiertes Array, zum testen
    //console.log(gemischteKarten);
}

function kartenMischen(_arrayBilder: Bild[], _anzahl: number): Bild[] {
    
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
   
    if (klickenVerarbeitet == true && neuAngeklicktesBildIndex != zuletztAngeklicktesBildIndex) {
        anzahlKlicks++;
        klickenVerarbeitet = false;
                
        let i: HTMLImageElement = document.createElement("img");

        i.id = "bild" + neuAngeklicktesBildIndex;
        i.src = gemischteKarten[parseInt(neuAngeklicktesBildIndex) - 1].url;

        if (karteEins == true) {
            zuletztAngeklicktesBildIndex = neuAngeklicktesBildIndex;
            bild1.src = i.src;
            bild1.id = i.id;
            document.getElementById("body").appendChild(bild1); 
            karteEins = false;
            klickenVerarbeitet = true;
        }

        else if (karteEins == false) {
            zuletztAngeklicktesBildIndex = "";
            bild2.src = i.src;
            bild2.id = i.id;
            document.getElementById("body").appendChild(bild2); 
            karteEins = true;
    
            await Sleep(2000);

            if (bild1.src == bild2.src) {
                gefundenePaare += 1;
             
                let idZahleins: string [] = bild1.id.split("d");
                //console.log(idZahleins);
                let nr: string = "nr" + idZahleins[1];
                let img1: HTMLElement = document.getElementById(nr);
                img1.parentNode.removeChild(img1);
                let idZahlZwei: string [] = bild2.id.split("d");
                let nr2: string = "nr" + idZahlZwei[1];
                let img2: HTMLElement = document.getElementById(nr2);
                img2.parentNode.removeChild(img2); 
            
            }

            document.getElementById("body").removeChild(bild1);
            document.getElementById("body").removeChild(bild2);

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


function Sleep(milliseconds: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
   }


function timerLaeuft(): void {
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
    anzeige.textContent = (hrs > 9 ? hrs : "0" + hrs) + ":" + (min > 9 ? min : "0" + min) + ":" + (sec > 9 ? sec : "0" + sec);
    timer();
}

function timer(): void {
    setTimeout(add, 1000);
}
   
function timerAufNull(): void {
    anzeige.textContent = "00:00:00";
    sec = 0; 
    min = 0; 
    hrs = 0;
    weiterleitungSeite("start");
}

function reload(): void {
    window.location.href = window.location.href;
}

kartenVerteilen();



