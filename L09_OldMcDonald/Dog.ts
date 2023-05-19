namespace OldMcDonald{
    
    export class Animal{
        type:string;
        position_x:number;
        position_y:number;
        size_x:number;
        size_y:number;
        color:string="brown";
        name:string;
        food:string;
        foodAmount:number;
        sound:string;

        constructor(_type:string,_position:Array<number>,_size:Array<number>, _color:string,_name:string,_food:string,_foodAmount:number,_sound:string){
            this.type=_type;
            this.position_x=_position[0];
            this.position_y=_position[1];
            this.size_x=_size[0];
            this.size_y=_size[1];
            this.color=_color;
            this.name=_name;
            this.food=_food;
            this.foodAmount=_foodAmount;
            this.sound=_sound;
        }

        
          sing(song: string): void {
            console.log(`I'm singing: ${song}`);
          }
        
          eat(food: string): void {
            console.log(`I'm eating ${food}`);
          }

        draw():void{
            crc2.beginPath();
            crc2.fillStyle=this.color;
            crc2.ellipse(this.position_x,this.position_y,70,30,0,0,2*Math.PI);
            crc2.fill();

        
            for(let i:number=0;i<4;i++){
    
            crc2.moveTo(this.position_x-40  ,this.position_y+25);
            crc2.lineTo(this.position_x-30,this.position_y+40);
            crc2.strokeStyle="black"
            crc2.stroke();
            crc2.closePath();
            this.position_x=this.position_x+10
            // this.position_y=this.position_y+5
            
            }
        }
    }
}