"use strict";
/*
Aufgabe: <L04_Aufgabenliste>
Name: <Dominik Putz>
Matrikel: <272244>
Datum: <20.04.2023>
Quellen: <->
*/
var organizer;
(function (organizer) {
    let taskStatus;
    (function (taskStatus) {
        taskStatus[taskStatus["notcompleted"] = 0] = "notcompleted";
        taskStatus[taskStatus["inprogress"] = 1] = "inprogress";
        taskStatus[taskStatus["done"] = 2] = "done";
    })(taskStatus || (taskStatus = {})); // nummeriert Attribute
    ;
    let tasks = [
        {
            id: 1,
            name: "Mark",
            taskName: "Küche aufräumen",
            date: "06.04.2023",
            comment: "Spülmaschine ausräumen",
            status: 0 // Attribute von Elementen
        },
        // Aufgaben sind Objekte/Elemente vom interface task
        {
            id: 2,
            name: "Lisa",
            taskName: "Müll rausbringen",
            date: "08.04.2023",
            comment: "Biomüll",
            status: 0
        },
        {
            id: 3,
            name: "Daniel",
            taskName: "Badezimmer putzen",
            date: "07.04.2023",
            comment: "Dusche entkalken",
            status: 1
        },
    ];
    function addTask(name, taskName, date, comment) {
        let id = tasks[tasks.length - 1].id + 1;
        tasks.push({ id, name, taskName, date, comment, status: 0 });
        return id;
    }
    ;
    function deleteTask(id, taskDiv) {
        let index = -1;
        for (let i = 0; i < tasks.length; i++) {
            if (tasks[i].id === id) {
                index = i;
                break;
            }
        }
        if (index !== -1) {
            tasks.splice(index, 1); // index= Startwert, 1= Anzahl der Elemente die gelöscht werden sollen (Hover über splice)
        }
        taskDiv.remove();
    }
    ;
    window.addEventListener('load', handleload);
    function handleload() {
        let newTask = document.querySelector(".todo");
        newTask.innerHTML = ""; // todo div als leeren string darstellen
        tasks.forEach((task, index) => {
            let dateString = task.date.replace(/\./g, "-"); // Formatierung?
            let dateArray = dateString.split("-"); // Datum in ein Array teilen
            let formattedDate = `${dateArray[2]}-${dateArray[1]}-${dateArray[0]}`; // Formatieren des Datum in Tage, Monate und Jahr
            let dueDate = new Date(formattedDate);
            let taskDiv = document.createElement("div");
            taskDiv.classList.add(`task${index + 1}`);
            let fieldset = document.createElement("fieldset");
            fieldset.classList.add("task");
            let nameSpan = document.createElement("span");
            nameSpan.textContent = task.name;
            nameSpan.style.color = setTaskTextColor(dueDate);
            fieldset.appendChild(nameSpan);
            let taskSpan = document.createElement("span");
            taskSpan.textContent = task.taskName;
            taskSpan.style.color = setTaskTextColor(dueDate);
            fieldset.appendChild(taskSpan);
            let dateSpan = document.createElement("span");
            dateSpan.textContent = task.date;
            dateSpan.style.color = setTaskTextColor(dueDate);
            fieldset.appendChild(dateSpan);
            let commentSpan = document.createElement("span");
            commentSpan.textContent = task.comment;
            commentSpan.style.color = setTaskTextColor(dueDate);
            fieldset.appendChild(commentSpan);
            let progressBar = document.createElement('progress');
            progressBar.max = 100;
            progressBar.value = 0; // Standardwert für "Nicht angefangen"
            progressBar.style.height = '10px';
            progressBar.style.marginTop = '25px';
            progressBar.style.marginRight = '10px';
            progressBar.style.backgroundColor = 'white';
            fieldset.appendChild(progressBar);
            let dropdownMenu = createDropdownMenu(fieldset, progressBar);
            fieldset.appendChild(dropdownMenu);
            console.log(tasks);
            let trash = document.createElement("i");
            trash.classList.add("fa-regular", "fa-trash-can", "fa-2x", "garbage1");
            fieldset.appendChild(trash);
            trash.addEventListener("click", () => {
                deleteTask(task.id, taskDiv);
                console.log(tasks);
            });
            taskDiv.appendChild(fieldset);
            newTask.appendChild(taskDiv);
        });
    }
    //Alles Elemente (span, progressbar, dropdown, trash) erstellen
    function createDropdownMenu(taskElement, progressBar) {
        let dropdown = document.createElement('select');
        let optionNotStarted = document.createElement('option');
        optionNotStarted.textContent = 'Nicht angefangen';
        optionNotStarted.value = 'not-started';
        dropdown.appendChild(optionNotStarted);
        let optionInProgress = document.createElement('option');
        optionInProgress.textContent = 'In Bearbeitung';
        optionInProgress.value = 'in-progress';
        dropdown.appendChild(optionInProgress);
        let optionCompleted = document.createElement('option');
        optionCompleted.textContent = 'Erledigt';
        optionCompleted.value = 'completed';
        dropdown.appendChild(optionCompleted);
        //Um Select Element mit Optionen zu erstellen
        dropdown.addEventListener('change', getStatus);
        function getStatus() {
            let selectedStatus = dropdown.value; //Speichert gewählte Option von Select Element
            taskElement.setAttribute('data-status', selectedStatus); // Parameter taskElement bekommt das Attribut Status
            switch (selectedStatus) {
                case 'not-started':
                    progressBar.value = 0;
                    break;
                case 'in-progress':
                    progressBar.value = 50;
                    break;
                case 'completed':
                    progressBar.value = 100;
                    break;
            }
            // 3 Status Varianten können existieren
        }
        ;
        return dropdown;
        // Gibt den Wert des Select Elementes zurück
    }
    ;
    // Funktion zum Berechnen der Differenz zwischen zwei Daten in Tagen
    // Einfache Anweisung wie die Funktion arbeiten soll
    function dateDifferenceInDays(date1, date2) {
        let oneDay = 24 * 60 * 60 * 1000; // Stunden * Minuten * Sekunden * Millisekunden, Für die Umrechnung von Millisekunden in Tagen
        let diffDays = Math.round((date2.getTime() - date1.getTime()) / oneDay); //
        return diffDays; //gibt die differenz ziwschen dem gewählten und dem aktuellen Datum zurück
    }
    // Funktion zum Festlegen der Textfarbe basierend auf dem Fälligkeitsdatum, Aufruf und Ausführen der Funktion das erst Mal in Zeile 141
    function setTaskTextColor(dueDate) {
        let currentDate = new Date(); //aktuelles datum
        let daysDifference = dateDifferenceInDays(currentDate, dueDate); //ruft die Funktion auf und speichert das Ergebnis
        // Parameter sind aktuelles und gewähltes Datum
        if (daysDifference >= 3) {
            return 'green';
        }
        else if (daysDifference >= 1 && daysDifference <= 2) {
            return 'yellow';
        }
        else {
            return 'red';
        }
    } //Bedingungen für die unteschiedlichen Farben, direktes styling im Code möglich
    let todos = document.querySelector(".todo"); // um fieldset newtask dem div appenden zu können
    let name = document.querySelector('select'); // um html select element value auslesen zu können
    let inputField = document.querySelector("input[type='text']");
    inputField.addEventListener("keyup", function () { });
    let date = document.querySelector("input[type='date']");
    let commentField = document.getElementById('comment'); // Zugriff auf Input-Feld Element
    commentField.addEventListener("keyup", function () { });
    let button = document.querySelector('.createtask');
    let nameSelect = document.getElementById("select");
    let dateInput = document.querySelector("input[type='date']");
    //inputfields werden hier abgehört bzw. variablen zugeordnet
    button.addEventListener('click', createTask);
    function createTask() {
        if (name.value !== "" && inputField.value != "" && date.value !== "" && commentField.value != "") {
            let selectedName = null;
            selectedName = nameSelect.options[nameSelect.selectedIndex]?.textContent;
            let inputText = inputField.value;
            let inputDate = dateInput.value;
            let dueDate = new Date(inputDate);
            // Variablen zum Speichern der ausgewählten Werte
            let newtask = document.createElement('fieldset');
            newtask.classList.add('task');
            let nameSpan = document.createElement('span');
            nameSpan.textContent = selectedName; //nameSpan ist das Element, selectedName ist der Wert
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
            let commentSpan = document.createElement('span');
            commentSpan.classList.add('comment');
            commentSpan.textContent = commentField.value;
            commentSpan.style.color = setTaskTextColor(dueDate);
            newtask.appendChild(commentSpan);
            commentField.value = "";
            let id = addTask(selectedName ?? "", inputText, inputDate, commentField.value); // selectedName mit ??"", d.h. wenn null, dann macht er einen leeren string
            console.log(tasks);
            //wird in array gepusht
            let progressBar = document.createElement('progress');
            progressBar.max = 100;
            progressBar.value = 0; // Standardwert für "Nicht angefangen"
            progressBar.style.height = '10px';
            progressBar.style.marginTop = '25px';
            progressBar.style.marginRight = '10px';
            progressBar.style.backgroundColor = 'white';
            newtask.appendChild(progressBar);
            let dropdownMenu = createDropdownMenu(newtask, progressBar);
            newtask.appendChild(dropdownMenu);
            // Hinzufügen der ProgressBar und des Dropdown-Menüs zum neuen Aufgaben-Element
            let taskDiv = document.createElement("div");
            taskDiv.classList.add(`task${id + 1}`);
            let trash = document.createElement('i');
            trash.classList.add('fa-regular', 'fa-trash-can', 'fa-2x', 'trash', 'task');
            trash.addEventListener('click', Delete);
            function Delete() {
                newtask.remove();
                trash.remove();
                tasks = tasks.filter(task => task.id !== id); //filtert alle id´s außer die die gelöscht werden soll und überschreibt das array mit allen gefilterten id´s
                console.log(tasks);
            }
            ;
            newtask.appendChild(trash);
            taskDiv.appendChild(newtask);
            todos.prepend(newtask);
        }
        else {
            alert('Bitte füllen Sie alle Felder aus');
        }
    }
    ;
    // Bis hier wird alles ausgeführt ab klick auf den Erstellen Button
    let garbage = document.getElementById('trash');
    garbage.addEventListener('click', DeleteInput);
    function DeleteInput() {
        nameSelect.value = "";
        inputField.value = "";
        dateInput.value = "";
        commentField.value = "";
    }
    ;
    // löscht Eingabe
})(organizer || (organizer = {}));
;
//# sourceMappingURL=script.js.map