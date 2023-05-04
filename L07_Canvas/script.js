"use strict";
var Art;
(function (Art) {
    window.addEventListener("load", handleload);
    let crc2;
    let canvas = document.querySelector("canvas");
    // let randomPosition:number=Math.floor(Math.random()*canvas.height)
    function handleload(_event) {
        crc2 = canvas.getContext("2d");
        background();
        circleStyle();
        triangleStyle();
        // lineStyle();
    }
    function createRandomColor() {
        let color = Math.floor(Math.random() * 360);
        let saturation = Math.floor(Math.random() * 100);
        let lightness = Math.floor(Math.random() * 100);
        let alpha = 0.5;
        let randomColor = `hsla(${color}, ${saturation}%, ${lightness}%, ${alpha})`;
        return randomColor;
    }
    ;
    function background() {
        let gradient = crc2.createLinearGradient(100, 0, 0, 130);
        gradient.addColorStop(0, createRandomColor());
        gradient.addColorStop(.5, createRandomColor());
        gradient.addColorStop(1, createRandomColor());
        crc2.beginPath();
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.closePath();
    }
    function circleStyle() {
        for (let i = 0; i < 20; i++) {
            let randomX = Math.random() * canvas.width;
            let randomY = Math.random() * canvas.height;
            let randomR = Math.random() * 20;
            let gradient = crc2.createRadialGradient(randomX, randomY, randomR + 10, randomX, randomY, randomR);
            gradient.addColorStop(0, createRandomColor());
            gradient.addColorStop(1, createRandomColor());
            crc2.beginPath();
            crc2.arc(randomX, randomY, randomR, 0, 2 * Math.PI);
            crc2.fillStyle = gradient;
            crc2.strokeStyle = "transparent";
            crc2.fill();
            crc2.closePath();
        }
    }
    function triangleStyle() {
        for (let i = 0; i < 20; i++) {
            let randomX = Math.random() * canvas.width;
            let randomY = Math.random() * canvas.height;
            let gradient = crc2.createLinearGradient(randomX - 50, randomY - 50, randomX + 50, randomY + 50);
            gradient.addColorStop(0, createRandomColor());
            gradient.addColorStop(0.5, createRandomColor());
            gradient.addColorStop(1, createRandomColor());
            crc2.beginPath();
            crc2.moveTo(randomX, randomY);
            crc2.lineTo(randomX, randomY);
            crc2.lineTo(650, 600);
            crc2.lineTo(500, 400);
            crc2.fillStyle = gradient;
            crc2.strokeStyle = "transparent";
            crc2.fill();
            crc2.closePath();
        }
    }
    // function lineStyle() {
    //     let randomX = Math.random() * canvas.width;
    //     let randomY = Math.random() * canvas.height;
    //     // for(let i=0; i<10;i++){
    //                 crc2.beginPath();
    //                 crc2.moveTo(randomX, randomY);
    //                 crc2.lineTo(randomX,randomY);
    //                 crc2.lineTo(800, randomY);
    //                 // crc2.lineTo(800, 800);
    //                 crc2.strokeStyle="red";
    //                 crc2.stroke();
    //                 crc2.closePath();
    //     // }
    // } //Linie sieht doof aus 
})(Art || (Art = {}));
//# sourceMappingURL=script.js.map