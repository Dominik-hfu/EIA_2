/*
Aufgabe: <L04_Aufgabenliste>
Name: <Dominik Putz>
Matrikel: <272244>
Datum: <15.04.2023>
Quellen: <->
*/

namespace organizer {

  enum taskStatus {
    notcompleted,
    inprogress,
    done
  }// nummeriert Attribute

  interface task {
    id: number;
    name: string;
    taskName: string;
    date: string;
    comment: string;
    status: taskStatus;
  };

  
  
    function addTask(name:string, taskName:string, date:string, comment:string){
      let id:number=tasks[tasks.length-1].id+1;
      tasks.push({id,name,taskName,date,comment,status:0});
      return id;
    };

    function deleteTask(id:number,taskDiv:HTMLDivElement){
      let index=-1;
      for(let i=0; i<tasks.length; i++){
        if(tasks[i].id===id){
          index=i;
          break
        }
      }
      if(index!==-1){
        tasks.splice(index,1)// index= Startwert, 1= Anzahl der Elemente die gelöscht werden sollen (Hover über splice)
      }
      taskDiv.remove();
    };

  window.addEventListener('load', handleload);

  function handleload(_event: Event): void {

    let newTask:HTMLDivElement=<HTMLDivElement>document.querySelector(".todo");
    newTask.innerHTML="";
    tasks.forEach((task,index)=>{
      let dateString = task.date.replace(/\./g, "-"); // Ersetzen Sie die Punkte durch Bindestriche
      let dateArray = dateString.split("-"); // Teilen Sie das Datum in ein Array mit Tag, Monat und Jahr
      let formattedDate = `${dateArray[2]}-${dateArray[1]}-${dateArray[0]}`; // Formatieren Sie das Datum im yyyy-mm-dd-Format
      
      let dueDate = new Date(formattedDate);
      let taskDiv:HTMLDivElement=document.createElement("div");
      taskDiv.classList.add(`task${index+1}`);
      
      let fieldset:HTMLFieldSetElement=document.createElement("fieldset") as HTMLFieldSetElement;
      fieldset.classList.add("task");
      
      let nameSpan:HTMLSpanElement=document.createElement("span") as HTMLSpanElement;
      nameSpan.textContent=task.name;
      nameSpan.style.color=setTaskTextColor(dueDate)
      fieldset.appendChild(nameSpan);
      
      let taskSpan:HTMLSpanElement=document.createElement("span") as HTMLSpanElement;
      taskSpan.textContent=task.taskName;
      taskSpan.style.color=setTaskTextColor(dueDate)
      fieldset.appendChild(taskSpan);
      
      let dateSpan:HTMLSpanElement=document.createElement("span") as HTMLSpanElement;
      dateSpan.textContent=task.date;
      dateSpan.style.color=setTaskTextColor(dueDate)
      fieldset.appendChild(dateSpan);
      
      let commentSpan:HTMLSpanElement=document.createElement("span") as HTMLSpanElement;
      commentSpan.textContent=task.comment;
      commentSpan.style.color=setTaskTextColor(dueDate)
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
      console.log(tasks)
      let trash:HTMLLIElement=document.createElement("i") as HTMLLIElement;
      trash.classList.add("fa-regular", "fa-trash-can", "fa-2x", "garbage1");
      fieldset.appendChild(trash);
      trash.addEventListener("click", () =>{ // Leere Klammer bzw. Formatierung so, damit Parameter der Funktion übergeben werden können 
        deleteTask(task.id,taskDiv);
        console.log(tasks)
      });

      taskDiv.appendChild(fieldset);
      newTask.appendChild(taskDiv);
    });
  }
  // Handler = handleload, ist nur dafür veranwtortlich, die erstellten aufgaben beim geladenen window anzuzeigen  
  function handleChange(_event: Event): void {
    
  };

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

    dropdown.addEventListener('change', getStatus)

    function getStatus() {
      let selectedStatus = (dropdown as HTMLSelectElement).value; //Speichert gewählte Option von Select Element
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
    };

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


