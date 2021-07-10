"use strict";
async function herokuAufwecken() {
    await bilderUrlHolen();
}
let spiel = document.getElementById("startHome");
spiel.addEventListener("click", function () {
    weiterleitungSeite(spiel.id);
});
herokuAufwecken();
//# sourceMappingURL=home.js.map