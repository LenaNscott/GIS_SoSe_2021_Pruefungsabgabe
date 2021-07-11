"use strict";
let urlSenden = document.getElementById("einfuegen");
urlSenden.addEventListener("click", bildUrlHinzufuegen);
document.getElementById("URL").innerHTML = "";
let urlLoeschen = document.getElementById("loeschen");
urlLoeschen.addEventListener("click", auswahlLoeschen);
let aktuelleBilder = [];
let loeschendeBilder = [];
bilderAnzeigen();
async function bilderAnzeigen() {
    let adminBilderArray = await bilderUrlHolen();
    for (let i = 0; i < adminBilderArray.length; i++) {
        let adminBild = document.createElement("img");
        adminBild.src = bilderArray[i].url;
        adminBild.title = bilderArray[i]._id;
        adminBild.style.position = "relativ";
        let positionLinks = (i % 4) * 230 + 300;
        adminBild.style.left = positionLinks.toString() + "px";
        let positionOben = Math.floor((i / 4)) * 230 + 500;
        adminBild.style.top = positionOben.toString() + "px";
        adminBild.id = "bildanzeige" + i.toString();
        adminBild.style.height = "200px";
        adminBild.style.width = "200px";
        adminBild.style.margin = "20px";
        aktuelleBilder.splice(0, 0, adminBild);
        document.getElementById("body").appendChild(adminBild);
        adminBild.addEventListener("click", function () {
            auswahlBilder(adminBild);
        });
    }
}
function auswahlBilder(_angeklicktesBild) {
    if (_angeklicktesBild.style.border == "") {
        _angeklicktesBild.style.border = "solid";
        _angeklicktesBild.style.borderColor = "#FF0000";
        loeschendeBilder.splice(0, 0, _angeklicktesBild.title);
        //loeschendeBilder.splice(0, 0, angeklicktesBild.src);
    }
    else {
        _angeklicktesBild.style.border = "";
        loeschendeBilder.splice(loeschendeBilder.indexOf(_angeklicktesBild.title), 1);
    }
}
async function auswahlLoeschen() {
    let loeschendeBilderString = loeschendeBilder.join("&");
    await bilderLoeschen(loeschendeBilderString);
    //console.log(loeschendeBilder);
    let pname = window.location.pathname;
    let geschnittenerPathname = pname.slice(0, pname.lastIndexOf("/"));
    window.location.pathname = geschnittenerPathname + "/admin.html";
}
//# sourceMappingURL=admin.js.map