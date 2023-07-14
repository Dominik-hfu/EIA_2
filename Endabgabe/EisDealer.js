"use strict";
var EisDealer;
(function (EisDealer) {
    class Eisdealer {
        position;
        constructor(_position) {
            this.position = _position;
        }
        draw() {
            EisDealer.crc2.beginPath();
            EisDealer.crc2.arc(this.position.x, this.position.y, 40, 0, 2 * Math.PI);
            EisDealer.crc2.fillStyle = "hsl(50, 98%, 88%)";
            EisDealer.crc2.fill();
            EisDealer.crc2.stroke();
            EisDealer.crc2.closePath(); //Kopf
            EisDealer.crc2.beginPath();
            EisDealer.crc2.arc(this.position.x - 15, this.position.y - 5, 10, 0, 2 * Math.PI);
            EisDealer.crc2.fillStyle = "black";
            EisDealer.crc2.fill();
            EisDealer.crc2.closePath();
            EisDealer.crc2.beginPath();
            EisDealer.crc2.arc(this.position.x + 15, this.position.y - 5, 10, 0, 2 * Math.PI);
            EisDealer.crc2.fillStyle = "black";
            EisDealer.crc2.fill();
            EisDealer.crc2.closePath(); //Augen
            EisDealer.crc2.beginPath();
            EisDealer.crc2.bezierCurveTo(this.position.x - 15, this.position.y + 15, this.position.x, this.position.y + 25, this.position.x + 15, this.position.y + 15);
            EisDealer.crc2.strokeStyle = "black";
            EisDealer.crc2.stroke();
            EisDealer.crc2.closePath(); //Mund
            EisDealer.crc2.beginPath();
            EisDealer.crc2.moveTo(this.position.x, this.position.y - 105);
            EisDealer.crc2.lineTo(this.position.x + 40, this.position.y - 15);
            EisDealer.crc2.lineTo(this.position.x - 40, this.position.y - 15);
            EisDealer.crc2.fillStyle = "white";
            EisDealer.crc2.fill();
            EisDealer.crc2.closePath();
            EisDealer.crc2.stroke(); //Mütze
        }
        ;
    }
    EisDealer.Eisdealer = Eisdealer;
})(EisDealer || (EisDealer = {}));
//# sourceMappingURL=EisDealer.js.map