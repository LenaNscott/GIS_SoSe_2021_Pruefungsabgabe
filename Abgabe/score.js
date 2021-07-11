"use strict";
let neuesSpiel = document.getElementById("start");
neuesSpiel.addEventListener("click", function () {
    weiterleitungSeite(neuesSpiel.id);
});
highscoreTabelle();
let spielerDaten = [];
async function highscoreTabelle() {
    //console.log(responseText);
    let scoreStringDatenbank = await scoreHolen();
    spielerDaten = JSON.parse(scoreStringDatenbank);
    //console.log(spielerDaten);
    spielerDaten = spielerDaten.sort(function (a, b) {
        return a.punkte - b.punkte;
    });
    //console.log(spielerDaten);
    for (let i = 1; i <= 10 && i <= spielerDaten.length; i++) {
        let nameEintrag = document.getElementById("name" + i);
        let eintragTabelle;
        eintragTabelle = spielerDaten[spielerDaten.length - i].name;
        //console.log(eintragTabelle);
        nameEintrag.innerHTML = eintragTabelle;
        //console.log(nameEintrag.innerHTML);
        let punkte = document.getElementById("punkte" + i);
        let anzahlPunkte = spielerDaten[spielerDaten.length - i].punkte.toString();
        punkte.innerHTML = anzahlPunkte;
        //console.log(punkte.innerHTML);
        let zeit = document.getElementById("zeit" + i);
        let zeitTabelle = zeitString(spielerDaten[spielerDaten.length - i].sec.toString());
        zeit.innerHTML = zeitTabelle;
        //console.log(zeit.innerHTML);
        let klicks = document.getElementById("klicks" + i);
        let klicksTabelle = spielerDaten[spielerDaten.length - i].klicks.toString();
        klicks.innerHTML = klicksTabelle;
        //console.log(klicks.innerHTML);
    }
}
//# sourceMappingURL=score.js.map