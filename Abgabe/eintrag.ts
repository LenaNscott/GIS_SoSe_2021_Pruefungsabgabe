let highscoreEintrag: HTMLElement = document.getElementById("fertig");
highscoreEintrag.addEventListener("click", function(): void {
    eintragDatenbank(gespielteZeit);
    weiterleitungSeite(highscoreEintrag.id);
});
