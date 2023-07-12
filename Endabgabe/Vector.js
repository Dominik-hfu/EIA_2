"use strict";
var EisDealer;
(function (EisDealer) {
    class Vector {
        x;
        y;
        constructor(_x, _y) {
            this.set(_x, _y);
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
    }
    EisDealer.Vector = Vector;
})(EisDealer || (EisDealer = {}));
//# sourceMappingURL=Vector.js.map