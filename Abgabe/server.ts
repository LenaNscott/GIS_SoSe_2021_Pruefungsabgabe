import * as Http from "http"; 
import * as Url from "url";
import * as Mongo from "mongodb";


export namespace P_3_1Server { 
    let eingabe: Mongo.Collection;
   
    interface Url {
       [type: string]: string | string[];
    }

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
        console.log("Datenbase conection", eingabe != undefined);
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
            let ausgabe: string = "";
            let cursor: Mongo.Cursor = await eingabe.find();
            while (await cursor.hasNext()) {
                ausgabe += JSON.stringify(await cursor.next());
            }
    
            _response.write(ausgabe);
        }

        else if (url.pathname == "/abschicken") {
            let jsonString: string = JSON.stringify(url.query);
            _response.write(jsonString);
            formularEingabe(url.query);
        }
             
        _response.end(); 

    }

    function formularEingabe (_url: Url): void {
        eingabe.insert(_url);
    }

}
