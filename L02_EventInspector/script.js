"use strict";
var Inspectora;
(function (Inspectora) {
    window.addEventListener('load', handleLoad);
    // beim Laden des Windows wiwrd die Funktion handleload ausgeführt. Diese installiert unterschiedliche EventListener auf document, button.
    function handleLoad() {
        document.addEventListener('mousemove', setInfoBox);
        document.addEventListener('click', logInfo);
        document.addEventListener('keyup', logInfo);
        let button = document.getElementById('button');
        button.addEventListener('click', clickButton);
        document.addEventListener('dontclickthebutton', process);
    }
    ;
    // function handleload ist nur der handler, der den events zuhört und die funktion ausführt
    function setInfoBox(_event) {
        let span = document.querySelector('span');
        if (!span) {
            span = document.createElement('span');
        }
        let offsetX = _event.offsetX + 10;
        let offsetY = _event.offsetY + 10;
        let target = _event.target;
        span.innerHTML = "Mouse position: (" + offsetX + "," + offsetY + ")" + target;
        document.body.appendChild(span);
        span.classList.add('mouseposition');
        span.style.position = 'absolute';
        span.style.top = `${offsetY}px`;
        span.style.left = `${offsetX}px`;
    }
    // setInfoBox Funktion erstellt span wenn es noch keinen gibt über die if Bedingung und legt die Position dessen fest. Hängt diesen mit offset an die Maus.
    // Leider funktioniert das wenn über das div gehovert wird nicht einwandfrei :(
    function logInfo(_event) {
        console.log("Target:", _event.target);
        console.log("Event Type:", _event.type);
        console.log("Current Target:", _event.currentTarget);
        console.log("Event Object:", _event);
    }
    ;
    // Funktion logInfo wird durch klicken oder Tastendruck aktiviert und gibt in der Konsole das Ziel, den Typ des Ziels, das aktuelle Ziel und das Objekt aus.
    function clickButton(_event) {
        let button = document.getElementById('button');
        let myevent = new CustomEvent('dontclickthebutton', { bubbles: true });
        button.dispatchEvent(myevent);
    }
    ;
    // Funktion clickButton wir durch click auf den Button ausgeführt. Erstellt Variable button, myevent und damit ein eigenes Event namens dontclickthebutton.
    // Button versendet das dontclickthebutton Event
    function process(_event) {
        console.log('youclickedthebutton');
    }
})(Inspectora || (Inspectora = {}));
// Function process wird durch dontclickthebutton Event ausgefüht und sagt youclickedthebutton in der Konsole.
//# sourceMappingURL=script.js.map