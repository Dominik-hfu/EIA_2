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
  }// nummeriert Attribute/ Status

  interface task {
    id: number;
    name: string;
    taskName: string;
    date: string;
    comment: string;
    status: taskStatus;
  };
// Array muss deklariert aber kann auch leer sein, da Daten in json sind
  let tasks: task[] = [
    {
      id: 1,
      name: "Mark",
      taskName: "Küche aufräumen",
      date: "06.04.2023",
      comment: "Spülmaschine ausräumen",
      status: 0// Attribute von Elementen
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
      status: 1
    
    },];


  let json_url="https://dominik-hfu.github.io/EIA_2/L05_Aufgabenliste_Client/tasks.json"// JSON Datei wird über Github Pages geholt
  
  async function fetchStartzustand() {
    try {
      let response = await fetch(json_url);// mit await wird auf das Ergebnis von json_url gewartet
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }// wenn das Ergebnis nicht gefunden wird, kommt es zur Fehlerausgabe mit status
      // Serverseitige Fehler
      
      tasks = await response.json();
      console.log("Start")
      console.log(tasks);
      // wenn es funktioniert hat, response wird in json umgewandelt

  
    } catch (error) {
      console.error('Fehler beim Laden der JSON-Datei:', error);
    }// Für Fehler bei der Verlinkung oder Datei
  }
// try catch: versucht Daten zu holen und catcht den Fehler wenn es nicht funktioniert hat

  async function sendTasksToServer():Promise<void> {

    let url:string="https://example.com/test";// springt von hier direkt in catch, da es diesen Server nicht gibt
    try{
        let response= await fetch(url, {
        method:"POST", //POST heißt ändere etwas beim Server
        headers: {
          "Content-Type":"application/json",// headers beschreibt hier, dass es sich um eine json handelt
  
        },
        body:JSON.stringify(tasks), // Inhalt der gewünschten Änderung
  
      })
      if(response.ok){
        console.log("Tasks erfolgreich an den Server gesendet")
        console.log(tasks)
      }
      else
      {console.error("Fehler beim Senden, Server noch nicht vorhanden")
      console.log(tasks)}

    }
    catch{
      console.error('Fehler beim zugriff des Servers, da noch keiner vorhanden ist');
      console.log(tasks)//Fehlerausgabe 
    }
    
  }

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
    fetchStartzustand();
    let newTask:HTMLDivElement=<HTMLDivElement>document.querySelector(".todo");
    newTask.innerHTML="";
    tasks.forEach((task,index)=>{
      let dateString = task.date.replace(/\./, "-"); // Formatierung 
      let dateArray = dateString.split("-"); // Split in Array
      let formattedDate = `${dateArray[2]}-${dateArray[1]}-${dateArray[0]}`; // Formatieren des Datum im yyyy-mm-dd-Format
      
      let choosenDate = new Date(formattedDate);
      let taskDiv:HTMLDivElement=document.createElement("div");
      taskDiv.classList.add(`task${index+1}`);
      
      let fieldset:HTMLFieldSetElement=document.createElement("fieldset") as HTMLFieldSetElement;
      fieldset.classList.add("task");
      
      let nameSpan:HTMLSpanElement=document.createElement("span") as HTMLSpanElement;
      nameSpan.textContent=task.name;
      nameSpan.style.color=setTaskTextColor(choosenDate)
      fieldset.appendChild(nameSpan);
      
      let taskSpan:HTMLSpanElement=document.createElement("span") as HTMLSpanElement;
      taskSpan.textContent=task.taskName;
      taskSpan.style.color=setTaskTextColor(choosenDate)
      fieldset.appendChild(taskSpan);
      
      let dateSpan:HTMLSpanElement=document.createElement("span") as HTMLSpanElement;
      dateSpan.textContent=task.date;
      dateSpan.style.color=setTaskTextColor(choosenDate)
      fieldset.appendChild(dateSpan);
      
      let commentSpan:HTMLSpanElement=document.createElement("span") as HTMLSpanElement;
      commentSpan.textContent=task.comment;
      commentSpan.style.color=setTaskTextColor(choosenDate)
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
  function setTaskTextColor(choosenDate: Date): string {
    let currentDate = new Date(); //aktuelles datum
    let daysDifference = dateDifferenceInDays(currentDate, choosenDate); //ruft die Funktion auf und speichert das Ergebnis
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

  let nameSelect: HTMLSelectElement = document.getElementById("select") as HTMLSelectElement;
  let taskField: HTMLInputElement = document.querySelector("input[type='text']") as HTMLInputElement;
  let dateInput: HTMLInputElement = document.querySelector("input[type='date']") as HTMLInputElement;
  let choosenDate = new Date(dateInput.value);
  let commentField: HTMLInputElement = document.getElementById('comment') as HTMLInputElement;
  // Zugriff auf Inputfield-/ Select Elemente/ Variablen zum speichern der gewählten Werte

  let button: HTMLButtonElement = document.querySelector('.createtask') as HTMLButtonElement;
  button.addEventListener('click', createTask); 
  
  function createTask(){

    if (nameSelect.value !== "" && taskField.value != "" && dateInput.value !== "" && commentField.value != "") {

      let newtask: HTMLFieldSetElement = document.createElement('fieldset');
      newtask.classList.add('task');

      let nameSpan: HTMLSpanElement = document.createElement('span');
      nameSpan.textContent = nameSelect.value;//nameSpan ist das Element, selectedName ist der Wert
      nameSpan.style.color = setTaskTextColor(choosenDate)
      newtask.appendChild(nameSpan);
      nameSelect.value = '';

      let taskSpan: HTMLSpanElement = document.createElement('span');
      taskSpan.textContent = taskField.value;
      taskSpan.style.color = setTaskTextColor(choosenDate)
      newtask.appendChild(taskSpan);
      taskField.value = "";

      let dateSpan: HTMLSpanElement = document.createElement('span');
      dateSpan.textContent = dateInput.value;
      dateSpan.style.color = setTaskTextColor(choosenDate)
      newtask.appendChild(dateSpan);
      dateInput.value = "";

      let commentSpan: HTMLSpanElement = document.createElement('span');
      commentSpan.classList.add('comment');
      commentSpan.textContent = commentField.value;
      commentSpan.style.color = setTaskTextColor(choosenDate)
      newtask.appendChild(commentSpan);
      commentField.value = "";

      let id= addTask(nameSelect.value, taskField.value, dateInput.value,commentField.value);
      // wird in array gepusht
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
    taskField.value = "";
    dateInput.value = "";
    commentField.value = "";


  };
  // löscht Eingabe

  let sendButton:HTMLButtonElement=document.getElementById("send") as HTMLButtonElement;

  let loader = document.getElementById("loader") as HTMLDivElement;

  sendButton.addEventListener("click", ()=>{
    loader.style.display="inline-block";
    sendButton.disabled=true;//button ist gedrückt und nicht klickbar
    sendTasksToServer();
    setTimeout(()=>{
      loader.style.display="none";
      sendButton.disabled=false;// button ist wieder klickbar nach 5s
    },5000)
  });


};
