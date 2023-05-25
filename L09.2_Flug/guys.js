"use strict";
var AlpenFlug;
(function (AlpenFlug) {
    class People {
        position;
        sizeX;
        sizeY;
        color;
        speed;
        constructor(_position, _size, _color, _speed) {
            this.position = _position;
            this.sizeX = _size[0];
            this.sizeY = _size[1];
            this.color = _color;
            this.speed = _speed;
            // this.speed.random(100,200); bei Jirka
        }
        drawPeople() {
            // crc2.save();
            // crc2.translate(this.position.x, this.position.y);//Koordinatensystem hier hin
            // crc2.scale(this.sizeX, this.sizeY);
            // crc2.stroke(parachutistPaths[this.type]);
            // crc2.restore();
            let minX = 200;
            let maxX = 700;
            let positionx = Math.floor(this.position.x * (maxX - minX + 1)) + minX;
            // let positionx: number = Math.floor(Math.random() * (maxX - minX + 1)) + minX;
            let minY = 600;
            let maxY = 700;
            let positiony = Math.floor(this.position.y * (maxY - minY + 1)) + minY;
            // let positiony: number = Math.floor(Math.random() * (maxY - minY + 1)) + minY;
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
        movement(_timeslice) {
            let offset = new AlpenFlug.Vector(this.speed.x, this.speed.y);
            offset.scale(_timeslice);
            this.position.subtract(offset); //addiert auf position den offset
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
    AlpenFlug.People = People;
    class Parachutist extends People {
        drawParachutes() {
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
        movement_parachute(_timeslice) {
            let offset = new AlpenFlug.Vector(this.speed.x, this.speed.y);
            offset.scale(_timeslice);
            this.position.add(offset); //addiert auf position den offset
            let change = false;
            // if (this.position.x < 0){
            //     this.position.x += crc2.canvas.width;
            // }
            // if (this.position.y < 0){
            //     this.position.y += crc2.canvas.height;
            // }
            if (this.position.x > AlpenFlug.crc2.canvas.width * 0.001) {
                this.position.x -= AlpenFlug.crc2.canvas.width * 0.001;
                change = false;
            }
            if (this.position.y > AlpenFlug.crc2.canvas.height * 0.001) {
                change = true;
            }
            return change;
        }
        ;
    }
    AlpenFlug.Parachutist = Parachutist;
    let minY = 400;
    let maxY = 600;
    let positiony = Math.floor(Math.random() * (maxY - minY + 1)) + minY;
    class Climber extends People {
        drawClimber() {
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
        movement_climber(_timeslice) {
            let offset = new AlpenFlug.Vector(this.speed.x, this.speed.y);
            offset.scale(_timeslice);
            this.position.subtract_climb(offset); //addiert auf position den offset
            let change = false;
            // if (this.position.x < 0){
            //     this.position.x += crc2.canvas.width;
            // }
            // if (this.position.y < 0){
            //     this.position.y += crc2.canvas.height;
            // }
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
    AlpenFlug.Climber = Climber;
})(AlpenFlug || (AlpenFlug = {}));
//# sourceMappingURL=guys.js.map