let urlSenden: HTMLElement = document.getElementById("einfuegen");
urlSenden.addEventListener("click" , urlHinzufuegen);
document.getElementById("URL").innerHTML = "";

let urlLoeschen: HTMLElement = document.getElementById("loeschen");
urlLoeschen.addEventListener("click", auswahlLoeschen);

bilderZeigen();
let aktuelleBilder: HTMLImageElement[] = [];

async function bilderZeigen(): Promise<void> {
    
    let adminBilderArray: Bild[] = await urlHolen();

    for (let i: number = 0; i < adminBilderArray.length; i++) {
        let adminBild: HTMLImageElement = document.createElement("img");
        adminBild.src = bilderArray[i].url;
        adminBild.style.position = "relativ";
        let positionLinks: number = (i % 4) * 300 + 10;
        adminBild.style.left = positionLinks.toString() + "px";
        let positionOben: number = Math.floor((i / 4)) * 300 + 300;
        adminBild.style.top = positionOben.toString() + "px";
        adminBild.style.margin = "20px";
        adminBild.id = "bildanzeige" + i.toString();
        adminBild.style.height = "200px";
        adminBild.style.width = "200px";
        adminBild.style.margin = "20px";
        aktuelleBilder.splice(0, 0, adminBild);
        document.getElementById("body").appendChild(adminBild);
        adminBild.addEventListener("click", function(): void {
            auswahl(adminBild.id);
        });
    }
}

function auswahl(_id: string): void {
    let ausgewaeltesBild: HTMLElement = document.getElementById(_id);
    ausgewaeltesBild.style.border = "solid";
    ausgewaeltesBild.style.borderColor = "#FF0000";
    ausgewaeltesBild.addEventListener("click", function(): void {
        zuruecknahme(_id);
    });
}

function zuruecknahme(_id: string): void {
    let zurueckBild: HTMLElement = document.getElementById(_id);
    zurueckBild.style.border = "none";
    zurueckBild.addEventListener("click", function(): void {
        auswahl(zurueckBild.id);
    });
}

function auswahlLoeschen(): void {
    for (let i: number = 0; i < aktuelleBilder.length; i++) {
        let loeschendesBild: HTMLElement = document.getElementById(aktuelleBilder[i].id);
        if (loeschendesBild.style.borderColor == "#FF0000") {
            document.getElementById("body").removeChild(loeschendesBild);
        }
    }
}