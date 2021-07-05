"use strict";
let urlSenden = document.getElementById("einfuegen");
urlSenden.addEventListener("click", urlHinzufuegen);
document.getElementById("URL").innerHTML = "";
let urlLoeschen = document.getElementById("loeschen");
urlLoeschen.addEventListener("click", auswahlLoeschen);
bilderZeigen();
let aktuelleBilder = [];
async function bilderZeigen() {
    let adminBilderArray = await urlHolen();
    for (let i = 0; i < adminBilderArray.length; i++) {
        let adminBild = document.createElement("img");
        adminBild.src = bilderArray[i].url;
        adminBild.style.position = "relativ";
        let positionLinks = (i % 4) * 300 + 10;
        adminBild.style.left = positionLinks.toString() + "px";
        let positionOben = Math.floor((i / 4)) * 300 + 300;
        adminBild.style.top = positionOben.toString() + "px";
        adminBild.style.margin = "20px";
        adminBild.id = "bildanzeige" + i.toString();
        adminBild.style.height = "200px";
        adminBild.style.width = "200px";
        adminBild.style.margin = "20px";
        aktuelleBilder.splice(0, 0, adminBild);
        document.getElementById("body").appendChild(adminBild);
        adminBild.addEventListener("click", function () {
            auswahl(adminBild.id);
        });
    }
}
function auswahl(_id) {
    let ausgewaeltesBild = document.getElementById(_id);
    ausgewaeltesBild.style.border = "solid";
    ausgewaeltesBild.style.borderColor = "#FF0000";
    ausgewaeltesBild.addEventListener("click", function () {
        zuruecknahme(_id);
    });
}
function zuruecknahme(_id) {
    let zurueckBild = document.getElementById(_id);
    zurueckBild.style.border = "none";
    zurueckBild.addEventListener("click", function () {
        auswahl(zurueckBild.id);
    });
}
function auswahlLoeschen() {
    for (let i = 0; i < aktuelleBilder.length; i++) {
        let loeschendesBild = document.getElementById(aktuelleBilder[i].id);
        if (loeschendesBild.style.borderColor == "#FF0000") {
            document.getElementById("body").removeChild(loeschendesBild);
        }
    }
}
//# sourceMappingURL=admin.js.map