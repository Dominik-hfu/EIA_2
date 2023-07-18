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
    let button;
    let closeButton;
    let serveButton;
    let eater;
    let waiter = [];
    let orderer;
    let newwaiter;
    let finalorder;
    EisDealer.selectedItems = []; // console.log(started)
    function handleload(_event) {
        EisDealer.crc2 = canvas.getContext("2d");
        drawStore();
        checkStart();
        createStartButton();
        back = EisDealer.crc2.getImageData(0, 0, canvas.width, canvas.height);
    }
    let previousorder;
    let prevSelection;
    function check_order(order, selection) {
        if (eater == undefined) {
            previousorder = order;
            prevSelection = selection;
        }
        else {
            let success;
            if (previousorder.length == prevSelection.length) {
                for (let item of prevSelection) {
                    if (previousorder.includes(item)) {
                        success = true;
                    }
                    else {
                        success = false;
                        previousorder = order;
                        prevSelection = selection;
                        return success;
                    }
                }
                previousorder = order;
                prevSelection = selection;
                return true;
            }
            previousorder = order;
            prevSelection = selection;
            return false;
        }
        return false;
    }
    async function checkStart() {
        let collectionExists = await EisDealer.findCollection('items');
        if (collectionExists == true) {
            console.log("Alles schon erstellt");
        }
        else {
            let create = await EisDealer.createData(EisDealer.createURL, EisDealer.payload);
            console.log(create);
            for (let i = 0; i < 13; i++) {
                let item = EisDealer.items[i];
                let insert = await EisDealer.insertItems('items', item);
                console.log(insert);
            }
        }
    }
    ;
    EisDealer.iceCreamFlavors = ["Amarena", "Kaffee", "Banane", "Pistazie"];
    EisDealer.Toppings = ["Krokant", "Streusel", "Eiswaffel", "Marshmallow"];
    EisDealer.IceCreamSauce = ["Vanillesauce", "Schokosauce", "Karamellsauce", "Likör"];
    EisDealer.container = ["Waffel", "Becher"];
    EisDealer.sahne = ["ja", "nein"];
    function getRandomListItems(_list) {
        // Bestimme zufällig, wie viele Items ausgewählt werden sollen (min 1, max 3)
        let numberOfItems = Math.floor(Math.random() * 3) + 1;
        let chosenItems = [];
        for (let i = 0; i < numberOfItems; i++) {
            // Wähle eine zufällige Eissorte aus dem Array aus
            let randomIndex = Math.floor(Math.random() * 3) + 1;
            // Füge die ausgewählte Eissorte zum Array der ausgewählten Eissorten hinzu
            chosenItems.push(_list[randomIndex]);
        }
        console.log(chosenItems);
        return chosenItems;
    }
    EisDealer.getRandomListItems = getRandomListItems;
    function get1RandomListItem(_list) {
        // Bestimme zufällig, wie viele Items ausgewählt werden sollen (min 1, max 3)
        let chosenItems = [];
        // Wähle eine zufällige Eissorte aus dem Array aus
        let randomIndex = Math.floor(Math.random() * _list.length) + 1;
        // Füge die ausgewählte Eissorte zum Array der ausgewählten Eissorten hinzu
        chosenItems.push(_list[randomIndex - 1]);
        return chosenItems;
    }
    EisDealer.get1RandomListItem = get1RandomListItem;
    function checkSelection(selection, checkarray) {
        for (let item of selection) {
            if (checkarray.includes(item)) {
                window.alert("Du hast schon ein Topping/ eine Sauce/ einen Behälter oder eine kleks Sahne ausgewählt");
                return false;
            }
        }
        return true;
    }
    function checkServing(selection) {
        let selectedorder = {
            container: "",
            topping: "",
            sauce: "",
            cream: "",
            variation: [],
        };
        for (let i = 0; i < selection.length; i++) {
            if (EisDealer.container.includes(selection[i])) {
                selectedorder.container = selection[i];
            }
            else if (EisDealer.Toppings.includes(selection[i])) {
                selectedorder.topping = selection[i];
            }
            else if (EisDealer.IceCreamSauce.includes(selection[i])) {
                selectedorder.sauce = selection[i];
            }
            else if (EisDealer.sahne.includes(selection[i])) {
                selectedorder.cream = selection[i];
            }
            else {
                selectedorder.variation.push(selection[i]);
            }
        }
        return selectedorder;
    }
    EisDealer.checkServing = checkServing;
    function checkIceCream(selection, checkarray) {
        let countIceCream = 0;
        for (let item of selection) {
            if (checkarray.includes(item)) {
                countIceCream += 1;
            }
        }
        if (countIceCream == 3) {
            window.alert("Du hast schon drei Kugeln ausgewählt!!");
            return false;
        }
        return true;
    }
    let chosenIceCreams = getRandomListItems(EisDealer.iceCreamFlavors);
    console.log(chosenIceCreams);
    console.log("Type 1: Waffle");
    console.log("Type 2: Cup");
    console.log("Type 3: Cup");
    console.log("Unbekannter Typ");
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
        // console.log("jetzt ist nacht")
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
    function createCloseStoreButton() {
        closeButton = document.createElement("button");
        closeButton.classList.add("closeButton");
        closeButton.textContent = "Close Store";
        closeButton.addEventListener("click", () => {
            closeStore();
        });
        document.body.appendChild(closeButton);
    }
    //set Timeout für Button Erstellung
    function createServeButton() {
        serveButton = document.createElement("button");
        serveButton.classList.add("serveButton");
        serveButton.textContent = "Serve";
        document.body.appendChild(serveButton);
        serveButton.addEventListener("click", () => {
            serveIce();
        });
    }
    let bill;
    let price;
    let previousSelection = []; // Variable für die vorherige Auswahl
    async function serveIce() {
        let hasIcecream = false;
        let hasContainer = false;
        console.log((EisDealer.selectedItems));
        if (eater == undefined) {
            bill = 0;
        }
        else {
            bill = 0;
            for (let item of previousSelection) {
                if (item !== "Waffel" && item !== "Becher") {
                    if (item == "ja") {
                        let itemprice = EisDealer.findPreis("items", "Sahne");
                        price = await itemprice;
                    }
                    else {
                        let itemprice = EisDealer.findPreis("items", item);
                        price = await itemprice;
                    }
                    if (price !== undefined) {
                        bill = bill + price;
                    }
                }
            }
        }
        previousSelection = EisDealer.selectedItems.slice();
        for (let item of EisDealer.selectedItems) {
            if (EisDealer.iceCreamFlavors.includes(item)) {
                hasIcecream = true;
            }
            if (EisDealer.container.includes(item)) {
                hasContainer = true;
            }
        }
        if (hasIcecream == false || hasContainer == false) {
            window.alert("Du musst mindestens einen Behälter und eine Kugel auswählen");
            return false;
        }
        newwaiter = new EisDealer.WaitingCustomer(new EisDealer.Vector(1000, 750), new EisDealer.Vector(0.1, 0), 1);
        let count = 0;
        let limit = 60;
        let richtigeBestellung = check_order(finalorder, EisDealer.selectedItems);
        if (eater == undefined) {
        }
        let intervalID = setInterval(function () {
            count++;
            EisDealer.crc2.putImageData(back, 0, 0);
            dealer.draw();
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
            EisDealer.crc2.moveTo(646.625, 230); //651.625
            EisDealer.crc2.lineTo(646.625, 215);
            EisDealer.crc2.lineTo(656.625, 215);
            EisDealer.crc2.lineTo(656.625, 230);
            EisDealer.crc2.closePath();
            EisDealer.crc2.fillStyle = "white";
            EisDealer.crc2.fill();
            EisDealer.crc2.stroke(); //Sahnedeckel
            orderer.move(-57);
            waiter[0].move(-12);
            waiter[1].move(-27);
            waiter[2].move(-24);
            newwaiter.move(-65);
            orderer.drawSelf();
            waiter[0].drawSelf();
            waiter[1].drawSelf();
            waiter[2].drawSelfSad();
            newwaiter.drawSelfSad();
            if (eater !== undefined) {
                eater.speed = new EisDealer.Vector(0, 0.1);
                eater.move(60);
            }
            if (eater !== undefined) {
                if (richtigeBestellung == true) {
                    eater.drawSelf();
                }
                else {
                    eater.drawSelfSad();
                }
            }
            if (count == limit - 5) {
                updateCash(bill);
            }
            // console.log(orderingCustomer.position)
            if (count >= limit) {
                if (eater !== undefined) {
                    EisDealer.crc2.clearRect(eater.position.x, eater.position.y, 30, 30);
                }
                eater = new EisDealer.EatingCustomer(orderer.position, orderer.speed, 0);
                // console.log(orderer)
                orderer = new EisDealer.OrderingCustomer(waiter[0].position, new EisDealer.Vector(0.1, 0), 0);
                finalorder = orderer.order();
                eater.eat();
                // console.log(orderer)     
                waiter.splice(0, 1);
                waiter[2] = newwaiter;
                waiter[0].speed = new EisDealer.Vector(0, 0.1);
                waiter[1].speed = new EisDealer.Vector(0, 0.1);
                waiter[2].speed = new EisDealer.Vector(0.1, 0);
                clearInterval(intervalID);
            }
        }, 50);
        return true;
    }
    function drawStore() {
        // console.log("jetzt ist tag")
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
        serveButton.remove();
        closeButton.remove();
        document.body.appendChild(button);
        EisDealer.cashEnd = document.createElement("p");
        EisDealer.cashEnd.classList.add("cash");
        EisDealer.cash?.remove();
        EisDealer.cash.textContent = "100€";
        document.body.appendChild(EisDealer.cashEnd);
        EisDealer.cash.textContent = "";
        updateCash(0);
        // console.log(cash.textContent)
        night();
        let profit = EisDealer.cash - 100;
        EisDealer.crc2.beginPath();
        EisDealer.crc2.moveTo(canvas.width / 2 - 200, canvas.height / 2 - 100);
        EisDealer.crc2.lineTo(canvas.width / 2 + 200, canvas.height / 2 - 100);
        EisDealer.crc2.lineTo(canvas.width / 2 + 200, canvas.height / 2 - 200);
        EisDealer.crc2.lineTo(canvas.width / 2 - 200, canvas.height / 2 - 200);
        EisDealer.crc2.fillStyle = "white";
        EisDealer.crc2.fill();
        EisDealer.crc2.fillText(profit, canvas.height / 2, canvas.width / 2);
        EisDealer.crc2.closePath();
        EisDealer.crc2.lineTo(canvas.width / 2 - 50, canvas.height / 2);
    }
    ;
    let startamount = 100;
    function updateCash(amount) {
        startamount = startamount + amount;
        EisDealer.cash.textContent = startamount.toString() + "€";
        EisDealer.cashEnd.textContent = "0€";
    }
    EisDealer.updateCash = updateCash;
    //Ab 5mal zahlen werden überschrieben
    let dealer;
    function day() {
        drawStore();
        // started=true;
        // isDay=true;
        // console.log(isDay)
        // console.log(started)
        dealer = new EisDealer.Eisdealer(new EisDealer.Vector(475, 220));
        dealer.draw();
        let orderingCustomer = new EisDealer.OrderingCustomer(new EisDealer.Vector(475, 520), new EisDealer.Vector(0.1, 0), 0);
        orderingCustomer.drawSelf();
        finalorder = orderingCustomer.order();
        orderer = orderingCustomer;
        let waitingCustomer = new EisDealer.WaitingCustomer(new EisDealer.Vector(475, 590), new EisDealer.Vector(0, 0.1), 0);
        waitingCustomer.drawSelf();
        // console.log(waitingCustomer.position)
        waiter.push(waitingCustomer);
        let waitingCustomer1 = new EisDealer.WaitingCustomer(new EisDealer.Vector(475, 750), new EisDealer.Vector(0, 0.1), 1);
        waitingCustomer1.drawSelfSad();
        // console.log(waitingCustomer1.position)
        waiter.push(waitingCustomer1);
        let waitingCustomer2 = new EisDealer.WaitingCustomer(new EisDealer.Vector(620, 750), new EisDealer.Vector(0.1, 0), 1);
        waitingCustomer2.drawSelfSad();
        // console.log(waitingCustomer2.position)
        waiter.push(waitingCustomer2);
        let cashRegister = document.createElement("p");
        cashRegister.textContent = "Kasse";
        EisDealer.cashEnd?.remove();
        document.body.appendChild(cashRegister);
        // console.log(cashRegister);//Wort Kasse
        let amount = 100;
        EisDealer.cash = document.createElement("p");
        EisDealer.cash.textContent = "";
        EisDealer.cash.textContent = amount + "€";
        EisDealer.cash.classList.add("cash");
        // updateCash("100€");
        // cash.textContent="100€";
        document.body.appendChild(EisDealer.cash);
        button.remove(); // Kassenbestand
        setTimeout(() => {
            // Hier können Sie den Code platzieren, der nach der Verzögerung von 1 Minute ausgeführt werden soll
            createCloseStoreButton();
            console.log("1 Minute ist vergangen!");
        }, 60000);
        createServeButton();
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
        caramel.textContent = "Karamell Soße";
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
        coffeePowder.textContent = "Eiswaffel";
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
        // console.log(creamFont)
    }
    ;
    drawStore();
    //hier enum oder switch case
    function amarenaIce() {
        let value = checkIceCream(EisDealer.selectedItems, EisDealer.iceCreamFlavors);
        if (value == true) {
            EisDealer.selectedItems.push("Amarena");
        }
        // console.log("1 Kugel Amarena")
        console.log(EisDealer.selectedItems);
    }
    function bananaIce() {
        let value = checkIceCream(EisDealer.selectedItems, EisDealer.iceCreamFlavors);
        if (value == true) {
            EisDealer.selectedItems.push("Banane");
            // console.log("1 Kugel Banane")
            console.log(EisDealer.selectedItems);
        }
    }
    function pistazieIce() {
        let value = checkIceCream(EisDealer.selectedItems, EisDealer.iceCreamFlavors);
        if (value == true) {
            EisDealer.selectedItems.push("Pistazie");
            // console.log("1 Kugel Pistazie")
            console.log(EisDealer.selectedItems);
        }
    }
    function coffeeIce() {
        let value = checkIceCream(EisDealer.selectedItems, EisDealer.iceCreamFlavors);
        if (value == true) {
            EisDealer.selectedItems.push("Kaffee");
            // console.log("1 Kugel Kaffee")
            console.log(EisDealer.selectedItems);
        }
    }
    function vanillaSauce() {
        let value = checkSelection(EisDealer.selectedItems, EisDealer.IceCreamSauce);
        if (value == true) {
            EisDealer.selectedItems.push("Vanillesauce");
        }
        // console.log("1x Vanillesoße")
        console.log(EisDealer.selectedItems);
    }
    function caramelSauce() {
        let value = checkSelection(EisDealer.selectedItems, EisDealer.IceCreamSauce);
        if (value == true) {
            EisDealer.selectedItems.push("Karamellsauce");
            // console.log("1x Karamellsoße")
        }
    }
    function chocolateSauce() {
        let value = checkSelection(EisDealer.selectedItems, EisDealer.IceCreamSauce);
        if (value == true) {
            EisDealer.selectedItems.push("Schokosauce");
            // console.log("1x Schokoladensoße")
            console.log(EisDealer.selectedItems);
        }
    }
    function liqueurSauce() {
        let value = checkSelection(EisDealer.selectedItems, EisDealer.IceCreamSauce);
        if (value == true) {
            EisDealer.selectedItems.push("Likör");
            // console.log("1x Likör")
            console.log(EisDealer.selectedItems);
        }
    }
    function krokantTopping() {
        let value = checkSelection(EisDealer.selectedItems, EisDealer.Toppings);
        if (value == true) {
            EisDealer.selectedItems.push("Krokant");
            // console.log("1x Krokant")
            console.log(EisDealer.selectedItems);
        }
    }
    function streuselTopping() {
        let value = checkSelection(EisDealer.selectedItems, EisDealer.Toppings);
        if (value == true) {
            EisDealer.selectedItems.push("Streusel");
            // console.log("1x Streusel")
            console.log(EisDealer.selectedItems);
        }
    }
    function coffeeTopping() {
        let value = checkSelection(EisDealer.selectedItems, EisDealer.Toppings);
        if (value == true) {
            EisDealer.selectedItems.push("Eiswaffel");
            // console.log("1x Eiswaffel")
            console.log(EisDealer.selectedItems);
        }
    }
    function marshmallowTopping() {
        let value = checkSelection(EisDealer.selectedItems, EisDealer.Toppings);
        if (value == true) {
            EisDealer.selectedItems.push("Marshmallow");
            // console.log("1x Marshmallows")
            console.log(EisDealer.selectedItems);
        }
    }
    function iceInCup() {
        let value = checkSelection(EisDealer.selectedItems, EisDealer.container);
        if (value == true) {
            EisDealer.selectedItems.push("Becher");
            // console.log("1x Eis im Becher")
            console.log(EisDealer.selectedItems);
        }
    }
    function iceInWaffle() {
        let value = checkSelection(EisDealer.selectedItems, EisDealer.container);
        if (value == true) {
            EisDealer.selectedItems.push("Waffel");
            // console.log("1x Eis in der Waffel")
            console.log(EisDealer.selectedItems);
        }
    }
    function iceWithCream() {
        let value = checkSelection(EisDealer.selectedItems, EisDealer.sahne);
        if (value == true) {
            EisDealer.selectedItems.push("ja");
        }
        // console.log("1x Eis mit Sahne")
        console.log(EisDealer.selectedItems);
    }
})(EisDealer || (EisDealer = {}));
//# sourceMappingURL=script.js.map