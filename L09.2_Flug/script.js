"use strict";
/*
Aufgabe: <L09.2_Alpenflug>
Name: <Dominik Putz>
Matrikel: <272244>
Datum: <25.05.2023>
Quellen: <->
*/
var AlpenFlug;
(function (AlpenFlug) {
    window.addEventListener("load", handleload);
    let canvas = document.querySelector("canvas");
    let back;
    function handleload(_event) {
        AlpenFlug.crc2 = canvas.getContext("2d");
        background();
        mountains();
        sun();
        cloud({ x: 100, y: 100 });
        let x_mountain = mountain();
        kiosk();
        ellipse();
        windsack();
        back = AlpenFlug.crc2.getImageData(0, 0, canvas.width, canvas.height);
        let parachutelist = [];
        for (let i = 0; i < 10; i++) {
            parachutelist[i] = new AlpenFlug.Parachutist(new AlpenFlug.Vector((Math.floor(Math.random() * (1000 - 0 + 1)) + 0) * 0.001, (Math.floor(Math.random() * (500 - 100 + 1)) + 100) * 0.001), new AlpenFlug.Vector(0.1, 0.1));
        }
        let climberList = [];
        for (let i = 0; i < 5; i++) {
            climberList[i] = new AlpenFlug.Climber(new AlpenFlug.Vector((Math.floor(Math.random() * ((x_mountain - 100) - 5 + 1)) + 5) * 0.001, 900 * 0.001), new AlpenFlug.Vector(0.1, 0.2));
        }
        let peopleList = [];
        for (let i = 0; i < 4; i++) {
            peopleList[i] = new AlpenFlug.People(new AlpenFlug.Vector((Math.floor(Math.random() * (700 - 200 + 1)) + 200) * 0.001, (Math.floor(Math.random() * (700 - 600 + 1)) + 600) * 0.001), new AlpenFlug.Vector(0.5, 0.5));
        }
        let bumblebeeList = [];
        for (let i = 0; i < 1; i++) {
            bumblebeeList[i] = new AlpenFlug.Bumblebee(new AlpenFlug.Vector(0, 0), new AlpenFlug.Vector(0.2, 0.3));
        }
        window.setInterval(() => {
            AlpenFlug.crc2.putImageData(back, 0, 0);
            for (let i = 0; i < parachutelist.length; i++) {
                let parachutist = parachutelist[i];
                let change = parachutist.movement_parachute(0.1);
                if (change == true) {
                    parachutelist.splice(i, 1);
                    peopleList.push(new AlpenFlug.People(parachutist.position, new AlpenFlug.Vector(Math.floor(Math.random() * (0.7 - 0.5 + 1)) + 0.5, Math.floor(Math.random() * (0.7 - 0.5 + 1)) + 0.5)));
                }
                parachutist.drawParachutes();
            }
            for (let i = 0; i < climberList.length; i++) {
                let climber = climberList[i];
                let change = climber.movement_climber(0.1);
                if (change == true) {
                    climberList.splice(i, 1);
                    parachutelist.push(new AlpenFlug.Parachutist(climber.position, new AlpenFlug.Vector(Math.floor(Math.random() * (0.3 - 0.1 + 1)) + 0.1, Math.floor(Math.random() * (0.3 - 0.1 + 1)) + 0.1)));
                }
                climber.drawClimber();
            }
            for (let i = 0; i < peopleList.length; i++) {
                let people = peopleList[i];
                let change = people.movement(0.1);
                if (change == true) {
                    peopleList.splice(i, 1);
                    climberList.push(new AlpenFlug.Climber(new AlpenFlug.Vector((Math.floor(Math.random() * ((x_mountain - 100) - 5 + 1)) + 5) * 0.001, 900 * 0.001), new AlpenFlug.Vector(Math.floor(Math.random() * (0.4 - 0.2 + 1)) + 0.2, Math.floor(Math.random() * (0.4 - 0.2 + 1)) + 0.2)));
                }
                people.drawPeople();
            }
            for (let bumblebee of bumblebeeList) {
                bumblebee.movement(0.05);
                bumblebee.drawBumblebee();
            }
        }, 100); //alle 500ms wird aktualisiert
    }
    ;
    //img data hier um hintergrund zu speichern
    //mehrere vektoren hier im skript anlegen um mehrere unterschiedliche bewegungen zu animieren
    //random vektoren
    // ab gewissem y wert nach oben bzw unten fliegen 
    // ab gewissen y wert type ändern von parachutist zu climber oder läufer
    // jedes Bild wird über das alte gemalt
    function windsack() {
        AlpenFlug.crc2.beginPath();
        AlpenFlug.crc2.moveTo(650, 551);
        AlpenFlug.crc2.bezierCurveTo(670, 560, 690, 544, 710, 542);
        AlpenFlug.crc2.stroke();
        AlpenFlug.crc2.closePath();
        AlpenFlug.crc2.moveTo(710, 542);
        AlpenFlug.crc2.bezierCurveTo(710, 527, 670, 545, 650, 531);
        AlpenFlug.crc2.lineTo(650, 551);
        AlpenFlug.crc2.fillStyle = "hsl(348,83%,47%)";
        AlpenFlug.crc2.stroke();
        AlpenFlug.crc2.fill();
        AlpenFlug.crc2.closePath();
        AlpenFlug.crc2.beginPath();
        AlpenFlug.crc2.moveTo(650, 600);
        AlpenFlug.crc2.lineTo(650, 550);
        AlpenFlug.crc2.stroke();
        AlpenFlug.crc2.closePath();
        AlpenFlug.crc2.beginPath();
        AlpenFlug.crc2.ellipse(650, 541, 5, 10, 0, 0, 2 * Math.PI);
        AlpenFlug.crc2.fillStyle = "hsl(348,83%,47%)";
        AlpenFlug.crc2.fill();
        AlpenFlug.crc2.stroke();
        AlpenFlug.crc2.closePath();
    }
    ;
    function kiosk() {
        //Gebäude
        AlpenFlug.crc2.beginPath();
        AlpenFlug.crc2.moveTo(720, 650);
        AlpenFlug.crc2.lineTo(820, 680);
        AlpenFlug.crc2.lineTo(870, 650);
        AlpenFlug.crc2.lineTo(870, 580);
        AlpenFlug.crc2.lineTo(840, 520);
        AlpenFlug.crc2.lineTo(720, 580);
        AlpenFlug.crc2.lineTo(720, 650);
        AlpenFlug.crc2.strokeStyle = "black";
        AlpenFlug.crc2.stroke();
        AlpenFlug.crc2.fillStyle = "hsl(348,83%,47%)";
        AlpenFlug.crc2.fill();
        AlpenFlug.crc2.closePath();
        AlpenFlug.crc2.beginPath();
        AlpenFlug.crc2.moveTo(820, 680);
        AlpenFlug.crc2.lineTo(820, 610);
        AlpenFlug.crc2.lineTo(870, 580);
        AlpenFlug.crc2.strokeStyle = "black";
        AlpenFlug.crc2.stroke();
        AlpenFlug.crc2.fillStyle = "hsl(348,83%,47%)";
        AlpenFlug.crc2.fill();
        AlpenFlug.crc2.closePath();
        AlpenFlug.crc2.beginPath();
        AlpenFlug.crc2.moveTo(820, 610);
        AlpenFlug.crc2.lineTo(790, 545);
        AlpenFlug.crc2.strokeStyle = "black";
        AlpenFlug.crc2.stroke();
        AlpenFlug.crc2.closePath();
        //Markise
        AlpenFlug.crc2.beginPath();
        AlpenFlug.crc2.moveTo(820, 610);
        AlpenFlug.crc2.lineTo(720, 580);
        AlpenFlug.crc2.lineTo(700, 610);
        AlpenFlug.crc2.lineTo(800, 640);
        AlpenFlug.crc2.lineTo(820, 610);
        AlpenFlug.crc2.fillStyle = "HSL(360,0%,80%)";
        AlpenFlug.crc2.fill();
        AlpenFlug.crc2.closePath();
    }
    ;
    function ellipse() {
        let centerX = 550; // x-Koordinate des Mittelpunkts der Ellipse
        let centerY = 650; // y-Koordinate des Mittelpunkts der Ellipse
        let minRadiusX = 120; // Halbachse in X-Richtung
        let maxRadiusX = 140;
        let minRadiusY = 10; // Halbachse in Y-Richtung
        let maxRadiusY = 30;
        let randomXRadius = Math.floor(Math.random() * (maxRadiusX - minRadiusX + 1)) + minRadiusX;
        let randomYRadius = Math.floor(Math.random() * (maxRadiusY - minRadiusY + 1)) + minRadiusY;
        let gradient = AlpenFlug.crc2.createRadialGradient(centerX, centerY, randomXRadius, centerX, centerY, maxRadiusY);
        gradient.addColorStop(0, "HSL(360,0%,96%)");
        gradient.addColorStop(1, "HSL(348,83%,47%)");
        let startAngle = 0;
        let endAngle = 2 * Math.PI;
        AlpenFlug.crc2.beginPath();
        AlpenFlug.crc2.ellipse(centerX, centerY, randomXRadius, randomYRadius, 0, startAngle, endAngle);
        AlpenFlug.crc2.stroke();
        AlpenFlug.crc2.fillStyle = "HSL(84,100%,65%)";
        AlpenFlug.crc2.fill();
        AlpenFlug.crc2.closePath();
    }
    ;
    function mountain() {
        let minX = 200;
        let maxX = 400;
        let randomX = Math.floor(Math.random() * (maxX - minX + 1)) + minX;
        let gradient = AlpenFlug.crc2.createLinearGradient(0, 100, 0, AlpenFlug.crc2.canvas.height);
        gradient.addColorStop(0, "HSL(360,0%,100%)");
        gradient.addColorStop(1, "HSL(360,0%,20%)");
        AlpenFlug.crc2.beginPath();
        AlpenFlug.crc2.moveTo(0, 200);
        AlpenFlug.crc2.lineTo(randomX, 600);
        AlpenFlug.crc2.lineTo(0, 600);
        AlpenFlug.crc2.fillStyle = gradient;
        AlpenFlug.crc2.fill();
        AlpenFlug.crc2.closePath();
        return maxX;
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
        let cloudGradient = AlpenFlug.crc2.createRadialGradient(0, 0, 0, 0, 0, circleRadius);
        particle.arc(0, 0, circleRadius, 0, 2 * Math.PI);
        cloudGradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        cloudGradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        AlpenFlug.crc2.save();
        AlpenFlug.crc2.translate(position.x, position.y);
        for (let circle = 0; circle < circles; circle++) {
            AlpenFlug.crc2.save();
            let x = Math.random() * size.x - size.x / 2;
            let y = Math.random() * size.y - size.y / 2;
            AlpenFlug.crc2.translate(x, y);
            AlpenFlug.crc2.fillStyle = cloudGradient;
            AlpenFlug.crc2.fill(particle);
            AlpenFlug.crc2.restore();
        }
        AlpenFlug.crc2.restore();
    }
    function sun() {
        let minSunRadius = 20;
        let maxSunRadius = 50;
        let sunHeight = Math.floor(Math.random() * (maxSunRadius - minSunRadius + 1)) + maxSunRadius;
        let sunX = 900;
        let sunY = 50;
        let gradient = AlpenFlug.crc2.createRadialGradient(sunX, sunY, sunHeight + 60, sunX, sunY, sunHeight);
        gradient.addColorStop(0, "HSLA(60, 100%, 50%, 0)");
        gradient.addColorStop(1, "HSLA(60, 100%, 90%, 1)");
        AlpenFlug.crc2.moveTo(sunX, sunY);
        AlpenFlug.crc2.beginPath();
        AlpenFlug.crc2.arc(sunX, sunY, sunHeight + 60, 0, 2 * Math.PI);
        AlpenFlug.crc2.strokeStyle = "transparent";
        AlpenFlug.crc2.fillStyle = gradient;
        AlpenFlug.crc2.fill();
        AlpenFlug.crc2.closePath();
        AlpenFlug.crc2.moveTo(sunX, sunY);
        AlpenFlug.crc2.beginPath();
        AlpenFlug.crc2.arc(sunX, sunY, sunHeight, 0, 2 * Math.PI);
        AlpenFlug.crc2.strokeStyle = "transparent";
        AlpenFlug.crc2.fillStyle = gradient;
        AlpenFlug.crc2.stroke();
        AlpenFlug.crc2.closePath();
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
        AlpenFlug.crc2.beginPath();
        AlpenFlug.crc2.moveTo(startX, baseY);
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
            AlpenFlug.crc2.lineTo(peakX, peakY);
            // Zeichnen der Linie zur nächsten Basislinie
            if (i < numPeaks - 1) {
                AlpenFlug.crc2.lineTo(peakX + peakDistance / 2, baseY);
            }
        }
        // Zeichnen der Linie bis zum Ende
        AlpenFlug.crc2.lineTo(endX, baseY);
        let gradient = AlpenFlug.crc2.createLinearGradient(0, 100, 0, AlpenFlug.crc2.canvas.height);
        gradient.addColorStop(0, "HSL(360,0%,100%)");
        gradient.addColorStop(1, "HSL(360,0%,20%)");
        // Linie zeichnen
        AlpenFlug.crc2.strokeStyle = "transparent";
        AlpenFlug.crc2.fillStyle = gradient;
        AlpenFlug.crc2.fill();
        AlpenFlug.crc2.closePath();
    }
    ;
    function background() {
        let gradient = AlpenFlug.crc2.createLinearGradient(0, 0, 0, AlpenFlug.crc2.canvas.height);
        gradient.addColorStop(0, "#51d9ed");
        gradient.addColorStop(.25, "HSL(220, 80%, 80%)");
        gradient.addColorStop(1, "HSL(129,60%,37%)");
        AlpenFlug.crc2.beginPath();
        AlpenFlug.crc2.fillStyle = gradient;
        AlpenFlug.crc2.fillRect(0, 0, AlpenFlug.crc2.canvas.width, AlpenFlug.crc2.canvas.height);
        AlpenFlug.crc2.closePath();
    }
    ;
    //mit translate verschiebt man das allgemeine koordinatensystem vom ursprung 0,0 zu einer bestimmten position
    // Koordinatensystem könnte auch mit *(-1) umgekehrt werden
    // In der Funktion muss die Translation am Ende wieder Rückgängig gemacht werden mit safe und restore ansonsten addieren sich die Koordinatensysteme auf
    // Oder mit reset transform
})(AlpenFlug || (AlpenFlug = {}));
//# sourceMappingURL=script.js.map