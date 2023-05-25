"use strict";
var AlpenFlug;
(function (AlpenFlug) {
    class Bumblebee {
        type;
        position;
        sizeX;
        sizeY;
        color;
        speed;
        constructor(_type, _position, _size, _color, _movement) {
            // Parameter???
            this.type = _type;
            this.position = new AlpenFlug.Vector(0, 0);
            this.sizeX = _size[0];
            this.sizeY = _size[1];
            this.color = _color;
            this.speed = new AlpenFlug.Vector(0, 0);
        }
        draw() {
            AlpenFlug.crc2.save();
            AlpenFlug.crc2.translate(this.position.x, this.position.y); //Koordinatensystem hier hin
            AlpenFlug.crc2.scale(this.sizeX, this.sizeY);
            AlpenFlug.crc2.stroke(AlpenFlug.parachutistPaths[this.type]);
            AlpenFlug.crc2.restore();
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
    AlpenFlug.Bumblebee = Bumblebee;
})(AlpenFlug || (AlpenFlug = {}));
//# sourceMappingURL=bumblebee.js.map