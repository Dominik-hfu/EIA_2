"use strict";
var OldMcDonald;
(function (OldMcDonald) {
    window.addEventListener("load", handleload);
    OldMcDonald.canvas = document.querySelector("canvas");
    let minX = 400;
    let maxX = 600;
    let minY = 550;
    let maxY = 700;
    let randomPositionX = Math.floor(Math.random() * (maxX - minX + 1)) + minX;
    let randomPositionY = Math.floor(Math.random() * (maxY - minY + 1)) + minY;
    let randomPosition = [randomPositionX, randomPositionY];
    function handleload(_event) {
        OldMcDonald.crc2 = OldMcDonald.canvas.getContext("2d");
        background();
        sun();
        house();
        tree();
        cloud({ x: 100, y: 100 });
        cloud({ x: 400, y: 120 });
        cloud({ x: 800, y: 110 });
        let dog = new OldMcDonald.Animal("dog", randomPosition, [50, 30], "brown", "Bello", "Knochen", 30, "wuff");
        dog.color = "black"; //randomColor
        dog.draw(); //muss in Funktion stehen
        // dog.sing();
        let cow = new OldMcDonald.Animal("cow", randomPosition, [80, 50], "white", "Herbert", "Gras", 5, "muuh");
        cow.color = "white";
        cow.draw();
        let pig = new OldMcDonald.Animal("pig", randomPosition, [40, 20], "pink", "Jens", "Getreide", 30, "grunz");
        pig.color = "pink";
        pig.draw();
        let chicken = new OldMcDonald.Animal("chicken", randomPosition, [10, 10], "yellow", "Chicko", "Körner", 10, "kikeriki");
        chicken.color = "yellow";
        chicken.draw();
        let donkey = new OldMcDonald.Animal("donkey", randomPosition, [60, 40], "grey", "Bernhard", "Hafer", 4, "iaa");
        donkey.color = "grey";
        donkey.draw();
        //size??
        let farm = new OldMcDonald.Farm([dog, cow, pig, chicken, donkey]);
        farm.simulateDay();
        // myDog.bark(); // Ausgabe: Woof woof!
        // myDog.sing("La la la"); // Ausgabe: I'm singing: La la la
        // myDog.eat("bone"); // Ausgabe: I'm eating bone
    }
    ;
    function tree() {
        for (let i = 0; i < 12; i++) {
            const x = Math.random() * OldMcDonald.canvas.width; // Zufällige X-Koordinate innerhalb des Canvas-Bereichs
            // Zeichne den braunen Stamm
            OldMcDonald.crc2.fillStyle = 'brown';
            OldMcDonald.crc2.fillRect(x + 70, 300, 40, 100);
            // Zeichne die grüne Krone
            OldMcDonald.crc2.fillStyle = 'green';
            OldMcDonald.crc2.beginPath();
            OldMcDonald.crc2.moveTo(x, 300);
            OldMcDonald.crc2.lineTo(x + 200, 300);
            OldMcDonald.crc2.lineTo(x + 100, 150);
            OldMcDonald.crc2.closePath();
            OldMcDonald.crc2.fill();
        }
    }
    function house() {
        OldMcDonald.crc2.fillStyle = 'red';
        OldMcDonald.crc2.fillRect(400, 200, 200, 150);
        // Zeichne das weiße Dach
        OldMcDonald.crc2.fillStyle = 'white';
        OldMcDonald.crc2.beginPath();
        OldMcDonald.crc2.moveTo(400, 200);
        OldMcDonald.crc2.lineTo(600, 200);
        OldMcDonald.crc2.lineTo(500, 100);
        OldMcDonald.crc2.closePath();
        OldMcDonald.crc2.fill();
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
        let cloudGradient = OldMcDonald.crc2.createRadialGradient(0, 0, 0, 0, 0, circleRadius);
        particle.arc(0, 0, circleRadius, 0, 2 * Math.PI);
        cloudGradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        cloudGradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        OldMcDonald.crc2.save();
        OldMcDonald.crc2.translate(position.x, position.y);
        for (let circle = 0; circle < circles; circle++) {
            OldMcDonald.crc2.save();
            let x = Math.random() * size.x - size.x / 2;
            let y = Math.random() * size.y - size.y / 2;
            OldMcDonald.crc2.translate(x, y);
            OldMcDonald.crc2.fillStyle = cloudGradient;
            OldMcDonald.crc2.fill(particle);
            OldMcDonald.crc2.restore();
        }
        OldMcDonald.crc2.restore();
    }
    function sun() {
        let minSunRadius = 20;
        let maxSunRadius = 50;
        let sunHeight = Math.floor(Math.random() * (maxSunRadius - minSunRadius + 1)) + maxSunRadius;
        let sunX = 900;
        let sunY = 50;
        let gradient = OldMcDonald.crc2.createRadialGradient(sunX, sunY, sunHeight + 60, sunX, sunY, sunHeight);
        gradient.addColorStop(0, "HSLA(60, 100%, 50%, 0)");
        gradient.addColorStop(1, "HSLA(60, 100%, 90%, 1)");
        OldMcDonald.crc2.moveTo(sunX, sunY);
        OldMcDonald.crc2.beginPath();
        OldMcDonald.crc2.arc(sunX, sunY, sunHeight + 60, 0, 2 * Math.PI);
        OldMcDonald.crc2.strokeStyle = "transparent";
        OldMcDonald.crc2.fillStyle = gradient;
        OldMcDonald.crc2.fill();
        OldMcDonald.crc2.closePath();
        OldMcDonald.crc2.moveTo(sunX, sunY);
        OldMcDonald.crc2.beginPath();
        OldMcDonald.crc2.arc(sunX, sunY, sunHeight, 0, 2 * Math.PI);
        OldMcDonald.crc2.strokeStyle = "transparent";
        OldMcDonald.crc2.fillStyle = gradient;
        OldMcDonald.crc2.stroke();
        OldMcDonald.crc2.closePath();
    }
    ;
    function background() {
        let gradient = OldMcDonald.crc2.createLinearGradient(0, 0, 0, OldMcDonald.crc2.canvas.height);
        gradient.addColorStop(0, "#51d9ed");
        gradient.addColorStop(.2, "HSL(220, 80%, 80%)");
        gradient.addColorStop(.4, "HSL(129,60%,37%)");
        gradient.addColorStop(1, "HSL(30, 100%, 30%)");
        OldMcDonald.crc2.beginPath();
        OldMcDonald.crc2.fillStyle = gradient;
        OldMcDonald.crc2.fillRect(0, 0, OldMcDonald.crc2.canvas.width, OldMcDonald.crc2.canvas.height);
        OldMcDonald.crc2.closePath();
    }
    ;
})(OldMcDonald || (OldMcDonald = {}));
//# sourceMappingURL=script.js.map