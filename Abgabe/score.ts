let neuesSpiel: HTMLElement = document.getElementById("start");
neuesSpiel.addEventListener("click", function(): void {
    weiterleitungSeite(neuesSpiel.id);
});
highscoreTabelle();

let spielerDaten: HighscoreEintrag [] = [];

async function highscoreTabelle(): Promise<void> {

    //console.log(responseText);
    let scoreStringDatenbank: string = await scoreHolen();
    spielerDaten = JSON.parse(scoreStringDatenbank);
    //console.log(spielerDaten);

    spielerDaten = spielerDaten.sort(function(a, b) {
        return a.punkte - b.punkte; });
    //console.log(spielerDaten);
   
    for (let i: number = 1; i <= 10 && i <= spielerDaten.length; i++) {
        let nameEintrag: HTMLElement = document.getElementById("name" + i);
        let eintragTabelle: string;
        eintragTabelle = spielerDaten[spielerDaten.length  - i].name;
        //console.log(eintragTabelle);
        nameEintrag.innerHTML = eintragTabelle;
        //console.log(nameEintrag.innerHTML);

        let punkte: HTMLElement = document.getElementById("punkte" + i);
        let anzahlPunkte: string = spielerDaten[spielerDaten.length  - i].punkte.toString();
        punkte.innerHTML = anzahlPunkte;
        //console.log(punkte.innerHTML);
       
        let zeit: HTMLElement = document.getElementById("zeit" + i);
        let zeitTabelle: string = zeitString(spielerDaten[spielerDaten.length - i].sec.toString());
        zeit.innerHTML = zeitTabelle;
        //console.log(zeit.innerHTML);

        let klicks: HTMLElement = document.getElementById("klicks" + i);
        let klicksTabelle: string = spielerDaten[spielerDaten.length - i].klicks.toString();
        klicks.innerHTML = klicksTabelle;
        //console.log(klicks.innerHTML);

    }
}

