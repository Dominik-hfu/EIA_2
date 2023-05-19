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
        }


        sing(song: string): void {
            console.log(`I'm singing: ${song}`);
        }

        eat(food: string): void {
            console.log(`I'm eating ${food}`);
        }

        draw(): void {

            switch(this.type){

            case "dog":
            //Körper
            crc2.beginPath();
            crc2.fillStyle = this.color;
            crc2.ellipse(this.position_x, this.position_y, 70, 20, 0, 0, 2 * Math.PI);
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
            crc2.lineTo(this.position_x + 50, this.position_y + 2   5);
            crc2.stroke();
            crc2.closePath();

            //Kopf
            crc2.beginPath();
            crc2.moveTo(this.position_x-90,this.position_y-40);
            crc2.arc(this.position_x-80,this.position_y-20,30,0,2*Math.PI);
            // crc2.stroke();
            crc2.fillStyle="white";
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
            let positionXCow:number=this.position_x+350;
            let positionYCow:number=this.position_y;
        

            crc2.beginPath();
            crc2.fillStyle = this.color;
            crc2.ellipse(positionXCow, positionYCow, 70, 50, 0, 0, 2 * Math.PI);
            crc2.fill();
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

            let positionXPig:number=this.position_x-300;
            let positionYPig:number=this.position_y;

          //Körper
          crc2.beginPath();
          crc2.fillStyle = this.color;
          crc2.ellipse(positionXPig, positionYPig, 70, 60, 0, 0, 2 * Math.PI);
          crc2.fill();
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
          // crc2.stroke();
          crc2.fillStyle="white";
          crc2.fill();
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

          //Kopf
          crc2.beginPath();
          crc2.moveTo(positionXChicken,positionYChicken);
          crc2.arc(positionXChicken,positionYChicken-60,30,0,2*Math.PI);
          crc2.fillStyle="white";
          crc2.fill();
          crc2.closePath();

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
          crc2.ellipse(positionXDonkey, positionYDonkey, 70, 30, 0, 0, 2 * Math.PI);
          crc2.fill();
          //Beine
          crc2.moveTo(positionXDonkey - 40, positionYDonkey + 25);
          crc2.lineTo(positionXDonkey - 30, positionYDonkey + 40);
          crc2.strokeStyle = "black"
          crc2.stroke();
          crc2.closePath();

          crc2.beginPath();
          crc2.moveTo(positionXDonkey - 20, positionYDonkey + 28);
          crc2.lineTo(positionXDonkey- 10, positionYDonkey + 40);
          crc2.stroke();
          crc2.closePath();

          crc2.beginPath();
          crc2.moveTo(positionXDonkey + 20, positionYDonkey + 30);
          crc2.lineTo(positionXDonkey + 30, positionYDonkey + 40);
          crc2.stroke();  
          crc2.closePath();

          crc2.beginPath();
          crc2.moveTo(positionXDonkey + 40, positionYDonkey + 25);
          crc2.lineTo(positionXDonkey + 50, positionYDonkey + 35);
          crc2.stroke();
          crc2.closePath();

          //Kopf
          crc2.beginPath();
          crc2.moveTo(positionXDonkey-90,positionYDonkey-40);
          crc2.arc(positionXDonkey-80,positionYDonkey-20,30,0,2*Math.PI);
          // crc2.stroke();
          crc2.fillStyle="white";
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