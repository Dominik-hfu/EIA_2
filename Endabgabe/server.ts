namespace EisDealer{

    interface item{

        name:string;
        preis:number
    }

    export let payload={};

export let items: item[] = [
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



export let URL = "https://webuser.hs-furtwangen.de/~putzdomi/Database/"

export async function findPreis(collection: string, name: string): Promise<number|undefined> {

    let queryParamsFind = new URLSearchParams({
      command: "find",
      collection,
      data: JSON.stringify({ _name: name })
    });

    try {
      let response = await fetch(`${URL}?${queryParamsFind.toString()}`, {
        method: "GET",// Ändere den Inhalt auf dem Server
      });

      if (!response.ok) {
        throw new Error(`Server returned status ${response.status}`);
      }

      let result = await response.json();
      let data = result.data;
      let preis = data[Object.keys(data)[0]].preis;   


      console.log("Data inserted successfully:", result);
      return preis
    } catch (error) {
      console.error("Error inserting data:", error);
      return undefined

    }
  }

export async function findCollection(collection: string): Promise<boolean> {
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
      console.log(`${serverUrl}?${queryParams.toString()}`)
      if (!response.ok) {
        throw new Error(`Server returned status ${response.status}`);
      }

      let result = await response.json();

      // Überprüfen Sie, ob die Sammlung gefunden wurde
      if (result.status == 'success') {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error("Error finding collection:", error);
      return false;
    }
  }

 export let createURL = "https://webuser.hs-furtwangen.de/~putzdomi/Database/?command=create&collection=items"

  export async function createData(createURL: string, payload: object): Promise<boolean> {
    try {
      let response = await fetch(createURL, { // Fetch sendet HTTP Anfrage an die angegebene URL
        method: 'POST', // POST= Methode für das Sende von Daten/ GET= Methode um Datem vom Server abzurufen
        headers: {
          'Content-Type': 'application/json',// Headers Typ gibt an in welchem Format die Datei zurückgegeben werden soll
        },
        body: JSON.stringify(payload),// Im Body wird der eigentlich Inhalt gespeichert und hier als string zurück gegeben
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }


      let data = await response.json();
      console.log(data);
      return true
      // Wenn das Ergebnis ok ist, warte auf die Daten und geben diese in der Konsole aus, return true (Boolean ist der Rückgabe- Funktionstyp)
    } catch (error) {
      console.error(`Failed to create data: ${error}`);
      return false
    }
  }

  export async function insertItems(collection: string, dataArray: object): Promise<boolean> {

    let queryParams = new URLSearchParams({
      command: "insert",
      collection,
      data: JSON.stringify(dataArray)
    });
    let test = `${URL}?${queryParams.toString()}`
    console.log(test)

    try {
      let response = await fetch(`${URL}?${queryParams.toString()}`, {
        method: "POST",// Ändere den Inhalt auf dem Server
      });

      if (!response.ok) {
        throw new Error(`Server returned status ${response.status}`);
      }

      let result = await response.json();
      console.log("Data inserted successfully:", result);
      return true
    } catch (error) {
      console.error("Error inserting data:", error);
      return false
    }
  }
}