  let taskName: string;
  let comment: string;
  //global, werden später benötigt

  let inputField: HTMLInputElement = document.querySelector("input[type='text']") as HTMLInputElement;

  inputField.addEventListener("keyup", taskField) ;
  
  function taskField(_event:KeyboardEvent){
    if (_event.key === "Enter") {
      let inputText: string = (_event.target as HTMLInputElement).value;
      taskName = inputText;

      (_event.target as HTMLInputElement).value = "";
    }
  };

  let date: HTMLInputElement = document.querySelector("input[type='date']") as HTMLInputElement;

  let commentField: HTMLInputElement = document.getElementById('comment') as HTMLInputElement; // Zugriff auf Input-Feld Element

  commentField.addEventListener("keyup", commentInput) 
  
  function commentInput(_event:KeyboardEvent){ // Hinzufügen des Eventlisteners für "keyup" - Ereignis
    if (_event.key === "Enter") {
      let inputComment: string = (_event.target as HTMLInputElement).value; // Zugriff auf den eingegebenen Text im Input-Feld
      comment = inputComment;
      (_event.target as HTMLInputElement).value = "";
    };
  };
  // hier id, da 2 input elemente vorhanden sind und nicht beide mit der gleichen klasse getrennt von einander funktionieren

  let button: HTMLButtonElement = document.querySelector('.createtask') as HTMLButtonElement;

  let nameSelect: HTMLSelectElement = document.getElementById("select") as HTMLSelectElement;

  let dateInput: HTMLInputElement = document.querySelector("input[type='date']") as HTMLInputElement;

  button.addEventListener('click', createTask); 
  
  function createTask(){

    if (name.value !== "" && inputField.value != "" && date.value !== "" && commentField.value != "") {

      // Variablen zum Speichern der ausgewählten Werte
      let selectedName:string| null = null;
        selectedName= nameSelect.options[nameSelect.selectedIndex]?.textContent;
      let inputText: string = inputField.value;
      let inputDate: string = dateInput.value;

      let dueDate = new Date(inputDate);

      let newtask: HTMLFieldSetElement = document.createElement('fieldset');
      newtask.classList.add('task');

      let nameSpan: HTMLSpanElement = document.createElement('span');
      nameSpan.textContent = selectedName;//nameSpan ist das Element, selectedName ist der Wert
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

      let id= addTask(selectedName??"", inputText, inputDate,commentField.value)// selectedName mit ??"", d.h. wenn null, dann macht er einen leeren string
      console.log(tasks)
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
      let taskDiv:HTMLDivElement=document.createElement("div");
      taskDiv.classList.add(`task${id+1}`);
      
      let trash: HTMLLIElement = document.createElement('i') as HTMLLIElement;
      trash.classList.add('fa-regular', 'fa-trash-can', 'fa-2x', 'trash', 'task');
      trash.addEventListener('click', Delete);
      
      function Delete() {
        newtask.remove();
        trash.remove();
        tasks=tasks.filter(task => task.id !== id);//filtert alle id´s außer die die gelöscht werden soll und überschreibt das array mit allen gefilterten id´s
        console.log(tasks)
        
      };
      newtask.appendChild(trash);
      taskDiv.appendChild(newtask);
      todos.prepend(newtask);

    }

    else {

      alert('Bitte füllen Sie alle Felder aus');

    }
  };
  // Bis hier wird alles ausgeführt ab klick auf den Erstellen Button

  let garbage: HTMLLIElement = document.getElementById('trash') as HTMLLIElement;
  garbage.addEventListener('click', DeleteInput);
  
  function DeleteInput() {

    nameSelect.value = "";
    inputField.value = "";
    dateInput.value = "";
    commentField.value = "";


  };
  // löscht Eingabe


};

// Aufgabe kann nur gelöscht werden, wenn diese erledigt ist oder es kommt alert wenn nicht erledigte aufgabe gelöscht wird oder nachfrage diese wirklich löschen?