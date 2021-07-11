"use strict";
let spiel = document.getElementById("startHome");
herokuAufwecken();
async function herokuAufwecken() {
    await bilderUrlHolen();
    spiel.addEventListener("click", function () {
        weiterleitungSeite(spiel.id);
    });
    spiel.innerHTML = "zum Spiel";
}
//# sourceMappingURL=home.js.map