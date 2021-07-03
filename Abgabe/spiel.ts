
urlHolen();

let gemischteKarten: bild[];
let bild1: HTMLImageElement = document.createElement("img");
let bild2: HTMLImageElement = document.createElement("img");
let i: HTMLImageElement = document.createElement("img");

let start: HTMLElement = document.getElementById("spielstart");
start.addEventListener("click", function(): void {
    spielStarten("timer", "10");
});


for (let i: number = 1; i <= 20; i++) {
    let karte: HTMLElement = document.getElementById("nr" + [i]);
    karte.addEventListener("click" , function(): void {
        bilder(karte);
    });   
}

function kartenVerteilen(_bilder: bild[]): void {
    let ausgewaehlteKarten: bild[] = [];
    let bildUrlId: bild [] = _bilder;
    for (let i: number = 0; i < 10; i++) {
        let zahl: bild = bildUrlId[Math.floor(Math.random() * bildUrlId.length)];
        ausgewaehlteKarten.splice(0, 0, zahl);
        let z: number = bildUrlId.indexOf(zahl);
        bildUrlId.splice(z, 1);
    }
    let neuArrayBilder: bild[] = ausgewaehlteKarten.concat(ausgewaehlteKarten);
    console.log(ausgewaehlteKarten);
    console.log(neuArrayBilder);
    gemischteKarten = neuArrayBilder;
    
}

function spielStarten(id: string, _string: string): void {
    start.remove ();
    document.getElementById(id).innerHTML = _string;
    let stoppen: HTMLElement = document.getElementById("stop");
    //stoppen.addEventListener("click", function());  
    let stoppuhr = (function() {
        let stop: number = 1;
        let hrs: number = 0;
        let mins: number = 0;
        let secs: number = 0;
        let msecs: number = 0;
    })
    
} 

let erste: boolean = false;
let zweite: boolean = false;
let _id1: string;
let _id2: string;
function karteAnzeigen(_id: string): void {
    
    if (erste == false) {
        bild1.style.position = "absolute";
        bild1.style.height = "300px";
        bild1.style.width = "300px";
        bild1.style.left = "575px";
        bild1.style.top = "275px";
        bild1.src = i.src;
        bild1.id = i.id;
        document.getElementById("body").appendChild(bild1); 
        _id1 = _id;
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
        _id2 = _id;
        erste = false;
        setTimeout(gleicheKarten, 4000);
    }
}


function gleicheKarten(): void {

        if (bild1.src == bild2.src) {
            bild1.id = "move";
            bild2.id = "move";
            
            
        }
        else {
            bild1.src = "https://www.trademore.de/isotope/i/id-001-4517-204_quilters-basic-memory.jpg";
            bild2.src = "https://www.trademore.de/isotope/i/id-001-4517-204_quilters-basic-memory.jpg";
        } 
}

async function bilder(_bild: HTMLElement): Promise<void> {
  
    switch (_bild.id) {
        case "nr1":
            i.id = "bild1";
            i.src = gemischteKarten[0].url;
            karteAnzeigen("nr1");
            break;
        case "nr2":
            i.id = "bild2";
            i.src = gemischteKarten[1].url;
            karteAnzeigen("nr2");
            break;
        case "nr3":
            i.id = "bild3";
            i.src = gemischteKarten[2].url;
            karteAnzeigen("nr3");
            break;
        case "nr4":
            i.id = "bild4";
            i.src = gemischteKarten[3].url;
            karteAnzeigen("nr4");
            break;
        case "nr5":
            i.id = "bild5";
            i.src = gemischteKarten[4].url;
            karteAnzeigen("nr5");
            break;
        case "nr6":
            i.id = "bild6";
            i.src = gemischteKarten[5].url;
            karteAnzeigen("nr6");
            break;
        case "nr7":
            i.id = "bild7";
            i.src = gemischteKarten[6].url;
            karteAnzeigen("nr7");
            break;
        case "nr8":
            i.id = "bild8";
            i.src = gemischteKarten[7].url;
            karteAnzeigen("nr8");
            break;
        case "nr9":
            i.id = "bild9";
            i.src = gemischteKarten[8].url;
            karteAnzeigen("nr9");
            break;
        case "nr10":
            i.id = "bild10";
            i.src = gemischteKarten[9].url;
            karteAnzeigen("nr10");
            break;
        case "nr11":
            i.id = "bild11";
            i.src = gemischteKarten[10].url;
            karteAnzeigen("nr11");
            break;
        case "nr12":
            i.id = "bild12";
            i.src = gemischteKarten[11].url;
            karteAnzeigen("nr12");
            break;
        case "nr13":
            i.id = "bild13";
            i.src = gemischteKarten[12].url;
            karteAnzeigen("nr13");
            break;
        case "nr14":
            i.id = "bild14";
            i.src = gemischteKarten[13].url;
            karteAnzeigen("nr14");
            break;
        case "nr15":
            i.id = "bild15";
            i.src = gemischteKarten[14].url;
            karteAnzeigen("nr15");
            break;
        case "nr16":
            i.id = "bild16";
            i.src = gemischteKarten[15].url;
            karteAnzeigen("nr16");
            break;
        case "nr17":
            i.id = "bild17";
            i.src = gemischteKarten[16].url;
            karteAnzeigen("nr17");
            break;
        case "nr18":
            i.id = "bild18";
            i.src = gemischteKarten[17].url;
            karteAnzeigen("nr18");
            break;
        case "nr19":
            i.id = "bild19";
            i.src = gemischteKarten[18].url;
            karteAnzeigen("nr19");
            break;
        case "nr20":
            i.id = "bild20";
            i.src = gemischteKarten[19].url;
            karteAnzeigen("nr20");
            break;
    }
}