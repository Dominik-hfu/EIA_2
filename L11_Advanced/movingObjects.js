"use strict";
var AlpenFlug;
(function (AlpenFlug) {
    class MovingObjects {
        position;
        speed;
        constructor(_position, _speed) {
            this.position = _position;
            this.speed = _speed;
        }
    }
    AlpenFlug.MovingObjects = MovingObjects;
    class Guys extends MovingObjects {
        drawTheirself() {
            let minX = 200;
            let maxX = 700;
            let positionx = Math.floor(this.position.x * (maxX - minX + 1)) + minX;
            let minY = 600;
            let maxY = 700;
            let positiony = Math.floor(this.position.y * (maxY - minY + 1)) + minY;
            AlpenFlug.crc2.beginPath();
            AlpenFlug.crc2.moveTo(positionx, positiony);
            AlpenFlug.crc2.arc(positionx, positiony, 8, 0, 2 * Math.PI);
            AlpenFlug.crc2.stroke();
            AlpenFlug.crc2.fillStyle = "white";
            AlpenFlug.crc2.fill();
            AlpenFlug.crc2.closePath();
            AlpenFlug.crc2.beginPath();
            AlpenFlug.crc2.moveTo(positionx, positiony + 8);
            AlpenFlug.crc2.lineTo(positionx, positiony + 20);
            AlpenFlug.crc2.moveTo(positionx, positiony + 20);
            AlpenFlug.crc2.lineTo(positionx - 10, positiony + 30);
            AlpenFlug.crc2.moveTo(positionx, positiony + 20);
            AlpenFlug.crc2.lineTo(positionx + 10, positiony + 30);
            AlpenFlug.crc2.stroke();
            AlpenFlug.crc2.closePath();
            AlpenFlug.crc2.beginPath();
            AlpenFlug.crc2.moveTo(positionx, positiony + 15);
            AlpenFlug.crc2.lineTo(positionx - 20, positiony);
            AlpenFlug.crc2.moveTo(positionx, positiony + 15);
            AlpenFlug.crc2.lineTo(positionx + 20, positiony);
            AlpenFlug.crc2.stroke();
            AlpenFlug.crc2.closePath();
        }
        ;
        moveTheirself(_timeslice) {
            let offset = new AlpenFlug.Vector(this.speed.x, this.speed.y);
            offset.scale(_timeslice);
            this.position.subtract(offset); //subtrahiert von position den offset
            let change = false;
            if (this.position.y < 200 * 0.001 && this.position.x < 350 * 0.001) {
                change = true;
            }
            if (this.position.y < 200 * 0.001 && this.position.x > 350 * 0.001) {
                this.position.y = 900 * 0.001;
                change = false;
            }
            if (this.position.x < 0) {
                change = true;
            }
            return change;
        }
        ;
    }
    AlpenFlug.Guys = Guys;
    class Parachutists extends Guys {
        drawTheirself() {
            let minX = 200;
            let maxX = 1000;
            let positionx = Math.floor(this.position.x * (maxX - minX + 1)) + minX;
            let minY = 100;
            let maxY = 500;
            let positiony = Math.floor(this.position.y * (maxY - minY + 1)) + minY;
            // Seile
            AlpenFlug.crc2.beginPath();
            AlpenFlug.crc2.moveTo(positionx - 3, positiony + 10);
            AlpenFlug.crc2.lineTo(positionx - 25, positiony - 20);
            AlpenFlug.crc2.stroke();
            AlpenFlug.crc2.closePath();
            AlpenFlug.crc2.beginPath();
            AlpenFlug.crc2.moveTo(positionx + 3, positiony + 10);
            AlpenFlug.crc2.lineTo(positionx + 25, positiony - 20);
            AlpenFlug.crc2.stroke();
            AlpenFlug.crc2.closePath();
            AlpenFlug.crc2.beginPath();
            AlpenFlug.crc2.moveTo(positionx + 3, positiony + 10);
            AlpenFlug.crc2.lineTo(positionx + 10, positiony - 20);
            AlpenFlug.crc2.stroke();
            AlpenFlug.crc2.closePath();
            AlpenFlug.crc2.beginPath();
            AlpenFlug.crc2.moveTo(positionx - 3, positiony + 10);
            AlpenFlug.crc2.lineTo(positionx - 10, positiony - 20);
            AlpenFlug.crc2.stroke();
            AlpenFlug.crc2.closePath();
            //Schirm
            AlpenFlug.crc2.beginPath();
            AlpenFlug.crc2.moveTo(positionx - 25, positiony - 20);
            AlpenFlug.crc2.bezierCurveTo(positionx - 10, positiony - 20, positionx + 10, positiony - 20, positionx + 25, positiony - 20);
            AlpenFlug.crc2.fill();
            AlpenFlug.crc2.fillStyle = "HSL(39,100%,50%)";
            AlpenFlug.crc2.stroke();
            AlpenFlug.crc2.closePath();
            AlpenFlug.crc2.beginPath();
            AlpenFlug.crc2.arc(positionx, positiony - 20, 25, Math.PI, 2 * Math.PI);
            AlpenFlug.crc2.lineTo(positionx - 25, positiony - 20);
            AlpenFlug.crc2.fill();
            AlpenFlug.crc2.stroke();
            AlpenFlug.crc2.closePath();
            AlpenFlug.crc2.beginPath();
            AlpenFlug.crc2.moveTo(positionx, positiony);
            AlpenFlug.crc2.arc(positionx, positiony, 8, 0, 2 * Math.PI);
            AlpenFlug.crc2.stroke();
            AlpenFlug.crc2.fillStyle = "white";
            AlpenFlug.crc2.fill();
            AlpenFlug.crc2.closePath();
            AlpenFlug.crc2.beginPath();
            AlpenFlug.crc2.moveTo(positionx, positiony + 8);
            AlpenFlug.crc2.lineTo(positionx, positiony + 20);
            AlpenFlug.crc2.moveTo(positionx, positiony + 20);
            AlpenFlug.crc2.lineTo(positionx - 10, positiony + 30);
            AlpenFlug.crc2.moveTo(positionx, positiony + 20);
            AlpenFlug.crc2.lineTo(positionx + 10, positiony + 30);
            AlpenFlug.crc2.stroke();
            AlpenFlug.crc2.closePath();
            AlpenFlug.crc2.beginPath();
            AlpenFlug.crc2.moveTo(positionx, positiony + 15);
            AlpenFlug.crc2.lineTo(positionx - 20, positiony);
            AlpenFlug.crc2.moveTo(positionx, positiony + 15);
            AlpenFlug.crc2.lineTo(positionx + 20, positiony);
            AlpenFlug.crc2.stroke();
            AlpenFlug.crc2.closePath();
        }
        ;
        moveTheirself(_timeslice) {
            let offset = new AlpenFlug.Vector(this.speed.x, this.speed.y);
            offset.scale(_timeslice);
            this.position.add(offset); //addiert auf position den offset
            let change = false;
            if (this.position.x > AlpenFlug.crc2.canvas.width * 0.001) {
                this.position.x -= AlpenFlug.crc2.canvas.width * 0.001;
                change = false;
            }
            if (this.position.y > AlpenFlug.crc2.canvas.height * 0.001) {
                change = true;
            }
            return change;
        }
    }
    AlpenFlug.Parachutists = Parachutists;
    class Climbers extends Guys {
        drawTheirself() {
            let minY = 400;
            let maxY = 600;
            let positiony = Math.floor(Math.random() * (maxY - minY + 1)) + minY;
            let minX = 5;
            let maxX = 100;
            let positionx = Math.floor(this.position.x * (maxX - minX + 1)) + minX;
            let climbers = [];
            let isUnique;
            do {
                isUnique = true;
                positionx = Math.floor(this.position.x * (maxX - minX + 1)) + minX;
                positiony = Math.floor(this.position.y * (maxY - minY + 1)) + minY;
                for (let i = 0; i < climbers.length; i++) {
                    let existingClimber = climbers[i];
                    let distance = Math.sqrt((existingClimber - positionx) ** 2 + (existingClimber - positiony) ** 2);
                    if (distance < 20) {
                        isUnique = false;
                        break;
                    }
                }
            } while (!isUnique);
            AlpenFlug.crc2.beginPath();
            AlpenFlug.crc2.moveTo(positionx, positiony);
            AlpenFlug.crc2.arc(positionx, positiony, 8, 0, 2 * Math.PI);
            AlpenFlug.crc2.stroke();
            AlpenFlug.crc2.fillStyle = "white";
            AlpenFlug.crc2.fill();
            AlpenFlug.crc2.closePath();
            AlpenFlug.crc2.beginPath();
            AlpenFlug.crc2.moveTo(positionx, positiony + 8);
            AlpenFlug.crc2.lineTo(positionx, positiony + 20);
            AlpenFlug.crc2.moveTo(positionx, positiony + 20);
            AlpenFlug.crc2.lineTo(positionx - 10, positiony + 30);
            AlpenFlug.crc2.moveTo(positionx, positiony + 20);
            AlpenFlug.crc2.lineTo(positionx + 10, positiony + 30);
            AlpenFlug.crc2.stroke();
            AlpenFlug.crc2.closePath();
            AlpenFlug.crc2.beginPath();
            AlpenFlug.crc2.moveTo(positionx, positiony + 15);
            AlpenFlug.crc2.lineTo(positionx - 20, positiony);
            AlpenFlug.crc2.moveTo(positionx, positiony + 15);
            AlpenFlug.crc2.lineTo(positionx + 20, positiony);
            AlpenFlug.crc2.stroke();
            AlpenFlug.crc2.closePath();
            //Rucksack
            AlpenFlug.crc2.beginPath();
            AlpenFlug.crc2.moveTo(positionx, positiony + 10);
            AlpenFlug.crc2.lineTo(positionx + 8, positiony + 10);
            AlpenFlug.crc2.lineTo(positionx + 8, positiony + 20);
            AlpenFlug.crc2.lineTo(positionx - 8, positiony + 20);
            AlpenFlug.crc2.lineTo(positionx - 8, positiony + 10);
            AlpenFlug.crc2.fillStyle = "red";
            AlpenFlug.crc2.fill();
            AlpenFlug.crc2.closePath();
        }
        ;
        moveTheirself(_timeslice) {
            let offset = new AlpenFlug.Vector(this.speed.x, this.speed.y);
            offset.scale(_timeslice);
            this.position.subtract_climb(offset); //addiert auf position den offset
            let change = false;
            if (this.position.x < AlpenFlug.crc2.canvas.width * 0.001) {
                this.position.x += AlpenFlug.crc2.canvas.width * 0.001;
                change = false;
            }
            if (this.position.y < 50 * 0.001) {
                change = true;
            }
            return change;
        }
        ;
    }
    AlpenFlug.Climbers = Climbers;
    class Bumblebees extends MovingObjects {
        drawTheirself() {
            let maxXBee = 800;
            let maxYBee = 540;
            let minXBee = 100;
            let minYBee = 250;
            let randomXBee = Math.floor(this.position.x * (maxXBee - minXBee + 1)) + minXBee;
            let randomYBee = Math.floor(this.position.y * (maxYBee - minYBee + 1)) + minYBee; //Bee Position
            //Körper
            AlpenFlug.crc2.beginPath();
            AlpenFlug.crc2.moveTo(randomXBee, randomYBee);
            AlpenFlug.crc2.ellipse(randomXBee - 60, randomYBee, 60, 30, 0, 0, 2 * Math.PI);
            AlpenFlug.crc2.stroke();
            AlpenFlug.crc2.fillStyle = "HSL(60,90%,50%)";
            AlpenFlug.crc2.fill();
            AlpenFlug.crc2.closePath();
            //Beine
            AlpenFlug.crc2.beginPath();
            AlpenFlug.crc2.moveTo(randomXBee - 90, randomYBee + 26);
            AlpenFlug.crc2.lineTo(randomXBee - 80, randomYBee + 35);
            AlpenFlug.crc2.stroke();
            AlpenFlug.crc2.closePath();
            AlpenFlug.crc2.beginPath();
            AlpenFlug.crc2.moveTo(randomXBee - 80, randomYBee + 28);
            AlpenFlug.crc2.lineTo(randomXBee - 70, randomYBee + 35);
            AlpenFlug.crc2.stroke();
            AlpenFlug.crc2.closePath();
            AlpenFlug.crc2.beginPath();
            AlpenFlug.crc2.moveTo(randomXBee - 50, randomYBee + 29);
            AlpenFlug.crc2.lineTo(randomXBee - 42, randomYBee + 35);
            AlpenFlug.crc2.stroke();
            AlpenFlug.crc2.closePath();
            AlpenFlug.crc2.beginPath();
            AlpenFlug.crc2.moveTo(randomXBee - 40, randomYBee + 28);
            AlpenFlug.crc2.lineTo(randomXBee - 30, randomYBee + 35);
            AlpenFlug.crc2.stroke();
            AlpenFlug.crc2.closePath();
            //Streifen
            AlpenFlug.crc2.beginPath();
            AlpenFlug.crc2.moveTo(randomXBee - 65, randomYBee + 29);
            AlpenFlug.crc2.bezierCurveTo(randomXBee - 35, randomYBee - 5, randomXBee - 45, randomYBee - 8, randomXBee - 65, randomYBee - 30);
            AlpenFlug.crc2.stroke();
            AlpenFlug.crc2.closePath();
            AlpenFlug.crc2.beginPath();
            AlpenFlug.crc2.moveTo(randomXBee - 55, randomYBee + 29);
            AlpenFlug.crc2.bezierCurveTo(randomXBee - 25, randomYBee - 5, randomXBee - 35, randomYBee - 8, randomXBee - 55, randomYBee - 30);
            AlpenFlug.crc2.stroke();
            AlpenFlug.crc2.closePath();
            AlpenFlug.crc2.beginPath();
            AlpenFlug.crc2.moveTo(randomXBee - 35, randomYBee + 27);
            AlpenFlug.crc2.bezierCurveTo(randomXBee - 5, randomYBee - 5, randomXBee - 15, randomYBee - 8, randomXBee - 35, randomYBee - 27);
            AlpenFlug.crc2.stroke();
            // crc2.closePath();
            // crc2.beginPath();
            AlpenFlug.crc2.moveTo(randomXBee - 25, randomYBee + 24);
            AlpenFlug.crc2.bezierCurveTo(randomXBee + 5, randomYBee - 5, randomXBee - 5, randomYBee - 8, randomXBee - 25, randomYBee - 24);
            AlpenFlug.crc2.stroke();
            AlpenFlug.crc2.closePath();
            //Augen
            AlpenFlug.crc2.beginPath();
            AlpenFlug.crc2.moveTo(randomXBee - 90, randomYBee);
            AlpenFlug.crc2.arc(randomXBee - 100, randomYBee, 10, 0, 2 * Math.PI);
            AlpenFlug.crc2.stroke();
            AlpenFlug.crc2.fillStyle = "white";
            AlpenFlug.crc2.fill();
            AlpenFlug.crc2.closePath();
            AlpenFlug.crc2.beginPath();
            AlpenFlug.crc2.moveTo(randomXBee - 75, randomYBee);
            AlpenFlug.crc2.arc(randomXBee - 82, randomYBee, 8, 0, 2 * Math.PI);
            AlpenFlug.crc2.stroke();
            AlpenFlug.crc2.fillStyle = "white";
            AlpenFlug.crc2.fill();
            AlpenFlug.crc2.closePath();
            AlpenFlug.crc2.beginPath();
            AlpenFlug.crc2.moveTo(randomXBee - 90, randomYBee);
            AlpenFlug.crc2.arc(randomXBee - 95, randomYBee, 5, 0, 2 * Math.PI);
            AlpenFlug.crc2.fillStyle = "black";
            AlpenFlug.crc2.fill();
            AlpenFlug.crc2.stroke();
            AlpenFlug.crc2.closePath();
            AlpenFlug.crc2.beginPath();
            AlpenFlug.crc2.moveTo(randomXBee - 80, randomYBee);
            AlpenFlug.crc2.arc(randomXBee - 85, randomYBee, 5, 0, 2 * Math.PI);
            AlpenFlug.crc2.fillStyle = "black";
            AlpenFlug.crc2.fill();
            AlpenFlug.crc2.stroke();
            AlpenFlug.crc2.closePath();
            //Flügel
            AlpenFlug.crc2.beginPath();
            AlpenFlug.crc2.moveTo(randomXBee - 65, randomYBee - 30);
            AlpenFlug.crc2.bezierCurveTo(randomXBee - 70, randomYBee - 80, randomXBee - 80, randomYBee - 24, randomXBee - 65, randomYBee - 30);
            AlpenFlug.crc2.stroke();
            AlpenFlug.crc2.fillStyle = "lightgrey";
            AlpenFlug.crc2.fill();
            AlpenFlug.crc2.closePath();
            AlpenFlug.crc2.beginPath();
            AlpenFlug.crc2.moveTo(randomXBee - 65, randomYBee - 30);
            AlpenFlug.crc2.bezierCurveTo(randomXBee - 60, randomYBee - 80, randomXBee - 50, randomYBee - 24, randomXBee - 55, randomYBee - 30);
            AlpenFlug.crc2.stroke();
            AlpenFlug.crc2.fillStyle = "lightgrey";
            AlpenFlug.crc2.fill();
            AlpenFlug.crc2.closePath();
        }
        ;
        moveTheirself(_timeslice) {
            let offset = new AlpenFlug.Vector(this.speed.x, this.speed.y);
            offset.scale(_timeslice);
            this.position.subtract(offset); //addiert auf position den offset
            if (this.position.x < 0) {
                this.position.x += 1.5;
            }
            if (this.position.y < 0) {
                this.position.y += AlpenFlug.crc2.canvas.height;
            }
            if (this.position.y > AlpenFlug.crc2.canvas.height) {
                this.position.y += 0;
            }
        }
        ;
    }
    AlpenFlug.Bumblebees = Bumblebees;
})(AlpenFlug || (AlpenFlug = {}));
//# sourceMappingURL=movingObjects.js.map