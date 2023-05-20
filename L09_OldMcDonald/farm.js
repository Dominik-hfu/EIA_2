"use strict";
var OldMcDonald;
(function (OldMcDonald) {
    class Farm {
        animals = [];
        food = {
            'grass': 50,
            'oats': 50,
            'grains': 50,
            'bone': 50,
            'cereals': 50
        }; //Essensbestände
        constructor(_animals) {
            this.animals = _animals;
            //Animal Array
        }
        checkFoodSupply(pos) {
            let requiredSupply = {}; //Hilfsvariable
            for (let animal of this.animals) {
                if (!(animal.food in this.food) || this.food[animal.food] < animal.foodAmount) {
                    let shortage = animal.foodAmount - (this.food[animal.food] || 0); //Mangel
                    requiredSupply[animal.food] = shortage;
                }
                //Erforderlicher Bestand
            }
            let orderList = [];
            for (let foodType in requiredSupply) {
                let shortage = requiredSupply[foodType]; //Mangel
                orderList.push(`${shortage} ${foodType}`); //Bestellliste Array
            }
            if (orderList.length > 0) {
                OldMcDonald.crc2.fillStyle = "white";
                OldMcDonald.crc2.fillRect(pos.position_x - 200, pos.position_y - 200, 600, 30);
                let output = `Not enough food for the next day! Please order: ${orderList.join(', ')}.`;
                OldMcDonald.crc2.fillStyle = "red";
                OldMcDonald.crc2.font = '12px Arial';
                OldMcDonald.crc2.fillText(output, pos.position_x - 180, pos.position_y - 180, OldMcDonald.crc2.measureText(output).width);
                //Bestand zu gering
            }
            else {
                let output = "Enough food for the next day!";
                OldMcDonald.crc2.fillStyle = "white";
                OldMcDonald.crc2.fillRect(pos.position_x - 200, pos.position_y - 200, 600, 30);
                OldMcDonald.crc2.fillStyle = "green";
                OldMcDonald.crc2.font = '20px Arial';
                OldMcDonald.crc2.fillText(output, pos.position_x - 180, pos.position_y - 180, OldMcDonald.crc2.measureText(output).width);
            } // Bestand ausreichend
        }
        async simulateDay() {
            for (let animal of this.animals) {
                await animal.sing();
                let delay = 3000;
                await new Promise((resolve) => setTimeout(resolve, delay));
                animal.eat(this.food);
            } //Tiere essen und singen nacheinander 3s
            this.checkFoodSupply(this.animals[0]); //fängt bei null ein
        }
    }
    OldMcDonald.Farm = Farm;
})(OldMcDonald || (OldMcDonald = {}));
//# sourceMappingURL=farm.js.map