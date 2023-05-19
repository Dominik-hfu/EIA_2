"use strict";
var OldMcDonald;
(function (OldMcDonald) {
    window.addEventListener("load", handleload);
    let canvas = document.querySelector("canvas");
    let minX = 10;
    let maxX = 900;
    let minY = 10;
    let maxY = 700;
    let randomPositionX = Math.floor(Math.random() * (maxX - minX + 1)) + minX;
    let randomPositionY = Math.floor(Math.random() * (maxY - minY + 1)) + minY;
    let randomPosition = [randomPositionX, randomPositionY];
    function handleload(_event) {
        OldMcDonald.crc2 = canvas.getContext("2d");
        background();
        sun();
        cloud({ x: 100, y: 100 });
        // drawField();
        let dog = new OldMcDonald.Animal("dog", randomPosition, [50, 30], "brown", "bello", "Knochen", 2, "wuff");
        dog.color = "black"; //randomColor
        dog.draw(); //muss in Funktion stehen
        // let dog1:Dog=new Dog(20,20,"brown","black");
        // dog1.draw();
        // let myDog = new Dog(30,30,"brown","black");
        // myDog.bark(); // Ausgabe: Woof woof!
        // myDog.sing("La la la"); // Ausgabe: I'm singing: La la la
        // myDog.eat("bone"); // Ausgabe: I'm eating bone
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
        gradient.addColorStop(.25, "HSL(220, 80%, 80%)");
        gradient.addColorStop(.5, "HSL(129,60%,37%)");
        gradient.addColorStop(1, "HSL(30, 100%, 30%)");
        OldMcDonald.crc2.beginPath();
        OldMcDonald.crc2.fillStyle = gradient;
        OldMcDonald.crc2.fillRect(0, 0, OldMcDonald.crc2.canvas.width, OldMcDonald.crc2.canvas.height);
        OldMcDonald.crc2.closePath();
    }
    ;
})(OldMcDonald || (OldMcDonald = {}));
//# sourceMappingURL=script.js.map