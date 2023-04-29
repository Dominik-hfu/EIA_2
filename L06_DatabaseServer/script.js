"use strict";
/*
Aufgabe: <L06_DatabaseServer>
Name: <Dominik Putz>
Matrikel: <272244>
Datum: <28.04.2023>
Quellen: <->
*/
var organizer;
(function (organizer) {
    let taskStatus;
    (function (taskStatus) {
        taskStatus[taskStatus["notcompleted"] = 0] = "notcompleted";
        taskStatus[taskStatus["inprogress"] = 1] = "inprogress";
        taskStatus[taskStatus["done"] = 2] = "done";
    })(taskStatus || (taskStatus = {})); // nummeriert Attribute/ Status
    ;
    // Array muss deklariert aber kann auch leer sein, da Daten in json sind
    let tasks = [
        {
            id: 1,
            name: "Mark",
            taskName: "Küche aufräumen",
            date: "06.04.2023",
            comment: "Spülmaschine ausräumen",
            status: 0 // Attribute von Elementen
        },
        // Aufgaben 1, 2, 3 sind Objekte/Elemente vom interface task
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
            status: 0
        },
    ];
    let URL = "https://webuser.hs-furtwangen.de/~putzdomi/Database/"; // JSON Datei wird über den Server geholt, muss dort aber erst hochgeladen werden
    async function findServerID(collection, taskID) {
        let queryParamsFind = new URLSearchParams({
            command: "find",
            collection,
            data: JSON.stringify({ _id: taskID })
        });
        try {
            let response = await fetch(`${URL}?${queryParamsFind.toString()}`, {
                method: "GET", // Ändere den Inhalt auf dem Server
            });
            if (!response.ok) {
                throw new Error(`Server returned status ${response.status}`);
            }
            let result = await response.json();
            let idByServer = Object.keys(result.data)[0];
            console.log("Data inserted successfully:", result);
            return idByServer;
        }
        catch (error) {
            console.error("Error inserting data:", error);
            return undefined;
        }
    }
    async function deleteData(deletedID, collection) {
        const queryParams = new URLSearchParams({
            command: "delete",
            collection,
            id: deletedID
        });
        try {
            let response = await fetch(`${URL}?${queryParams.toString()}`, {
                method: "GET",
            });
            if (!response.ok) {
                throw new Error(`Server returned status ${response.status}`);
            }
            let result = await response.json();
            // Überprüfen Sie, ob der Löschvorgang erfolgreich war
            if (result && result.deletedCount > 0) {
                return true;
            }
            else {
                return false;
            }
        }
        catch (error) {
            console.error("Error deleting data:", error);
            return false;
        }
    }
    function getTaskById(tasks, id) {
        let task = tasks.find(task => task.id === id);
        console.log(task);
        return tasks.find(task => task.id === id);
    }
    // Asynchrone Funktion, um Daten an den Server zu senden 
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
    async function insertTasks(collection, dataArray) {
        let queryParams = new URLSearchParams({
            command: "insert",
            collection,
            data: JSON.stringify(dataArray)
        });
        let test = `${URL}?${queryParams.toString()}`;
        console.log(test);
        try {
            let response = await fetch(`${URL}?${queryParams.toString()}`, {
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
    // Asynchrone Funktion verändert den Inhalt der collection, mit den Aufgaben
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
    let createURL = "https://webuser.hs-furtwangen.de/~putzdomi/Database/?command=create&collection=tasks";
    let payload = {};
    async function checkStart() {
        let collectionExists = await findCollection('tasks');
        if (collectionExists == true) {
            console.log("Alles schon erstellt");
        }
        else {
            let create = await createData(createURL, payload);
            console.log(create);
            for (let i = 0; i < 3; i++) {
                let task = tasks[i];
                let insert = await insertTasks('tasks', task);
                console.log(insert);
            }
        }
    }
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
    function handleload(_event) {
        // fetchStartzustand();
        checkStart();
        getTaskById(tasks, 1);
        let newTask = document.querySelector(".todo");
        newTask.innerHTML = "";
        tasks.forEach((task, index) => {
            let dateString = task.date.replace(/\./, "-"); // Formatierung 
            let dateArray = dateString.split("-"); // Split in Array
            let formattedDate = `${dateArray[2]}-${dateArray[1]}-${dateArray[0]}`; // Formatieren des Datum im yyyy-mm-dd-Format
            let choosenDate = new Date(formattedDate);
            let taskDiv = document.createElement("div");
            taskDiv.classList.add(`task${index + 1}`);
            let fieldset = document.createElement("fieldset");
            fieldset.classList.add("task");
            let nameSpan = document.createElement("span");
            nameSpan.textContent = task.name;
            nameSpan.style.color = setTaskTextColor(choosenDate);
            fieldset.appendChild(nameSpan);
            let taskSpan = document.createElement("span");
            taskSpan.textContent = task.taskName;
            taskSpan.style.color = setTaskTextColor(choosenDate);
            fieldset.appendChild(taskSpan);
            let dateSpan = document.createElement("span");
            dateSpan.textContent = task.date;
            dateSpan.style.color = setTaskTextColor(choosenDate);
            fieldset.appendChild(dateSpan);
            let commentSpan = document.createElement("span");
            commentSpan.textContent = task.comment;
            commentSpan.style.color = setTaskTextColor(choosenDate);
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
    function setTaskTextColor(choosenDate) {
        let currentDate = new Date(); //aktuelles datum
        let daysDifference = dateDifferenceInDays(currentDate, choosenDate); //ruft die Funktion auf und speichert das Ergebnis
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
    let todos = document.querySelector(".todo");
    let nameSelect = document.getElementById("select");
    let taskField = document.querySelector("input[type='text']");
    let dateInput = document.querySelector("input[type='date']");
    let choosenDate = new Date(dateInput.value);
    let commentField = document.getElementById('comment');
    // Zugriff auf Inputfield-/ Select Elemente/ Variablen zum speichern der gewählten Werte
    let button = document.querySelector('.createtask');
    button.addEventListener('click', createTask);
    async function createTask() {
        if (nameSelect.value !== "" && taskField.value != "" && dateInput.value !== "" && commentField.value != "") {
            let newtask = document.createElement('fieldset');
            newtask.classList.add('task');
            let nameSpan = document.createElement('span');
            nameSpan.textContent = nameSelect.options[nameSelect.selectedIndex].innerText; //nameSpan ist das Element, selectedName ist der Wert
            nameSpan.style.color = setTaskTextColor(choosenDate);
            newtask.appendChild(nameSpan);
            let taskSpan = document.createElement('span');
            taskSpan.textContent = taskField.value;
            taskSpan.style.color = setTaskTextColor(choosenDate);
            newtask.appendChild(taskSpan);
            let dateSpan = document.createElement('span');
            dateSpan.textContent = dateInput.value;
            dateSpan.style.color = setTaskTextColor(choosenDate);
            newtask.appendChild(dateSpan);
            let commentSpan = document.createElement('span');
            commentSpan.classList.add('comment');
            commentSpan.textContent = commentField.value;
            commentSpan.style.color = setTaskTextColor(choosenDate);
            newtask.appendChild(commentSpan);
            let id = addTask(nameSelect.options[nameSelect.selectedIndex].innerText, taskField.value, dateInput.value, commentField.value);
            // wird in array gepusht
            let searchedtest = {
                id: id,
                name: nameSelect.options[nameSelect.selectedIndex].innerText,
                taskName: taskField.value,
                date: dateInput.value,
                comment: commentField.value,
                status: 0
            };
            let newone = await insertTasks('tasks', searchedtest);
            console.log(newone);
            console.log(tasks);
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
            async function Delete() {
                newtask.remove();
                trash.remove();
                tasks = tasks.filter(task => task.id !== id); //filtert alle id´s außer die die gelöscht werden soll und überschreibt das array mit allen gefilterten id´s
                console.log(tasks);
                let serverID = await findServerID("tasks", id);
                console.log(serverID);
                if (serverID != undefined) {
                    let deleted = await deleteData(serverID, "tasks");
                    console.log(deleted);
                }
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
        taskField.value = "";
        dateInput.value = "";
        commentField.value = "";
    }
    ;
    // löscht Eingabe
})(organizer || (organizer = {}));
;
// Payload ??
//# sourceMappingURL=script.js.map