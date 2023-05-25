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
        draw() {
            // crc2.save();
            // crc2.translate(this.position.x, this.position.y);//Koordinatensystem hier hin
            // crc2.scale(this.sizeX, this.sizeY);
            // crc2.stroke(parachutistPaths[this.type]);
            // crc2.restore();
            let minX = 200;
            let maxX = 1000;
            let randomX = Math.floor(Math.random() * (maxX - minX + 1)) + minX;
            let minY = 100;
            let maxY = 500;
            let randomY = Math.floor(Math.random() * (maxY - minY + 1)) + minY;
            AlpenFlug.crc2.beginPath();
            AlpenFlug.crc2.moveTo(randomX, randomY);
            AlpenFlug.crc2.arc(randomX, randomY, 8, 0, 2 * Math.PI);
            AlpenFlug.crc2.stroke();
            AlpenFlug.crc2.fillStyle = "white";
            AlpenFlug.crc2.fill();
            AlpenFlug.crc2.closePath();
            AlpenFlug.crc2.beginPath();
            AlpenFlug.crc2.moveTo(randomX, randomY + 8);
            AlpenFlug.crc2.lineTo(randomX, randomY + 20);
            AlpenFlug.crc2.moveTo(randomX, randomY + 20);
            AlpenFlug.crc2.lineTo(randomX - 10, randomY + 30);
            AlpenFlug.crc2.moveTo(randomX, randomY + 20);
            AlpenFlug.crc2.lineTo(randomX + 10, randomY + 30);
            AlpenFlug.crc2.stroke();
            AlpenFlug.crc2.closePath();
            AlpenFlug.crc2.beginPath();
            AlpenFlug.crc2.moveTo(randomX, randomY + 15);
            AlpenFlug.crc2.lineTo(randomX - 20, randomY);
            AlpenFlug.crc2.moveTo(randomX, randomY + 15);
            AlpenFlug.crc2.lineTo(randomX + 20, randomY);
            AlpenFlug.crc2.stroke();
            AlpenFlug.crc2.closePath();
        }
        ;
        movement(_timeslice) {
            let offset = new AlpenFlug.Vector(this.speed.x, this.speed.y);
            offset.scale(_timeslice);
            this.position.add(offset); //addiert auf position den offset
            if (this.position.x < 0)
                this.position.x += AlpenFlug.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += AlpenFlug.crc2.canvas.height;
            if (this.position.x > AlpenFlug.crc2.canvas.width)
                this.position.x -= AlpenFlug.crc2.canvas.width;
            if (this.position.y > AlpenFlug.crc2.canvas.height)
                this.position.y -= AlpenFlug.crc2.canvas.height;
        }
        ;
    }
    AlpenFlug.People = People;
    class Parachutist extends People {
        drawParachutes() {
            let minX = 200;
            let maxX = 1000;
            let randomX = Math.floor(Math.random() * (maxX - minX + 1)) + minX;
            let minY = 100;
            let maxY = 500;
            let randomY = Math.floor(Math.random() * (maxY - minY + 1)) + minY;
            // Seile
            AlpenFlug.crc2.beginPath();
            AlpenFlug.crc2.moveTo(randomX - 3, randomY + 10);
            AlpenFlug.crc2.lineTo(randomX - 25, randomY - 20);
            AlpenFlug.crc2.stroke();
            AlpenFlug.crc2.closePath();
            AlpenFlug.crc2.beginPath();
            AlpenFlug.crc2.moveTo(randomX + 3, randomY + 10);
            AlpenFlug.crc2.lineTo(randomX + 25, randomY - 20);
            AlpenFlug.crc2.stroke();
            AlpenFlug.crc2.closePath();
            AlpenFlug.crc2.beginPath();
            AlpenFlug.crc2.moveTo(randomX + 3, randomY + 10);
            AlpenFlug.crc2.lineTo(randomX + 10, randomY - 20);
            AlpenFlug.crc2.stroke();
            AlpenFlug.crc2.closePath();
            AlpenFlug.crc2.beginPath();
            AlpenFlug.crc2.moveTo(randomX - 3, randomY + 10);
            AlpenFlug.crc2.lineTo(randomX - 10, randomY - 20);
            AlpenFlug.crc2.stroke();
            AlpenFlug.crc2.closePath();
            //Schirm
            AlpenFlug.crc2.beginPath();
            AlpenFlug.crc2.moveTo(randomX - 25, randomY - 20);
            AlpenFlug.crc2.bezierCurveTo(randomX - 10, randomY - 20, randomX + 10, randomY - 20, randomX + 25, randomY - 20);
            AlpenFlug.crc2.fill();
            AlpenFlug.crc2.fillStyle = "HSL(39,100%,50%)";
            AlpenFlug.crc2.stroke();
            AlpenFlug.crc2.closePath();
            AlpenFlug.crc2.beginPath();
            AlpenFlug.crc2.arc(randomX, randomY - 20, 25, Math.PI, 2 * Math.PI);
            AlpenFlug.crc2.lineTo(randomX - 25, randomY - 20);
            AlpenFlug.crc2.fill();
            AlpenFlug.crc2.stroke();
            AlpenFlug.crc2.closePath();
            AlpenFlug.crc2.beginPath();
            AlpenFlug.crc2.moveTo(randomX, randomY);
            AlpenFlug.crc2.arc(randomX, randomY, 8, 0, 2 * Math.PI);
            AlpenFlug.crc2.stroke();
            AlpenFlug.crc2.fillStyle = "white";
            AlpenFlug.crc2.fill();
            AlpenFlug.crc2.closePath();
            AlpenFlug.crc2.beginPath();
            AlpenFlug.crc2.moveTo(randomX, randomY + 8);
            AlpenFlug.crc2.lineTo(randomX, randomY + 20);
            AlpenFlug.crc2.moveTo(randomX, randomY + 20);
            AlpenFlug.crc2.lineTo(randomX - 10, randomY + 30);
            AlpenFlug.crc2.moveTo(randomX, randomY + 20);
            AlpenFlug.crc2.lineTo(randomX + 10, randomY + 30);
            AlpenFlug.crc2.stroke();
            AlpenFlug.crc2.closePath();
            AlpenFlug.crc2.beginPath();
            AlpenFlug.crc2.moveTo(randomX, randomY + 15);
            AlpenFlug.crc2.lineTo(randomX - 20, randomY);
            AlpenFlug.crc2.moveTo(randomX, randomY + 15);
            AlpenFlug.crc2.lineTo(randomX + 20, randomY);
            AlpenFlug.crc2.stroke();
            AlpenFlug.crc2.closePath();
        }
    }
    AlpenFlug.Parachutist = Parachutist;
    //class climber (rucksack)
    //class walker
})(AlpenFlug || (AlpenFlug = {}));
//# sourceMappingURL=guys.js.map