let spielen: HTMLElement = document.getElementById("start");
spielen.addEventListener("click", function(): void {
    weiterleitungSeite(spielen.id);
});
highscoreTabelle();

let spielerDaten: HighscoreEintrag [] = [];

async function highscoreTabelle(): Promise<void> {
    let serverUrl: string = "http://localhost:8100/holenscore";   // https://lenasfancyapp.herokuapp.com
    let responseText: string = await versenden(serverUrl);
    console.log(responseText);
   
    spielerDaten = JSON.parse(responseText);
    console.log(spielerDaten);

    spielerDaten = spielerDaten.sort(function(a, b) {
        return a.punkte - b.punkte; });
    console.log(spielerDaten);

    for (let i: number = 0; i < spielerDaten.length - i; i++) {
        let nameEintrag: HTMLElement = document.getElementById("name" + [i + 1]);
        console.log(spielerDaten[spielerDaten.length - i].name);
        nameEintrag.innerHTML = spielerDaten[spielerDaten.length - i].name;
        let punkte: HTMLElement = document.getElementById("punkte" + [i + 1]);
        punkte.innerHTML = spielerDaten[spielerDaten.length - i].punkte.toString();
    }
}

