/*
Aufgabe: <L04_Aufgabenliste>
Name: <Dominik Putz>
Matrikel: <272244>
Datum: <15.04.2023>
Quellen: <->
*/

namespace organizer {

  window.addEventListener('load', handleload);

  function handleload(_event: Event):void{
    let newTask:HTMLFieldSetElement=<HTMLFieldSetElement>document.getElementById('taskcreation');
    newTask.addEventListener('change', handleChange);
  }
  function handleChange(_event:Event):void{
    console.log('huhu')
  }

  function createDropdownMenu(taskElement: HTMLElement, progressBar: HTMLProgressElement) { //Parameter wichtig für Funktionsaufruf
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

    dropdown.addEventListener('change', function () {
      let selectedStatus = (this as HTMLSelectElement).value; //Speichert gewählte Option von Select Element
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
    });

    return dropdown;
    // Gibt den Wert des Select Elementes zurück

  };
  // Funktion zum Berechnen der Differenz zwischen zwei Daten in Tagen
  // Einfache Anweisung wie die Funktion arbeiten soll
  function dateDifferenceInDays(date1: Date, date2: Date): number {
    let oneDay: number = 24 * 60 * 60 * 1000; // Stunden * Minuten * Sekunden * Millisekunden, Für die Umrechnung von Millisekunden in Tagen
    let diffDays: number = Math.round((date2.getTime() - date1.getTime()) / oneDay); //
    return diffDays; //gibt die differenz ziwschen dem gewählten und dem aktuellen Datum zurück
  }

  // Funktion zum Festlegen der Textfarbe basierend auf dem Fälligkeitsdatum, Aufruf und Ausführen der Funktion das erst Mal in Zeile 141
  function setTaskTextColor(dueDate: Date): string {
    let currentDate = new Date(); //aktuelles datum
    let daysDifference = dateDifferenceInDays(currentDate, dueDate); //ruft die Funktion auf und speichert das Ergebnis
// Parameter sind aktuelles und gewähltes Datum
    if (daysDifference >= 3) {
      return 'green';
    } else if (daysDifference >= 1 && daysDifference <= 2) {
      return 'yellow';
    } else {
      return 'red';
    }
  } //Bedingungen für die unteschiedlichen Farben, direktes styling im Code möglich

  let todos = document.querySelector(".todo") as HTMLDivElement;


  let name: HTMLSelectElement = document.querySelector('select') as HTMLSelectElement;
  name.addEventListener('change', function selectname() {
    let selectedName: string | null = name.options[name.selectedIndex].textContent; //Gewählte Option wird selectedName gespeichert
    console.log("you choosed: " + selectedName);
  });

  let taskName: string;
  let comment: string;
  //global, werden später benötigt

  let inputField: HTMLInputElement = document.querySelector("input[type='text']") as HTMLInputElement;

  inputField.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      let inputText: string = (event.target as HTMLInputElement).value;
      taskName = inputText;

      (event.target as HTMLInputElement).value = "";

