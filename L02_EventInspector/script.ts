window.addEventListener('load', handleLoad);
function handleLoad() {
  document.addEventListener('mousemove', setInfoBox);
  document.addEventListener('click', logInfo);
  document.addEventListener('keyup', logInfo);
};
// function handleload ist nur der handler, der den events zuhört und die funktion ausführt

function setInfoBox(_event: MouseEvent) {

  let span: HTMLElement = <HTMLElement>document.querySelector('span');
  if (!span) {
    span = document.createElement('span') as HTMLSpanElement;
  }
  let offsetX = _event.offsetX + 10;
  let offsetY = _event.offsetY + 10;
  let target = _event.target;

  span.innerHTML = "Mouse position: (" + offsetX + "," + offsetY + ")"+ target;
  document.body.appendChild(span);
  span.classList.add('mouseposition');
  span.style.position = 'absolute';
  span.style.top = `${offsetY}px`;
  span.style.left = `${offsetX}px`;

}


function logInfo(_event: Event) {

  console.log("Target:", _event.target);
  console.log("Event Type:", _event.type);
  console.log("Current Target:", _event.currentTarget);
  console.log("Event Object:", _event);

};

let button: HTMLButtonElement = <HTMLButtonElement>document.getElementById('button');

function clickButton(_event: Event) {
console.log('hi')
};

button.addEventListener('click', clickButton);

function process(_event:CustomEvent){

  
  document.addEventListener('meinCustomEvent', function(_event) {
    // Handle das CustomEvent hier
  });


  console.log(CustomEvent)
}


