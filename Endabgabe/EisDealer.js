"use strict";
var EisDealer;
(function (EisDealer) {
    class Eisdealer {
        position; //PROTECTED EVTL: FEHLER!!!!!!!!!BZW VEKTOR unnötig????
        constructor(_position) {
            this.position = _position;
        }
        draw() {
            EisDealer.crc2.beginPath();
            EisDealer.crc2.arc(475, 215, 40, 0, 2 * Math.PI);
            EisDealer.crc2.fillStyle = "hsl(50, 98%, 88%)";
            EisDealer.crc2.fill();
            EisDealer.crc2.stroke();
            EisDealer.crc2.closePath(); //Kopf
            EisDealer.crc2.beginPath();
            EisDealer.crc2.arc(460, 210, 10, 0, 2 * Math.PI);
            EisDealer.crc2.fillStyle = "black";
            EisDealer.crc2.fill();
            EisDealer.crc2.closePath();
            EisDealer.crc2.beginPath();
            EisDealer.crc2.arc(490, 210, 10, 0, 2 * Math.PI);
            EisDealer.crc2.fillStyle = "black";
            EisDealer.crc2.fill();
            EisDealer.crc2.closePath(); //Augen
            EisDealer.crc2.beginPath();
            EisDealer.crc2.bezierCurveTo(460, 230, 475, 240, 490, 230);
            EisDealer.crc2.strokeStyle = "black";
            EisDealer.crc2.stroke();
            EisDealer.crc2.closePath(); //Mund
            EisDealer.crc2.beginPath();
            EisDealer.crc2.moveTo(475, 120);
            EisDealer.crc2.lineTo(515, 200);
            EisDealer.crc2.lineTo(435, 200);
            EisDealer.crc2.fillStyle = "white";
            EisDealer.crc2.fill();
            EisDealer.crc2.closePath();
            EisDealer.crc2.stroke(); //Mütze
        }
        ;
        startDay() {
        }
        ;
        createIce() {
        }
        ;
        serveIce() {
        }
        ;
        closeStore() {
        }
        ; //ALLE METHODEN BENÖTIGT???
    }
    EisDealer.Eisdealer = Eisdealer;
})(EisDealer || (EisDealer = {}));
//# sourceMappingURL=EisDealer.js.map