"use strict";
/*
Aufgabe: <Endabgabe_Eisdealer>
Name: <Dominik Putz>
Matrikel: <272244>
Datum: <04.07.2023>
Quellen: <->
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.crc2 = void 0;
window.addEventListener("load", handleload);
let canvas = document.querySelector("canvas");
let back;
function handleload(_event) {
    exports.crc2 = canvas.getContext("2d");
    //Funktionen aufrufen()
    back = exports.crc2.getImageData(0, 0, canvas.width, canvas.height);
    exports.crc2.fillRect(100, 100, 100, 100);
    exports.crc2.fillStyle = "red";
    exports.crc2.fill();
}
// window.setInterval(() => {
//     crc2.putImageData(back, 0, 0);
// }, 100);//alle 100ms wird aktualisiert
//# sourceMappingURL=script.js.map