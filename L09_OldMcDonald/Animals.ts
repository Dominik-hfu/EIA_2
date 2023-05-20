namespace OldMcDonald {

    export class Animal {
        type: string;
        position_x: number;
        position_y: number;
        size_x: number;
        size_y: number;
        color: string = "brown";
        name: string;
        food: string;
        foodAmount: number;
        sound: string;

        //Eigenschaften der Tiere werden in der Klasse definiert

        constructor(_type: string, _position: Array<number>, _size: Array<number>, _color: string, _name: string, _food: string, _foodAmount: number, _sound: string) {
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
        }// Constructor baut quasi die Tiere
        
       async sing(): Promise <void> {//Async Function, weil Tiere warten sollen bis anderes Tier fertig ist

        let lines :string[]= [
          `Old MacDonald had a farm, E-I-E-I-O!`,
          `And on his farm he had a ${this.type}, E-I-E-I-O!`,
          `With a ${this.sound}-${this.sound} here and a ${this.sound}-${this.sound} there,`,
          `here a ${this.sound}, there a ${this.sound}, everywhere a ${this.sound}-${this.sound}...`
        ]    
        let delay:number=3000;//3s
        for(let line of lines){

          let output:string=`${this.name} sings: ${line}`

          await new Promise<void>((resolve) => setTimeout(resolve,delay))
          //Resolve=Entschluss

    crc2.fillStyle = "white";
    crc2.fillRect(this.position_x-200, this.position_y - 200, 600, 30);
  
    crc2.fillStyle = "black";
    crc2.font='20px Arial';
    crc2.fillText(output, this.position_x-180, this.position_y-180,crc2.measureText(line).width);
    //Lied Anzeige
 
        }
          }

        eat(foodsupply: FoodSupply): void {
          if (foodsupply[this.food] >= this.foodAmount) {
            foodsupply[this.food] -= this.foodAmount;
            let output =`${this.name} the ${this.type} ate ${this.foodAmount} ${this.food}.${foodsupply[this.food]} ${this.food} are left`
            crc2.fillStyle = "white";
            crc2.fillRect(this.position_x-200, this.position_y - 200, 600, 30);
            //Tier ist, Bestand wird subtrahiert
  
            crc2.fillStyle = "black";
            crc2.font='20px Arial';
            crc2.fillText(output, this.position_x-180, this.position_y-180,crc2.measureText(output).width);
            
          } else {
            let output =`Not enough ${this.food} for ${this.name} the ${this.type}! Please order ${this.food}`
            crc2.fillStyle = "white";
            crc2.fillRect(this.position_x-200, this.position_y - 200, 600, 30);
            //Nicht genug Bestand, Hinweis auf Bestellung

            crc2.fillStyle = "black";
            crc2.font='20px Arial';
            crc2.fillText(output, this.position_x-180, this.position_y-180,crc2.measureText(output).width);
          }  
        }

        draw(): void {//Tiere werden gezeichnet

            switch(this.type){
              //Switch case für den Abgleich welches Tier an dern Reihe ist

            case "dog":
            //Körper
            crc2.beginPath();
            crc2.fillStyle = this.color;
            crc2.ellipse(this.position_x, this.position_y, 70, 20, 0, 0, 2 * Math.PI);
            crc2.fill();
            crc2.font='20px Arial';
            crc2.fillText("Bello", this.position_x,this.position_y-50,100);
            crc2.stroke();
            crc2.fill();
            //Beine
            crc2.moveTo(this.position_x - 40, this.position_y + 15);
            crc2.lineTo(this.position_x - 30, this.position_y + 30);
            crc2.strokeStyle = "black"
            crc2.stroke();
            crc2.closePath();

            crc2.beginPath();
            crc2.moveTo(this.position_x - 20, this.position_y + 18);
            crc2.lineTo(this.position_x - 10, this.position_y + 30);
            crc2.stroke();
            crc2.closePath();
            
            crc2.beginPath();
            crc2.moveTo(this.position_x + 20, this.position_y + 20);
            crc2.lineTo(this.position_x + 30, this.position_y + 30);
            crc2.stroke();  
            crc2.closePath();
            
            crc2.beginPath();
            crc2.moveTo(this.position_x + 40, this.position_y + 15);
            crc2.lineTo(this.position_x + 50, this.position_y + 25);
            crc2.stroke();
            crc2.closePath();

            //Ohren
            crc2.beginPath();
            crc2.moveTo(this.position_x-110,this.position_y-40);
            crc2.lineTo(this.position_x-95,this.position_y-90);
            crc2.lineTo(this.position_x-80,this.position_y-40);
            crc2.fillStyle = this.color;
            crc2.fill();
            crc2.closePath();

            crc2.beginPath();
            crc2.moveTo(this.position_x-90,this.position_y-40);
            crc2.lineTo(this.position_x-75,this.position_y-90);
            crc2.lineTo(this.position_x-60,this.position_y-40);
            crc2.fillStyle = this.color;
            crc2.fill();
            crc2.closePath();

            //Kopf
            crc2.beginPath();
            crc2.moveTo(this.position_x-90,this.position_y-40);
            crc2.arc(this.position_x-80,this.position_y-20,30,0,2*Math.PI);
            // crc2.stroke();
            crc2.fillStyle="white";
            crc2.fill();
            crc2.closePath();

            //Mund
            crc2.beginPath();
            crc2.moveTo(this.position_x-100,this.position_y-15);
            crc2.arc(this.position_x-100,this.position_y-15,10,0,2*Math.PI);
            crc2.stroke();
            crc2.strokeStyle="black";
            crc2.fill();
            crc2.closePath();

            
            //Auge
            crc2.beginPath();
            crc2.moveTo(this.position_x-90,this.position_y);
            crc2.closePath();
            crc2.beginPath();
            crc2.arc(this.position_x-100,this.position_y-50,15,0,2*Math.PI);
            crc2.stroke();
            crc2.fillStyle="white";
            crc2.fill();
            crc2.closePath();
            
            crc2.beginPath();
            crc2.moveTo(this.position_x-75,this.position_y);
            crc2.closePath();
            crc2.beginPath();
            crc2.arc(this.position_x-82,this.position_y-50,12,0,2*Math.PI);
            crc2.stroke();
            crc2.fillStyle="white";
            crc2.fill();
            crc2.closePath();
            
            crc2.beginPath();
            crc2.moveTo(this.position_x-90,this.position_y);
            crc2.closePath();
            crc2.beginPath();
            crc2.arc(this.position_x-95,this.position_y-50,5,0,2*Math.PI);
            crc2.fillStyle="black";
            crc2.fill();
            crc2.stroke();
            crc2.closePath();
            
            crc2.beginPath();
            crc2.moveTo(this.position_x-80,this.position_y);
            crc2.closePath();
            crc2.beginPath();
            crc2.arc(this.position_x-85,this.position_y-50,5,0,2*Math.PI);
            crc2.fillStyle="black";
            crc2.fill();
            crc2.stroke();
            crc2.closePath();
            
            break
            
            case "cow":
              
              //Körper
              let positionXCow:number=this.position_x+400;
              let positionYCow:number=this.position_y;
              
              crc2.beginPath();
              crc2.fillStyle = this.color;
              crc2.ellipse(positionXCow, positionYCow, 70, 50, 0, 0, 2 * Math.PI);

              crc2.font='20px Arial';
              crc2.fillText("Herbert", positionXCow-20,positionYCow-70,100);
              crc2.fill();
              crc2.closePath();

            //Flecken
            crc2.beginPath();
            crc2.moveTo(positionXCow-25,positionYCow-10);
            crc2.arc(positionXCow-25,positionYCow-10,20,0,2*Math.PI);
            // crc2.stroke();
            crc2.fillStyle="black";
            crc2.fill();
            crc2.closePath();

            crc2.beginPath();
            crc2.moveTo(positionXCow+25,positionYCow-20);
            crc2.arc(positionXCow+25,positionYCow-20,20,0,2*Math.PI);
            crc2.stroke();
            crc2.fillStyle="black";
            crc2.fill();
            crc2.closePath();

            crc2.beginPath();
            crc2.moveTo(positionXCow+10,positionYCow+20);
            crc2.arc(positionXCow+10,positionYCow+20,20,0,2*Math.PI);
            crc2.stroke();
            crc2.fillStyle="black";
            crc2.fill();
            crc2.closePath();
            
            
            //Beine
            crc2.moveTo(positionXCow - 40, positionYCow + 40);
            crc2.lineTo(positionXCow - 30, positionYCow + 60);
            crc2.strokeStyle = "black"
            crc2.stroke();
            crc2.closePath();
            
            crc2.beginPath();
            crc2.moveTo(positionXCow - 20, positionYCow + 45);
            crc2.lineTo(positionXCow - 10, positionYCow + 60);
            crc2.stroke();
            crc2.closePath();
            
            crc2.beginPath();
            crc2.moveTo(positionXCow + 20, positionYCow+ 45);
            crc2.lineTo(positionXCow + 30, positionYCow + 60);
            crc2.stroke();  
            crc2.closePath();
            
            crc2.beginPath();
            crc2.moveTo(positionXCow + 40, positionYCow + 40);
            crc2.lineTo(positionXCow + 50, positionYCow + 55);
            crc2.stroke();
            crc2.closePath();
            
            //Kopf
            crc2.beginPath();
            crc2.moveTo(positionXCow-90,positionYCow-40);
            crc2.arc(positionXCow-80,positionYCow-20,30,0,2*Math.PI);
            // crc2.stroke();
            crc2.fillStyle="white";
            crc2.fill();
            crc2.closePath();
            
                        crc2.beginPath();
                        crc2.moveTo(positionXCow-90,positionYCow-15);
                        crc2.arc(positionXCow-90,positionYCow-15,15,0,2*Math.PI);
                        crc2.stroke();
                        crc2.strokeStyle="black";
                        crc2.fill();
                        crc2.closePath();

            //Auge
            crc2.beginPath();
            crc2.moveTo(positionXCow-90,positionYCow);
            crc2.closePath();
            crc2.beginPath();
            crc2.arc(positionXCow-100,positionYCow-50,15,0,2*Math.PI);
            crc2.stroke();
            crc2.fillStyle="white";
            crc2.fill();
            crc2.closePath();
            
            crc2.beginPath();
            crc2.moveTo(positionXCow-75,positionYCow);
            crc2.closePath();
            crc2.beginPath();
            crc2.arc(positionXCow-82,positionYCow-50,12,0,2*Math.PI);
            crc2.stroke();
            crc2.fillStyle="white";
            crc2.fill();
            crc2.closePath();

            crc2.beginPath();
            crc2.moveTo(positionXCow-90,positionYCow);
            crc2.closePath();
            crc2.beginPath();
            crc2.arc(positionXCow-95,positionYCow-50,5,0,2*Math.PI);
            crc2.fillStyle="black";
            crc2.fill();
            crc2.stroke();
            crc2.closePath();
            
            crc2.beginPath();
            crc2.moveTo(positionXCow-80,positionYCow);
            crc2.closePath();
            crc2.beginPath();
            crc2.arc(positionXCow-85,positionYCow-50,5,0,2*Math.PI);
            crc2.fillStyle="black";
            crc2.fill();
            crc2.stroke();
            crc2.closePath();


            break;

            case "pig":

            let positionXPig:number=this.position_x-400;
            let positionYPig:number=this.position_y;

          //Körper
          crc2.beginPath();
          crc2.fillStyle = this.color;
          crc2.ellipse(positionXPig, positionYPig, 70, 60, 0, 0, 2 * Math.PI);
          // crc2.stroke();
          
          crc2.font='20px Arial';
          crc2.fillText("Jens", positionXPig-10,positionYPig-80,100);
          crc2.fill();
          crc2.closePath();
          crc2.fill();

          //Schwanz
          crc2.beginPath();
          crc2.moveTo(positionXPig+85,positionYPig-20);
          crc2.arc(positionXPig+75,positionYPig-20,10,0,2*Math.PI);
          crc2.fillStyle="pink";
          // crc2.strokeStyle="transparent";
          crc2.fill();
        
          crc2.closePath();

          //Beine
          crc2.moveTo(positionXPig - 40, positionYPig + 50);
          crc2.lineTo(positionXPig - 30, positionYPig + 60);
          crc2.strokeStyle = "black"
          crc2.stroke();
          crc2.closePath();

          crc2.beginPath();
          crc2.moveTo(positionXPig - 20, positionYPig + 53);
          crc2.lineTo(positionXPig - 10, positionYPig + 60);
          crc2.stroke();
          crc2.closePath();

          crc2.beginPath();
          crc2.moveTo(positionXPig + 20, positionYPig + 55);
          crc2.lineTo(positionXPig + 30, positionYPig + 60);
          crc2.stroke();  
          crc2.closePath();

          crc2.beginPath();
          crc2.moveTo(positionXPig + 40, positionYPig + 50);
          crc2.lineTo(positionXPig + 50, positionYPig + 55);
          crc2.stroke();
          crc2.closePath();

          //Kopf
          crc2.beginPath();
          crc2.moveTo(positionXPig-90,positionYPig-40);
          crc2.arc(positionXPig-80,positionYPig-20,30,0,2*Math.PI);
          crc2.fillStyle="white";
          crc2.fill();
          crc2.closePath();

          crc2.beginPath();
          crc2.moveTo(positionXPig-75,positionYPig-15);
          crc2.arc(positionXPig-85,positionYPig-15,10,0,2*Math.PI);
          // crc2.fillStyle="pink";
          crc2.strokeStyle="black";
          crc2.stroke();
          crc2.closePath();

          //Auge
          crc2.beginPath();
          crc2.moveTo(positionXPig-90,positionYPig);
          crc2.closePath();
          crc2.beginPath();
          crc2.arc(positionXPig-100,positionYPig-50,15,0,2*Math.PI);
          crc2.stroke();
          crc2.fillStyle="white";
          crc2.fill();
          crc2.closePath();
          
          crc2.beginPath();
          crc2.moveTo(positionXPig-75,positionYPig);
          crc2.closePath();
          crc2.beginPath();
          crc2.arc(positionXPig-82,positionYPig-50,12,0,2*Math.PI);
          crc2.stroke();
          crc2.fillStyle="white";
          crc2.fill();
          crc2.closePath();

          crc2.beginPath();
          crc2.moveTo(positionXPig-90,positionYPig);
          crc2.closePath();
          crc2.beginPath();
          crc2.arc(positionXPig-95,positionYPig-50,5,0,2*Math.PI);
          crc2.fillStyle="black";
          crc2.fill();
          crc2.stroke();
          crc2.closePath();
          
          crc2.beginPath();
          crc2.moveTo(positionXPig-80,positionYPig);
          crc2.closePath();
          crc2.beginPath();
          crc2.arc(positionXPig-85,positionYPig-50,5,0,2*Math.PI);
          crc2.fillStyle="black";
          crc2.fill();
          crc2.stroke();
          crc2.closePath();

            break;

            case "chicken":

            let positionXChicken:number=this.position_x+200;
            let positionYChicken:number=this.position_y;

          //Körper
          crc2.beginPath();
          crc2.fillStyle = this.color;
          crc2.ellipse(positionXChicken, positionYChicken, 30, 70, 0, 0, 2 * Math.PI);
          
          crc2.font='20px Arial';
          crc2.fillText("Chicko", positionXChicken-30,positionYChicken-130,100);
          crc2.fill();
          crc2.closePath();
          crc2.fill();
          
          //Beine
          crc2.beginPath();
          crc2.moveTo(positionXChicken + 10, positionYChicken + 60);
          crc2.lineTo(positionXChicken + 20, positionYChicken + 70);
          crc2.stroke();  
          crc2.closePath();

          crc2.beginPath();
          crc2.moveTo(positionXChicken - 10, positionYChicken + 60);
          crc2.lineTo(positionXChicken - 20, positionYChicken + 70);
          crc2.stroke();
          crc2.closePath();

          //Arme
          crc2.beginPath();
          crc2.fillStyle = this.color;
          crc2.ellipse(positionXChicken+40, positionYChicken-10, 10, 30, 20, 0, 2 * Math.PI);
          crc2.ellipse(positionXChicken-40, positionYChicken-10, 10, 30, -20, 0, 2 * Math.PI);
          crc2.fill();
          

          //Kopf
          crc2.beginPath();
          crc2.moveTo(positionXChicken,positionYChicken);
          crc2.arc(positionXChicken,positionYChicken-60,30,0,2*Math.PI);
          crc2.fillStyle="white";
          crc2.fill();
          crc2.closePath();

          //Mund 
          crc2.beginPath();
          crc2.moveTo(positionXChicken,positionYChicken-35);
          crc2.arc(positionXChicken,positionYChicken-35,10,0,2*Math.PI);
          crc2.stroke();
          crc2.strokeStyle="black";
          crc2.fill();
          crc2.closePath();

          //Kamm
          crc2.beginPath();
          crc2.fillStyle = "red";
          crc2.ellipse(positionXChicken, positionYChicken-100, 5, 20, 0, 0, 2 * Math.PI);
          crc2.ellipse(positionXChicken+10, positionYChicken-95, 5, 20, 10, 0, 2 * Math.PI);
          crc2.fill();

          //Auge
          crc2.beginPath();
          crc2.moveTo(positionXChicken-8,positionYChicken);
          crc2.closePath();
          crc2.beginPath();
          crc2.arc(positionXChicken-8,positionYChicken-60,15,0,2*Math.PI);
          crc2.stroke();
          crc2.fillStyle="white";
          crc2.fill();
          crc2.closePath();
          
          crc2.beginPath();
          crc2.moveTo(positionXChicken+8,positionYChicken);
          crc2.closePath();
          crc2.beginPath();
          crc2.arc(positionXChicken+8,positionYChicken-60,12,0,2*Math.PI);
          crc2.stroke();
          crc2.fillStyle="white";
          crc2.fill();
          crc2.closePath();

          crc2.beginPath();
          crc2.moveTo(positionXChicken-8,positionYChicken);
          crc2.closePath();
          crc2.beginPath();
          crc2.arc(positionXChicken-8,positionYChicken-60,5,0,2*Math.PI);
          crc2.fillStyle="black";
          crc2.fill();
          crc2.stroke();
          crc2.closePath();
          
          crc2.beginPath();
          crc2.moveTo(positionXChicken+8,positionYChicken);
          crc2.closePath();
          crc2.beginPath();
          crc2.arc(positionXChicken+8,positionYChicken-60,5,0,2*Math.PI);
          crc2.fillStyle="black";
          crc2.fill();
          crc2.stroke();
          crc2.closePath();

            break;

            case "donkey":


            let positionXDonkey:number=this.position_x-200;
            let positionYDonkey:number=this.position_y;

          //Körper
          crc2.beginPath();
          crc2.fillStyle = this.color;
          crc2.ellipse(positionXDonkey, positionYDonkey, 70, 40, 0, 0, 2 * Math.PI);
          
          crc2.font='20px Arial';
          crc2.fillText("Bernhard", positionXDonkey-30,positionYDonkey-60,100);
          crc2.fill();
          crc2.closePath();
          crc2.fill();
          //Beine
          crc2.moveTo(positionXDonkey - 40, positionYDonkey + 35);
          crc2.lineTo(positionXDonkey - 30, positionYDonkey + 50);
          crc2.strokeStyle = "black"
          crc2.stroke();
          crc2.closePath();

          crc2.beginPath();
          crc2.moveTo(positionXDonkey - 20, positionYDonkey + 38);
          crc2.lineTo(positionXDonkey- 10, positionYDonkey + 50);
          crc2.stroke();
          crc2.closePath();

          crc2.beginPath();
          crc2.moveTo(positionXDonkey + 20, positionYDonkey + 40);
          crc2.lineTo(positionXDonkey + 30, positionYDonkey + 50);
          crc2.stroke();  
          crc2.closePath();

          crc2.beginPath();
          crc2.moveTo(positionXDonkey + 40, positionYDonkey + 35);
          crc2.lineTo(positionXDonkey + 50, positionYDonkey + 45);
          crc2.stroke();
          crc2.closePath();

                      //Ohren
                      crc2.beginPath();
                      crc2.moveTo(positionXDonkey-110,positionYDonkey-40);
                      crc2.lineTo(positionXDonkey-95,positionYDonkey-90);
                      crc2.lineTo(positionXDonkey-80,positionYDonkey-40);
                      crc2.fillStyle = this.color;
                      crc2.fill();
                      crc2.closePath();
          
                      crc2.beginPath();
                      crc2.moveTo(positionXDonkey-90,positionYDonkey-40);
                      crc2.lineTo(positionXDonkey-75,positionYDonkey-90);
                      crc2.lineTo(positionXDonkey-60,positionYDonkey-40);
                      crc2.fillStyle = this.color;
                      crc2.fill();
                      crc2.closePath();

          //Kopf
          crc2.beginPath();
          crc2.moveTo(positionXDonkey-90,positionYDonkey-40);
          crc2.arc(positionXDonkey-80,positionYDonkey-20,30,0,2*Math.PI);
          // crc2.stroke();
          crc2.fillStyle="white";
          crc2.fill();
          crc2.closePath();

                      //Mund
                      crc2.beginPath();
                      crc2.moveTo(positionXDonkey-100,positionYDonkey-15);
                      crc2.arc(positionXDonkey-100,positionYDonkey-15,10,0,2*Math.PI);
                      crc2.stroke();
                      crc2.strokeStyle="black";
                      crc2.fill();
                      crc2.closePath();

          //Auge
          crc2.beginPath();
          crc2.moveTo(positionXDonkey-90,positionYDonkey);
          crc2.closePath();
          crc2.beginPath();
          crc2.arc(positionXDonkey-100,positionYDonkey-50,15,0,2*Math.PI);
          crc2.stroke();
          crc2.fillStyle="white";
          crc2.fill();
          crc2.closePath();
          
          crc2.beginPath();
          crc2.moveTo(positionXDonkey-75,positionYDonkey);
          crc2.closePath();
          crc2.beginPath();
          crc2.arc(positionXDonkey-82,positionYDonkey-50,12,0,2*Math.PI);
          crc2.stroke();
          crc2.fillStyle="white";
          crc2.fill();
          crc2.closePath();

          crc2.beginPath();
          crc2.moveTo(positionXDonkey-90,positionYDonkey);
          crc2.closePath();
          crc2.beginPath();
          crc2.arc(positionXDonkey-95,positionYDonkey-50,5,0,2*Math.PI);
          crc2.fillStyle="black";
          crc2.fill();
          crc2.stroke();
          crc2.closePath();
          
          crc2.beginPath();
          crc2.moveTo(positionXDonkey-80,positionYDonkey);
          crc2.closePath();
          crc2.beginPath();
          crc2.arc(positionXDonkey-85,positionYDonkey-50,5,0,2*Math.PI);
          crc2.fillStyle="black";
          crc2.fill();
          crc2.stroke();
          crc2.closePath();

            break;
            
            }
        }
    }
}