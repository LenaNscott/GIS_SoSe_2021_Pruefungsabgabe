let urlSenden: HTMLElement = document.getElementById("einfuegen");
urlSenden.addEventListener("click" , bildUrlHinzufuegen);
document.getElementById("URL").innerHTML = "";

let urlLoeschen: HTMLElement = document.getElementById("loeschen");
urlLoeschen.addEventListener("click", auswahlLoeschen);

let aktuelleBilder: HTMLImageElement[] = [];
let loeschendeBilder: string[] = [];

bilderAnzeigen();


async function bilderAnzeigen(): Promise<void> {
    
    let adminBilderArray: Bild[] = await bilderUrlHolen();

    for (let i: number = 0; i < adminBilderArray.length; i++) {

        let adminBild: HTMLImageElement = document.createElement("img");
        adminBild.src = bilderArray[i].url;
        adminBild.title = bilderArray[i]._id;

        adminBild.style.position = "relativ";
        let positionLinks: number = (i % 4) * 230 + 300;
        adminBild.style.left = positionLinks.toString() + "px";
        let positionOben: number = Math.floor((i / 4)) * 230 + 500;
        adminBild.style.top = positionOben.toString() + "px";

        adminBild.id = "bildanzeige" + i.toString();
        adminBild.style.height = "200px";
        adminBild.style.width = "200px";
        adminBild.style.margin = "20px";
        aktuelleBilder.splice(0, 0, adminBild);

        document.getElementById("body").appendChild(adminBild);
        adminBild.addEventListener("click", function(): void {
            auswahlBilder(adminBild);
        });
    }
}


function auswahlBilder(angeklicktesBild: HTMLImageElement): void {
  
    if (angeklicktesBild.style.border == "") {
        angeklicktesBild.style.border = "solid";
        angeklicktesBild.style.borderColor = "#FF0000";
        loeschendeBilder.splice(0, 0, angeklicktesBild.title);
        //loeschendeBilder.splice(0, 0, angeklicktesBild.src);
    }

    else {
        angeklicktesBild.style.border = "";
        loeschendeBilder.splice(loeschendeBilder.indexOf(angeklicktesBild.title), 1);
    }
}


async function auswahlLoeschen(): Promise<void> {
    let loeschendeBilderString: string = loeschendeBilder.join("&");
    await BilderLoeschen(loeschendeBilderString);
    //console.log(loeschendeBilder);
    let pname: string = window.location.pathname;
    let geschnittenerPathname: string = pname.slice(0, pname.lastIndexOf("/"));
    window.location.pathname = geschnittenerPathname + "/admin.html";

}