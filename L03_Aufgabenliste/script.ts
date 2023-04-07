/*
Aufgabe: <L03_Aufgabenliste>
Name: <Dominik Putz>
Matrikel: <272244>
Datum: <07.04.2023>
Quellen: <->
*/

namespace organizer {

    let name: HTMLSelectElement = document.querySelector('select') as HTMLSelectElement;
    name.addEventListener('change', function () {
      let selectedName:string|null= name.options[name.selectedIndex].textContent;
        console.log("you choosed: " + selectedName)
    }
    )
    // possibly null :/

let taskName:string;
let comment:string;

        let inputField:HTMLInputElement = document.querySelector("input[type='text']") as HTMLInputElement;
      
        inputField.addEventListener("keyup", (event) => {
            if (event.key === "Enter"){
            let inputText:string = (event.target as HTMLInputElement).value;
            taskName = inputText;

            (event.target as HTMLInputElement).value = "";
      
          console.log(`taskdefinition: ${inputText}`);
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
        comment=inputComment;
        (event.target as HTMLInputElement).value = "";
  
      console.log(`comment:${inputComment}`);
}});
// hier id, da 2 input elemente vorhanden sind und nicht beide mit der gleichen klasse getrennt von einander funktionieren

let button: HTMLButtonElement = document.querySelector('.createtask') as HTMLButtonElement;

button.addEventListener('click', function(){
  let nameSelect: HTMLSelectElement = document.getElementById("select") as HTMLSelectElement;
  let selectedName: string|null = nameSelect.options[nameSelect.selectedIndex].textContent;
  let date: string = (<HTMLInputElement>document.querySelector("input[type='date']")).value;

  console.log(selectedName, taskName, date, comment);
});
let trash:HTMLLIElement= document.getElementById('trash') as HTMLLIElement;
trash.addEventListener('click', function(){
  console.clear()
})

let garbage1=document.querySelector('.garbage1');
// // Keine Ahnung was für ein Typ :/
garbage1.addEventListener('click', function(){
      let deleteTask = document.querySelector('.task1');
      deleteTask.remove();
      console.log('you deleted task 1');
})
let garbage2=document.querySelector('.garbage2');
garbage2.addEventListener('click', function(){
      let deleteTask = document.querySelector('.task2');
      deleteTask.remove();
      console.log('you deleted task 2');
    })
    let garbage3=document.querySelector('.garbage3');
    garbage3.addEventListener('click', function(){
      let deleteTask = document.querySelector('.task3');
      deleteTask.remove();
      console.log('you deleted task 3');
})
// is possibly null :/
// musste ich leider so machen, da ich nicht wusste wie ich sonst den Zugriff auf jeden einzelnen Mülleimer und Zeile hätte

// Formatierung ging leider nicht schöner :/
// Rahmen ist irgendwie kaputt


}
//Speicherung der Eingabe in Variablen
// Erstellen von p oder span bei Enter und Erstellen Button
// child appenden
