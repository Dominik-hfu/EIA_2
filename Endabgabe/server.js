"use strict";
var EisDealer;
(function (EisDealer) {
    EisDealer.payload = {}; //von gpt
    EisDealer.items = [
        {
            name: "Amarena",
            preis: 1
        },
        {
            name: "Pistazie",
            preis: 1
        },
        {
            name: "Banane",
            preis: 1
        },
        {
            name: "Kaffee",
            preis: 1
        },
        {
            name: "Vanillesauce",
            preis: 1
        },
        {
            name: "Schokosauce",
            preis: 1
        },
        {
            name: "Karamellsauce",
            preis: 1
        },
        {
            name: "Likör",
            preis: 1
        },
        {
            name: "Streusel",
            preis: 1
        },
        {
            name: "Krokant",
            preis: 1
        },
        {
            name: "Marshmallow",
            preis: 1
        },
        {
            name: "Kaffeepulver",
            preis: 1
        },
        {
            name: "Sahne",
            preis: 1
        },
    ];
    EisDealer.URL = "https://webuser.hs-furtwangen.de/~putzdomi/Database/"; //webserver
    async function findPreis(collection, name) {
        let queryParamsFind = new URLSearchParams({
            command: "find",
            collection,
            data: JSON.stringify({ _name: name }) //umwandlung von json in string
        });
        //json besteht aus zwei teilen: inhalt und status
        try {
            let response = await fetch(`${EisDealer.URL}?${queryParamsFind.toString()}`, {
                method: "GET",
            });
            if (!response.ok) {
                throw new Error(`Server returned status ${response.status}`);
            } //kommunikation fehlgeschlagen
            let result = await response.json(); //antwort von server wird in json umgewandelt
            let data = result.data; //speichert daten von json
            let preis = data[Object.keys(data)[0]].preis; //filtert preis
            console.log("Data inserted successfully:", result);
            return preis;
        }
        catch (error) {
            console.error("Error inserting data:", error);
            return undefined;
        } //try catch versucht daten zu holen, catcht sonst den error
    }
    EisDealer.findPreis = findPreis;
    async function findCollection(collection) {
        let serverUrl = "https://webuser.hs-furtwangen.de/~putzdomi/Database/";
        // Erstellen Sie die Query-Parameter
        let queryParams = new URLSearchParams({
            command: "find",
            collection
        });
        // Senden Sie die Anfrage
        try {
            let response = await fetch(`${serverUrl}?${queryParams.toString()}`, {
                method: "GET",
            });
            console.log(`${serverUrl}?${queryParams.toString()}`);
            if (!response.ok) {
                throw new Error(`Server returned status ${response.status}`);
            }
            let result = await response.json();
            // Überprüfen Sie, ob die Sammlung gefunden wurde
            if (result.status == 'success') {
                return true;
            }
            else {
                return false;
            }
        }
        catch (error) {
            console.error("Error finding collection:", error);
            return false;
        }
    }
    EisDealer.findCollection = findCollection;
    EisDealer.createURL = "https://webuser.hs-furtwangen.de/~putzdomi/Database/?command=create&collection=items"; //url um etwas beim server zu erstellen 
    async function createData(createURL, payload) {
        try {
            let response = await fetch(createURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', // Headers Typ gibt an in welchem Format die Datei zurückgegeben werden soll
                },
                body: JSON.stringify(payload), // Im Body wird der eigentlich Inhalt gespeichert und hier als string zurück gegeben
            });
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            let data = await response.json();
            console.log(data);
            return true;
            // Wenn das Ergebnis ok ist, warte auf die Daten und geben diese in der Konsole aus, return true (Boolean ist der Rückgabe- Funktionstyp)
        }
        catch (error) {
            console.error(`Failed to create data: ${error}`);
            return false;
        }
    }
    EisDealer.createData = createData;
    async function insertItems(collection, dataArray) {
        let queryParams = new URLSearchParams({
            command: "insert",
            collection,
            data: JSON.stringify(dataArray)
        });
        let test = `${EisDealer.URL}?${queryParams.toString()}`;
        console.log(test);
        try {
            let response = await fetch(`${EisDealer.URL}?${queryParams.toString()}`, {
                method: "POST", // Ändere den Inhalt auf dem Server
            });
            if (!response.ok) {
                throw new Error(`Server returned status ${response.status}`);
            }
            let result = await response.json();
            console.log("Data inserted successfully:", result);
            return true;
        }
        catch (error) {
            console.error("Error inserting data:", error);
            return false;
        }
    }
    EisDealer.insertItems = insertItems;
})(EisDealer || (EisDealer = {}));
//# sourceMappingURL=server.js.map