"use strict";
var AlpenFlug;
(function (AlpenFlug) {
    class Parachutist {
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
    AlpenFlug.Parachutist = Parachutist;
})(AlpenFlug || (AlpenFlug = {}));
//# sourceMappingURL=parachutist.js.map