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
            EisDealer.crc2.strokeStyle = "black";
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
            let randomCream = EisDealer.get1RandomListItem(EisDealer.sahne);
            let combinedarray = randomIceCreams.concat(randomContainer, randomCream, randomSauce, randomTopping);
            console.log(randomContainer);
            console.log(randomSauce);
            console.log(randomTopping);
            console.log(randomCream);
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
                EisDealer.crc2.fillStyle = "#47edff";
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
                        EisDealer.crc2.fillStyle = "#ff4760";
                        EisDealer.crc2.fill();
                        EisDealer.crc2.closePath();
                        break;
                    case 'Banane':
                        EisDealer.crc2.beginPath();
                        EisDealer.crc2.arc(positionx, positiony - 30, 15, 0, 2 * Math.PI);
                        EisDealer.crc2.fillStyle = "#fcff3e";
                        EisDealer.crc2.fill();
                        EisDealer.crc2.closePath();
                        break;
                    case 'Kaffee':
                        EisDealer.crc2.beginPath();
                        EisDealer.crc2.arc(positionx, positiony - 30, 15, 0, 2 * Math.PI);
                        EisDealer.crc2.fillStyle = "#c77646";
                        EisDealer.crc2.fill();
                        EisDealer.crc2.closePath();
                        break;
                    case 'Pistazie':
                        EisDealer.crc2.beginPath();
                        EisDealer.crc2.arc(positionx, positiony - 30, 15, 0, 2 * Math.PI);
                        EisDealer.crc2.fillStyle = "#a3ff47";
                        EisDealer.crc2.fill();
                        EisDealer.crc2.closePath();
                        break;
                }
                switch (randomSauce[0]) {
                    case 'Vanillesauce':
                        EisDealer.crc2.beginPath();
                        EisDealer.crc2.arc(this.position.x + 115, this.position.y - 40, 16, Math.PI, 2 * Math.PI);
                        EisDealer.crc2.fillStyle = "#ffeb66";
                        EisDealer.crc2.fill();
                        EisDealer.crc2.closePath();
                        break;
                    case 'Schokosauce':
                        EisDealer.crc2.beginPath();
                        EisDealer.crc2.arc(this.position.x + 115, this.position.y - 40, 16, Math.PI, 2 * Math.PI);
                        EisDealer.crc2.fillStyle = "#b58649";
                        EisDealer.crc2.fill();
                        EisDealer.crc2.closePath();
                        break;
                    case 'Karamellsauce':
                        EisDealer.crc2.beginPath();
                        EisDealer.crc2.arc(this.position.x + 115, this.position.y - 40, 16, Math.PI, 2 * Math.PI);
                        EisDealer.crc2.fillStyle = "#ff9a1e";
                        EisDealer.crc2.fill();
                        EisDealer.crc2.closePath();
                        break;
                    case 'Likör':
                        EisDealer.crc2.beginPath();
                        EisDealer.crc2.arc(this.position.x + 115, this.position.y - 40, 16, Math.PI, 2 * Math.PI);
                        EisDealer.crc2.fillStyle = "#f8ffb5";
                        EisDealer.crc2.fill();
                        EisDealer.crc2.closePath();
                        break;
                }
                switch (randomTopping[0]) {
                    case 'Krokant':
                        EisDealer.crc2.beginPath();
                        EisDealer.crc2.arc(this.position.x + 100, this.position.y - 30, 5, 0, 2 * Math.PI);
                        EisDealer.crc2.fillStyle = "#3c1a03";
                        EisDealer.crc2.fill();
                        EisDealer.crc2.closePath();
                        EisDealer.crc2.beginPath();
                        EisDealer.crc2.arc(this.position.x + 115, this.position.y - 40, 5, 0, 2 * Math.PI);
                        EisDealer.crc2.fillStyle = "#3c1a03";
                        EisDealer.crc2.fill();
                        EisDealer.crc2.closePath();
                        EisDealer.crc2.beginPath();
                        EisDealer.crc2.arc(this.position.x + 130, this.position.y - 30, 5, 0, 2 * Math.PI);
                        EisDealer.crc2.fillStyle = "#3c1a03";
                        EisDealer.crc2.fill();
                        EisDealer.crc2.closePath();
                        break;
                    case 'Streusel':
                        EisDealer.crc2.beginPath();
                        EisDealer.crc2.moveTo(this.position.x + 105, this.position.y - 45);
                        EisDealer.crc2.lineTo(this.position.x + 125, this.position.y - 50);
                        EisDealer.crc2.strokeStyle = "#ff0000";
                        EisDealer.crc2.stroke();
                        EisDealer.crc2.closePath();
                        EisDealer.crc2.beginPath();
                        EisDealer.crc2.moveTo(this.position.x + 105, this.position.y - 40);
                        EisDealer.crc2.lineTo(this.position.x + 125, this.position.y - 45);
                        EisDealer.crc2.strokeStyle = "#ff0000";
                        EisDealer.crc2.stroke();
                        EisDealer.crc2.closePath();
                        EisDealer.crc2.beginPath();
                        EisDealer.crc2.moveTo(this.position.x + 105, this.position.y - 35);
                        EisDealer.crc2.lineTo(this.position.x + 125, this.position.y - 40);
                        EisDealer.crc2.strokeStyle = "#ff0000";
                        EisDealer.crc2.stroke();
                        EisDealer.crc2.closePath();
                        break;
                    case 'Marshmallow':
                        EisDealer.crc2.beginPath();
                        EisDealer.crc2.arc(this.position.x + 115, this.position.y - 40, 12, 0, 2 * Math.PI);
                        EisDealer.crc2.fillStyle = "#ffffff";
                        EisDealer.crc2.fill();
                        EisDealer.crc2.closePath();
                        break;
                    case 'Eiswaffel':
                        EisDealer.crc2.beginPath();
                        EisDealer.crc2.moveTo(this.position.x + 130, this.position.y - 25);
                        EisDealer.crc2.lineTo(this.position.x + 170, this.position.y - 35);
                        EisDealer.crc2.lineTo(this.position.x + 160, this.position.y - 55);
                        EisDealer.crc2.lineTo(this.position.x + 120, this.position.y - 35);
                        EisDealer.crc2.fillStyle = "#c99867";
                        EisDealer.crc2.fill();
                        EisDealer.crc2.closePath();
                        break;
                }
                if (randomCream[0] == "ja") {
                    if (randomIceCreams.length == 1) {
                        EisDealer.crc2.beginPath();
                        EisDealer.crc2.ellipse(this.position.x + 115, this.position.y - 55, 20, 10, 0, 0, 2 * Math.PI);
                        EisDealer.crc2.fillStyle = "white";
                        EisDealer.crc2.strokeStyle = "black";
                        EisDealer.crc2.fill();
                        EisDealer.crc2.stroke();
                        EisDealer.crc2.closePath();
                        EisDealer.crc2.beginPath();
                        EisDealer.crc2.ellipse(this.position.x + 115, this.position.y - 65, 15, 10, 0, 0, 2 * Math.PI);
                        EisDealer.crc2.fillStyle = "white";
                        EisDealer.crc2.strokeStyle = "black";
                        EisDealer.crc2.fill();
                        EisDealer.crc2.stroke();
                        EisDealer.crc2.closePath();
                        EisDealer.crc2.beginPath();
                        EisDealer.crc2.ellipse(this.position.x + 115, this.position.y - 75, 10, 5, 0, 0, 2 * Math.PI);
                        EisDealer.crc2.fillStyle = "white";
                        EisDealer.crc2.strokeStyle = "black";
                        EisDealer.crc2.fill();
                        EisDealer.crc2.stroke();
                        EisDealer.crc2.closePath();
                    }
                    //zeichnet Sahne nicht?
                    else {
                        EisDealer.crc2.beginPath();
                        EisDealer.crc2.ellipse(this.position.x + 115, this.position.y - 60, 20, 8, 0, 0, 2 * Math.PI);
                        EisDealer.crc2.stroke();
                        EisDealer.crc2.fillStyle = "white";
                        EisDealer.crc2.strokeStyle = "black";
                        EisDealer.crc2.fill();
                        EisDealer.crc2.closePath();
                        EisDealer.crc2.beginPath();
                        EisDealer.crc2.ellipse(this.position.x + 115, this.position.y - 70, 15, 5, 0, 0, 2 * Math.PI);
                        EisDealer.crc2.fillStyle = "white";
                        EisDealer.crc2.strokeStyle = "black";
                        EisDealer.crc2.fill();
                        EisDealer.crc2.stroke();
                        EisDealer.crc2.closePath();
                        EisDealer.crc2.beginPath();
                        EisDealer.crc2.ellipse(this.position.x + 115, this.position.y - 80, 10, 2, 0, 0, 2 * Math.PI);
                        EisDealer.crc2.fillStyle = "white";
                        EisDealer.crc2.strokeStyle = "black";
                        EisDealer.crc2.fill();
                        EisDealer.crc2.stroke();
                        EisDealer.crc2.closePath();
                    }
                }
            }
            else {
                for (let i = 0; i < randomIceCreams.length; i++) {
                    if (i == 0) {
                        switch (randomIceCreams[i]) {
                            case 'Amarena':
                                EisDealer.crc2.beginPath();
                                EisDealer.crc2.arc(positionx - 15, positiony - 30, 15, 0, 2 * Math.PI);
                                EisDealer.crc2.fillStyle = "#ff4760";
                                EisDealer.crc2.fill();
                                EisDealer.crc2.closePath();
                                break;
                            case 'Banane':
                                EisDealer.crc2.beginPath();
                                EisDealer.crc2.arc(positionx - 15, positiony - 30, 15, 0, 2 * Math.PI);
                                EisDealer.crc2.fillStyle = "#fcff3e";
                                EisDealer.crc2.fill();
                                EisDealer.crc2.closePath();
                                break;
                            case 'Kaffee':
                                EisDealer.crc2.beginPath();
                                EisDealer.crc2.arc(positionx - 15, positiony - 30, 15, 0, 2 * Math.PI);
                                EisDealer.crc2.fillStyle = "#c77646";
                                EisDealer.crc2.fill();
                                EisDealer.crc2.closePath();
                                break;
                            case 'Pistazie':
                                EisDealer.crc2.beginPath();
                                EisDealer.crc2.arc(positionx - 15, positiony - 30, 15, 0, 2 * Math.PI);
                                EisDealer.crc2.fillStyle = "#a3ff47";
                                EisDealer.crc2.fill();
                                EisDealer.crc2.closePath();
                                break;
                        }
                        switch (randomSauce[0]) {
                            case 'Vanillesauce':
                                EisDealer.crc2.beginPath();
                                EisDealer.crc2.arc(this.position.x + 100, this.position.y - 40, 16, Math.PI, 2 * Math.PI);
                                EisDealer.crc2.fillStyle = "#ffeb66";
                                EisDealer.crc2.fill();
                                EisDealer.crc2.closePath();
                                break;
                            case 'Schokosauce':
                                EisDealer.crc2.beginPath();
                                EisDealer.crc2.arc(this.position.x + 100, this.position.y - 40, 16, Math.PI, 2 * Math.PI);
                                EisDealer.crc2.fillStyle = "#b58649";
                                EisDealer.crc2.fill();
                                EisDealer.crc2.closePath();
                                break;
                            case 'Karamellsauce':
                                EisDealer.crc2.beginPath();
                                EisDealer.crc2.arc(this.position.x + 100, this.position.y - 40, 16, Math.PI, 2 * Math.PI);
                                EisDealer.crc2.fillStyle = "#ff9a1e";
                                EisDealer.crc2.fill();
                                EisDealer.crc2.closePath();
                                break;
                            case 'Likör':
                                EisDealer.crc2.beginPath();
                                EisDealer.crc2.arc(this.position.x + 100, this.position.y - 40, 16, Math.PI, 2 * Math.PI);
                                EisDealer.crc2.fillStyle = "#f8ffb5";
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
                                EisDealer.crc2.fillStyle = "#ff4760";
                                EisDealer.crc2.fill();
                                EisDealer.crc2.closePath();
                                break;
                            case 'Banane':
                                EisDealer.crc2.beginPath();
                                EisDealer.crc2.arc(positionx + 15, positiony - 30, 15, 0, 2 * Math.PI);
                                EisDealer.crc2.fillStyle = "#fcff3e";
                                EisDealer.crc2.fill();
                                EisDealer.crc2.closePath();
                                break;
                            case 'Kaffee':
                                EisDealer.crc2.beginPath();
                                EisDealer.crc2.arc(positionx + 15, positiony - 30, 15, 0, 2 * Math.PI);
                                EisDealer.crc2.fillStyle = "#c77646";
                                EisDealer.crc2.fill();
                                EisDealer.crc2.closePath();
                                break;
                            case 'Pistazie':
                                EisDealer.crc2.beginPath();
                                EisDealer.crc2.arc(positionx + 15, positiony - 30, 15, 0, 2 * Math.PI);
                                EisDealer.crc2.fillStyle = "#a3ff47";
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
                                EisDealer.crc2.fillStyle = "#ff4760";
                                EisDealer.crc2.fill();
                                EisDealer.crc2.closePath();
                                break;
                            case 'Banane':
                                EisDealer.crc2.beginPath();
                                EisDealer.crc2.arc(positionx, positiony - 45, 15, 0, 2 * Math.PI);
                                EisDealer.crc2.fillStyle = "#fcff3e";
                                EisDealer.crc2.fill();
                                EisDealer.crc2.closePath();
                                break;
                            case 'Kaffee':
                                EisDealer.crc2.beginPath();
                                EisDealer.crc2.arc(positionx, positiony - 45, 15, 0, 2 * Math.PI);
                                EisDealer.crc2.fillStyle = "#c77646";
                                EisDealer.crc2.fill();
                                EisDealer.crc2.closePath();
                                break;
                            case 'Pistazie':
                                EisDealer.crc2.beginPath();
                                EisDealer.crc2.arc(positionx, positiony - 45, 15, 0, 2 * Math.PI);
                                EisDealer.crc2.fillStyle = "#a3ff47";
                                EisDealer.crc2.fill();
                                EisDealer.crc2.closePath();
                                break;
                        }
                    }
                    switch (randomTopping[0]) {
                        case 'Krokant':
                            EisDealer.crc2.beginPath();
                            EisDealer.crc2.arc(this.position.x + 100, this.position.y - 30, 5, 0, 2 * Math.PI);
                            EisDealer.crc2.fillStyle = "#3c1a03";
                            EisDealer.crc2.fill();
                            EisDealer.crc2.closePath();
                            EisDealer.crc2.beginPath();
                            EisDealer.crc2.arc(this.position.x + 115, this.position.y - 40, 5, 0, 2 * Math.PI);
                            EisDealer.crc2.fillStyle = "#3c1a03";
                            EisDealer.crc2.fill();
                            EisDealer.crc2.closePath();
                            EisDealer.crc2.beginPath();
                            EisDealer.crc2.arc(this.position.x + 130, this.position.y - 30, 5, 0, 2 * Math.PI);
                            EisDealer.crc2.fillStyle = "#3c1a03";
                            EisDealer.crc2.fill();
                            EisDealer.crc2.closePath();
                            break;
                        case 'Streusel':
                            EisDealer.crc2.beginPath();
                            EisDealer.crc2.moveTo(this.position.x + 105, this.position.y - 45);
                            EisDealer.crc2.lineTo(this.position.x + 125, this.position.y - 50);
                            EisDealer.crc2.strokeStyle = "#ff0000";
                            EisDealer.crc2.stroke();
                            EisDealer.crc2.closePath();
                            EisDealer.crc2.beginPath();
                            EisDealer.crc2.moveTo(this.position.x + 105, this.position.y - 40);
                            EisDealer.crc2.lineTo(this.position.x + 125, this.position.y - 45);
                            EisDealer.crc2.strokeStyle = "#ff0000";
                            EisDealer.crc2.stroke();
                            EisDealer.crc2.closePath();
                            EisDealer.crc2.beginPath();
                            EisDealer.crc2.moveTo(this.position.x + 105, this.position.y - 35);
                            EisDealer.crc2.lineTo(this.position.x + 125, this.position.y - 40);
                            EisDealer.crc2.strokeStyle = "#ff0000";
                            EisDealer.crc2.stroke();
                            EisDealer.crc2.closePath();
                            break;
                        case 'Marshmallow':
                            EisDealer.crc2.beginPath();
                            EisDealer.crc2.arc(this.position.x + 115, this.position.y - 40, 12, 0, 2 * Math.PI);
                            EisDealer.crc2.fillStyle = "#ffffff";
                            EisDealer.crc2.fill();
                            EisDealer.crc2.closePath();
                            break;
                        case 'Eiswaffel':
                            EisDealer.crc2.beginPath();
                            EisDealer.crc2.moveTo(this.position.x + 130, this.position.y - 25);
                            EisDealer.crc2.lineTo(this.position.x + 170, this.position.y - 35);
                            EisDealer.crc2.lineTo(this.position.x + 160, this.position.y - 55);
                            EisDealer.crc2.lineTo(this.position.x + 120, this.position.y - 35);
                            EisDealer.crc2.fillStyle = "#c99867";
                            EisDealer.crc2.fill();
                            EisDealer.crc2.closePath();
                            break;
                    }
                    if (randomCream[0] == "ja") {
                        if (randomIceCreams.length == 1) {
                            EisDealer.crc2.beginPath();
                            EisDealer.crc2.ellipse(this.position.x + 115, this.position.y - 20, 20, 10, 0, 0, 2 * Math.PI);
                            EisDealer.crc2.fillStyle = "white";
                            EisDealer.crc2.strokeStyle = "black";
                            EisDealer.crc2.fill();
                            EisDealer.crc2.stroke();
                            EisDealer.crc2.closePath();
                            EisDealer.crc2.beginPath();
                            EisDealer.crc2.ellipse(this.position.x + 115, this.position.y - 30, 15, 10, 0, 0, 2 * Math.PI);
                            EisDealer.crc2.fillStyle = "white";
                            EisDealer.crc2.strokeStyle = "black";
                            EisDealer.crc2.fill();
                            EisDealer.crc2.stroke();
                            EisDealer.crc2.closePath();
                            EisDealer.crc2.beginPath();
                            EisDealer.crc2.ellipse(this.position.x + 115, this.position.y - 40, 10, 5, 0, 0, 2 * Math.PI);
                            EisDealer.crc2.fillStyle = "white";
                            EisDealer.crc2.strokeStyle = "black";
                            EisDealer.crc2.fill();
                            EisDealer.crc2.stroke();
                            EisDealer.crc2.closePath();
                        }
                        //zeichnet Sahne nicht?
                        else {
                            EisDealer.crc2.beginPath();
                            EisDealer.crc2.ellipse(this.position.x + 115, this.position.y - 60, 20, 8, 0, 0, 2 * Math.PI);
                            EisDealer.crc2.stroke();
                            EisDealer.crc2.fillStyle = "white";
                            EisDealer.crc2.strokeStyle = "black";
                            EisDealer.crc2.fill();
                            EisDealer.crc2.closePath();
                            EisDealer.crc2.beginPath();
                            EisDealer.crc2.ellipse(this.position.x + 115, this.position.y - 70, 15, 5, 0, 0, 2 * Math.PI);
                            EisDealer.crc2.fillStyle = "white";
                            EisDealer.crc2.strokeStyle = "black";
                            EisDealer.crc2.fill();
                            EisDealer.crc2.stroke();
                            EisDealer.crc2.closePath();
                            EisDealer.crc2.beginPath();
                            EisDealer.crc2.ellipse(this.position.x + 115, this.position.y - 80, 10, 2, 0, 0, 2 * Math.PI);
                            EisDealer.crc2.fillStyle = "white";
                            EisDealer.crc2.strokeStyle = "black";
                            EisDealer.crc2.fill();
                            EisDealer.crc2.stroke();
                            EisDealer.crc2.closePath();
                        }
                    }
                }
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
            EisDealer.crc2.strokeStyle = "black";
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
                EisDealer.crc2.strokeStyle = "black";
                EisDealer.crc2.stroke(); //Waffel
            }
            else {
                EisDealer.crc2.beginPath();
                EisDealer.crc2.moveTo(this.position.x + 30, this.position.y + 10);
                EisDealer.crc2.lineTo(this.position.x + 30, this.position.y + 60);
                EisDealer.crc2.lineTo(this.position.x + 80, this.position.y + 60);
                EisDealer.crc2.lineTo(this.position.x + 80, this.position.y + 10);
                EisDealer.crc2.closePath();
                EisDealer.crc2.fillStyle = "#47edff";
                EisDealer.crc2.strokeStyle = "black";
                EisDealer.crc2.fill();
                EisDealer.crc2.stroke(); //Eisbecher
                EisDealer.crc2.beginPath();
                EisDealer.crc2.moveTo(this.position.x + 60, this.position.y + 5);
                EisDealer.crc2.lineTo(this.position.x + 80, this.position.y - 15);
                EisDealer.crc2.strokeStyle = "black";
                EisDealer.crc2.stroke();
                EisDealer.crc2.closePath(); //Löffel
            }
            if (order.variation.length == 1) {
                switch (order.variation[0]) {
                    case 'Amarena':
                        EisDealer.crc2.beginPath();
                        EisDealer.crc2.arc(this.position.x + 55, this.position.y - 5, 15, 0, 2 * Math.PI);
                        EisDealer.crc2.fillStyle = "#ff4760";
                        EisDealer.crc2.fill();
                        EisDealer.crc2.closePath();
                        break;
                    case 'Banane':
                        EisDealer.crc2.beginPath();
                        EisDealer.crc2.arc(this.position.x + 55, this.position.y - 5, 15, 0, 2 * Math.PI);
                        EisDealer.crc2.fillStyle = "#fcff3e";
                        EisDealer.crc2.fill();
                        EisDealer.crc2.closePath();
                        break;
                    case 'Kaffee':
                        EisDealer.crc2.beginPath();
                        EisDealer.crc2.arc(this.position.x + 55, this.position.y - 5, 15, 0, 2 * Math.PI);
                        EisDealer.crc2.fillStyle = "#c77646";
                        EisDealer.crc2.fill();
                        EisDealer.crc2.closePath();
                        break;
                    case 'Pistazie':
                        EisDealer.crc2.beginPath();
                        EisDealer.crc2.arc(this.position.x + 55, this.position.y - 5, 15, 0, 2 * Math.PI);
                        EisDealer.crc2.fillStyle = "#a3ff47";
                        EisDealer.crc2.fill();
                        EisDealer.crc2.closePath();
                        break;
                }
                switch (order.sauce) {
                    case 'Vanillesauce':
                        EisDealer.crc2.beginPath();
                        EisDealer.crc2.arc(this.position.x + 55, this.position.y - 5, 16, Math.PI, 2 * Math.PI);
                        EisDealer.crc2.fillStyle = "#ffeb66";
                        EisDealer.crc2.fill();
                        EisDealer.crc2.closePath();
                        break;
                    case 'Schokosauce':
                        EisDealer.crc2.beginPath();
                        EisDealer.crc2.arc(this.position.x + 55, this.position.y - 5, 16, Math.PI, 2 * Math.PI);
                        EisDealer.crc2.fillStyle = "#b58649";
                        EisDealer.crc2.fill();
                        EisDealer.crc2.closePath();
                        break;
                    case 'Karamellsauce':
                        EisDealer.crc2.beginPath();
                        EisDealer.crc2.arc(this.position.x + 55, this.position.y - 5, 16, Math.PI, 2 * Math.PI);
                        EisDealer.crc2.fillStyle = "#ff9a1e";
                        EisDealer.crc2.fill();
                        EisDealer.crc2.closePath();
                        break;
                    case 'Likör':
                        EisDealer.crc2.beginPath();
                        EisDealer.crc2.arc(this.position.x + 55, this.position.y - 5, 16, Math.PI, 2 * Math.PI);
                        EisDealer.crc2.fillStyle = "#f8ffb5";
                        EisDealer.crc2.fill();
                        EisDealer.crc2.closePath();
                        break;
                }
                switch (order.topping) {
                    case 'Krokant':
                        EisDealer.crc2.beginPath();
                        EisDealer.crc2.arc(this.position.x + 40, this.position.y - 10, 5, 0, 2 * Math.PI);
                        EisDealer.crc2.fillStyle = "#3c1a03";
                        EisDealer.crc2.fill();
                        EisDealer.crc2.closePath();
                        EisDealer.crc2.beginPath();
                        EisDealer.crc2.arc(this.position.x + 55, this.position.y - 20, 5, 0, 2 * Math.PI);
                        EisDealer.crc2.fillStyle = "#3c1a03";
                        EisDealer.crc2.fill();
                        EisDealer.crc2.closePath();
                        EisDealer.crc2.beginPath();
                        EisDealer.crc2.arc(this.position.x + 70, this.position.y - 10, 5, 0, 2 * Math.PI);
                        EisDealer.crc2.fillStyle = "#3c1a03";
                        EisDealer.crc2.fill();
                        EisDealer.crc2.closePath();
                        break;
                    case 'Streusel':
                        EisDealer.crc2.beginPath();
                        EisDealer.crc2.moveTo(this.position.x + 45, this.position.y);
                        EisDealer.crc2.lineTo(this.position.x + 65, this.position.y - 5);
                        EisDealer.crc2.strokeStyle = "#ff0000";
                        EisDealer.crc2.stroke();
                        EisDealer.crc2.closePath();
                        EisDealer.crc2.beginPath();
                        EisDealer.crc2.moveTo(this.position.x + 45, this.position.y - 5);
                        EisDealer.crc2.lineTo(this.position.x + 65, this.position.y - 10);
                        EisDealer.crc2.strokeStyle = "#ff0000";
                        EisDealer.crc2.stroke();
                        EisDealer.crc2.closePath();
                        EisDealer.crc2.beginPath();
                        EisDealer.crc2.moveTo(this.position.x + 45, this.position.y - 10);
                        EisDealer.crc2.lineTo(this.position.x + 65, this.position.y - 15);
                        EisDealer.crc2.strokeStyle = "#ff0000";
                        EisDealer.crc2.stroke();
                        EisDealer.crc2.closePath();
                        break;
                    case 'Marshmallow':
                        EisDealer.crc2.beginPath();
                        EisDealer.crc2.arc(this.position.x + 55, this.position.y, 12, 0, 2 * Math.PI);
                        EisDealer.crc2.fillStyle = "#ffffff";
                        EisDealer.crc2.fill();
                        EisDealer.crc2.closePath();
                        break;
                    case 'Eiswaffel':
                        EisDealer.crc2.beginPath();
                        EisDealer.crc2.moveTo(this.position.x + 60, this.position.y - 5);
                        EisDealer.crc2.lineTo(this.position.x + 100, this.position.y - 15);
                        EisDealer.crc2.lineTo(this.position.x + 90, this.position.y - 35);
                        EisDealer.crc2.lineTo(this.position.x + 50, this.position.y - 15);
                        EisDealer.crc2.fillStyle = "#c99867";
                        EisDealer.crc2.fill();
                        EisDealer.crc2.closePath();
                        break;
                }
                if (order.cream == "ja") {
                    if (order.variation.length == 1) {
                        EisDealer.crc2.beginPath();
                        EisDealer.crc2.ellipse(this.position.x + 55, this.position.y - 20, 20, 10, 0, 0, 2 * Math.PI);
                        EisDealer.crc2.fillStyle = "white";
                        EisDealer.crc2.strokeStyle = "black";
                        EisDealer.crc2.fill();
                        EisDealer.crc2.stroke();
                        EisDealer.crc2.closePath();
                        EisDealer.crc2.beginPath();
                        EisDealer.crc2.ellipse(this.position.x + 55, this.position.y - 30, 15, 10, 0, 0, 2 * Math.PI);
                        EisDealer.crc2.fillStyle = "white";
                        EisDealer.crc2.strokeStyle = "black";
                        EisDealer.crc2.fill();
                        EisDealer.crc2.stroke();
                        EisDealer.crc2.closePath();
                        EisDealer.crc2.beginPath();
                        EisDealer.crc2.ellipse(this.position.x + 55, this.position.y - 40, 10, 5, 0, 0, 2 * Math.PI);
                        EisDealer.crc2.fillStyle = "white";
                        EisDealer.crc2.strokeStyle = "black";
                        EisDealer.crc2.fill();
                        EisDealer.crc2.stroke();
                        EisDealer.crc2.closePath();
                    }
                    //zeichnet Sahne nicht?
                    else {
                        EisDealer.crc2.beginPath();
                        EisDealer.crc2.ellipse(this.position.x + 115, this.position.y - 60, 20, 8, 0, 0, 2 * Math.PI);
                        EisDealer.crc2.stroke();
                        EisDealer.crc2.fillStyle = "white";
                        EisDealer.crc2.strokeStyle = "black";
                        EisDealer.crc2.fill();
                        EisDealer.crc2.closePath();
                        EisDealer.crc2.beginPath();
                        EisDealer.crc2.ellipse(this.position.x + 115, this.position.y - 70, 15, 5, 0, 0, 2 * Math.PI);
                        EisDealer.crc2.fillStyle = "white";
                        EisDealer.crc2.strokeStyle = "black";
                        EisDealer.crc2.fill();
                        EisDealer.crc2.stroke();
                        EisDealer.crc2.closePath();
                        EisDealer.crc2.beginPath();
                        EisDealer.crc2.ellipse(this.position.x + 115, this.position.y - 80, 10, 2, 0, 0, 2 * Math.PI);
                        EisDealer.crc2.fillStyle = "white";
                        EisDealer.crc2.strokeStyle = "black";
                        EisDealer.crc2.fill();
                        EisDealer.crc2.stroke();
                        EisDealer.crc2.closePath();
                    }
                }
            }
            else {
                for (let i = 0; i < order.variation.length; i++) {
                    if (i == 0) {
                        switch (order.variation[i]) {
                            case 'Amarena':
                                EisDealer.crc2.beginPath();
                                EisDealer.crc2.arc(this.position.x + 40, this.position.y - 5, 15, 0, 2 * Math.PI);
                                EisDealer.crc2.fillStyle = "#ff4760";
                                EisDealer.crc2.fill();
                                EisDealer.crc2.closePath();
                                break;
                            case 'Banane':
                                EisDealer.crc2.beginPath();
                                EisDealer.crc2.arc(this.position.x + 40, this.position.y - 5, 15, 0, 2 * Math.PI);
                                EisDealer.crc2.fillStyle = "#fcff3e";
                                EisDealer.crc2.fill();
                                EisDealer.crc2.closePath();
                                break;
                            case 'Kaffee':
                                EisDealer.crc2.beginPath();
                                EisDealer.crc2.arc(this.position.x + 40, this.position.y - 5, 15, 0, 2 * Math.PI);
                                EisDealer.crc2.fillStyle = "#c77646";
                                EisDealer.crc2.fill();
                                EisDealer.crc2.closePath();
                                break;
                            case 'Pistazie':
                                EisDealer.crc2.beginPath();
                                EisDealer.crc2.arc(this.position.x + 40, this.position.y - 5, 15, 0, 2 * Math.PI);
                                EisDealer.crc2.fillStyle = "#a3ff47";
                                EisDealer.crc2.fill();
                                EisDealer.crc2.closePath();
                                break;
                        }
                        switch (order.sauce[i]) {
                            case 'Vanillesauce':
                                EisDealer.crc2.beginPath();
                                EisDealer.crc2.arc(this.position.x + 100, this.position.y - 40, 16, Math.PI, 2 * Math.PI);
                                EisDealer.crc2.fillStyle = "#ffeb66";
                                EisDealer.crc2.fill();
                                EisDealer.crc2.closePath();
                                break;
                            case 'Schokosauce':
                                EisDealer.crc2.beginPath();
                                EisDealer.crc2.arc(this.position.x + 100, this.position.y - 40, 16, Math.PI, 2 * Math.PI);
                                EisDealer.crc2.fillStyle = "#b58649";
                                EisDealer.crc2.fill();
                                EisDealer.crc2.closePath();
                                break;
                            case 'Karamellsauce':
                                EisDealer.crc2.beginPath();
                                EisDealer.crc2.arc(this.position.x + 100, this.position.y - 40, 16, Math.PI, 2 * Math.PI);
                                EisDealer.crc2.fillStyle = "#ff9a1e";
                                EisDealer.crc2.fill();
                                EisDealer.crc2.closePath();
                                break;
                            case 'Likör':
                                EisDealer.crc2.beginPath();
                                EisDealer.crc2.arc(this.position.x + 100, this.position.y - 40, 16, Math.PI, 2 * Math.PI);
                                EisDealer.crc2.fillStyle = "#f8ffb5";
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
                                EisDealer.crc2.fillStyle = "#ff4760";
                                EisDealer.crc2.fill();
                                EisDealer.crc2.closePath();
                                break;
                            case 'Banane':
                                EisDealer.crc2.beginPath();
                                EisDealer.crc2.arc(this.position.x + 70, this.position.y - 5, 15, 0, 2 * Math.PI);
                                EisDealer.crc2.fillStyle = "#fcff3e";
                                EisDealer.crc2.fill();
                                EisDealer.crc2.closePath();
                                break;
                            case 'Kaffee':
                                EisDealer.crc2.beginPath();
                                EisDealer.crc2.arc(this.position.x + 70, this.position.y - 5, 15, 0, 2 * Math.PI);
                                EisDealer.crc2.fillStyle = "#c77646";
                                EisDealer.crc2.fill();
                                EisDealer.crc2.closePath();
                                break;
                            case 'Pistazie':
                                EisDealer.crc2.beginPath();
                                EisDealer.crc2.arc(this.position.x + 70, this.position.y - 5, 15, 0, 2 * Math.PI);
                                EisDealer.crc2.fillStyle = "#a3ff47";
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
                                EisDealer.crc2.fillStyle = "#ff4760";
                                EisDealer.crc2.fill();
                                EisDealer.crc2.closePath();
                                break;
                            case 'Banane':
                                EisDealer.crc2.beginPath();
                                EisDealer.crc2.arc(this.position.x + 55, this.position.y - 30, 15, 0, 2 * Math.PI);
                                EisDealer.crc2.fillStyle = "#fcff3e";
                                EisDealer.crc2.fill();
                                EisDealer.crc2.closePath();
                                break;
                            case 'Kaffee':
                                EisDealer.crc2.beginPath();
                                EisDealer.crc2.arc(this.position.x + 55, this.position.y - 30, 15, 0, 2 * Math.PI);
                                EisDealer.crc2.fillStyle = "#c77646";
                                EisDealer.crc2.fill();
                                EisDealer.crc2.closePath();
                                break;
                            case 'Pistazie':
                                EisDealer.crc2.beginPath();
                                EisDealer.crc2.arc(this.position.x + 55, this.position.y - 30, 15, 0, 2 * Math.PI);
                                EisDealer.crc2.fillStyle = "#a3ff47";
                                EisDealer.crc2.fill();
                                EisDealer.crc2.closePath();
                                break;
                        }
                    }
                    switch (order.topping) {
                        case 'Krokant':
                            EisDealer.crc2.beginPath();
                            EisDealer.crc2.arc(this.position.x + 45, this.position.y - 10, 5, 0, 2 * Math.PI);
                            EisDealer.crc2.fillStyle = "#3c1a03";
                            EisDealer.crc2.fill();
                            EisDealer.crc2.closePath();
                            EisDealer.crc2.beginPath();
                            EisDealer.crc2.arc(this.position.x + 55, this.position.y - 20, 5, 0, 2 * Math.PI);
                            EisDealer.crc2.fillStyle = "#3c1a03";
                            EisDealer.crc2.fill();
                            EisDealer.crc2.closePath();
                            EisDealer.crc2.beginPath();
                            EisDealer.crc2.arc(this.position.x + 65, this.position.y - 10, 5, 0, 2 * Math.PI);
                            EisDealer.crc2.fillStyle = "#3c1a03";
                            EisDealer.crc2.fill();
                            EisDealer.crc2.closePath();
                            break;
                        case 'Streusel':
                            EisDealer.crc2.beginPath();
                            EisDealer.crc2.moveTo(this.position.x + 45, this.position.y);
                            EisDealer.crc2.lineTo(this.position.x + 65, this.position.y - 5);
                            EisDealer.crc2.strokeStyle = "#ff0000";
                            EisDealer.crc2.stroke();
                            EisDealer.crc2.closePath();
                            EisDealer.crc2.beginPath();
                            EisDealer.crc2.moveTo(this.position.x + 45, this.position.y - 5);
                            EisDealer.crc2.lineTo(this.position.x + 65, this.position.y - 10);
                            EisDealer.crc2.strokeStyle = "#ff0000";
                            EisDealer.crc2.stroke();
                            EisDealer.crc2.closePath();
                            EisDealer.crc2.beginPath();
                            EisDealer.crc2.moveTo(this.position.x + 45, this.position.y);
                            EisDealer.crc2.lineTo(this.position.x + 65, this.position.y - 5);
                            EisDealer.crc2.strokeStyle = "#ff0000";
                            EisDealer.crc2.stroke();
                            EisDealer.crc2.closePath();
                            break;
                        case 'Marshmallow':
                            EisDealer.crc2.beginPath();
                            EisDealer.crc2.arc(this.position.x + 55, this.position.y - 10, 12, 0, 2 * Math.PI);
                            EisDealer.crc2.fillStyle = "#ffffff";
                            EisDealer.crc2.fill();
                            EisDealer.crc2.closePath();
                            break;
                        case 'Eiswaffel':
                            EisDealer.crc2.beginPath();
                            EisDealer.crc2.moveTo(this.position.x + 70, this.position.y - 5);
                            EisDealer.crc2.lineTo(this.position.x + 90, this.position.y - 15);
                            EisDealer.crc2.lineTo(this.position.x + 85, this.position.y - 25);
                            EisDealer.crc2.lineTo(this.position.x + 60, this.position.y - 15);
                            EisDealer.crc2.fillStyle = "#c99867";
                            EisDealer.crc2.fill();
                            EisDealer.crc2.closePath();
                            break;
                    }
                    if (order.cream == "ja") {
                        if (order.variation.length == 1 || order.variation.length == 2) {
                            EisDealer.crc2.beginPath();
                            EisDealer.crc2.ellipse(this.position.x + 55, this.position.y - 20, 20, 10, 0, 0, 2 * Math.PI);
                            EisDealer.crc2.stroke();
                            EisDealer.crc2.fillStyle = "white";
                            EisDealer.crc2.strokeStyle = "black";
                            EisDealer.crc2.fill();
                            EisDealer.crc2.closePath();
                            EisDealer.crc2.beginPath();
                            EisDealer.crc2.ellipse(this.position.x + 55, this.position.y - 30, 15, 10, 0, 0, 2 * Math.PI);
                            EisDealer.crc2.fillStyle = "white";
                            EisDealer.crc2.strokeStyle = "black";
                            EisDealer.crc2.fill();
                            EisDealer.crc2.stroke();
                            EisDealer.crc2.closePath();
                            EisDealer.crc2.beginPath();
                            EisDealer.crc2.ellipse(this.position.x + 55, this.position.y - 40, 10, 5, 0, 0, 2 * Math.PI);
                            EisDealer.crc2.fillStyle = "white";
                            EisDealer.crc2.strokeStyle = "black";
                            EisDealer.crc2.fill();
                            EisDealer.crc2.stroke();
                            EisDealer.crc2.closePath();
                        }
                        else {
                            EisDealer.crc2.beginPath();
                            EisDealer.crc2.ellipse(this.position.x + 55, this.position.y - 35, 20, 10, 0, 0, 2 * Math.PI);
                            EisDealer.crc2.stroke();
                            EisDealer.crc2.fillStyle = "white";
                            EisDealer.crc2.strokeStyle = "black";
                            EisDealer.crc2.fill();
                            EisDealer.crc2.closePath();
                            EisDealer.crc2.beginPath();
                            EisDealer.crc2.ellipse(this.position.x + 55, this.position.y - 45, 15, 10, 0, 0, 2 * Math.PI);
                            EisDealer.crc2.fillStyle = "white";
                            EisDealer.crc2.strokeStyle = "black";
                            EisDealer.crc2.fill();
                            EisDealer.crc2.stroke();
                            EisDealer.crc2.closePath();
                            EisDealer.crc2.beginPath();
                            EisDealer.crc2.ellipse(this.position.x + 55, this.position.y - 55, 10, 5, 0, 0, 2 * Math.PI);
                            EisDealer.crc2.fillStyle = "white";
                            EisDealer.crc2.strokeStyle = "black";
                            EisDealer.crc2.fill();
                            EisDealer.crc2.stroke();
                            EisDealer.crc2.closePath();
                        }
                    }
                }
            }
        }
    }
    EisDealer.EatingCustomer = EatingCustomer;
})(EisDealer || (EisDealer = {}));
//# sourceMappingURL=MovingCustomer.js.map