"use strict";
var AlpenFlug;
(function (AlpenFlug) {
    class Bumblebee {
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
        }
        draw() {
            // crc2.save();
            // crc2.translate(this.position.x, this.position.y);//Koordinatensystem hier hin
            // crc2.scale(this.sizeX, this.sizeY);
            // crc2.stroke(parachutistPaths[this.type]);
            // crc2.restore();
            for (let bees = 0; bees < 5; bees++) {
                let maxXBee = 800;
                let maxYBee = 540;
                let minXBee = 100;
                let minYBee = 250;
                let randomXBee = Math.floor(Math.random() * (maxXBee - minXBee + 1)) + minXBee;
                let randomYBee = Math.floor(Math.random() * (maxYBee - minYBee + 1)) + minYBee; //Bee Position
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
                AlpenFlug.crc2.closePath();
                AlpenFlug.crc2.beginPath();
                AlpenFlug.crc2.moveTo(randomXBee - 25, randomYBee + 24);
                AlpenFlug.crc2.bezierCurveTo(randomXBee + 5, randomYBee - 5, randomXBee - 5, randomYBee - 8, randomXBee - 25, randomYBee - 24);
                AlpenFlug.crc2.stroke();
                // crc2.fillStyle="black";
                // crc2.fill();
                AlpenFlug.crc2.closePath();
                //fill???
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
    AlpenFlug.Bumblebee = Bumblebee;
})(AlpenFlug || (AlpenFlug = {}));
//# sourceMappingURL=bumblebee.js.map