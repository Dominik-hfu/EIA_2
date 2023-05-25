"use strict";
var AlpenFlug;
(function (AlpenFlug) {
    class Bumblebee {
        type;
        positionX;
        positionY;
        sizeX;
        sizeY;
        color;
        movement;
        constructor(_type, _position, _size, _color, _movement) {
            this.type = _type;
            this.positionX = _position[0];
            this.positionY = _position[1];
            this.sizeX = _size[0];
            this.sizeY = _size[1];
            this.color = _color;
            this.movement = _movement;
        }
    }
    AlpenFlug.Bumblebee = Bumblebee;
})(AlpenFlug || (AlpenFlug = {}));
//# sourceMappingURL=bumblebee.js.map