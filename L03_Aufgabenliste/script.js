"use strict";
/*
Aufgabe: <L04_Aufgabenliste>
Name: <Dominik Putz>
Matrikel: <272244>
Datum: <14.04.2023>
Quellen: <->
*/
var organizer;
(function (organizer) {
    // Funktion zum Berechnen der Differenz zwischen zwei Daten in Tagen
    function dateDifferenceInDays(date1, date2) {
        const oneDay = 24 * 60 * 60 * 1000; // Stunden * Minuten * Sekunden * Millisekunden
        const diffDays = Math.round((date2.getTime() - date1.getTime()) / oneDay);
        return diffDays;
    }
    // Funktion zum Festlegen der Textfarbe basierend auf dem Fälligkeitsdatum
    function setTaskTextColor(dueDate) {
        const currentDate = new Date();
        const daysDifference = dateDifferenceInDays(currentDate, dueDate);
        if (daysDifference >= 3) {
            return 'green';
        }
        else if (daysDifference >= 1 && daysDifference <= 2) {
            return 'yellow';
        }
        else {
            return 'red';
        }
    }
    let todos = document.querySelector(".todo");
    let name = document.querySelector('select');
    name.addEventListener('change', function selectname() {
        let selectedName = name.options[name.selectedIndex].textContent;
        console.log("you choosed: " + selectedName);
    });
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
        ;
    });
    // hier id, da 2 input elemente vorhanden sind und nicht beide mit der gleichen klasse getrennt von einander funktionieren
    let button = document.querySelector('.createtask');
    let nameSelect = document.getElementById("select");
    let dateInput = document.querySelector("input[type='date']");
    button.addEventListener('click', function createTask() {
        if (name.value !== "" && inputField.value != "" && date.value !== "" && commentField.value != "") {
            // Variablen zum Speichern der ausgewählten Werte
            let selectedName = nameSelect.options[nameSelect.selectedIndex].textContent;
            let inputText = inputField.value;
            let inputDate = dateInput.value;
            let dueDate = new Date(inputDate);
            let newtask = document.createElement('fieldset');
            newtask.classList.add('task');
            newtask.addEventListener('click', function () {
                let i = true;
                // let j:number=0;
                // for(j=0; j++, j<10;)
                // es muss immer wieder überprüft werden ob der span schon geklickt wurde/ erster klicken anzeigen, zweiter klick ausblenden
                if (i == true) {
                    let window = document.createElement('span');
                    window.classList.add('window');
                    i = false;
                    newtask.appendChild(window);
                    window.appendChild(nameSpan);
                    // Name rutscht weg
                    // If Bedingung lässt zu das nur beim ersten geklickt werden kann
                }
            });
            let nameSpan = document.createElement('span');
            nameSpan.textContent = selectedName;
            nameSpan.style.color = setTaskTextColor(dueDate);
            newtask.appendChild(nameSpan);
            nameSelect.value = '';
            let taskSpan = document.createElement('span');
            taskSpan.textContent = inputText;
            taskSpan.style.color = setTaskTextColor(dueDate);
            newtask.appendChild(taskSpan);
            inputField.value = "";
            let dateSpan = document.createElement('span');
            dateSpan.textContent = inputDate;
            dateSpan.style.color = setTaskTextColor(dueDate);
            newtask.appendChild(dateSpan);
            dateInput.value = "";
            const selectedDate = new Date(dateInput.value);
            const currentDate = new Date();
            const isDateInThePast = selectedDate < currentDate;
            if (selectedDate.valueOf() && dateInput.value && !isDateInThePast) {
                const fieldset = document.createElement('fieldset');
                fieldset.classList.add('timeIsUp');
            }
            // versuch bei abgelaufenem Datum das Fieldset rot zu färben
            let commentSpan = document.createElement('span');
            commentSpan.classList.add('comment');
            commentSpan.textContent = commentField.value;
            commentSpan.style.color = setTaskTextColor(dueDate);
            newtask.appendChild(commentSpan);
            commentField.value = "";
            let trash = document.createElement('i');
            trash.classList.add('fa-regular', 'fa-trash-can', 'fa-2x', 'trash', 'task');
            trash.addEventListener('click', function Delete() {
                newtask.remove();
                trash.remove();
            });
            newtask.appendChild(trash);
            todos.prepend(newtask);
            console.log(selectedName, taskName, date, comment);
        }
        else {
            alert('Bitte füllen Sie alle Felder aus');
        }
    });
    // let trash: HTMLLIElement = document.getElementById('trash') as HTMLLIElement;
    // trash.addEventListener('click', function () {
    //   console.clear()
    // })
    let garbage = document.getElementById('trash');
    garbage.addEventListener('click', function DeleteInput() {
        nameSelect.value = "";
        inputField.value = "";
        dateInput.value = "";
        commentField.value = "";
    });
    let garbage1 = document.querySelector('.garbage1');
    garbage1.addEventListener('click', function () {
        let deleteTask = document.querySelector('.task1');
        deleteTask?.remove();
        console.log('you deleted task 1');
    });
    let garbage2 = document.querySelector('.garbage2');
    garbage2.addEventListener('click', function () {
        let deleteTask = document.querySelector('.task2');
        deleteTask?.remove();
        console.log('you deleted task 2');
    });
    let garbage3 = document.querySelector('.garbage3');
    garbage3.addEventListener('click', function () {
        let deleteTask = document.querySelector('.task3');
        deleteTask?.remove();
        console.log('you deleted task 3');
    });
    // Frage- und Ausrufezeichen um Fehler possibly null zu beheben
})(organizer || (organizer = {}));
;
// Rahmen ist irgendwie kaputt :/
// Datum umdrehen?
// Dropdown mit range input element (status)
// Dropdown mit einem klick auf beim zweiten klick zu (ungerade und gerade wie bei haken todoapp)
// Zeit abgelaufen task wird rot markiert
// Noch 3 Tage Zeit Task grün
// Noch 1 Tag Zeit Task Orange
// Aufgabe kann nur gelöscht werden, wenn diese erledigt ist oder es kommt alert wenn nicht erledigte aufgabe gelöscht wird oder nachfrage diese wirklich löschen?
//# sourceMappingURL=script.js.map