      console.log(`taskdefinition: ${inputText}`);
    }
  });

  let date: HTMLInputElement = document.querySelector("input[type='date']") as HTMLInputElement;
  date.addEventListener('change', (event) => {
    let choosedDate: string = (event.target as HTMLInputElement).value;
    console.log(`you set the deadline: ${choosedDate}`);
  });

  let commentField: HTMLInputElement = document.getElementById('comment') as HTMLInputElement; // Zugriff auf Input-Feld Element

  commentField.addEventListener("keyup", (event) => { // Hinzufügen des Eventlisteners für "keyup" - Ereignis
    if (event.key === "Enter") {
      let inputComment: string = (event.target as HTMLInputElement).value; // Zugriff auf den eingegebenen Text im Input-Feld
      comment = inputComment;
      (event.target as HTMLInputElement).value = "";

      console.log(`comment:${inputComment}`);
    };
  });
  // hier id, da 2 input elemente vorhanden sind und nicht beide mit der gleichen klasse getrennt von einander funktionieren

  let button: HTMLButtonElement = document.querySelector('.createtask') as HTMLButtonElement;

  let nameSelect: HTMLSelectElement = document.getElementById("select") as HTMLSelectElement;

  let dateInput: HTMLInputElement = document.querySelector("input[type='date']") as HTMLInputElement;

  button.addEventListener('click', function createTask() {

    if (name.value !== "" && inputField.value != "" && date.value !== "" && commentField.value != "") {

      // Variablen zum Speichern der ausgewählten Werte
      let selectedName: string | null = nameSelect.options[nameSelect.selectedIndex].textContent;
      let inputText: string = inputField.value;
      let inputDate: string = dateInput.value;


      let dueDate = new Date(inputDate);

      let newtask: HTMLFieldSetElement = document.createElement('fieldset');
      newtask.classList.add('task');

      let nameSpan: HTMLSpanElement = document.createElement('span');
      nameSpan.textContent = selectedName;
      nameSpan.style.color = setTaskTextColor(dueDate)
      newtask.appendChild(nameSpan);
      nameSelect.value = '';

      let taskSpan: HTMLSpanElement = document.createElement('span');
      taskSpan.textContent = inputText;
      taskSpan.style.color = setTaskTextColor(dueDate)
      newtask.appendChild(taskSpan);
      inputField.value = "";

      let dateSpan: HTMLSpanElement = document.createElement('span');
      dateSpan.textContent = inputDate;
      dateSpan.style.color = setTaskTextColor(dueDate)
      newtask.appendChild(dateSpan);
      dateInput.value = "";

      let commentSpan: HTMLSpanElement = document.createElement('span');
      commentSpan.classList.add('comment');
      commentSpan.textContent = commentField.value;
      commentSpan.style.color = setTaskTextColor(dueDate)
      newtask.appendChild(commentSpan);
      commentField.value = "";

      let progressBar = document.createElement('progress');
      progressBar.max = 100;
      progressBar.value = 0; // Standardwert für "Nicht angefangen"

      // if(progressBar.value==0){
      //   // progressBar.style.backgroundColor='white'
      //   progressBar.classList.add('red')
      // }
      // else if(progressBar.value==50){
      //   // progressBar.style.backgroundColor='orange'
      //   progressBar.classList.add('orange')
      // }
      // else(progressBar.value==100);{
      //   // progressBar.style.backgroundColor='green'
      //   progressBar.classList.add('green')
      // }

      progressBar.style.height = '10px';
      progressBar.style.marginTop='25px';
      progressBar.style.marginRight='10px';
      progressBar.style.backgroundColor='white';
      // style color fubnktioniert nicht :/
      newtask.appendChild(progressBar);
      // Hinzufügen des Dropdown-Menüs zum neuen Aufgaben-Element
      let dropdownMenu = createDropdownMenu(newtask, progressBar);
      newtask.appendChild(dropdownMenu);

      let trash: HTMLLIElement = document.createElement('i') as HTMLLIElement;
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
  // Bis hier wird alles ausgeführt ab klick auf den Erstellen Button in Zeile 126

  let garbage: HTMLLIElement = document.getElementById('trash') as HTMLLIElement;
  garbage.addEventListener('click', function DeleteInput() {

    nameSelect.value = "";
    inputField.value = "";
    dateInput.value = "";
    commentField.value = "";


  });
  // löscht Eingabe

  let garbage1: HTMLLIElement = document.querySelector('.garbage1')!;
  garbage1.addEventListener('click', function () {
    let deleteTask = document.querySelector('.task1');
    deleteTask?.remove();
    console.log('you deleted task 1');
  });

  let garbage2: HTMLLIElement = document.querySelector('.garbage2')!;
  garbage2.addEventListener('click', function () {
    let deleteTask = document.querySelector('.task2');
    deleteTask?.remove();
    console.log('you deleted task 2');

  });

  let garbage3: HTMLLIElement = document.querySelector('.garbage3')!;
  garbage3.addEventListener('click', function () {
    let deleteTask = document.querySelector('.task3');
    deleteTask?.remove();  // Frage- und Ausrufezeichen um Fehler possibly null zu beheben
    console.log('you deleted task 3');

  });
  // Löschen statische Aufgaben

};

// Rahmen ist irgendwie kaputt :/
// Datum umdrehen?
// Aufgabe kann nur gelöscht werden, wenn diese erledigt ist oder es kommt alert wenn nicht erledigte aufgabe gelöscht wird oder nachfrage diese wirklich löschen?
// ProgressBar Farben ändern?