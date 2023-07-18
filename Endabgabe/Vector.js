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
            this.y = _y; //gibt/setzt position
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
        scale(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        } //für move methoden
    }
    EisDealer.Vector = Vector;
})(EisDealer || (EisDealer = {}));
//# sourceMappingURL=Vector.js.map