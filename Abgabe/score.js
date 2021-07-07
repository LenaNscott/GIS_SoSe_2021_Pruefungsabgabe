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
    spielerDaten = spielerDaten.sort(Number);
    console.log(spielerDaten);
}
//# sourceMappingURL=score.js.map