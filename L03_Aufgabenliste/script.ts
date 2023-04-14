/*
Aufgabe: <L04_Aufgabenliste>
Name: <Dominik Putz>
Matrikel: <272244>
Datum: <14.04.2023>
Quellen: <->
*/

namespace organizer {

  let todos = document.querySelector(".todo") as HTMLDivElement;


  let name: HTMLSelectElement = document.querySelector('select') as HTMLSelectElement;
  name.addEventListener('change', function selectname() {
    let selectedName: string | null = name.options[name.selectedIndex].textContent;
    console.log("you choosed: " + selectedName);
  });

  let taskName: string;
  let comment: string;

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
    
    if (name.value !== ""&& inputField.value != ""&& date.value !== ""&& commentField.value != "") {
      
      // Variablen zum Speichern der ausgewählten Werte
      let selectedName: string | null = nameSelect.options[nameSelect.selectedIndex].textContent;
      let inputText: string = inputField.value;
      let inputDate: string = dateInput.value;
      
      let newtask: HTMLFieldSetElement = document.createElement('fieldset');
      newtask.classList.add('task');
      newtask.addEventListener('click', function () {
        let i:boolean=true;
        // let j:number=0;
        // for(j=0; j++, j<10;)
        // es muss immer wieder überprüft werden ob der span schon geklickt wurde/ erster klicken anzeigen, zweiter klick ausblenden
        if(i==true){
        let window: HTMLSpanElement = document.createElement('span') as HTMLSpanElement;
        window.classList.add('window');
          i=false;
        newtask.appendChild(window);
        window.appendChild(nameSpan);
        // Name rutscht weg
        // If Bedingung lässt zu das nur beim ersten geklickt werden kann
      }});

      let nameSpan: HTMLSpanElement = document.createElement('span');
      nameSpan.textContent = selectedName;
      newtask.appendChild(nameSpan);
      nameSelect.value = '';

      let taskSpan: HTMLSpanElement = document.createElement('span');
      taskSpan.textContent = inputText;
      newtask.appendChild(taskSpan);
      inputField.value = "";

      let dateSpan: HTMLSpanElement = document.createElement('span');
      dateSpan.textContent = inputDate;
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



      let commentSpan: HTMLSpanElement = document.createElement('span');
      commentSpan.classList.add('comment');
      commentSpan.textContent = commentField.value;
      newtask.appendChild(commentSpan);
      commentField.value = "";


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

  // let trash: HTMLLIElement = document.getElementById('trash') as HTMLLIElement;
  // trash.addEventListener('click', function () {
  //   console.clear()
  // })

  let garbage: HTMLLIElement = document.getElementById('trash') as HTMLLIElement;
  garbage.addEventListener('click', function DeleteInput() {

    nameSelect.value = "";
    inputField.value = "";
    dateInput.value = "";
    commentField.value = "";


  });

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
    deleteTask?.remove();
    console.log('you deleted task 3');

  });
  // Frage- und Ausrufezeichen um Fehler possibly null zu beheben

};
// Rahmen ist irgendwie kaputt :/
// Datum umdrehen?

// Dropdown mit range input element (status)
// Dropdown mit einem klick auf beim zweiten klick zu (ungerade und gerade wie bei haken todoapp)
// Zeit abgelaufen task wird rot markiert
// Noch 3 Tage Zeit Task grün
// Noch 1 Tag Zeit Task Orange
// Aufgabe kann nur gelöscht werden, wenn diese erledigt ist oder es kommt alert wenn nicht erledigte aufgabe gelöscht wird oder nachfrage diese wirklich löschen?
