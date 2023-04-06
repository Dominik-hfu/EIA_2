namespace organizer {

    let name: HTMLSelectElement = document.querySelector('select') as HTMLSelectElement;
    name.addEventListener('change', function () {

        console.log("you choosed a person")

    }
    )

    // let task: HTMLInputElement=document.querySelector('taskdefinition') as HTMLInputElement;
    // task.addEventListener('keyup', function(){
    //     console.log("you created a new task")
    // })
        let inputField:HTMLInputElement = document.querySelector("input") as HTMLInputElement; // Zugriff auf Input-Feld Element
      
        inputField.addEventListener("keyup", (event) => { // Hinzufügen des Eventlisteners für "keyup" - Ereignis
            if (event.key === "Enter"){
            let inputText:string = (event.target as HTMLInputElement).value; // Zugriff auf den eingegebenen Text im Input-Feld
            (event.target as HTMLInputElement).value = "";
      
          console.log(`taskdefinition: ${inputText}`); // Konsolenausgabe des eingegebenen Textes
    }});


    let date:HTMLInputElement= document.querySelector("input[type='date']") as HTMLInputElement;
    date.addEventListener('change', (event) => {
        let choosedDate:string=(event.target as HTMLInputElement).value;
        console.log(`you set the deadline: ${choosedDate}`);
    })    








}
// Eingabe gewährleisten, Speicherung der Eingabe in Variablen oder consolen Ausgabe
// Erstellen von p oder span bei enter also eventlistener auf felder mit keyboard und klick
// child appenden
// stylen
// To do liste
// Matrikelnummer und mitwirkende etc hier rein schreiben