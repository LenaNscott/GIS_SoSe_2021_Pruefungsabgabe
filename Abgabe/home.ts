async function herokuAufwecken(): Promise <void> {
    await bilderUrlHolen();
}

let spiel: HTMLElement = document.getElementById("startHome");
spiel.addEventListener("click", function(): void {
    weiterleitungSeite(spiel.id);
});

herokuAufwecken();

