"use strict";
var AlpenFlug;
(function (AlpenFlug) {
    class People {
        type;
        position;
        sizeX;
        sizeY;
        color;
        speed;
        constructor(_type, _position, _size, _color, _movement) {
            // Nur size als parameter bei jirka warum?
            this.type = _type; //also type als extra klasse statt path?
            this.position = new AlpenFlug.Vector(0, 0);
            this.sizeX = _size[0];
            this.sizeY = _size[1];
            this.color = _color;
            this.speed = new AlpenFlug.Vector(0, 0);
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
            //Hier das Zeichnen des Fliegers reinkopieren? 
            //Und dann den Fallschirm, den Rucksack über paths bzw. type hinzufügen???
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
})(AlpenFlug || (AlpenFlug = {}));
//# sourceMappingURL=parachutist.js.map