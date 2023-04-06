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
        let inputField:HTMLInputElement = document.querySelector("input[type='text']") as HTMLInputElement; // Zugriff auf Input-Feld Element
      
        inputField.addEventListener("keyup", (event) => { // Hinzufügen des Eventlisteners für "keyup" - Ereignis
            if (event.key === "Enter"){
            let inputText:string = (event.target as HTMLInputElement).value; // Zugriff auf den eingegebenen Text im Input-Feld
            // (event.target as HTMLInputElement).value = "";
      
          console.log(`taskdefinition: ${inputText}`); // Konsolenausgabe des eingegebenen Textes
    }});


    let date:HTMLInputElement= document.querySelector("input[type='date']") as HTMLInputElement;
    date.addEventListener('change', (event) => {
        let choosedDate:string=(event.target as HTMLInputElement).value;
        console.log(`you set the deadline: ${choosedDate}`);
    })   
    
    let commentField:HTMLInputElement = document.getElementById('comment') as HTMLInputElement; // Zugriff auf Input-Feld Element
      
    commentField.addEventListener("keyup", (event) => { // Hinzufügen des Eventlisteners für "keyup" - Ereignis
        if (event.key === "Enter"){
        let inputComment:string = (event.target as HTMLInputElement).value; // Zugriff auf den eingegebenen Text im Input-Feld
        // (event.target as HTMLInputElement).value = "";
  
      console.log(`comment:${inputComment}`); // Konsolenausgabe des eingegebenen Textes
}});
// hier id, da 2 input elemente vorhanden sind und nicht beide mit der gleichen klasse getrennt von einander funktionieren

let button: HTMLButtonElement = document.querySelector('.createtask') as HTMLButtonElement;

button.addEventListener('click', function(){
  let name: string = (<HTMLSelectElement>document.getElementById("select")).value;
  let date: string = (<HTMLInputElement>document.querySelector("input[type='date']")).value;
  let inputField: string = (<HTMLSelectElement>document.getElementById("input")).value;
  let commentField: string = (<HTMLSelectElement>document.getElementById("comment")).value;

  console.log(name, inputField, date, commentField);
});
// löschen der zeile auskommentiert, da sonst buttonfunktion nicht funktioniert






}
// Eingabe gewährleisten, Speicherung der Eingabe in Variablen oder consolen Ausgabe
// Erstellen von p oder span bei enter also eventlistener auf felder mit keyboard und klick
// child appenden
// stylen
// To do liste
// Matrikelnummer und mitwirkende etc hier rein schreiben