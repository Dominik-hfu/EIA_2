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
        sing(song) {
            console.log(`I'm singing: ${song}`);
        }
        eat(food) {
            console.log(`I'm eating ${food}`);
        }
        draw() {
            OldMcDonald.crc2.beginPath();
            OldMcDonald.crc2.fillStyle = this.color;
            OldMcDonald.crc2.ellipse(this.position_x, this.position_y, 70, 30, 0, 0, 2 * Math.PI);
            OldMcDonald.crc2.fill();
            for (let i = 0; i < 4; i++) {
                OldMcDonald.crc2.moveTo(this.position_x - 40, this.position_y + 25);
                OldMcDonald.crc2.lineTo(this.position_x - 30, this.position_y + 40);
                OldMcDonald.crc2.strokeStyle = "black";
                OldMcDonald.crc2.stroke();
                OldMcDonald.crc2.closePath();
                this.position_x = this.position_x + 10;
                // this.position_y=this.position_y+5
            }
        }
    }
    OldMcDonald.Animal = Animal;
})(OldMcDonald || (OldMcDonald = {}));
//# sourceMappingURL=Dog.js.map