/*
Aufgabe: <Endabgabe_Eisdealer>
Name: <Dominik Putz>
Matrikel: <272244>
Datum: <04.07.2023>
Quellen: <->
*/

window.addEventListener("load", handleload);
export let crc2: CanvasRenderingContext2D;
let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");

let back: ImageData;

function handleload(_event: Event): void {

    crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

//Funktionen aufrufen()

    back = crc2.getImageData(0, 0, canvas.width, canvas.height);

    
    crc2.fillRect(100,100,100,100);
    crc2.fillStyle="red";
    crc2.fill();
}

// window.setInterval(() => {

//     crc2.putImageData(back, 0, 0);

// }, 100);//alle 100ms wird aktualisiert


