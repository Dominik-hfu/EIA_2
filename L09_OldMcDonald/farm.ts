namespace OldMcDonald {
    export interface FoodSupply{
        [key:string]:number,
    }//Lieferung/ Versorgung
    export class Farm {

     animals:Animal[]=[];
     food:FoodSupply={
        'grass':50,
        'oats':50,
        'grains':50,
        'bone':50,
        'cereals':50
     };//Essensbestände

        constructor(_animals:Animal[],) {
        
            this.animals=_animals;
            //Animal Array

        }

        checkFoodSupply(pos:any): void {
            let requiredSupply: FoodSupply = {};//Hilfsvariable
          
            for (let animal of this.animals) {
              if (!(animal.food in this.food) || this.food[animal.food] < animal.foodAmount) {
                let shortage = animal.foodAmount - (this.food[animal.food] || 0);//Mangel
                requiredSupply[animal.food] = shortage;
              }
              //Erforderlicher Bestand
            }
          
            let orderList: string[] = [];
          
            for (let foodType in requiredSupply) {
              let shortage = requiredSupply[foodType];//Mangel
              orderList.push(`${shortage} ${foodType}`);//Bestellliste Array
            }
          
            if (orderList.length > 0) {
                crc2.fillStyle = "white";
                crc2.fillRect(pos.position_x-200, pos.position_y - 200, 600, 30);

                let output = `Not enough food for the next day! Please order: ${orderList.join(', ')}.`;
                crc2.fillStyle = "red";
                crc2.font='12px Arial';
                crc2.fillText(output, pos.position_x-180, pos.position_y-180,crc2.measureText(output).width);
              //Bestand zu gering
            } else {

              let output = "Enough food for the next day!";
              crc2.fillStyle = "white";
              crc2.fillRect(pos.position_x-200, pos.position_y - 200, 600, 30);
                crc2.fillStyle = "green";
                crc2.font='20px Arial';
                crc2.fillText(output, pos.position_x-180, pos.position_y-180,crc2.measureText(output).width);
            }// Bestand ausreichend
          }
       async simulateDay():Promise<void>{

        for(let animal of this.animals){

            await animal.sing();
            let delay =3000;
            await new Promise<void>((resolve) => setTimeout(resolve,delay));
            animal.eat(this.food);
        }//Tiere essen und singen nacheinander 3s
        this.checkFoodSupply(this.animals[0])//fängt bei null ein

        }
    }}