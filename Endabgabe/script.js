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
    let back;
    // let background:boolean=true;
    // let serve:boolean=false;
    let button;
    let closeButton;
    let isDay;
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
        back = EisDealer.crc2.getImageData(0, 0, canvas.width, canvas.height);
        function drawStore(isDay) {
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
            //     if(isDay==true){
            //         crc2.beginPath();
            //         crc2.moveTo(0,0);
            //         crc2.fillStyle="white"
            //         crc2.fillRect(0,0,canvas.width,canvas.height);
            //         crc2.closePath();
            // }
            // else{
            //     crc2.beginPath();
            //     crc2.moveTo(0,0);
            //     crc2.fillStyle="black"
            //     crc2.fillRect(0,0,canvas.width,canvas.height);
            //     crc2.closePath();
            // }
            //macht den ganzen canvas einfarbig, deswegen ist umriss nicht mehr zu sehen :/ und dealer macht feierabend nach timeout
        }
        function day() {
            isDay = true;
            console.log(isDay);
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
            createCloseStoreButton();
            //set Timeout für Button Erstellung
            function createCloseStoreButton() {
                closeButton = document.createElement("button");
                closeButton.classList.add("closeButton");
                closeButton.textContent = "Close Store";
                closeButton.addEventListener("click", () => {
                    closeStore();
                });
                document.body.appendChild(closeButton);
            }
            function closeStore() {
                //imageData=black
                console.log("Store wurde geschlossen");
                isDay = false;
                console.log(isDay);
                closeButton.remove();
                document.body.appendChild(button);
            }
            ;
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
            let vanilla;
            vanilla = document.createElement("button");
            vanilla.classList.add("vanilla");
            vanilla.textContent = "Vanille Soße";
            document.body.appendChild(vanilla);
            vanilla.addEventListener("click", () => {
                vanillaSauce();
            });
            let chocolate;
            chocolate = document.createElement("button");
            chocolate.classList.add("chocolate");
            chocolate.textContent = "Schokoladen Soße";
            document.body.appendChild(chocolate);
            chocolate.addEventListener("click", () => {
                chocolateSauce();
            });
            let caramel;
            caramel = document.createElement("button");
            caramel.classList.add("caramel");
            caramel.textContent = "Karamel Soße";
            document.body.appendChild(caramel);
            caramel.addEventListener("click", () => {
                caramelSauce();
            });
            let liqueur;
            liqueur = document.createElement("button");
            liqueur.classList.add("liqueur");
            liqueur.textContent = "Likör";
            document.body.appendChild(liqueur);
            liqueur.addEventListener("click", () => {
                liqueurSauce();
            }); //Soßen
            let krokant;
            krokant = document.createElement("button");
            krokant.classList.add("krokant");
            krokant.textContent = "Krokant";
            document.body.appendChild(krokant);
            krokant.addEventListener("click", () => {
                krokantTopping();
            });
            let streusel;
            streusel = document.createElement("button");
            streusel.classList.add("streusel");
            streusel.textContent = "Streusel";
            document.body.appendChild(streusel);
            streusel.addEventListener("click", () => {
                streuselTopping();
            });
            let coffeePowder;
            coffeePowder = document.createElement("button");
            coffeePowder.classList.add("coffeePowder");
            coffeePowder.textContent = "Kaffeepulver";
            document.body.appendChild(coffeePowder);
            coffeePowder.addEventListener("click", () => {
                coffeeTopping();
            });
            let marshmallow;
            marshmallow = document.createElement("button");
            marshmallow.classList.add("marshmallow");
            marshmallow.textContent = "Marshmallows";
            document.body.appendChild(marshmallow);
            marshmallow.addEventListener("click", () => {
                marshmallowTopping();
            }); //Toppings
            let cup;
            cup = document.createElement("button");
            cup.classList.add("cup");
            cup.textContent = "Becher";
            document.body.appendChild(cup);
            cup.addEventListener("click", () => {
                iceInCup();
            });
            let waffle;
            waffle = document.createElement("button");
            waffle.classList.add("waffle");
            document.body.appendChild(waffle);
            waffle.addEventListener("click", () => {
                iceInWaffle();
            });
            let waffleFont = document.createElement("span");
            waffleFont.classList.add("waffleFont");
            document.body.appendChild(waffleFont);
            waffleFont.textContent = "Waffel";
            let cream;
            cream = document.createElement("button");
            cream.classList.add("cream");
            document.body.appendChild(cream);
            cream.addEventListener("click", () => {
                iceWithCream();
            });
            let creamFont = document.createElement("span");
            creamFont.classList.add("creamFont");
            document.body.appendChild(creamFont);
            creamFont.textContent = "Sahne";
            console.log(creamFont);
        }
        ;
        // window.setInterval(() => {
        //     crc2.putImageData(back, 0, 0);
        //     if (isDay) {
        //       drawStore(true)
        //     } else {
        //       drawStore(false)
        //     }},5000)}
        //Intervall einkomentieren für tag nacht funktion
        drawStore(true);
        //hier enum oder switch case
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
        function liqueurSauce() {
            console.log("1x Likör");
        }
        function krokantTopping() {
            console.log("1x Krokant");
        }
        function streuselTopping() {
            console.log("1x Streusel");
        }
        function coffeeTopping() {
            console.log("1x Kaffeepulver");
        }
        function marshmallowTopping() {
            console.log("1x Marshmallows");
        }
        function iceInCup() {
            console.log("1x Eis im Becher");
        }
        function iceInWaffle() {
            console.log("1x Eis in der Waffel");
        }
        function iceWithCream() {
            console.log("1x Eis mit Sahne");
        }
    }
})(EisDealer || (EisDealer = {}));
//# sourceMappingURL=script.js.map