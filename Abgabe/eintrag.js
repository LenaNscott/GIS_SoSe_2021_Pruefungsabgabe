"use strict";
let highscoreEintrag = document.getElementById("fertig");
highscoreEintrag.addEventListener("click", function () {
    eintragDatenbank(gespielteZeit);
    weiterleitungSeite(highscoreEintrag.id);
});
//# sourceMappingURL=eintrag.js.map