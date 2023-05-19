"use strict";
var OldMcDonald;
(function (OldMcDonald) {
    class Animal {
        type;
        position_x;
        position_y;
        size_x;
        size_y;
        color = "brown";
        name;
        food;
        foodAmount;
        sound;
        constructor(_type, _position, _size, _color, _name, _food, _foodAmount, _sound) {
            this.type = _type;
            this.position_x = _position[0];
            this.position_y = _position[1];
            this.size_x = _size[0];
            this.size_y = _size[1];
            this.color = _color;
            this.name = _name;
            this.food = _food;
            this.foodAmount = _foodAmount;
            this.sound = _sound;
        }
        async sing() {
            let lines = [
                `Old MacDonald had a farm, E-I-E-I-O!`,
                `And on his farm he had a ${this.type}, E-I-E-I-O!`,
                `With a ${this.sound}-${this.sound} here and a ${this.sound}-${this.sound} there,`,
                `here a ${this.sound}, there a ${this.sound}, everywhere a ${this.sound}-${this.sound}...`
            ];
            let delay = 1000;
            for (let line of lines) {
                let output = `${this.name} sings: ${line}`;
                await new Promise((resolve) => setTimeout(resolve, delay));
                OldMcDonald.crc2.fillStyle = "white";
                OldMcDonald.crc2.fillRect(this.position_x - 200, this.position_y - 200, 600, 30);
                // Draw the new text
                OldMcDonald.crc2.fillStyle = "black";
                OldMcDonald.crc2.font = '20px Arial';
                OldMcDonald.crc2.fillText(output, this.position_x - 180, this.position_y - 180, OldMcDonald.crc2.measureText(line).width);
            }
        }
        eat(foodsupply) {
            if (foodsupply[this.food] >= this.foodAmount) {
                foodsupply[this.food] -= this.foodAmount;
                let output = `${this.name} the ${this.type} ate ${this.foodAmount} ${this.food}.${this.food} is ${foodsupply[this.food]} left`;
                OldMcDonald.crc2.fillStyle = "white";
                OldMcDonald.crc2.fillRect(this.position_x - 200, this.position_y - 200, 600, 30);
                // Draw the new text
                OldMcDonald.crc2.fillStyle = "black";
                OldMcDonald.crc2.font = '20px Arial';
                OldMcDonald.crc2.fillText(output, this.position_x - 180, this.position_y - 180, OldMcDonald.crc2.measureText(output).width);
            }
            else {
                let output = `Not enough ${this.food} for ${this.name} the ${this.type}! Please order ${this.food}`;
                OldMcDonald.crc2.fillStyle = "white";
                OldMcDonald.crc2.fillRect(this.position_x - 200, this.position_y - 200, 600, 30);
                // Draw the new text
                OldMcDonald.crc2.fillStyle = "black";
                OldMcDonald.crc2.font = '20px Arial';
                OldMcDonald.crc2.fillText(output, this.position_x - 180, this.position_y - 180, OldMcDonald.crc2.measureText(output).width);
            }
        }
        draw() {
            switch (this.type) {
                case "dog":
                    //Körper
                    OldMcDonald.crc2.beginPath();
                    OldMcDonald.crc2.fillStyle = this.color;
                    OldMcDonald.crc2.ellipse(this.position_x, this.position_y, 70, 20, 0, 0, 2 * Math.PI);
                    OldMcDonald.crc2.fill();
                    OldMcDonald.crc2.fillText("hallo", this.position_x, this.position_y - 50, 100);
                    OldMcDonald.crc2.stroke();
                    OldMcDonald.crc2.fill();
                    //Beine
                    OldMcDonald.crc2.moveTo(this.position_x - 40, this.position_y + 15);
                    OldMcDonald.crc2.lineTo(this.position_x - 30, this.position_y + 30);
                    OldMcDonald.crc2.strokeStyle = "black";
                    OldMcDonald.crc2.stroke();
                    OldMcDonald.crc2.closePath();
                    OldMcDonald.crc2.beginPath();
                    OldMcDonald.crc2.moveTo(this.position_x - 20, this.position_y + 18);
                    OldMcDonald.crc2.lineTo(this.position_x - 10, this.position_y + 30);
                    OldMcDonald.crc2.stroke();
                    OldMcDonald.crc2.closePath();
                    OldMcDonald.crc2.beginPath();
                    OldMcDonald.crc2.moveTo(this.position_x + 20, this.position_y + 20);
                    OldMcDonald.crc2.lineTo(this.position_x + 30, this.position_y + 30);
                    OldMcDonald.crc2.stroke();
                    OldMcDonald.crc2.closePath();
                    OldMcDonald.crc2.beginPath();
                    OldMcDonald.crc2.moveTo(this.position_x + 40, this.position_y + 15);
                    OldMcDonald.crc2.lineTo(this.position_x + 50, this.position_y + 25);
                    OldMcDonald.crc2.stroke();
                    OldMcDonald.crc2.closePath();
                    //Kopf
                    OldMcDonald.crc2.beginPath();
                    OldMcDonald.crc2.moveTo(this.position_x - 90, this.position_y - 40);
                    OldMcDonald.crc2.arc(this.position_x - 80, this.position_y - 20, 30, 0, 2 * Math.PI);
                    // crc2.stroke();
                    OldMcDonald.crc2.fillStyle = "white";
                    OldMcDonald.crc2.fill();
                    OldMcDonald.crc2.closePath();
                    //Auge
                    OldMcDonald.crc2.beginPath();
                    OldMcDonald.crc2.moveTo(this.position_x - 90, this.position_y);
                    OldMcDonald.crc2.closePath();
                    OldMcDonald.crc2.beginPath();
                    OldMcDonald.crc2.arc(this.position_x - 100, this.position_y - 50, 15, 0, 2 * Math.PI);
                    OldMcDonald.crc2.stroke();
                    OldMcDonald.crc2.fillStyle = "white";
                    OldMcDonald.crc2.fill();
                    OldMcDonald.crc2.closePath();
                    OldMcDonald.crc2.beginPath();
                    OldMcDonald.crc2.moveTo(this.position_x - 75, this.position_y);
                    OldMcDonald.crc2.closePath();
                    OldMcDonald.crc2.beginPath();
                    OldMcDonald.crc2.arc(this.position_x - 82, this.position_y - 50, 12, 0, 2 * Math.PI);
                    OldMcDonald.crc2.stroke();
                    OldMcDonald.crc2.fillStyle = "white";
                    OldMcDonald.crc2.fill();
                    OldMcDonald.crc2.closePath();
                    OldMcDonald.crc2.beginPath();
                    OldMcDonald.crc2.moveTo(this.position_x - 90, this.position_y);
                    OldMcDonald.crc2.closePath();
                    OldMcDonald.crc2.beginPath();
                    OldMcDonald.crc2.arc(this.position_x - 95, this.position_y - 50, 5, 0, 2 * Math.PI);
                    OldMcDonald.crc2.fillStyle = "black";
                    OldMcDonald.crc2.fill();
                    OldMcDonald.crc2.stroke();
                    OldMcDonald.crc2.closePath();
                    OldMcDonald.crc2.beginPath();
                    OldMcDonald.crc2.moveTo(this.position_x - 80, this.position_y);
                    OldMcDonald.crc2.closePath();
                    OldMcDonald.crc2.beginPath();
                    OldMcDonald.crc2.arc(this.position_x - 85, this.position_y - 50, 5, 0, 2 * Math.PI);
                    OldMcDonald.crc2.fillStyle = "black";
                    OldMcDonald.crc2.fill();
                    OldMcDonald.crc2.stroke();
                    OldMcDonald.crc2.closePath();
                    break;
                case "cow":
                    //Körper
                    let positionXCow = this.position_x + 350;
                    let positionYCow = this.position_y;
                    OldMcDonald.crc2.beginPath();
                    OldMcDonald.crc2.fillStyle = this.color;
                    OldMcDonald.crc2.ellipse(positionXCow, positionYCow, 70, 50, 0, 0, 2 * Math.PI);
                    OldMcDonald.crc2.fill();
                    //Beine
                    OldMcDonald.crc2.moveTo(positionXCow - 40, positionYCow + 40);
                    OldMcDonald.crc2.lineTo(positionXCow - 30, positionYCow + 60);
                    OldMcDonald.crc2.strokeStyle = "black";
                    OldMcDonald.crc2.stroke();
                    OldMcDonald.crc2.closePath();
                    OldMcDonald.crc2.beginPath();
                    OldMcDonald.crc2.moveTo(positionXCow - 20, positionYCow + 45);
                    OldMcDonald.crc2.lineTo(positionXCow - 10, positionYCow + 60);
                    OldMcDonald.crc2.stroke();
                    OldMcDonald.crc2.closePath();
                    OldMcDonald.crc2.beginPath();
                    OldMcDonald.crc2.moveTo(positionXCow + 20, positionYCow + 45);
                    OldMcDonald.crc2.lineTo(positionXCow + 30, positionYCow + 60);
                    OldMcDonald.crc2.stroke();
                    OldMcDonald.crc2.closePath();
                    OldMcDonald.crc2.beginPath();
                    OldMcDonald.crc2.moveTo(positionXCow + 40, positionYCow + 40);
                    OldMcDonald.crc2.lineTo(positionXCow + 50, positionYCow + 55);
                    OldMcDonald.crc2.stroke();
                    OldMcDonald.crc2.closePath();
                    //Kopf
                    OldMcDonald.crc2.beginPath();
                    OldMcDonald.crc2.moveTo(positionXCow - 90, positionYCow - 40);
                    OldMcDonald.crc2.arc(positionXCow - 80, positionYCow - 20, 30, 0, 2 * Math.PI);
                    // crc2.stroke();
                    OldMcDonald.crc2.fillStyle = "white";
                    OldMcDonald.crc2.fill();
                    OldMcDonald.crc2.closePath();
                    //Auge
                    OldMcDonald.crc2.beginPath();
                    OldMcDonald.crc2.moveTo(positionXCow - 90, positionYCow);
                    OldMcDonald.crc2.closePath();
                    OldMcDonald.crc2.beginPath();
                    OldMcDonald.crc2.arc(positionXCow - 100, positionYCow - 50, 15, 0, 2 * Math.PI);
                    OldMcDonald.crc2.stroke();
                    OldMcDonald.crc2.fillStyle = "white";
                    OldMcDonald.crc2.fill();
                    OldMcDonald.crc2.closePath();
                    OldMcDonald.crc2.beginPath();
                    OldMcDonald.crc2.moveTo(positionXCow - 75, positionYCow);
                    OldMcDonald.crc2.closePath();
                    OldMcDonald.crc2.beginPath();
                    OldMcDonald.crc2.arc(positionXCow - 82, positionYCow - 50, 12, 0, 2 * Math.PI);
                    OldMcDonald.crc2.stroke();
                    OldMcDonald.crc2.fillStyle = "white";
                    OldMcDonald.crc2.fill();
                    OldMcDonald.crc2.closePath();
                    OldMcDonald.crc2.beginPath();
                    OldMcDonald.crc2.moveTo(positionXCow - 90, positionYCow);
                    OldMcDonald.crc2.closePath();
                    OldMcDonald.crc2.beginPath();
                    OldMcDonald.crc2.arc(positionXCow - 95, positionYCow - 50, 5, 0, 2 * Math.PI);
                    OldMcDonald.crc2.fillStyle = "black";
                    OldMcDonald.crc2.fill();
                    OldMcDonald.crc2.stroke();
                    OldMcDonald.crc2.closePath();
                    OldMcDonald.crc2.beginPath();
                    OldMcDonald.crc2.moveTo(positionXCow - 80, positionYCow);
                    OldMcDonald.crc2.closePath();
                    OldMcDonald.crc2.beginPath();
                    OldMcDonald.crc2.arc(positionXCow - 85, positionYCow - 50, 5, 0, 2 * Math.PI);
                    OldMcDonald.crc2.fillStyle = "black";
                    OldMcDonald.crc2.fill();
                    OldMcDonald.crc2.stroke();
                    OldMcDonald.crc2.closePath();
                    break;
                case "pig":
                    let positionXPig = this.position_x - 300;
                    let positionYPig = this.position_y;
                    //Körper
                    OldMcDonald.crc2.beginPath();
                    OldMcDonald.crc2.fillStyle = this.color;
                    OldMcDonald.crc2.ellipse(positionXPig, positionYPig, 70, 60, 0, 0, 2 * Math.PI);
                    OldMcDonald.crc2.fill();
                    //Beine
                    OldMcDonald.crc2.moveTo(positionXPig - 40, positionYPig + 50);
                    OldMcDonald.crc2.lineTo(positionXPig - 30, positionYPig + 60);
                    OldMcDonald.crc2.strokeStyle = "black";
                    OldMcDonald.crc2.stroke();
                    OldMcDonald.crc2.closePath();
                    OldMcDonald.crc2.beginPath();
                    OldMcDonald.crc2.moveTo(positionXPig - 20, positionYPig + 53);
                    OldMcDonald.crc2.lineTo(positionXPig - 10, positionYPig + 60);
                    OldMcDonald.crc2.stroke();
                    OldMcDonald.crc2.closePath();
                    OldMcDonald.crc2.beginPath();
                    OldMcDonald.crc2.moveTo(positionXPig + 20, positionYPig + 55);
                    OldMcDonald.crc2.lineTo(positionXPig + 30, positionYPig + 60);
                    OldMcDonald.crc2.stroke();
                    OldMcDonald.crc2.closePath();
                    OldMcDonald.crc2.beginPath();
                    OldMcDonald.crc2.moveTo(positionXPig + 40, positionYPig + 50);
                    OldMcDonald.crc2.lineTo(positionXPig + 50, positionYPig + 55);
                    OldMcDonald.crc2.stroke();
                    OldMcDonald.crc2.closePath();
                    //Kopf
                    OldMcDonald.crc2.beginPath();
                    OldMcDonald.crc2.moveTo(positionXPig - 90, positionYPig - 40);
                    OldMcDonald.crc2.arc(positionXPig - 80, positionYPig - 20, 30, 0, 2 * Math.PI);
                    // crc2.stroke();
                    OldMcDonald.crc2.fillStyle = "white";
                    OldMcDonald.crc2.fill();
                    OldMcDonald.crc2.closePath();
                    //Auge
                    OldMcDonald.crc2.beginPath();
                    OldMcDonald.crc2.moveTo(positionXPig - 90, positionYPig);
                    OldMcDonald.crc2.closePath();
                    OldMcDonald.crc2.beginPath();
                    OldMcDonald.crc2.arc(positionXPig - 100, positionYPig - 50, 15, 0, 2 * Math.PI);
                    OldMcDonald.crc2.stroke();
                    OldMcDonald.crc2.fillStyle = "white";
                    OldMcDonald.crc2.fill();
                    OldMcDonald.crc2.closePath();
                    OldMcDonald.crc2.beginPath();
                    OldMcDonald.crc2.moveTo(positionXPig - 75, positionYPig);
                    OldMcDonald.crc2.closePath();
                    OldMcDonald.crc2.beginPath();
                    OldMcDonald.crc2.arc(positionXPig - 82, positionYPig - 50, 12, 0, 2 * Math.PI);
                    OldMcDonald.crc2.stroke();
                    OldMcDonald.crc2.fillStyle = "white";
                    OldMcDonald.crc2.fill();
                    OldMcDonald.crc2.closePath();
                    OldMcDonald.crc2.beginPath();
                    OldMcDonald.crc2.moveTo(positionXPig - 90, positionYPig);
                    OldMcDonald.crc2.closePath();
                    OldMcDonald.crc2.beginPath();
                    OldMcDonald.crc2.arc(positionXPig - 95, positionYPig - 50, 5, 0, 2 * Math.PI);
                    OldMcDonald.crc2.fillStyle = "black";
                    OldMcDonald.crc2.fill();
                    OldMcDonald.crc2.stroke();
                    OldMcDonald.crc2.closePath();
                    OldMcDonald.crc2.beginPath();
                    OldMcDonald.crc2.moveTo(positionXPig - 80, positionYPig);
                    OldMcDonald.crc2.closePath();
                    OldMcDonald.crc2.beginPath();
                    OldMcDonald.crc2.arc(positionXPig - 85, positionYPig - 50, 5, 0, 2 * Math.PI);
                    OldMcDonald.crc2.fillStyle = "black";
                    OldMcDonald.crc2.fill();
                    OldMcDonald.crc2.stroke();
                    OldMcDonald.crc2.closePath();
                    break;
                case "chicken":
                    let positionXChicken = this.position_x + 200;
                    let positionYChicken = this.position_y;
                    //Körper
                    OldMcDonald.crc2.beginPath();
                    OldMcDonald.crc2.fillStyle = this.color;
                    OldMcDonald.crc2.ellipse(positionXChicken, positionYChicken, 30, 70, 0, 0, 2 * Math.PI);
                    OldMcDonald.crc2.fill();
                    //Beine
                    OldMcDonald.crc2.beginPath();
                    OldMcDonald.crc2.moveTo(positionXChicken + 10, positionYChicken + 60);
                    OldMcDonald.crc2.lineTo(positionXChicken + 20, positionYChicken + 70);
                    OldMcDonald.crc2.stroke();
                    OldMcDonald.crc2.closePath();
                    OldMcDonald.crc2.beginPath();
                    OldMcDonald.crc2.moveTo(positionXChicken - 10, positionYChicken + 60);
                    OldMcDonald.crc2.lineTo(positionXChicken - 20, positionYChicken + 70);
                    OldMcDonald.crc2.stroke();
                    OldMcDonald.crc2.closePath();
                    //Kopf
                    OldMcDonald.crc2.beginPath();
                    OldMcDonald.crc2.moveTo(positionXChicken, positionYChicken);
                    OldMcDonald.crc2.arc(positionXChicken, positionYChicken - 60, 30, 0, 2 * Math.PI);
                    OldMcDonald.crc2.fillStyle = "white";
                    OldMcDonald.crc2.fill();
                    OldMcDonald.crc2.closePath();
                    //Auge
                    OldMcDonald.crc2.beginPath();
                    OldMcDonald.crc2.moveTo(positionXChicken - 8, positionYChicken);
                    OldMcDonald.crc2.closePath();
                    OldMcDonald.crc2.beginPath();
                    OldMcDonald.crc2.arc(positionXChicken - 8, positionYChicken - 60, 15, 0, 2 * Math.PI);
                    OldMcDonald.crc2.stroke();
                    OldMcDonald.crc2.fillStyle = "white";
                    OldMcDonald.crc2.fill();
                    OldMcDonald.crc2.closePath();
                    OldMcDonald.crc2.beginPath();
                    OldMcDonald.crc2.moveTo(positionXChicken + 8, positionYChicken);
                    OldMcDonald.crc2.closePath();
                    OldMcDonald.crc2.beginPath();
                    OldMcDonald.crc2.arc(positionXChicken + 8, positionYChicken - 60, 12, 0, 2 * Math.PI);
                    OldMcDonald.crc2.stroke();
                    OldMcDonald.crc2.fillStyle = "white";
                    OldMcDonald.crc2.fill();
                    OldMcDonald.crc2.closePath();
                    OldMcDonald.crc2.beginPath();
                    OldMcDonald.crc2.moveTo(positionXChicken - 8, positionYChicken);
                    OldMcDonald.crc2.closePath();
                    OldMcDonald.crc2.beginPath();
                    OldMcDonald.crc2.arc(positionXChicken - 8, positionYChicken - 60, 5, 0, 2 * Math.PI);
                    OldMcDonald.crc2.fillStyle = "black";
                    OldMcDonald.crc2.fill();
                    OldMcDonald.crc2.stroke();
                    OldMcDonald.crc2.closePath();
                    OldMcDonald.crc2.beginPath();
                    OldMcDonald.crc2.moveTo(positionXChicken + 8, positionYChicken);
                    OldMcDonald.crc2.closePath();
                    OldMcDonald.crc2.beginPath();
                    OldMcDonald.crc2.arc(positionXChicken + 8, positionYChicken - 60, 5, 0, 2 * Math.PI);
                    OldMcDonald.crc2.fillStyle = "black";
                    OldMcDonald.crc2.fill();
                    OldMcDonald.crc2.stroke();
                    OldMcDonald.crc2.closePath();
                    break;
                case "donkey":
                    let positionXDonkey = this.position_x - 200;
                    let positionYDonkey = this.position_y;
                    //Körper
                    OldMcDonald.crc2.beginPath();
                    OldMcDonald.crc2.fillStyle = this.color;
                    OldMcDonald.crc2.ellipse(positionXDonkey, positionYDonkey, 70, 30, 0, 0, 2 * Math.PI);
                    OldMcDonald.crc2.fill();
                    //Beine
                    OldMcDonald.crc2.moveTo(positionXDonkey - 40, positionYDonkey + 25);
                    OldMcDonald.crc2.lineTo(positionXDonkey - 30, positionYDonkey + 40);
                    OldMcDonald.crc2.strokeStyle = "black";
                    OldMcDonald.crc2.stroke();
                    OldMcDonald.crc2.closePath();
                    OldMcDonald.crc2.beginPath();
                    OldMcDonald.crc2.moveTo(positionXDonkey - 20, positionYDonkey + 28);
                    OldMcDonald.crc2.lineTo(positionXDonkey - 10, positionYDonkey + 40);
                    OldMcDonald.crc2.stroke();
                    OldMcDonald.crc2.closePath();
                    OldMcDonald.crc2.beginPath();
                    OldMcDonald.crc2.moveTo(positionXDonkey + 20, positionYDonkey + 30);
                    OldMcDonald.crc2.lineTo(positionXDonkey + 30, positionYDonkey + 40);
                    OldMcDonald.crc2.stroke();
                    OldMcDonald.crc2.closePath();
                    OldMcDonald.crc2.beginPath();
                    OldMcDonald.crc2.moveTo(positionXDonkey + 40, positionYDonkey + 25);
                    OldMcDonald.crc2.lineTo(positionXDonkey + 50, positionYDonkey + 35);
                    OldMcDonald.crc2.stroke();
                    OldMcDonald.crc2.closePath();
                    //Kopf
                    OldMcDonald.crc2.beginPath();
                    OldMcDonald.crc2.moveTo(positionXDonkey - 90, positionYDonkey - 40);
                    OldMcDonald.crc2.arc(positionXDonkey - 80, positionYDonkey - 20, 30, 0, 2 * Math.PI);
                    // crc2.stroke();
                    OldMcDonald.crc2.fillStyle = "white";
                    OldMcDonald.crc2.fill();
                    OldMcDonald.crc2.closePath();
                    //Auge
                    OldMcDonald.crc2.beginPath();
                    OldMcDonald.crc2.moveTo(positionXDonkey - 90, positionYDonkey);
                    OldMcDonald.crc2.closePath();
                    OldMcDonald.crc2.beginPath();
                    OldMcDonald.crc2.arc(positionXDonkey - 100, positionYDonkey - 50, 15, 0, 2 * Math.PI);
                    OldMcDonald.crc2.stroke();
                    OldMcDonald.crc2.fillStyle = "white";
                    OldMcDonald.crc2.fill();
                    OldMcDonald.crc2.closePath();
                    OldMcDonald.crc2.beginPath();
                    OldMcDonald.crc2.moveTo(positionXDonkey - 75, positionYDonkey);
                    OldMcDonald.crc2.closePath();
                    OldMcDonald.crc2.beginPath();
                    OldMcDonald.crc2.arc(positionXDonkey - 82, positionYDonkey - 50, 12, 0, 2 * Math.PI);
                    OldMcDonald.crc2.stroke();
                    OldMcDonald.crc2.fillStyle = "white";
                    OldMcDonald.crc2.fill();
                    OldMcDonald.crc2.closePath();
                    OldMcDonald.crc2.beginPath();
                    OldMcDonald.crc2.moveTo(positionXDonkey - 90, positionYDonkey);
                    OldMcDonald.crc2.closePath();
                    OldMcDonald.crc2.beginPath();
                    OldMcDonald.crc2.arc(positionXDonkey - 95, positionYDonkey - 50, 5, 0, 2 * Math.PI);
                    OldMcDonald.crc2.fillStyle = "black";
                    OldMcDonald.crc2.fill();
                    OldMcDonald.crc2.stroke();
                    OldMcDonald.crc2.closePath();
                    OldMcDonald.crc2.beginPath();
                    OldMcDonald.crc2.moveTo(positionXDonkey - 80, positionYDonkey);
                    OldMcDonald.crc2.closePath();
                    OldMcDonald.crc2.beginPath();
                    OldMcDonald.crc2.arc(positionXDonkey - 85, positionYDonkey - 50, 5, 0, 2 * Math.PI);
                    OldMcDonald.crc2.fillStyle = "black";
                    OldMcDonald.crc2.fill();
                    OldMcDonald.crc2.stroke();
                    OldMcDonald.crc2.closePath();
                    break;
            }
        }
    }
    OldMcDonald.Animal = Animal;
})(OldMcDonald || (OldMcDonald = {}));
//# sourceMappingURL=Animals.js.map