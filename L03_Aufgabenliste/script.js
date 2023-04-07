"use strict";
/*
Aufgabe: <L03_Aufgabenliste>
Name: <Dominik Putz>
Matrikel: <272244>
Datum: <07.04.2023>
Quellen: <->
*/
var organizer;
(function (organizer) {
    let name = document.querySelector('select');
    name.addEventListener('change', function () {
        let selectedName = name.options[name.selectedIndex].textContent;
        console.log("you choosed: " + selectedName);
    });
    // possibly null :/
    let taskName;
    let comment;
    let inputField = document.querySelector("input[type='text']");
    inputField.addEventListener("keyup", (event) => {
        if (event.key === "Enter") {
            let inputText = event.target.value;
            taskName = inputText;
            event.target.value = "";
            console.log(`taskdefinition: ${inputText}`);
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
            comment = inputComment;
            event.target.value = "";
            console.log(`comment:${inputComment}`);
        }
    });
    // hier id, da 2 input elemente vorhanden sind und nicht beide mit der gleichen klasse getrennt von einander funktionieren
    let button = document.querySelector('.createtask');
    button.addEventListener('click', function () {
        let nameSelect = document.getElementById("select");
        let selectedName = nameSelect.options[nameSelect.selectedIndex].textContent;
        let date = document.querySelector("input[type='date']").value;
        console.log(selectedName, taskName, date, comment);
    });
    let trash = document.getElementById('trash');
    trash.addEventListener('click', function () {
        console.clear();
    });
    let garbage1 = document.querySelector('.garbage1');
    // // Keine Ahnung was für ein Typ :/
    garbage1.addEventListener('click', function () {
        let deleteTask = document.querySelector('.task1');
        deleteTask.remove();
        console.log('you deleted task 1');
    });
    let garbage2 = document.querySelector('.garbage2');
    garbage2.addEventListener('click', function () {
        let deleteTask = document.querySelector('.task2');
        deleteTask.remove();
        console.log('you deleted task 2');
    });
    let garbage3 = document.querySelector('.garbage3');
    garbage3.addEventListener('click', function () {
        let deleteTask = document.querySelector('.task3');
        deleteTask.remove();
        console.log('you deleted task 3');
    });
    // is possibly null :/
    // musste ich leider so machen, da ich nicht wusste wie ich sonst den Zugriff auf jeden einzelnen Mülleimer und Zeile hätte
    // Formatierung ging leider nicht schöner :/
    // Rahmen ist irgendwie kaputt
})(organizer || (organizer = {}));
//Speicherung der Eingabe in Variablen
// Erstellen von p oder span bei Enter und Erstellen Button
// child appenden
//# sourceMappingURL=script.js.map