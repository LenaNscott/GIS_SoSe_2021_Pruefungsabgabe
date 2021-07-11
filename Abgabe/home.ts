let spiel: HTMLElement = document.getElementById("startHome");

herokuAufwecken();

async function herokuAufwecken(): Promise <void> {
    await bilderUrlHolen();
    spiel.addEventListener("click", function(): void {
        weiterleitungSeite(spiel.id);
    });
    spiel.innerHTML = "zum Spiel";
}






