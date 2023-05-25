"use strict";
var AlpenFlug;
(function (AlpenFlug) {
    class Parachutist {
        type;
        positionX;
        positionY;
        sizeX;
        sizeY;
        color;
        movementX;
        movementY;
        constructor(_type, _position, _size, _color, _movement) {
            this.type = _type;
            this.positionX = _position[0];
            this.positionY = _position[1];
            this.sizeX = _size[0];
            this.sizeY = _size[1];
            this.color = _color;
            this.movementX = AlpenFlug.Vector;
            this.movementY = AlpenFlug.Vector;
        }
        draw() { }
        ;
        movement() { }
        ;
    }
    AlpenFlug.Parachutist = Parachutist;
})(AlpenFlug || (AlpenFlug = {}));
//# sourceMappingURL=parachutist.js.map