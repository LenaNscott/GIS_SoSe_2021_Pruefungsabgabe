"use strict";
let spielen = document.getElementById("start");
spielen.addEventListener("click", function () {
    weiterleitungSeite(spielen.id);
});
highscoreTabelle();
let spielerDaten = [];
async function highscoreTabelle() {
    let serverUrl = "http://localhost:8100/holenscore"; // https://lenasfancyapp.herokuapp.com
    let responseText = await versenden(serverUrl);
    console.log(responseText);
    spielerDaten = JSON.parse(responseText);
    console.log(spielerDaten);
    spielerDaten = spielerDaten.sort(function (a, b) {
        return a.punkte - b.punkte;
    });
    console.log(spielerDaten);
    for (let i = 0; i < spielerDaten.length - i; i++) {
        let nameEintrag = document.getElementById("name" + [i + 1]);
        console.log(spielerDaten[spielerDaten.length - i].name);
        nameEintrag.innerHTML = spielerDaten[spielerDaten.length - i].name;
        let punkte = document.getElementById("punkte" + [i + 1]);
        punkte.innerHTML = spielerDaten[spielerDaten.length - i].punkte.toString();
    }
}
//# sourceMappingURL=score.js.map