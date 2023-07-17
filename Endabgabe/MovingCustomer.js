"use strict";
var EisDealer;
(function (EisDealer) {
    let MOOD;
    (function (MOOD) {
        MOOD[MOOD["HAPPY"] = 0] = "HAPPY";
        MOOD[MOOD["SAD"] = 1] = "SAD";
    })(MOOD = EisDealer.MOOD || (EisDealer.MOOD = {}));
    class Customer {
        position;
        speed;
        mood;
        constructor(_position, _speed, _mood) {
            this.position = _position;
            this.speed = _speed;
            this.mood = _mood;
        }
    }
    EisDealer.Customer = Customer;
    class WaitingCustomer extends Customer {
        drawSelf() {
            EisDealer.crc2.beginPath();
            EisDealer.crc2.arc(this.position.x, this.position.y, 30, 0, 2 * Math.PI);
            EisDealer.crc2.fillStyle = "hsl(50, 98%, 88%)";
            EisDealer.crc2.fill();
            EisDealer.crc2.stroke();
            EisDealer.crc2.closePath(); //Kopf
            EisDealer.crc2.beginPath();
            EisDealer.crc2.arc(this.position.x - 10, this.position.y - 10, 8, 0, 2 * Math.PI);
            EisDealer.crc2.fillStyle = "black";
            EisDealer.crc2.fill();
            EisDealer.crc2.closePath();
            EisDealer.crc2.beginPath();
            EisDealer.crc2.arc(this.position.x + 10, this.position.y - 10, 8, 0, 2 * Math.PI);
            EisDealer.crc2.fillStyle = "black";
            EisDealer.crc2.fill();
            EisDealer.crc2.closePath(); //Augen
            EisDealer.crc2.beginPath();
            EisDealer.crc2.bezierCurveTo(this.position.x - 10, this.position.y + 5, this.position.x, this.position.y + 10, this.position.x + 10, this.position.y + 5);
            EisDealer.crc2.strokeStyle = "black";
            EisDealer.crc2.stroke();
            EisDealer.crc2.closePath(); //Mund
        }
        drawSelfSad() {
            EisDealer.crc2.beginPath();
            EisDealer.crc2.arc(this.position.x, this.position.y, 30, 0, 2 * Math.PI);
            EisDealer.crc2.fillStyle = "hsl(50, 98%, 88%)";
            EisDealer.crc2.fill();
            EisDealer.crc2.stroke();
            EisDealer.crc2.closePath(); //Kopf
            EisDealer.crc2.beginPath();
            EisDealer.crc2.arc(this.position.x - 10, this.position.y - 10, 8, 0, 2 * Math.PI);
            EisDealer.crc2.fillStyle = "black";
            EisDealer.crc2.fill();
            EisDealer.crc2.closePath();
            EisDealer.crc2.beginPath();
            EisDealer.crc2.arc(this.position.x + 10, this.position.y - 10, 8, 0, 2 * Math.PI);
            EisDealer.crc2.fillStyle = "black";
            EisDealer.crc2.fill();
            EisDealer.crc2.closePath(); //Augen
            EisDealer.crc2.beginPath();
            EisDealer.crc2.bezierCurveTo(this.position.x - 10, this.position.y + 10, this.position.x, this.position.y, this.position.x + 10, this.position.y + 10);
            EisDealer.crc2.strokeStyle = "black";
            EisDealer.crc2.stroke();
            EisDealer.crc2.closePath(); //Mund
        }
        move(_timeslice) {
            let offset = new EisDealer.Vector(this.speed.x, this.speed.y);
            offset.scale(_timeslice);
            this.position.add(offset); //addiert auf position den offset
        }
    }
    EisDealer.WaitingCustomer = WaitingCustomer;
    class OrderingCustomer extends Customer {
        drawSelf() {
            EisDealer.crc2.beginPath();
            EisDealer.crc2.arc(this.position.x, this.position.y, 30, 0, 2 * Math.PI);
            EisDealer.crc2.fillStyle = "hsl(50, 98%, 88%)";
            EisDealer.crc2.fill();
            EisDealer.crc2.stroke();
            EisDealer.crc2.closePath(); //Kopf
            EisDealer.crc2.beginPath();
            EisDealer.crc2.arc(this.position.x - 10, this.position.y - 10, 8, 0, 2 * Math.PI);
            EisDealer.crc2.fillStyle = "black";
            EisDealer.crc2.fill();
            EisDealer.crc2.closePath();
            EisDealer.crc2.beginPath();
            EisDealer.crc2.arc(this.position.x + 10, this.position.y - 10, 8, 0, 2 * Math.PI);
            EisDealer.crc2.fillStyle = "black";
            EisDealer.crc2.fill();
            EisDealer.crc2.closePath(); //Augen
            EisDealer.crc2.beginPath();
            EisDealer.crc2.bezierCurveTo(this.position.x - 10, this.position.y + 5, this.position.x, this.position.y + 10, this.position.x + 10, this.position.y + 5);
            EisDealer.crc2.strokeStyle = "black";
            EisDealer.crc2.stroke();
            EisDealer.crc2.closePath(); //Mund
        }
        move(_timeslice) {
            let offset = new EisDealer.Vector(this.speed.x, this.speed.y);
            offset.scale(_timeslice);
            this.position.add(offset);
        }
        order() {
            let randomIceCreams = EisDealer.getRandomListItems(EisDealer.iceCreamFlavors);
            let randomTopping = EisDealer.get1RandomListItem(EisDealer.Toppings);
            let randomSauce = EisDealer.get1RandomListItem(EisDealer.IceCreamSauce);
            let randomContainer = EisDealer.get1RandomListItem(EisDealer.container);
            let randomSahne = EisDealer.get1RandomListItem(EisDealer.sahne);
            let combinedarray = randomIceCreams.concat(randomContainer);
            console.log(randomContainer);
            console.log(randomSauce);
            console.log(randomTopping);
            console.log(randomSahne);
            let positionx = 590;
            let positiony = 510;
            EisDealer.crc2.beginPath();
            EisDealer.crc2.arc(positionx, positiony, 50, 0, 2 * Math.PI);
            EisDealer.crc2.fillStyle = "white";
            EisDealer.crc2.fill();
            EisDealer.crc2.stroke();
            EisDealer.crc2.closePath(); //Eisbestellung
            EisDealer.crc2.beginPath();
            EisDealer.crc2.arc(positionx - 65, positiony + 10, 10, 0, 2 * Math.PI);
            EisDealer.crc2.fillStyle = "white";
            EisDealer.crc2.fill();
            EisDealer.crc2.stroke();
            EisDealer.crc2.closePath(); //Eisbestellung
            if (randomContainer[0] == "Waffel") {
                EisDealer.crc2.beginPath();
                EisDealer.crc2.moveTo(positionx - 25, positiony - 20);
                EisDealer.crc2.lineTo(positionx, positiony + 50);
                EisDealer.crc2.lineTo(positionx + 25, positiony - 20);
                EisDealer.crc2.closePath();
                EisDealer.crc2.fillStyle = "hsl(53, 91%, 81%)";
                EisDealer.crc2.fill();
                EisDealer.crc2.stroke(); //Waffel 
            }
            else {
                EisDealer.crc2.beginPath();
                EisDealer.crc2.moveTo(positionx - 25, positiony - 15);
                EisDealer.crc2.lineTo(positionx - 25, positiony + 35);
                EisDealer.crc2.lineTo(positionx + 25, positiony + 35);
                EisDealer.crc2.lineTo(positionx + 25, positiony - 15);
                EisDealer.crc2.closePath();
                EisDealer.crc2.fillStyle = "blue";
                EisDealer.crc2.fill();
                EisDealer.crc2.stroke(); //Eisbecher
                EisDealer.crc2.beginPath();
                EisDealer.crc2.moveTo(positionx + 10, positiony - 15);
                EisDealer.crc2.lineTo(positionx + 30, positiony - 35);
                EisDealer.crc2.stroke();
                EisDealer.crc2.closePath(); //Löffel
            }
            if (randomIceCreams.length == 1) {
                switch (randomIceCreams[0]) {
                    case 'Amarena':
                        EisDealer.crc2.beginPath();
                        EisDealer.crc2.arc(positionx, positiony - 30, 15, 0, 2 * Math.PI);
                        EisDealer.crc2.fillStyle = "red";
                        EisDealer.crc2.fill();
                        EisDealer.crc2.closePath();
                        break;
                    case 'Banane':
                        EisDealer.crc2.beginPath();
                        EisDealer.crc2.arc(positionx, positiony - 30, 15, 0, 2 * Math.PI);
                        EisDealer.crc2.fillStyle = "yellow";
                        EisDealer.crc2.fill();
                        EisDealer.crc2.closePath();
                        break;
                    case 'Kaffee':
                        EisDealer.crc2.beginPath();
                        EisDealer.crc2.arc(positionx, positiony - 30, 15, 0, 2 * Math.PI);
                        EisDealer.crc2.fillStyle = "brown";
                        EisDealer.crc2.fill();
                        EisDealer.crc2.closePath();
                        break;
                    case 'Pistazie':
                        EisDealer.crc2.beginPath();
                        EisDealer.crc2.arc(positionx, positiony - 30, 15, 0, 2 * Math.PI);
                        EisDealer.crc2.fillStyle = "green";
                        EisDealer.crc2.fill();
                        EisDealer.crc2.closePath();
                        break;
                }
            }
            else {
                for (let i = 0; i < randomIceCreams.length; i++) {
                    if (i == 0) {
                        switch (randomIceCreams[i]) {
                            case 'Amarena':
                                EisDealer.crc2.beginPath();
                                EisDealer.crc2.arc(positionx - 15, positiony - 30, 15, 0, 2 * Math.PI);
                                EisDealer.crc2.fillStyle = "red";
                                EisDealer.crc2.fill();
                                EisDealer.crc2.closePath();
                                break;
                            case 'Banane':
                                EisDealer.crc2.beginPath();
                                EisDealer.crc2.arc(positionx - 15, positiony - 30, 15, 0, 2 * Math.PI);
                                EisDealer.crc2.fillStyle = "yellow";
                                EisDealer.crc2.fill();
                                EisDealer.crc2.closePath();
                                break;
                            case 'Kaffee':
                                EisDealer.crc2.beginPath();
                                EisDealer.crc2.arc(positionx - 15, positiony - 30, 15, 0, 2 * Math.PI);
                                EisDealer.crc2.fillStyle = "brown";
                                EisDealer.crc2.fill();
                                EisDealer.crc2.closePath();
                                break;
                            case 'Pistazie':
                                EisDealer.crc2.beginPath();
                                EisDealer.crc2.arc(positionx - 15, positiony - 30, 15, 0, 2 * Math.PI);
                                EisDealer.crc2.fillStyle = "green";
                                EisDealer.crc2.fill();
                                EisDealer.crc2.closePath();
                                break;
                        }
                    }
                    else if (i == 1) {
                        switch (randomIceCreams[i]) {
                            case 'Amarena':
                                EisDealer.crc2.beginPath();
                                EisDealer.crc2.arc(positionx + 15, positiony - 30, 15, 0, 2 * Math.PI);
                                EisDealer.crc2.fillStyle = "red";
                                EisDealer.crc2.fill();
                                EisDealer.crc2.closePath();
                                break;
                            case 'Banane':
                                EisDealer.crc2.beginPath();
                                EisDealer.crc2.arc(positionx + 15, positiony - 30, 15, 0, 2 * Math.PI);
                                EisDealer.crc2.fillStyle = "yellow";
                                EisDealer.crc2.fill();
                                EisDealer.crc2.closePath();
                                break;
                            case 'Kaffee':
                                EisDealer.crc2.beginPath();
                                EisDealer.crc2.arc(positionx + 15, positiony - 30, 15, 0, 2 * Math.PI);
                                EisDealer.crc2.fillStyle = "brown";
                                EisDealer.crc2.fill();
                                EisDealer.crc2.closePath();
                                break;
                            case 'Pistazie':
                                EisDealer.crc2.beginPath();
                                EisDealer.crc2.arc(positionx + 15, positiony - 30, 15, 0, 2 * Math.PI);
                                EisDealer.crc2.fillStyle = "green";
                                EisDealer.crc2.fill();
                                EisDealer.crc2.closePath();
                                break;
                        }
                    }
                    else {
                        switch (randomIceCreams[i]) {
                            case 'Amarena':
                                EisDealer.crc2.beginPath();
                                EisDealer.crc2.arc(positionx, positiony - 45, 15, 0, 2 * Math.PI);
                                EisDealer.crc2.fillStyle = "red";
                                EisDealer.crc2.fill();
                                EisDealer.crc2.closePath();
                                break;
                            case 'Banane':
                                EisDealer.crc2.beginPath();
                                EisDealer.crc2.arc(positionx, positiony - 45, 15, 0, 2 * Math.PI);
                                EisDealer.crc2.fillStyle = "yellow";
                                EisDealer.crc2.fill();
                                EisDealer.crc2.closePath();
                                break;
                            case 'Kaffee':
                                EisDealer.crc2.beginPath();
                                EisDealer.crc2.arc(positionx, positiony - 45, 15, 0, 2 * Math.PI);
                                EisDealer.crc2.fillStyle = "brown";
                                EisDealer.crc2.fill();
                                EisDealer.crc2.closePath();
                                break;
                            case 'Pistazie':
                                EisDealer.crc2.beginPath();
                                EisDealer.crc2.arc(positionx, positiony - 45, 15, 0, 2 * Math.PI);
                                EisDealer.crc2.fillStyle = "green";
                                EisDealer.crc2.fill();
                                EisDealer.crc2.closePath();
                                break;
                        }
                    }
                }
            }
            switch (randomSauce[0]) {
                case 'Vanillesauce':
                    EisDealer.crc2.beginPath();
                    EisDealer.crc2.arc(positionx, positiony - 30, 15, 0, 2 * Math.PI);
                    EisDealer.crc2.fillStyle = "red";
                    EisDealer.crc2.fill();
                    EisDealer.crc2.closePath();
                    break;
                case 'Schokosauce':
                    EisDealer.crc2.beginPath();
                    EisDealer.crc2.arc(positionx, positiony - 30, 15, 0, 2 * Math.PI);
                    EisDealer.crc2.fillStyle = "yellow";
                    EisDealer.crc2.fill();
                    EisDealer.crc2.closePath();
                    break;
                case 'Karamellsauce':
                    EisDealer.crc2.beginPath();
                    EisDealer.crc2.arc(positionx, positiony - 30, 15, 0, 2 * Math.PI);
                    EisDealer.crc2.fillStyle = "brown";
                    EisDealer.crc2.fill();
                    EisDealer.crc2.closePath();
                    break;
                case 'Likör':
                    EisDealer.crc2.beginPath();
                    EisDealer.crc2.arc(positionx, positiony - 30, 15, 0, 2 * Math.PI);
                    EisDealer.crc2.fillStyle = "green";
                    EisDealer.crc2.fill();
                    EisDealer.crc2.closePath();
                    break;
            }
            switch (randomTopping[0]) {
                case 'Krokant':
                    EisDealer.crc2.beginPath();
                    EisDealer.crc2.arc(positionx, positiony - 30, 15, 0, 2 * Math.PI);
                    EisDealer.crc2.fillStyle = "red";
                    EisDealer.crc2.fill();
                    EisDealer.crc2.closePath();
                    break;
                case 'Streusel':
                    EisDealer.crc2.beginPath();
                    EisDealer.crc2.arc(positionx, positiony - 30, 15, 0, 2 * Math.PI);
                    EisDealer.crc2.fillStyle = "yellow";
                    EisDealer.crc2.fill();
                    EisDealer.crc2.closePath();
                    break;
                case 'Marshmallow':
                    EisDealer.crc2.beginPath();
                    EisDealer.crc2.arc(positionx, positiony - 30, 15, 0, 2 * Math.PI);
                    EisDealer.crc2.fillStyle = "brown";
                    EisDealer.crc2.fill();
                    EisDealer.crc2.closePath();
                    break;
                case 'Kaffeepulver':
                    EisDealer.crc2.beginPath();
                    EisDealer.crc2.arc(positionx, positiony - 30, 15, 0, 2 * Math.PI);
                    EisDealer.crc2.fillStyle = "green";
                    EisDealer.crc2.fill();
                    EisDealer.crc2.closePath();
                    break;
            }
            if (randomSahne[0] == "ja") {
                EisDealer.crc2.beginPath();
                EisDealer.crc2.arc(positionx, positiony - 30, 15, 0, 2 * Math.PI);
                EisDealer.crc2.fillStyle = "red";
                EisDealer.crc2.fill();
                EisDealer.crc2.closePath();
            }
            return combinedarray;
        }
    }
    EisDealer.OrderingCustomer = OrderingCustomer;
    class EatingCustomer extends Customer {
        drawSelf() {
            EisDealer.crc2.beginPath();
            EisDealer.crc2.arc(this.position.x, this.position.y, 30, 0, 2 * Math.PI);
            EisDealer.crc2.fillStyle = "hsl(50, 98%, 88%)";
            EisDealer.crc2.fill();
            EisDealer.crc2.stroke();
            EisDealer.crc2.closePath(); //Kopf
            EisDealer.crc2.beginPath();
            EisDealer.crc2.arc(this.position.x - 10, this.position.y - 10, 8, 0, 2 * Math.PI);
            EisDealer.crc2.fillStyle = "black";
            EisDealer.crc2.fill();
            EisDealer.crc2.closePath();
            EisDealer.crc2.beginPath();
            EisDealer.crc2.arc(this.position.x + 10, this.position.y - 10, 8, 0, 2 * Math.PI);
            EisDealer.crc2.fillStyle = "black";
            EisDealer.crc2.fill();
            EisDealer.crc2.closePath(); //Augen
            EisDealer.crc2.beginPath();
            EisDealer.crc2.bezierCurveTo(this.position.x - 10, this.position.y + 5, this.position.x, this.position.y + 10, this.position.x + 10, this.position.y + 5);
            EisDealer.crc2.strokeStyle = "black";
            EisDealer.crc2.stroke();
            EisDealer.crc2.closePath(); //Mund
        }
        drawSelfSad() {
            EisDealer.crc2.beginPath();
            EisDealer.crc2.arc(this.position.x, this.position.y, 30, 0, 2 * Math.PI);
            EisDealer.crc2.fillStyle = "hsl(50, 98%, 88%)";
            EisDealer.crc2.fill();
            EisDealer.crc2.stroke();
            EisDealer.crc2.closePath(); //Kopf
            EisDealer.crc2.beginPath();
            EisDealer.crc2.arc(this.position.x - 10, this.position.y - 10, 8, 0, 2 * Math.PI);
            EisDealer.crc2.fillStyle = "black";
            EisDealer.crc2.fill();
            EisDealer.crc2.closePath();
            EisDealer.crc2.beginPath();
            EisDealer.crc2.arc(this.position.x + 10, this.position.y - 10, 8, 0, 2 * Math.PI);
            EisDealer.crc2.fillStyle = "black";
            EisDealer.crc2.fill();
            EisDealer.crc2.closePath(); //Augen
            EisDealer.crc2.beginPath();
            EisDealer.crc2.bezierCurveTo(this.position.x - 10, this.position.y + 10, this.position.x, this.position.y, this.position.x + 10, this.position.y + 10);
            EisDealer.crc2.strokeStyle = "black";
            EisDealer.crc2.stroke();
            EisDealer.crc2.closePath(); //Mund
        }
        move(_timeslice) {
            let offset = new EisDealer.Vector(this.speed.x, this.speed.y);
            offset.scale(_timeslice);
            this.position.add(offset);
        }
        eat() {
            let order = EisDealer.checkServing(EisDealer.selectedItems);
            console.log(order);
            EisDealer.selectedItems = [];
            if (order.container == "Waffel") {
                EisDealer.crc2.beginPath();
                EisDealer.crc2.moveTo(this.position.x + 30, this.position.y + 10);
                EisDealer.crc2.lineTo(this.position.x + 55, this.position.y + 80);
                EisDealer.crc2.lineTo(this.position.x + 80, this.position.y + 10);
                EisDealer.crc2.closePath();
                EisDealer.crc2.fillStyle = "hsl(53, 91%, 81%)";
                EisDealer.crc2.fill();
                EisDealer.crc2.stroke(); //Waffel
            }
            else {
                EisDealer.crc2.beginPath();
                EisDealer.crc2.moveTo(this.position.x + 30, this.position.y + 10);
                EisDealer.crc2.lineTo(this.position.x + 30, this.position.y + 60);
                EisDealer.crc2.lineTo(this.position.x + 80, this.position.y + 60);
                EisDealer.crc2.lineTo(this.position.x + 80, this.position.y + 10);
                EisDealer.crc2.closePath();
                EisDealer.crc2.fillStyle = "blue";
                EisDealer.crc2.fill();
                EisDealer.crc2.stroke(); //Eisbecher
                EisDealer.crc2.beginPath();
                EisDealer.crc2.moveTo(this.position.x + 60, this.position.y + 5);
                EisDealer.crc2.lineTo(this.position.x + 80, this.position.y - 15);
                EisDealer.crc2.stroke();
                EisDealer.crc2.closePath(); //Löffel
            }
            if (order.variation.length == 1) {
                switch (order.variation[0]) {
                    case 'Amarena':
                        EisDealer.crc2.beginPath();
                        EisDealer.crc2.arc(this.position.x + 55, this.position.y - 5, 15, 0, 2 * Math.PI);
                        EisDealer.crc2.fillStyle = "red";
                        EisDealer.crc2.fill();
                        EisDealer.crc2.closePath();
                        break;
                    case 'Banane':
                        EisDealer.crc2.beginPath();
                        EisDealer.crc2.arc(this.position.x + 55, this.position.y - 5, 15, 0, 2 * Math.PI);
                        EisDealer.crc2.fillStyle = "yellow";
                        EisDealer.crc2.fill();
                        EisDealer.crc2.closePath();
                        break;
                    case 'Kaffee':
                        EisDealer.crc2.beginPath();
                        EisDealer.crc2.arc(this.position.x + 55, this.position.y - 5, 15, 0, 2 * Math.PI);
                        EisDealer.crc2.fillStyle = "brown";
                        EisDealer.crc2.fill();
                        EisDealer.crc2.closePath();
                        break;
                    case 'Pistazie':
                        EisDealer.crc2.beginPath();
                        EisDealer.crc2.arc(this.position.x + 55, this.position.y - 5, 15, 0, 2 * Math.PI);
                        EisDealer.crc2.fillStyle = "green";
                        EisDealer.crc2.fill();
                        EisDealer.crc2.closePath();
                        break;
                }
            }
            else {
                for (let i = 0; i < order.variation.length; i++) {
                    if (i == 0) {
                        switch (order.variation[i]) {
                            case 'Amarena':
                                EisDealer.crc2.beginPath();
                                EisDealer.crc2.arc(this.position.x + 40, this.position.y - 5, 15, 0, 2 * Math.PI);
                                EisDealer.crc2.fillStyle = "red";
                                EisDealer.crc2.fill();
                                EisDealer.crc2.closePath();
                                break;
                            case 'Banane':
                                EisDealer.crc2.beginPath();
                                EisDealer.crc2.arc(this.position.x + 40, this.position.y - 5, 15, 0, 2 * Math.PI);
                                EisDealer.crc2.fillStyle = "yellow";
                                EisDealer.crc2.fill();
                                EisDealer.crc2.closePath();
                                break;
                            case 'Kaffee':
                                EisDealer.crc2.beginPath();
                                EisDealer.crc2.arc(this.position.x + 40, this.position.y - 5, 15, 0, 2 * Math.PI);
                                EisDealer.crc2.fillStyle = "brown";
                                EisDealer.crc2.fill();
                                EisDealer.crc2.closePath();
                                break;
                            case 'Pistazie':
                                EisDealer.crc2.beginPath();
                                EisDealer.crc2.arc(this.position.x + 40, this.position.y - 5, 15, 0, 2 * Math.PI);
                                EisDealer.crc2.fillStyle = "green";
                                EisDealer.crc2.fill();
                                EisDealer.crc2.closePath();
                                break;
                        }
                    }
                    else if (i == 1) {
                        switch (order.variation[i]) {
                            case 'Amarena':
                                EisDealer.crc2.beginPath();
                                EisDealer.crc2.arc(this.position.x + 70, this.position.y - 5, 15, 0, 2 * Math.PI);
                                EisDealer.crc2.fillStyle = "red";
                                EisDealer.crc2.fill();
                                EisDealer.crc2.closePath();
                                break;
                            case 'Banane':
                                EisDealer.crc2.beginPath();
                                EisDealer.crc2.arc(this.position.x + 70, this.position.y - 5, 15, 0, 2 * Math.PI);
                                EisDealer.crc2.fillStyle = "yellow";
                                EisDealer.crc2.fill();
                                EisDealer.crc2.closePath();
                                break;
                            case 'Kaffee':
                                EisDealer.crc2.beginPath();
                                EisDealer.crc2.arc(this.position.x + 70, this.position.y - 5, 15, 0, 2 * Math.PI);
                                EisDealer.crc2.fillStyle = "brown";
                                EisDealer.crc2.fill();
                                EisDealer.crc2.closePath();
                                break;
                            case 'Pistazie':
                                EisDealer.crc2.beginPath();
                                EisDealer.crc2.arc(this.position.x + 70, this.position.y - 5, 15, 0, 2 * Math.PI);
                                EisDealer.crc2.fillStyle = "green";
                                EisDealer.crc2.fill();
                                EisDealer.crc2.closePath();
                                break;
                        }
                    }
                    else {
                        switch (order.variation[i]) {
                            case 'Amarena':
                                EisDealer.crc2.beginPath();
                                EisDealer.crc2.arc(this.position.x + 55, this.position.y - 30, 15, 0, 2 * Math.PI);
                                EisDealer.crc2.fillStyle = "red";
                                EisDealer.crc2.fill();
                                EisDealer.crc2.closePath();
                                break;
                            case 'Banane':
                                EisDealer.crc2.beginPath();
                                EisDealer.crc2.arc(this.position.x + 55, this.position.y - 30, 15, 0, 2 * Math.PI);
                                EisDealer.crc2.fillStyle = "yellow";
                                EisDealer.crc2.fill();
                                EisDealer.crc2.closePath();
                                break;
                            case 'Kaffee':
                                EisDealer.crc2.beginPath();
                                EisDealer.crc2.arc(this.position.x + 55, this.position.y - 30, 15, 0, 2 * Math.PI);
                                EisDealer.crc2.fillStyle = "brown";
                                EisDealer.crc2.fill();
                                EisDealer.crc2.closePath();
                                break;
                            case 'Pistazie':
                                EisDealer.crc2.beginPath();
                                EisDealer.crc2.arc(this.position.x + 55, this.position.y - 30, 15, 0, 2 * Math.PI);
                                EisDealer.crc2.fillStyle = "green";
                                EisDealer.crc2.fill();
                                EisDealer.crc2.closePath();
                                break;
                        }
                    }
                }
            }
            switch (order.sauce) {
                case 'Vanillesauce':
                    EisDealer.crc2.beginPath();
                    EisDealer.crc2.arc(this.position.x, this.position.y - 30, 15, 0, 2 * Math.PI);
                    EisDealer.crc2.fillStyle = "red";
                    EisDealer.crc2.fill();
                    EisDealer.crc2.closePath();
                    break;
                case 'Schokosauce':
                    EisDealer.crc2.beginPath();
                    EisDealer.crc2.arc(this.position.x, this.position.y - 30, 15, 0, 2 * Math.PI);
                    EisDealer.crc2.fillStyle = "yellow";
                    EisDealer.crc2.fill();
                    EisDealer.crc2.closePath();
                    break;
                case 'Karamellsauce':
                    EisDealer.crc2.beginPath();
                    EisDealer.crc2.arc(this.position.x, this.position.y - 30, 15, 0, 2 * Math.PI);
                    EisDealer.crc2.fillStyle = "brown";
                    EisDealer.crc2.fill();
                    EisDealer.crc2.closePath();
                    break;
                case 'Likör':
                    EisDealer.crc2.beginPath();
                    EisDealer.crc2.arc(this.position.x, this.position.y - 30, 15, 0, 2 * Math.PI);
                    EisDealer.crc2.fillStyle = "green";
                    EisDealer.crc2.fill();
                    EisDealer.crc2.closePath();
                    break;
            }
            switch (order.topping) {
                case 'Krokant':
                    EisDealer.crc2.beginPath();
                    EisDealer.crc2.arc(this.position.x, this.position.y - 30, 15, 0, 2 * Math.PI);
                    EisDealer.crc2.fillStyle = "red";
                    EisDealer.crc2.fill();
                    EisDealer.crc2.closePath();
                    break;
                case 'Streusel':
                    EisDealer.crc2.beginPath();
                    EisDealer.crc2.arc(this.position.x, this.position.y - 30, 15, 0, 2 * Math.PI);
                    EisDealer.crc2.fillStyle = "yellow";
                    EisDealer.crc2.fill();
                    EisDealer.crc2.closePath();
                    break;
                case 'Marshmallow':
                    EisDealer.crc2.beginPath();
                    EisDealer.crc2.arc(this.position.x, this.position.y - 30, 15, 0, 2 * Math.PI);
                    EisDealer.crc2.fillStyle = "brown";
                    EisDealer.crc2.fill();
                    EisDealer.crc2.closePath();
                    break;
                case 'Kaffeepulver':
                    EisDealer.crc2.beginPath();
                    EisDealer.crc2.arc(this.position.x, this.position.y - 30, 15, 0, 2 * Math.PI);
                    EisDealer.crc2.fillStyle = "green";
                    EisDealer.crc2.fill();
                    EisDealer.crc2.closePath();
                    break;
            }
            if (order.cream == "ja") {
                EisDealer.crc2.beginPath();
                EisDealer.crc2.arc(this.position.x, this.position.y - 30, 15, 0, 2 * Math.PI);
                EisDealer.crc2.fillStyle = "red";
                EisDealer.crc2.fill();
                EisDealer.crc2.closePath();
            }
        }
    }
    EisDealer.EatingCustomer = EatingCustomer;
})(EisDealer || (EisDealer = {}));
//# sourceMappingURL=MovingCustomer.js.map