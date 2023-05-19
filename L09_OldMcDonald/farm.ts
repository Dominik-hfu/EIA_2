namespace OldMcDonald {
    export interface FoodSupply{
        [key:string]:number,
    }
    export class Farm {

     animals:Animal[]=[];
     food:FoodSupply={
        'Gras':50,
        'Hafer':50,
        'Körner':50,
        'Knochen':50,
        'Getreide':50
     };

        constructor(_animals:Animal[],) {
         
            this.animals=_animals;

        }

        checkFoodSupply(pos:any): void {
            let requiredSupply: FoodSupply = {};
          
            for (let animal of this.animals) {
              if (!(animal.food in this.food) || this.food[animal.food] < animal.foodAmount) {
                let shortage = animal.foodAmount - (this.food[animal.food] || 0);
                requiredSupply[animal.food] = shortage;
              }
            }
          
            const orderList: string[] = [];
          
            for (let foodType in requiredSupply) {
              let shortage = requiredSupply[foodType];
              orderList.push(`${shortage} ${foodType}`);
            }
          
            if (orderList.length > 0) {
                crc2.fillStyle = "white";
                crc2.fillRect(pos.position_x-200, pos.position_y - 200, 600, 30);
  

            
                // Draw the new text
                let output = `Not enough food for the next day! Please order: ${orderList.join(', ')}.`;
                crc2.fillStyle = "red";
                crc2.font='12px Arial';
                crc2.fillText(output, pos.position_x-180, pos.position_y-180,crc2.measureText(output).width);
            } else {
              let output = "Enough food for the next day!";
              crc2.fillStyle = "white";
              crc2.fillRect(pos.position_x-200, pos.position_y - 200, 600, 30);
                // Draw the new text
                crc2.fillStyle = "green";
                crc2.font='20px Arial';
                crc2.fillText(output, pos.position_x-180, pos.position_y-180,crc2.measureText(output).width);
            }
          }
       async simulateDay():Promise<void>{

        for(let animal of this.animals){

            await animal.sing();
            let delay =3000;
            await new Promise<void>((resolve) => setTimeout(resolve,delay));
            animal.eat(this.food);
        }
        this.checkFoodSupply(this.animals[0])


        }
    }}