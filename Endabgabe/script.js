"use strict";
/*
Aufgabe: <Endabgabe_Eisdealer>
Name: <Dominik Putz>
Matrikel: <272244>
Datum: <04.07.2023>
Quellen: <->
*/
var EisDealer;
(function (EisDealer) {
    window.addEventListener("load", handleload);
    let canvas = document.querySelector("canvas");
    // let back: ImageData;
    // let background:boolean=true;
    // let serve:boolean=false;
    let button;
    function handleload(_event) {
        EisDealer.crc2 = canvas.getContext("2d");
        function createStartButton() {
            button = document.createElement("button");
            button.textContent = "Start Day";
            button.addEventListener("click", () => {
                day();
            });
            document.body.appendChild(button);
        }
        createStartButton();
        //Funktionen aufrufen()
        // back = crc2.getImageData(0, 0, canvas.width, canvas.height);
        function drawStore() {
            EisDealer.crc2.beginPath();
            EisDealer.crc2.fillStyle = "hsl(160, 2%, 60%)";
            EisDealer.crc2.fillRect(0, 0, canvas.width, canvas.height);
            EisDealer.crc2.fill();
            EisDealer.crc2.closePath();
            EisDealer.crc2.beginPath();
            EisDealer.crc2.moveTo(25, 100);
            EisDealer.crc2.lineTo(25, 700);
            EisDealer.crc2.lineTo(975, 700);
            EisDealer.crc2.lineTo(975, 100);
            EisDealer.crc2.closePath();
            EisDealer.crc2.fillStyle = "hsl(160, 100%, 98%)";
            EisDealer.crc2.fill();
            EisDealer.crc2.stroke(); // Umriss Gebäude
            EisDealer.crc2.beginPath();
            EisDealer.crc2.moveTo(25, 450);
            EisDealer.crc2.lineTo(975, 450);
            EisDealer.crc2.lineTo(975, 300);
            EisDealer.crc2.lineTo(25, 300);
            EisDealer.crc2.closePath();
            EisDealer.crc2.stroke(); //Theke Grundriss
            EisDealer.crc2.beginPath();
            EisDealer.crc2.moveTo(25, 375);
            EisDealer.crc2.lineTo(975, 375); //Mitte Horizontal
            EisDealer.crc2.moveTo(475, 300);
            EisDealer.crc2.lineTo(475, 450); // Mitte Vertikal (Saucen)
            EisDealer.crc2.moveTo(237.5, 300);
            EisDealer.crc2.lineTo(237.5, 450); //Eissorten
            EisDealer.crc2.moveTo(593.75, 300); //Saucen
            EisDealer.crc2.lineTo(593.75, 450);
            EisDealer.crc2.moveTo(712.5, 300); //Toppings
            EisDealer.crc2.lineTo(712.5, 450);
            EisDealer.crc2.moveTo(831.25, 300); //Toppings
            EisDealer.crc2.lineTo(831.25, 450);
            EisDealer.crc2.stroke();
            EisDealer.crc2.closePath();
            EisDealer.crc2.beginPath();
            EisDealer.crc2.moveTo(25, 200);
            EisDealer.crc2.lineTo(225, 200);
            EisDealer.crc2.lineTo(225, 100);
            EisDealer.crc2.stroke();
            EisDealer.crc2.closePath(); //Kasse
            EisDealer.crc2.beginPath();
            EisDealer.crc2.moveTo(450, 700);
            EisDealer.crc2.lineTo(450, 625);
            EisDealer.crc2.lineTo(500, 625);
            EisDealer.crc2.lineTo(500, 700);
            EisDealer.crc2.stroke();
            EisDealer.crc2.closePath(); //Eingang
            EisDealer.crc2.beginPath();
            EisDealer.crc2.moveTo(100, 700);
            EisDealer.crc2.lineTo(100, 625);
            EisDealer.crc2.lineTo(150, 625);
            EisDealer.crc2.lineTo(150, 700);
            EisDealer.crc2.stroke();
            EisDealer.crc2.closePath(); //Ausgang
            EisDealer.crc2.beginPath();
            EisDealer.crc2.moveTo(75, 250);
            EisDealer.crc2.lineTo(75, 300);
            EisDealer.crc2.lineTo(125, 300);
            EisDealer.crc2.lineTo(125, 250);
            EisDealer.crc2.closePath();
            EisDealer.crc2.stroke(); //Eisbecher
            EisDealer.crc2.beginPath();
            EisDealer.crc2.moveTo(110, 250);
            EisDealer.crc2.lineTo(130, 230);
            EisDealer.crc2.stroke();
            EisDealer.crc2.closePath(); //Löffel
            EisDealer.crc2.beginPath();
            EisDealer.crc2.moveTo(150, 230);
            EisDealer.crc2.lineTo(175, 300);
            EisDealer.crc2.lineTo(200, 230);
            EisDealer.crc2.closePath();
            EisDealer.crc2.stroke(); //Waffel
            EisDealer.crc2.beginPath();
            EisDealer.crc2.moveTo(638.125, 300);
            EisDealer.crc2.lineTo(638.125, 230);
            EisDealer.crc2.lineTo(665.125, 230);
            EisDealer.crc2.lineTo(665.125, 300);
            EisDealer.crc2.closePath();
            EisDealer.crc2.stroke(); //Sahne
            EisDealer.crc2.beginPath();
            EisDealer.crc2.moveTo(646.625, 230); //651.625
            EisDealer.crc2.lineTo(646.625, 215);
            EisDealer.crc2.lineTo(656.625, 215);
            EisDealer.crc2.lineTo(656.625, 230);
            EisDealer.crc2.closePath();
            EisDealer.crc2.stroke(); //Sahnedeckel
        }
        function day() {
            let dealer = new EisDealer.Eisdealer(new EisDealer.Vector(400, 100)); //Vector unnötig hier?
            dealer.draw();
            console.log("Ich wurde geklickt");
            let cashRegister = document.createElement("p");
            cashRegister.textContent = "Kasse";
            document.body.appendChild(cashRegister);
            console.log(cashRegister); //Wort Kasse
            let cash = document.createElement("p");
            cash.classList.add("cash");
            cash.textContent = "100€";
            document.body.appendChild(cash);
            button.remove(); // Kassenbestand
            let amarena;
            amarena = document.createElement("button");
            amarena.classList.add("amarena");
            amarena.textContent = "Amarena";
            document.body.appendChild(amarena);
            amarena.addEventListener("click", () => {
                amarenaIce();
            });
            let banana;
            banana = document.createElement("button");
            banana.classList.add("banana");
            banana.textContent = "Banane";
            document.body.appendChild(banana);
            banana.addEventListener("click", () => {
                bananaIce();
            });
            let pistazie;
            pistazie = document.createElement("button");
            pistazie.classList.add("pistazie");
            pistazie.textContent = "Pistazie";
            document.body.appendChild(pistazie);
            pistazie.addEventListener("click", () => {
                pistazieIce();
            });
            let coffee;
            coffee = document.createElement("button");
            coffee.classList.add("coffee");
            coffee.textContent = "Kaffee";
            document.body.appendChild(coffee);
            coffee.addEventListener("click", () => {
                coffeeIce();
            }); //Eissorten
            let pistazie;
            pistazie = document.createElement("button");
            pistazie.classList.add("pistazie");
            pistazie.textContent = "Pistazie";
            document.body.appendChild(pistazie);
            pistazie.addEventListener("click", () => {
                pistazieIce();
            });
            let pistazie;
            pistazie = document.createElement("button");
            pistazie.classList.add("pistazie");
            pistazie.textContent = "Pistazie";
            document.body.appendChild(pistazie);
            pistazie.addEventListener("click", () => {
                pistazieIce();
            });
            let pistazie;
            pistazie = document.createElement("button");
            pistazie.classList.add("pistazie");
            pistazie.textContent = "Pistazie";
            document.body.appendChild(pistazie);
            pistazie.addEventListener("click", () => {
                pistazieIce();
            });
            let pistazie;
            pistazie = document.createElement("button");
            pistazie.classList.add("pistazie");
            pistazie.textContent = "Pistazie";
            document.body.appendChild(pistazie);
            pistazie.addEventListener("click", () => {
                pistazieIce();
            });
        }
        ;
        drawStore();
        function amarenaIce() {
            console.log("1 Kugel Amarena");
        }
        function bananaIce() {
            console.log("1 Kugel Banane");
        }
        function pistazieIce() {
            console.log("1 Kugel Pistazie");
        }
        function coffeeIce() {
            console.log("1 Kugel Kaffee");
        }
        function vanillaSauce() {
            console.log("1x Vanillesoße");
        }
        function caramelSauce() {
            console.log("1x Karamellsoße");
        }
        function chocolateSauce() {
            console.log("1x Schokoladensoße");
        }
        function liqueur() {
            console.log("1x Likör");
        }
    }
    // window.setInterval(() => {
    //     crc2.putImageData(back, 0, 0);
    // }, 100);//alle 100ms wird aktualisiert
})(EisDealer || (EisDealer = {}));
//# sourceMappingURL=script.js.map