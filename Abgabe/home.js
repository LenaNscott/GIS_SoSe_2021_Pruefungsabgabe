"use strict";
let zumSpiel = document.getElementById("startHome");
herokuAufwecken();
async function herokuAufwecken() {
    await bilderUrlHolen();
    zumSpiel.addEventListener("click", function () {
        weiterleitungSeite(zumSpiel.id);
    });
    zumSpiel.innerHTML = "zum Spiel";
}
//# sourceMappingURL=home.js.map