import * as Http from "http"; 
import * as Url from "url";
import * as Mongo from "mongodb";


export namespace P_3_1Server { 
    let eingabe: Mongo.Collection;
    let eingabe2: Mongo.Collection;
    const {ObjectId} = require("mongodb");

    console.log("Starting server"); 
    let port: number = Number(process.env.PORT); 
    if (!port) 
        port = 8100; 

    let server: Http.Server = Http.createServer(); 
    server.addListener("request", handleRequest); 
    server.addListener("listening", handleListen);
    server.listen(port); 

    let databaseUrl: string = "mongodb+srv://user_nerz:mongoDB2020@nerz-lena.9cmgx.mongodb.net/Memory?retryWrites=true&w=majority";
    connectToDatabase(databaseUrl); 


    async function connectToDatabase (_url: string): Promise<void> {
        let options: Mongo.MongoClientOptions = {useNewUrlParser: true, useUnifiedTopology: true};
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        eingabe = mongoClient.db("Memory").collection("Bilder");
        eingabe2 = mongoClient.db("Memory").collection("Spiel");
        console.log("Datenbase conection", eingabe != undefined);
        console.log("Datenbase conection", eingabe2 != undefined);
    }
  

    function handleListen(): void { 
        console.log("Listening"); 
    }
    

    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise <void> { 
        //console.log("I hear voices!"); 
        let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
        _response.setHeader("content-type", "text/html; charset=utf-8"); 
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (url.pathname == "/holen") {
            let ausgabe: string = JSON.stringify(await eingabe.find().toArray());
            
            //console.log(ausgabe);   
            _response.write(ausgabe);
        }

        else if (url.pathname == "/abschicken") {
            let jsonString: string = JSON.stringify(url.query);
            _response.write(jsonString);
            eingabe.insert(url.query);
        }

        else if (url.pathname == "/loeschen") {
            let loeschendeBilderString: string = url.search.slice(1);
            let loeschendeBilderArray: string[] = loeschendeBilderString.split("&");
            for (let i: number = 0; i < loeschendeBilderArray.length; i++) {
                let datenbankObjectId: string = loeschendeBilderArray[i];
                //console.log(datenbankObjectId);
                let myquery = {"_id": ObjectId(datenbankObjectId)};
                eingabe.deleteOne(myquery);
            }            
            _response.write("Geloescht");   
        }

        else if (url.pathname == "/eintrag") {
            let jsonString: string = JSON.stringify(url.query);
            _response.write(jsonString);
            //console.log(jsonString);
            eingabe2.insert(url.query);
        }

        else if (url.pathname == "/holenscore") {
            let ausgabe: string = JSON.stringify(await eingabe2.find().toArray());
            
            //console.log(ausgabe);   
            _response.write(ausgabe);
        }
             
        _response.end();
    }

}
