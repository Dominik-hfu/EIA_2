"use strict";
var OldMcDonald;
(function (OldMcDonald) {
    class Farm {
        animals = [];
        food = {
            'Gras': 50,
            'Hafer': 50,
            'Körner': 50,
            'Knochen': 50,
            'Getreide': 50
        };
        constructor(_animals) {
            this.animals = _animals;
        }
        checkFoodSupply(pos) {
            let requiredSupply = {};
            for (let animal of this.animals) {
                if (!(animal.food in this.food) || this.food[animal.food] < animal.foodAmount) {
                    let shortage = animal.foodAmount - (this.food[animal.food] || 0);
                    requiredSupply[animal.food] = shortage;
                }
            }
            const orderList = [];
            for (let foodType in requiredSupply) {
                let shortage = requiredSupply[foodType];
                orderList.push(`${shortage} ${foodType}`);
            }
            if (orderList.length > 0) {
                OldMcDonald.crc2.fillStyle = "white";
                OldMcDonald.crc2.fillRect(pos.position_x - 200, pos.position_y - 200, 600, 30);
                // Draw the new text
                let output = `Not enough food for the next day! Please order: ${orderList.join(', ')}.`;
                OldMcDonald.crc2.fillStyle = "red";
                OldMcDonald.crc2.font = '12px Arial';
                OldMcDonald.crc2.fillText(output, pos.position_x - 180, pos.position_y - 180, OldMcDonald.crc2.measureText(output).width);
            }
            else {
                let output = "Enough food for the next day!";
                OldMcDonald.crc2.fillStyle = "white";
                OldMcDonald.crc2.fillRect(pos.position_x - 200, pos.position_y - 200, 600, 30);
                // Draw the new text
                OldMcDonald.crc2.fillStyle = "green";
                OldMcDonald.crc2.font = '20px Arial';
                OldMcDonald.crc2.fillText(output, pos.position_x - 180, pos.position_y - 180, OldMcDonald.crc2.measureText(output).width);
            }
        }
        async simulateDay() {
            for (let animal of this.animals) {
                await animal.sing();
                let delay = 3000;
                await new Promise((resolve) => setTimeout(resolve, delay));
                animal.eat(this.food);
            }
            this.checkFoodSupply(this.animals[0]);
        }
    }
    OldMcDonald.Farm = Farm;
})(OldMcDonald || (OldMcDonald = {}));
//# sourceMappingURL=farm.js.map