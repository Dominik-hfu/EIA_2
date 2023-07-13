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
    let isDay = true;
    let started = false;
    console.log(started);
    function handleload(_event) {
        EisDealer.crc2 = canvas.getContext("2d");
        drawStore();
        createStartButton();
        back = EisDealer.crc2.getImageData(0, 0, canvas.width, canvas.height);
    }
    ;
    // Array muss deklariert aber kann auch leer sein, da Daten in json sind
    let iceCream = [
        {
            type: 1,
            container: "waffle",
            scoops: 3,
            variation: ["amarena, banana, pistazie"],
            sauce: "vanille",
            topping: "coffeepowder",
            cream: false // Attribute von Elementen
        },
        {
            type: 2,
            container: "cup",
            scoops: 2,
            variation: ["coffee, banana"],
            sauce: "chocolate",
            topping: "krokant",
            cream: true
        },
        {
            type: 3,
            container: "cup",
            scoops: 1,
            variation: ["pistazie"],
            sauce: "liqueur",
            topping: "marshamllows",
            cream: true
        },
    ];
    // for (let i = 0; i < iceCream.length; i++) {
    //     switch (iceCream[i].type) {
    //       case 1:
    //         console.log("Type 1: Waffle");
    //         // Weitere Aktionen für Typ 1 hier einfügen
    //         break;
    //       case 2:
    //         console.log("Type 2: Cup");
    //         // Weitere Aktionen für Typ 2 hier einfügen
    //         break;
    //       case 3:
    //         console.log("Type 3: Cup");
    //         // Weitere Aktionen für Typ 3 hier einfügen
    //         break;
    //       default:
    //         console.log("Unbekannter Typ");
    //         // Aktionen für unbekannten Typ hier einfügen
    //     }
    //   }
    //Hier switch case die überprüft welches eis
    // switch (type {
    //     case 'not-started':
    //       progressBar.value = 0;
    //       break;
    //     case 'in-progress':
    //       progressBar.value = 50;
    //       break;
    //     case 'completed':
    //       progressBar.value = 100;
    //       break;
    //   }
    function createStartButton() {
        button = document.createElement("button");
        button.textContent = "Start Day";
        button.addEventListener("click", () => {
            day();
        });
        document.body.appendChild(button);
    }
    let amarena;
    let banana;
    let pistazie;
    let coffee;
    let vanilla;
    let chocolate;
    let caramel;
    let liqueur;
    let krokant;
    let streusel;
    let coffeePowder;
    let marshmallow;
    let cup;
    let waffle;
    let waffleFont = document.createElement("span");
    let cream;
    let creamFont = document.createElement("span");
    function night() {
        // started=true;
        console.log("jetzt ist nacht");
        EisDealer.crc2.beginPath();
        EisDealer.crc2.fillStyle = "black";
        EisDealer.crc2.fillRect(0, 0, canvas.width, canvas.height);
        EisDealer.crc2.fill();
        EisDealer.crc2.closePath();
        EisDealer.crc2.beginPath();
        EisDealer.crc2.moveTo(25, 100);
        EisDealer.crc2.lineTo(25, 700);
        EisDealer.crc2.lineTo(975, 700);
        EisDealer.crc2.lineTo(975, 100);
        EisDealer.crc2.closePath();
        EisDealer.crc2.fillStyle = "grey";
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
        amarena.remove();
        banana.remove();
        pistazie.remove();
        coffee.remove();
        vanilla.remove();
        chocolate.remove();
        caramel.remove();
        liqueur.remove();
        krokant.remove();
        streusel.remove();
        coffeePowder.remove();
        marshmallow.remove();
        cup.remove();
        waffle.remove();
        waffleFont.remove();
        cream.remove();
        creamFont.remove();
    }
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
    function drawStore() {
        console.log("jetzt ist tag");
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
    }
    function closeStore() {
        //imageData=black
        console.log("Store wurde geschlossen");
        isDay = false;
        console.log(isDay);
        console.log(started);
        closeButton.remove();
        document.body.appendChild(button);
        EisDealer.cashEnd = document.createElement("p");
        EisDealer.cashEnd.classList.add("cash");
        EisDealer.cash?.remove();
        // cash.textContent="100€";
        document.body.appendChild(EisDealer.cashEnd);
        EisDealer.cashEnd.textContent = "";
        EisDealer.cash.textContent = "";
        updateCash("0€");
        console.log(EisDealer.cash.textContent);
        // night();
    }
    ;
    function updateCash(amount) {
        EisDealer.cash.textContent = amount;
    }
    EisDealer.updateCash = updateCash;
    //Ab 5mal zahlen werden überschrieben
    function day() {
        drawStore();
        started = true;
        isDay = true;
        console.log(isDay);
        console.log(started);
        let dealer = new EisDealer.Eisdealer(new EisDealer.Vector(400, 100)); //Vector unnötig hier?
        dealer.draw();
        console.log("Ich wurde geklickt");
        // let waitingCustomer= new WaitingCustomer(new Vector(800,600),new Vector(0.05,0.05));
        // waitingCustomer.drawSelf();
        // waitingCustomer.move(0.05);
        // console.log("HALLOICHWILLEIS")
        // console.log(waitingCustomer.position)
        let orderingCustomer = new EisDealer.OrderingCustomer(new EisDealer.Vector(800, 600), new EisDealer.Vector(0.01, 0.01));
        orderingCustomer.drawSelf();
        orderingCustomer.order();
        for (let i = 0; i < 2; i++) {
            let eatingCustomer = new EisDealer.EatingCustomer(new EisDealer.Vector(800, 600), new EisDealer.Vector(0.01, 0.01));
            if (i < 2) {
                eatingCustomer.drawSelf();
                eatingCustomer.eat();
            }
        }
        let waitingCustomer = new EisDealer.WaitingCustomer(new EisDealer.Vector(200, 400), new EisDealer.Vector(0.5, 0.5));
        waitingCustomer.move(0.5);
        waitingCustomer.drawSelf();
        console.log(waitingCustomer.position);
        let cashRegister = document.createElement("p");
        cashRegister.textContent = "Kasse";
        EisDealer.cashEnd?.remove();
        document.body.appendChild(cashRegister);
        console.log(cashRegister); //Wort Kasse
        EisDealer.cash = document.createElement("p");
        EisDealer.cash.textContent = "";
        EisDealer.cash.textContent = "100€";
        EisDealer.cash.classList.add("cash");
        // updateCash("100€");
        // cash.textContent="100€";
        document.body.appendChild(EisDealer.cash);
        button.remove(); // Kassenbestand
        createCloseStoreButton();
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
        EisDealer.crc2.fillStyle = "hsl(53, 91%, 81%)";
        EisDealer.crc2.fill();
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
        EisDealer.crc2.fillStyle = "white";
        EisDealer.crc2.fill();
        EisDealer.crc2.stroke(); //Sahnedeckel
        amarena = document.createElement("button");
        amarena.classList.add("amarena");
        amarena.textContent = "Amarena";
        document.body.appendChild(amarena);
        amarena.addEventListener("click", () => {
            amarenaIce();
        });
        banana = document.createElement("button");
        banana.classList.add("banana");
        banana.textContent = "Banane";
        document.body.appendChild(banana);
        banana.addEventListener("click", () => {
            bananaIce();
        });
        pistazie = document.createElement("button");
        pistazie.classList.add("pistazie");
        pistazie.textContent = "Pistazie";
        document.body.appendChild(pistazie);
        pistazie.addEventListener("click", () => {
            pistazieIce();
        });
        coffee = document.createElement("button");
        coffee.classList.add("coffee");
        coffee.textContent = "Kaffee";
        document.body.appendChild(coffee);
        coffee.addEventListener("click", () => {
            coffeeIce();
        }); //Eissorten
        vanilla = document.createElement("button");
        vanilla.classList.add("vanilla");
        vanilla.textContent = "Vanille Soße";
        document.body.appendChild(vanilla);
        vanilla.addEventListener("click", () => {
            vanillaSauce();
        });
        chocolate = document.createElement("button");
        chocolate.classList.add("chocolate");
        chocolate.textContent = "Schokoladen Soße";
        document.body.appendChild(chocolate);
        chocolate.addEventListener("click", () => {
            chocolateSauce();
        });
        caramel = document.createElement("button");
        caramel.classList.add("caramel");
        caramel.textContent = "Karamel Soße";
        document.body.appendChild(caramel);
        caramel.addEventListener("click", () => {
            caramelSauce();
        });
        liqueur = document.createElement("button");
        liqueur.classList.add("liqueur");
        liqueur.textContent = "Likör";
        document.body.appendChild(liqueur);
        liqueur.addEventListener("click", () => {
            liqueurSauce();
        }); //Soßen
        krokant = document.createElement("button");
        krokant.classList.add("krokant");
        krokant.textContent = "Krokant";
        document.body.appendChild(krokant);
        krokant.addEventListener("click", () => {
            krokantTopping();
        });
        streusel = document.createElement("button");
        streusel.classList.add("streusel");
        streusel.textContent = "Streusel";
        document.body.appendChild(streusel);
        streusel.addEventListener("click", () => {
            streuselTopping();
        });
        coffeePowder = document.createElement("button");
        coffeePowder.classList.add("coffeePowder");
        coffeePowder.textContent = "Kaffeepulver";
        document.body.appendChild(coffeePowder);
        coffeePowder.addEventListener("click", () => {
            coffeeTopping();
        });
        marshmallow = document.createElement("button");
        marshmallow.classList.add("marshmallow");
        marshmallow.textContent = "Marshmallows";
        document.body.appendChild(marshmallow);
        marshmallow.addEventListener("click", () => {
            marshmallowTopping();
        }); //Toppings
        cup = document.createElement("button");
        cup.classList.add("cup");
        cup.textContent = "Becher";
        document.body.appendChild(cup);
        cup.addEventListener("click", () => {
            iceInCup();
        });
        waffle = document.createElement("button");
        waffle.classList.add("waffle");
        document.body.appendChild(waffle);
        waffle.addEventListener("click", () => {
            iceInWaffle();
        });
        waffleFont.classList.add("waffleFont");
        document.body.appendChild(waffleFont);
        waffleFont.textContent = "Waffel";
        cream = document.createElement("button");
        cream.classList.add("cream");
        document.body.appendChild(cream);
        cream.addEventListener("click", () => {
            iceWithCream();
        });
        creamFont.classList.add("creamFont");
        document.body.appendChild(creamFont);
        creamFont.textContent = "Sahne";
        console.log(creamFont);
    }
    ;
    console.log(started);
    if (!started == true) {
        window.setInterval(() => {
            EisDealer.crc2.putImageData(back, 0, 0);
            console.log("aktualisiert");
            console.log(started);
            if (isDay == true) {
                //   drawStore()
                day();
            }
            else {
                night();
                closeStore();
            }
            let waitingCustomer = new EisDealer.WaitingCustomer(new EisDealer.Vector(200, 400), new EisDealer.Vector(0.5, 0.5));
            waitingCustomer.move(0.5);
            waitingCustomer.drawSelf();
            console.log(waitingCustomer.position);
            let orderingCustomer = new EisDealer.OrderingCustomer(new EisDealer.Vector(200, 400), new EisDealer.Vector(0.5, 0.5));
            orderingCustomer.move(0.5);
            orderingCustomer.drawSelf();
            console.log(orderingCustomer.position);
            let eatingCustomer = new EisDealer.EatingCustomer(new EisDealer.Vector(200, 400), new EisDealer.Vector(0.5, 0.5));
            eatingCustomer.move(0.5);
            eatingCustomer.drawSelf();
            console.log(eatingCustomer.position);
        }, 1000);
    }
    // drawStore();
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
    //Funktion für essprozess
    // function drawChart(canvas, progress) {
    //     const ctx = canvas.getContext("2d");
    //     const chartWidth = canvas.width - 20;
    //     const chartHeight = canvas.height - 20;
    //     const barWidth = chartWidth * progress;
    //     const barHeight = chartHeight * 0.6;
    //     const barX = (chartWidth - barWidth) / 2;
    //     const barY = (chartHeight - barHeight) / 2;
    //     ctx.clearRect(0, 0, canvas.width, canvas.height);
    //     ctx.fillStyle = "#0066cc";
    //     ctx.fillRect(barX, barY, barWidth, barHeight);
    //   }
    //   // Animationsfunktion
    //   function animateChart(canvas, duration) {
    //     const startTime = Date.now();
    //     function update() {
    //       const elapsedTime = Date.now() - startTime;
    //       const progress = Math.min(elapsedTime / duration, 1); // Berechnung des Fortschritts zwischen 0 und 1
    //       drawChart(canvas, progress);
    //       if (progress < 1) {
    //         requestAnimationFrame(update);
    //       }
    //     }
    //     update();
    //   }
    //   // Canvas und Animation starten
    //   const canvas = document.getElementById("chartCanvas");
    //   animateChart(canvas, 10000); 
})(EisDealer || (EisDealer = {}));
//# sourceMappingURL=script.js.map