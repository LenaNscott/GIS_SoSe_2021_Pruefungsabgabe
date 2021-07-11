let zumSpiel: HTMLElement = document.getElementById("startHome");

herokuAufwecken();

async function herokuAufwecken(): Promise <void> {
    await bilderUrlHolen();
    zumSpiel.addEventListener("click", function(): void {
        weiterleitungSeite(zumSpiel.id);
    });
    zumSpiel.innerHTML = "zum Spiel";
}






