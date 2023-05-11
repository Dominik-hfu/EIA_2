"use strict";
/*
Aufgabe: <L08.1_Alpenflug>
Name: <Dominik Putz>
Matrikel: <272244>
Datum: <11.05.2023>
Quellen: <->
*/
var Alpen;
(function (Alpen) {
    window.addEventListener("load", handleload);
    let crc2;
    let canvas = document.querySelector("canvas");
    function handleload(_event) {
        crc2 = canvas.getContext("2d");
        background();
        mountains();
        sun();
        cloud({ x: 100, y: 100 });
        mountain();
        ellipse();
        kiosk();
    }
    ;
    function kiosk() {
        crc2.beginPath();
        crc2.moveTo(700, 650);
        crc2.lineTo(800, 800);
        crc2.lineTo(850, 650);
        crc2.lineTo(850, 500);
        crc2.lineTo(800, 520);
        crc2.strokeStyle = "black";
        crc2.fillStyle = "white";
        crc2.fill();
        crc2.closePath();
    }
    ;
    function ellipse() {
        let centerX = 550; // x-Koordinate des Mittelpunkts der Ellipse
        let centerY = 650; // y-Koordinate des Mittelpunkts der Ellipse
        let minRadiusX = 120; // Halbachse der Ellipse in x-Richtung
        let maxRadiusX = 140; // Halbachse der Ellipse in x-Richtung
        let minRadiusY = 10; // Halbachse der Ellipse in y-Richtung
        let maxRadiusY = 30; // Halbachse der Ellipse in y-Richtung
        let randomXRadius = Math.floor(Math.random() * (maxRadiusX - minRadiusX + 1)) + minRadiusX;
        let randomYRadius = Math.floor(Math.random() * (maxRadiusY - minRadiusY + 1)) + minRadiusY;
        let gradient = crc2.createRadialGradient(centerX, centerY, randomXRadius, centerX, centerY, maxRadiusY);
        gradient.addColorStop(0, "HSL(360,0%,96%)");
        gradient.addColorStop(1, "HSL(348,83%,47%)");
        let startAngle = 0;
        let endAngle = 2 * Math.PI;
        for (let circle = 0; circle < 6; circle++) {
            let radiusChange = 4 * circle; // jede Ellipse bekommt einen kleineren Radius
            crc2.beginPath();
            crc2.ellipse(centerX, centerY, randomXRadius + 20 - radiusChange, randomYRadius - radiusChange, 0, startAngle, endAngle);
            crc2.stroke();
            crc2.fillStyle = "whitesmoke";
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.ellipse(centerX, centerY, randomXRadius - radiusChange, randomYRadius - radiusChange, 0, startAngle, endAngle);
            crc2.stroke();
            crc2.fillStyle = "red";
            crc2.fill();
            crc2.closePath();
        }
    }
    ;
    function mountain() {
        let minX = 200;
        let maxX = 400;
        let randomX = Math.floor(Math.random() * (maxX - minX + 1)) + minX;
        let gradient = crc2.createLinearGradient(0, 100, 0, crc2.canvas.height);
        gradient.addColorStop(0, "HSL(360,0%,100%)");
        gradient.addColorStop(1, "HSL(360,0%,20%)");
        crc2.beginPath();
        crc2.moveTo(0, 200);
        crc2.lineTo(randomX, 600);
        crc2.lineTo(0, 600);
        crc2.fillStyle = gradient;
        crc2.fill();
        crc2.closePath();
    }
    ;
    function cloud(position) {
        let minSize = { x: 100, y: 100 };
        let maxSize = { x: 250, y: 250 };
        let size = {
            x: minSize.x + Math.random() * (maxSize.x - minSize.x),
            y: minSize.y + Math.random() * (maxSize.y - minSize.y)
        };
        let circles = 20;
        let circleRadius = 50;
        let particle = new Path2D();
        let cloudGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, circleRadius);
        particle.arc(0, 0, circleRadius, 0, 2 * Math.PI);
        cloudGradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        cloudGradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        crc2.save();
        crc2.translate(position.x, position.y);
        for (let circle = 0; circle < circles; circle++) {
            crc2.save();
            let x = Math.random() * size.x - size.x / 2;
            let y = Math.random() * size.y - size.y / 2;
            crc2.translate(x, y);
            crc2.fillStyle = cloudGradient;
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }
    function sun() {
        let minSunRadius = 20;
        let maxSunRadius = 50;
        let sunHeight = Math.floor(Math.random() * (maxSunRadius - minSunRadius + 1)) + maxSunRadius;
        let sunX = 900;
        let sunY = 50;
        let gradient = crc2.createRadialGradient(sunX, sunY, sunHeight + 60, sunX, sunY, sunHeight);
        gradient.addColorStop(0, "HSLA(60, 100%, 50%, 0)");
        gradient.addColorStop(1, "HSLA(60, 100%, 90%, 1)");
        crc2.moveTo(sunX, sunY);
        crc2.beginPath();
        crc2.arc(sunX, sunY, sunHeight + 60, 0, 2 * Math.PI);
        crc2.strokeStyle = "transparent";
        crc2.fillStyle = gradient;
        crc2.fill();
        crc2.closePath();
        crc2.moveTo(sunX, sunY);
        crc2.beginPath();
        crc2.arc(sunX, sunY, sunHeight, 0, 2 * Math.PI);
        crc2.strokeStyle = "transparent";
        crc2.fillStyle = gradient;
        crc2.stroke();
        crc2.closePath();
    }
    ;
    function mountains() {
        let maxPeaks = 8;
        let minPeaks = 5;
        let peakHeightMin = 100;
        let peakHeightMax = 200;
        let startX = 0;
        let endX = 1000;
        let baseY = 450;
        crc2.beginPath();
        crc2.moveTo(startX, baseY);
        // Berechnen der Anzahl der Spitzen
        let numPeaks = Math.floor(Math.random() * (maxPeaks - minPeaks + 1)) + minPeaks;
        // Berechnen des Abstands zwischen den Spitzen
        let peakDistance = (endX - startX) / numPeaks;
        // Zeichnen der Zickzack-Linie
        for (let i = 0; i < numPeaks; i++) {
            // Berechnen der zufälligen Höhe für die aktuelle Spitze
            let peakHeight = Math.floor(Math.random() * (peakHeightMax - peakHeightMin + 1)) + peakHeightMin;
            // Berechnen der x-Koordinate für die aktuelle Spitze
            let peakX = startX + i * peakDistance;
            // Berechnen der y-Koordinate für die aktuelle Spitze
            let peakY = baseY - peakHeight + Math.floor(Math.random() * 51) - 25;
            // Zeichnen der Linie zur aktuellen Spitze
            crc2.lineTo(peakX, peakY);
            // Zeichnen der Linie zur nächsten Basislinie
            if (i < numPeaks - 1) {
                crc2.lineTo(peakX + peakDistance / 2, baseY);
            }
        }
        // Zeichnen der Linie bis zum Ende
        crc2.lineTo(endX, baseY);
        let gradient = crc2.createLinearGradient(0, 100, 0, crc2.canvas.height);
        gradient.addColorStop(0, "HSL(360,0%,100%)");
        gradient.addColorStop(1, "HSL(360,0%,20%)");
        // Linie zeichnen
        crc2.strokeStyle = "transparent";
        crc2.fillStyle = gradient;
        crc2.fill();
        crc2.closePath();
    }
    ;
    function background() {
        let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "#51d9ed");
        gradient.addColorStop(.25, "HSL(220, 80%, 80%)");
        gradient.addColorStop(1, "HSL(129,60%,37%)");
        crc2.beginPath();
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.closePath();
    }
    ;
    //mit translate verschiebt man das allgemeine koordinatensystem vom ursprung 0,0 zu einer bestimmten position
    // Koordinatensystem könnte auch mit *(-1) umgekehrt werden
    // In der Funktion muss die Translation am Ende wieder Rückgängig gemacht werden mit safe und restore ansonsten addieren sich die Koordinatensysteme auf
    // Oder mit reset transform
})(Alpen || (Alpen = {}));
//# sourceMappingURL=script.js.map