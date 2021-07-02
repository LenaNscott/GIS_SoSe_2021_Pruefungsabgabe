

urlHolen();


let start: HTMLElement = document.getElementById("spielstart");
start.addEventListener("click", function(): void {
    spielStarten("timer", "10");
});
   

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




for (let i: number = 1; i <= 20; i++) {
    let karte: HTMLElement = document.getElementById("nr" + [i]);
    karte.addEventListener("click" , function(): void {
        bilder(karte);
    });   
}


let bild1: HTMLImageElement = document.createElement("img");

function karteAnzeigen(): void {
    
    bild1.style.position = "absolute";
    bild1.style.height = "300px";
    bild1.style.width = "300px";
    bild1.style.left = "575px";
    bild1.style.top = "275px";
    document.getElementById("body").appendChild(bild1);
}

async function bilder(_bild: HTMLElement): Promise<void> {
    
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