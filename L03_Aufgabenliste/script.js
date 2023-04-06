"use strict";
var organizer;
(function (organizer) {
    let name = document.querySelector('select');
    name.addEventListener('change', function () {
        console.log("you choosed a person");
    });
    // let task: HTMLInputElement=document.querySelector('taskdefinition') as HTMLInputElement;
    // task.addEventListener('keyup', function(){
    //     console.log("you created a new task")
    // })
    let inputField = document.querySelector("input[type='text']"); // Zugriff auf Input-Feld Element
    inputField.addEventListener("keyup", (event) => {
        if (event.key === "Enter") {
            let inputText = event.target.value; // Zugriff auf den eingegebenen Text im Input-Feld
            // (event.target as HTMLInputElement).value = "";
            console.log(`taskdefinition: ${inputText}`); // Konsolenausgabe des eingegebenen Textes
        }
    });
    let date = document.querySelector("input[type='date']");
    date.addEventListener('change', (event) => {
        let choosedDate = event.target.value;
        console.log(`you set the deadline: ${choosedDate}`);
    });
    let commentField = document.getElementById('comment'); // Zugriff auf Input-Feld Element
    commentField.addEventListener("keyup", (event) => {
        if (event.key === "Enter") {
            let inputComment = event.target.value; // Zugriff auf den eingegebenen Text im Input-Feld
            // (event.target as HTMLInputElement).value = "";
            console.log(`comment:${inputComment}`); // Konsolenausgabe des eingegebenen Textes
        }
    });
    // hier id, da 2 input elemente vorhanden sind und nicht beide mit der gleichen klasse getrennt von einander funktionieren
    let button = document.querySelector('.createtask');
    button.addEventListener('click', function () {
        let name = document.getElementById("select").value;
        let date = document.querySelector("input[type='date']").value;
        let inputField = document.getElementById("input").value;
        let commentField = document.getElementById("comment").value;
        console.log(name, inputField, date, commentField);
    });
    // löschen der zeile auskommentiert, da sonst buttonfunktion nicht funktioniert
})(organizer || (organizer = {}));
// Eingabe gewährleisten, Speicherung der Eingabe in Variablen oder consolen Ausgabe
// Erstellen von p oder span bei enter also eventlistener auf felder mit keyboard und klick
// child appenden
// stylen
// To do liste
// Matrikelnummer und mitwirkende etc hier rein schreiben
//# sourceMappingURL=script.js.map