window.addEventListener('load', handleLoad);
function handleLoad(){
    document.addEventListener('mousemove', setInfoBox); 
    document.addEventListener('click', logInfo);
    document.addEventListener('keyup', logInfo);

    let box = document.querySelector('div0')as HTMLDivElement
    box.addEventListener('click', logInfo);
    box.addEventListener('keyup', logInfo);

    let box_2 = document.querySelector('div1')as HTMLDivElement
    box_2.addEventListener('click', logInfo);
    box_2.addEventListener('keyup', logInfo);

    let main= document.querySelector('body')as HTMLBodyElement
    main.addEventListener('click', logInfo);
    main.addEventListener('keyup', logInfo);

    console.log()
};

let span:HTMLSpanElement | null = null;
function setInfoBox(_event:MouseEvent){
if(!span){
span = document.createElement('span') as HTMLSpanElement;
let offsetX = _event.offsetX;
let offsetY = _event.offsetY;

span.innerHTML=`Mouse position: (${_event.clientX-offsetX}, ${_event.clientY-offsetY}), Event target: ${_event.target}`;
document.body.appendChild(span);
span.classList.add('mouseposition');
span.style.position = 'absolute';
span.style.top = `${_event.clientY}px`;
span.style.left = `${_event.clientX}px`;}

document.addEventListener('mouseleave', () => {
    if (span) {
      document.body.removeChild(span);
      span=null;
      
    }});
// CSS-Stil für das span-Element festlegen

// Eventlistener für das "mousemove"-Ereignis hinzufügen

  // Die Position des Mauszeigers abrufen

  // Das "span"-Element an die Mausposition anpassen

  // Das "span"-Element an den Mauszeiger anhängen
//   body.appendChild(span);

// Zusammenfassend gibt clientX und clientY die Mausposition relativ zum Viewport des Dokuments zurück,
// während offsetX und offsetY die Mausposition relativ zum Auslöser des Events zurückgeben.


// Span element weiter weg von maus da sonst immer span angezeigt wird
// Span mit if bedingung nur einmal anzeigen lassen





};
function logInfo(){

};
let mousePositionSpan: HTMLElement | null = null;

function createSpanWithMousePosition(event: MouseEvent) {
  // Wenn das 'mousePositionSpan'-Element noch nicht vorhanden ist, wird es erstellt und dem Dokument hinzugefügt
  if (!mousePositionSpan) {
    mousePositionSpan = document.createElement('span');
    document.body.appendChild(mousePositionSpan);
  }
  
  const offsetX = event.offsetX;
  const offsetY = event.offsetY;
  
  mousePositionSpan.innerText = `Mouse position: (${event.clientX - offsetX}, ${event.clientY - offsetY}), Event target: ${event.target}`;

  mousePositionSpan.style.position = 'absolute';
  mousePositionSpan.style.top = `${event.clientY}px`;
  mousePositionSpan.style.left = `${event.clientX}px`;
}

// Registriere das 'mousemove'-Event mit der 'createSpanWithMousePosition'-Funktion als Handler
document.addEventListener('mousemove', (event: MouseEvent) => {
  createSpanWithMousePosition(event);

  // Entferne das 'mousePositionSpan'-Element, wenn die Maus das Dokument verlässt
  document.addEventListener('mouseleave', () => {
    if (mousePositionSpan) {
      document.body.removeChild(mousePositionSpan);
      mousePositionSpan = null;
    }
  });
});
