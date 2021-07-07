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
        return a.sec - b.sec });
    console.log(spielerDaten);
}

