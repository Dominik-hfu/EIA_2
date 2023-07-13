"use strict";
var EisDealer;
(function (EisDealer) {
    let MOOD;
    (function (MOOD) {
        MOOD[MOOD["HAPPY"] = 0] = "HAPPY";
        MOOD[MOOD["SAD"] = 1] = "SAD";
    })(MOOD = EisDealer.MOOD || (EisDealer.MOOD = {}));
    let CUSTOMER;
    (function (CUSTOMER) {
        CUSTOMER[CUSTOMER["WAITING"] = 0] = "WAITING";
        CUSTOMER[CUSTOMER["ORDERING"] = 1] = "ORDERING";
        CUSTOMER[CUSTOMER["EATING"] = 2] = "EATING";
    })(CUSTOMER = EisDealer.CUSTOMER || (EisDealer.CUSTOMER = {}));
    let ICEVARIATION;
    (function (ICEVARIATION) {
        ICEVARIATION[ICEVARIATION["VANILLA"] = 0] = "VANILLA";
        ICEVARIATION[ICEVARIATION["CHOCOLATE"] = 1] = "CHOCOLATE";
        ICEVARIATION[ICEVARIATION["STRAWBERRY"] = 2] = "STRAWBERRY";
    })(ICEVARIATION = EisDealer.ICEVARIATION || (EisDealer.ICEVARIATION = {})); //wie kann ich die ganzen einzelnen Varianten speichern?
    class Customer {
        position;
        speed;
        mood;
        type;
        personalIce;
        constructor(_position, _speed) {
            this.position = _position;
            this.speed = _speed;
        }
        draw() {
            // let positionX:number=475;
            // let positionY:number=550;
            // crc2.beginPath();
            // crc2.arc(475, 550, 30, 0, 2 * Math.PI);
            // crc2.fillStyle = "hsl(50, 98%, 88%)";
            // crc2.fill();
            // crc2.stroke();
            // crc2.closePath();//Kopf
            // crc2.beginPath();
            // crc2.arc(460, 545, 10, 0, 2 * Math.PI);
            // crc2.fillStyle = "black";
            // crc2.fill();
            // crc2.closePath();
            // crc2.beginPath();
            // crc2.arc(490, 545, 10, 0, 2 * Math.PI);
            // crc2.fillStyle = "black";
            // crc2.fill();
            // crc2.closePath();//Augen
            // crc2.beginPath();
            // crc2.bezierCurveTo(460, 565, 475, 575, 490, 565);
            // crc2.strokeStyle = "black";
            // crc2.stroke();
            // crc2.closePath();//Mund
        }
        ;
        move(_timeslice) {
        }
        ;
        changeMood() {
        }
        ;
    }
    EisDealer.Customer = Customer;
    class WaitingCustomer extends Customer {
        drawSelf() {
            // let minX: number = 200;
            // let maxX: number = 1000;
            let positionx = 475;
            // let minY: number = -100;
            // let maxY: number = 150;//150
            // let positiony: number = Math.floor(this.position.y * (maxY - minY + 1)) + minY;
            // console.log(positiony)
            let positiony = 590;
            EisDealer.crc2.beginPath();
            EisDealer.crc2.arc(positionx, positiony, 30, 0, 2 * Math.PI);
            EisDealer.crc2.fillStyle = "hsl(50, 98%, 88%)";
            EisDealer.crc2.fill();
            EisDealer.crc2.stroke();
            EisDealer.crc2.closePath(); //Kopf
            EisDealer.crc2.beginPath();
            EisDealer.crc2.arc(positionx - 10, positiony - 10, 8, 0, 2 * Math.PI);
            EisDealer.crc2.fillStyle = "black";
            EisDealer.crc2.fill();
            EisDealer.crc2.closePath();
            EisDealer.crc2.beginPath();
            EisDealer.crc2.arc(positionx + 10, positiony - 10, 8, 0, 2 * Math.PI);
            EisDealer.crc2.fillStyle = "black";
            EisDealer.crc2.fill();
            EisDealer.crc2.closePath(); //Augen
            EisDealer.crc2.beginPath();
            EisDealer.crc2.bezierCurveTo(positionx - 10, positiony + 5, positionx, positiony + 10, positionx + 10, positiony + 5);
            EisDealer.crc2.strokeStyle = "black";
            EisDealer.crc2.stroke();
            EisDealer.crc2.closePath(); //Mund
        }
        move(_timeslice) {
            let offset = new EisDealer.Vector(this.speed.x, this.speed.y);
            offset.scale(_timeslice);
            this.position.add(offset); //addiert auf position den offset
        }
        waitOutside() {
        }
    }
    EisDealer.WaitingCustomer = WaitingCustomer;
    class OrderingCustomer extends Customer {
        drawSelf() {
            // let minX: number = 200;
            // let maxX: number = 1000;
            let positionx = 475;
            // let minY: number = -100;
            // let maxY: number = 150;//150
            // let positiony: number = Math.floor(this.position.y * (maxY - minY + 1)) + minY;
            // console.log(positiony)
            let positiony = 520;
            EisDealer.crc2.beginPath();
            EisDealer.crc2.arc(positionx, positiony, 30, 0, 2 * Math.PI);
            EisDealer.crc2.fillStyle = "hsl(50, 98%, 88%)";
            EisDealer.crc2.fill();
            EisDealer.crc2.stroke();
            EisDealer.crc2.closePath(); //Kopf
            EisDealer.crc2.beginPath();
            EisDealer.crc2.arc(positionx - 10, positiony - 10, 8, 0, 2 * Math.PI);
            EisDealer.crc2.fillStyle = "black";
            EisDealer.crc2.fill();
            EisDealer.crc2.closePath();
            EisDealer.crc2.beginPath();
            EisDealer.crc2.arc(positionx + 10, positiony - 10, 8, 0, 2 * Math.PI);
            EisDealer.crc2.fillStyle = "black";
            EisDealer.crc2.fill();
            EisDealer.crc2.closePath(); //Augen
            EisDealer.crc2.beginPath();
            EisDealer.crc2.bezierCurveTo(positionx - 10, positiony + 5, positionx, positiony + 10, positionx + 10, positiony + 5);
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
            EisDealer.crc2.beginPath();
            EisDealer.crc2.moveTo(positionx - 25, positiony - 20);
            EisDealer.crc2.lineTo(positionx, positiony + 50);
            EisDealer.crc2.lineTo(positionx + 25, positiony - 20);
            EisDealer.crc2.closePath();
            EisDealer.crc2.fillStyle = "hsl(53, 91%, 81%)";
            EisDealer.crc2.fill();
            EisDealer.crc2.stroke(); //Waffel
            EisDealer.crc2.beginPath();
            EisDealer.crc2.arc(positionx - 15, positiony - 30, 15, 0, 2 * Math.PI);
            EisDealer.crc2.fillStyle = "red";
            EisDealer.crc2.fill();
            EisDealer.crc2.closePath();
            EisDealer.crc2.beginPath();
            EisDealer.crc2.arc(positionx + 15, positiony - 30, 15, 0, 2 * Math.PI);
            EisDealer.crc2.fillStyle = "green";
            EisDealer.crc2.fill();
            EisDealer.crc2.closePath(); //Kugeln
        }
    }
    EisDealer.OrderingCustomer = OrderingCustomer;
    class EatingCustomer extends Customer {
        drawSelf() {
            // let minX: number = 200;
            // let maxX: number = 1000;
            let positionx = 126;
            // let minY: number = -100;
            // let maxY: number = 150;//150
            // let positiony: number = Math.floor(this.position.y * (maxY - minY + 1)) + minY;
            // console.log(positiony)
            let positiony = 520;
            EisDealer.crc2.beginPath();
            EisDealer.crc2.arc(positionx, positiony, 30, 0, 2 * Math.PI);
            EisDealer.crc2.fillStyle = "hsl(50, 98%, 88%)";
            EisDealer.crc2.fill();
            EisDealer.crc2.stroke();
            EisDealer.crc2.closePath(); //Kopf
            EisDealer.crc2.beginPath();
            EisDealer.crc2.arc(positionx - 10, positiony - 10, 8, 0, 2 * Math.PI);
            EisDealer.crc2.fillStyle = "black";
            EisDealer.crc2.fill();
            EisDealer.crc2.closePath();
            EisDealer.crc2.beginPath();
            EisDealer.crc2.arc(positionx + 10, positiony - 10, 8, 0, 2 * Math.PI);
            EisDealer.crc2.fillStyle = "black";
            EisDealer.crc2.fill();
            EisDealer.crc2.closePath(); //Augen
            EisDealer.crc2.beginPath();
            EisDealer.crc2.bezierCurveTo(positionx - 10, positiony + 5, positionx, positiony + 10, positionx + 10, positiony + 5);
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
            // let minX: number = 200;
            // let maxX: number = 1000;
            let positionx = 126;
            // let minY: number = -100;
            // let maxY: number = 150;//150
            // let positiony: number = Math.floor(this.position.y * (maxY - minY + 1)) + minY;
            // console.log(positiony)
            let positiony = 520;
            EisDealer.crc2.beginPath();
            EisDealer.crc2.moveTo(positionx + 30, positiony + 10);
            EisDealer.crc2.lineTo(positionx + 55, positiony + 80);
            EisDealer.crc2.lineTo(positionx + 80, positiony + 10);
            EisDealer.crc2.closePath();
            EisDealer.crc2.fillStyle = "hsl(53, 91%, 81%)";
            EisDealer.crc2.fill();
            EisDealer.crc2.stroke(); //Waffel
            EisDealer.crc2.beginPath();
            EisDealer.crc2.arc(positionx + 42.5, positiony, 15, 0, 2 * Math.PI);
            EisDealer.crc2.fillStyle = "red";
            EisDealer.crc2.fill();
            EisDealer.crc2.closePath();
            EisDealer.crc2.beginPath();
            EisDealer.crc2.arc(positionx + 70, positiony, 15, 0, 2 * Math.PI);
            EisDealer.crc2.fillStyle = "green";
            EisDealer.crc2.fill();
            EisDealer.crc2.closePath(); //Kugeln
            //Hier Essanzeige
        }
        pay() {
            //hier cash counter :)  
        }
    }
    EisDealer.EatingCustomer = EatingCustomer;
})(EisDealer || (EisDealer = {}));
//# sourceMappingURL=MovingCustomer.js.map