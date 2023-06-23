namespace AlpenFlug{

export abstract class MovingObjects{

    position: Vector;
    speed: Vector;


    constructor(_position: Vector, _speed: Vector) {

        this.position = _position;
        this.speed = _speed;
    }

    abstract drawTheirself():void;// abstract da movingObjects sich nicht selber zeichnen kann

    abstract moveTheirself(_timeslice:number):void|boolean;//Parameter bei bumblebee nicht benötigt evtl. Fehler? + void und boolean notwendig

}


export class Guys extends MovingObjects{// wichtig export, extends

    drawTheirself():void{

        let minX: number = 200;
        let maxX: number = 700;
        let positionx=Math.floor(this.position.x * (maxX - minX + 1))+ minX

        let minY: number = 600;
        let maxY: number = 700;
        let positiony=Math.floor(this.position.y * (maxY - minY + 1))+ minY

        crc2.beginPath();
        crc2.moveTo(positionx, positiony);
        crc2.arc(positionx, positiony, 8, 0, 2 * Math.PI);
        crc2.strokeStyle="black"
        crc2.stroke();
        crc2.fillStyle = "white";
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.moveTo(positionx, positiony + 8);
        crc2.lineTo(positionx, positiony + 20)
        crc2.moveTo(positionx, positiony + 20);
        crc2.lineTo(positionx - 10, positiony + 30);
        crc2.moveTo(positionx, positiony + 20);
        crc2.lineTo(positionx + 10, positiony + 30);
        crc2.strokeStyle="black"
        crc2.stroke();
        crc2.closePath();

        crc2.beginPath();
        crc2.moveTo(positionx, positiony + 15);
        crc2.lineTo(positionx - 20, positiony);
        crc2.moveTo(positionx, positiony + 15);
        crc2.lineTo(positionx + 20, positiony);
        crc2.strokeStyle="black"
        crc2.stroke();
        crc2.closePath();

    };

   moveTheirself(_timeslice: number): boolean{

        let offset: Vector = new Vector(this.speed.x, this.speed.y);
        offset.scale(_timeslice);
        this.position.subtract(offset); //subtrahiert von position den offset
        let change=false

        if (this.position.y < 200*0.001 && this.position.x<350*0.001 ){

            change=true
        }
            
        if (this.position.y < 200*0.001  && this.position.x>350*0.001 ){
            this.position.y =900*0.001 ;
            change=false
        }
        
    
        if(this.position.x<0){
            change=true
        }
        return change


    };
}

export class Parachutists extends Guys{// extends Guys = quasi gleicher Effekt wie MovingObjects aber Parachutists sind Guys und dann MovingObjects untergeordnet

    drawTheirself():void{

        let minX: number = 200;
            let maxX: number = 1000;
            let positionx: number = Math.floor(this.position.x * (maxX - minX + 1)) + minX;

            let minY: number = 100;
            let maxY: number = 500;
            let positiony: number = Math.floor(this.position.y * (maxY - minY + 1)) + minY;

            // Seile
            crc2.beginPath();
            crc2.moveTo(positionx - 3, positiony + 10);
            crc2.lineTo(positionx - 25, positiony - 20);
            crc2.stroke();
            crc2.closePath();

            crc2.beginPath();
            crc2.moveTo(positionx + 3, positiony + 10);
            crc2.lineTo(positionx + 25, positiony - 20);
            crc2.stroke();
            crc2.closePath();

            crc2.beginPath();
            crc2.moveTo(positionx + 3, positiony + 10);
            crc2.lineTo(positionx + 10, positiony - 20);
            crc2.stroke();
            crc2.closePath();

            crc2.beginPath();
            crc2.moveTo(positionx - 3, positiony + 10);
            crc2.lineTo(positionx - 10, positiony - 20);
            crc2.stroke();
            crc2.closePath();

            //Schirm

            crc2.beginPath();
            crc2.moveTo(positionx - 25, positiony - 20)
            crc2.bezierCurveTo(positionx - 10, positiony - 20, positionx + 10, positiony - 20, positionx + 25, positiony - 20);
            crc2.fill();
            crc2.fillStyle = "HSL(39,100%,50%)";
            crc2.stroke();
            crc2.closePath();

            crc2.beginPath();
            crc2.arc(positionx, positiony - 20, 25, Math.PI, 2 * Math.PI)
            crc2.lineTo(positionx - 25, positiony - 20);
            crc2.fill();
            crc2.stroke();
            crc2.closePath();

            crc2.beginPath();
            crc2.moveTo(positionx, positiony);
            crc2.arc(positionx, positiony, 8, 0, 2 * Math.PI);
            crc2.stroke();
            crc2.fillStyle = "white";
            crc2.fill();
            crc2.closePath();

            crc2.beginPath();
            crc2.moveTo(positionx, positiony + 8);
            crc2.lineTo(positionx, positiony + 20)
            crc2.moveTo(positionx, positiony + 20);
            crc2.lineTo(positionx - 10, positiony + 30);
            crc2.moveTo(positionx, positiony + 20);
            crc2.lineTo(positionx + 10, positiony + 30);
            crc2.stroke();
            crc2.closePath();

            crc2.beginPath();
            crc2.moveTo(positionx, positiony + 15);
            crc2.lineTo(positionx - 20, positiony);
            crc2.moveTo(positionx, positiony + 15);
            crc2.lineTo(positionx + 20, positiony);
            crc2.stroke();
            crc2.closePath();
        
    };

    moveTheirself(_timeslice: number): boolean{

        let offset: Vector = new Vector(this.speed.x, this.speed.y);
            offset.scale(_timeslice);
            this.position.add(offset); //addiert auf position den offset
            let change=false

            if (this.position.x > crc2.canvas.width*0.001)
            {
                this.position.x -= crc2.canvas.width*0.001;
                change=false;
            }
                

            if (this.position.y > crc2.canvas.height*0.001){

                change=true;
            }
        
            return change
        
    }
}

export class Climbers extends Guys{

    drawTheirself():void{

        let minY: number = 400;
        let maxY: number = 600;
        let positiony: number = Math.floor(Math.random() * (maxY - minY + 1)) + minY;
        
        let minX: number = 5;
        let maxX: number = 100;
        let positionx: number = Math.floor(this.position.x * (maxX - minX + 1)) + minX;
        let climbers: [] = [];
        let isUnique: boolean;

        do {
            isUnique = true;
            positionx = Math.floor(this.position.x * (maxX - minX + 1)) + minX;
            positiony = Math.floor(this.position.y * (maxY - minY + 1)) + minY;

            for (let i = 0; i < climbers.length; i++) {
                let existingClimber = climbers[i];
                let distance = Math.sqrt((existingClimber - positionx) ** 2 + (existingClimber - positiony) ** 2);
                if (distance < 20) {
                    isUnique = false;
                    break;
                }
            }
        } while (!isUnique);

        crc2.beginPath();
        crc2.moveTo(positionx, positiony);
        crc2.arc(positionx, positiony, 8, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "white";
        crc2.fill();
        crc2.closePath();

        
        crc2.beginPath();
        crc2.moveTo(positionx, positiony + 8);
        crc2.lineTo(positionx, positiony + 20)
        crc2.moveTo(positionx, positiony + 20);
        crc2.lineTo(positionx - 10, positiony + 30);
        crc2.moveTo(positionx, positiony + 20);
        crc2.lineTo(positionx + 10, positiony + 30);
        crc2.stroke();
        crc2.closePath();
        
        crc2.beginPath();
        crc2.moveTo(positionx, positiony + 15);
        crc2.lineTo(positionx - 20, positiony);
        crc2.moveTo(positionx, positiony + 15);
        crc2.lineTo(positionx + 20, positiony);
        crc2.stroke();
        crc2.closePath();

        //Rucksack
        crc2.beginPath();
        crc2.moveTo(positionx, positiony+10);
        crc2.lineTo(positionx+8,positiony+10);
        crc2.lineTo(positionx+8,positiony+20);
        crc2.lineTo(positionx-8,positiony+20);
        crc2.lineTo(positionx-8,positiony+10);
        crc2.fillStyle="red";
        crc2.fill();
        crc2.closePath();

    };

    moveTheirself(_timeslice: number):boolean{
        
        let offset: Vector = new Vector(this.speed.x, this.speed.y);
        offset.scale(_timeslice);
        this.position.subtract_climb(offset); //addiert auf position den offset
        let change=false

        if (this.position.x < crc2.canvas.width*0.001)
        {
            this.position.x += crc2.canvas.width*0.001;
            change=false;
        }
            

        if (this.position.y < 50*0.001){

            change=true;
        }
    
        return change

    };

}

export class Bumblebees extends MovingObjects{

    

    drawTheirself():void{

        let maxXBee:number= 800;
        let maxYBee:number= 540;

        let minXBee:number= 100;
        let minYBee:number= 250;

        let randomXBee:number=Math.floor(this.position.x * (maxXBee - minXBee + 1)) + minXBee;
        let randomYBee:number=Math.floor(this.position.y * (maxYBee - minYBee + 1)) + minYBee;//Bee Position

        //Körper
        crc2.beginPath();
        crc2.moveTo(randomXBee,randomYBee);
        crc2.ellipse(randomXBee-60, randomYBee, 60, 30, 0, 0, 2*Math.PI);
        crc2.stroke();
        crc2.fillStyle="HSL(60,90%,50%)";
        crc2.fill();
        crc2.closePath();
        //Beine
        crc2.beginPath();
        crc2.moveTo(randomXBee-90,randomYBee+26);
        crc2.lineTo(randomXBee-80,randomYBee+35);
        crc2.stroke();
        crc2.closePath();
        
        crc2.beginPath();
        crc2.moveTo(randomXBee-80,randomYBee+28);
        crc2.lineTo(randomXBee-70,randomYBee+35);
        crc2.stroke();
        crc2.closePath();
        
        crc2.beginPath();
        crc2.moveTo(randomXBee-50,randomYBee+29);
        crc2.lineTo(randomXBee-42,randomYBee+35);
        crc2.stroke();
        crc2.closePath();

        crc2.beginPath();
        crc2.moveTo(randomXBee-40,randomYBee+28);
        crc2.lineTo(randomXBee-30,randomYBee+35);
        crc2.stroke();
        crc2.closePath();
        //Streifen
        crc2.beginPath();
        crc2.moveTo(randomXBee-65,randomYBee+29);
        crc2.bezierCurveTo(randomXBee-35,randomYBee-5, randomXBee-45, randomYBee-8, randomXBee-65, randomYBee-30);
        crc2.stroke();
        crc2.closePath();

        crc2.beginPath();
        crc2.moveTo(randomXBee-55,randomYBee+29);
        crc2.bezierCurveTo(randomXBee-25,randomYBee-5, randomXBee-35, randomYBee-8, randomXBee-55, randomYBee-30);
        crc2.stroke();
        crc2.closePath();

        crc2.beginPath();
        crc2.moveTo(randomXBee-35,randomYBee+27);
        crc2.bezierCurveTo(randomXBee-5,randomYBee-5, randomXBee-15, randomYBee-8, randomXBee-35, randomYBee-27);
        crc2.stroke();
        // crc2.closePath();

        // crc2.beginPath();
        crc2.moveTo(randomXBee-25,randomYBee+24);
        crc2.bezierCurveTo(randomXBee+5,randomYBee-5, randomXBee-5, randomYBee-8, randomXBee-25, randomYBee-24);
        crc2.stroke();
        crc2.closePath();


        //Augen
        crc2.beginPath();
        crc2.moveTo(randomXBee-90,randomYBee);
        crc2.arc(randomXBee-100,randomYBee,10,0,2*Math.PI);
        crc2.stroke();
        crc2.fillStyle="white";
        crc2.fill();
        crc2.closePath();
        
        crc2.beginPath();
        crc2.moveTo(randomXBee-75,randomYBee);
        crc2.arc(randomXBee-82,randomYBee,8,0,2*Math.PI);
        crc2.stroke();
        crc2.fillStyle="white";
        crc2.fill();
        crc2.closePath();
        
        crc2.beginPath();
        crc2.moveTo(randomXBee-90,randomYBee);
        crc2.arc(randomXBee-95,randomYBee,5,0,2*Math.PI);
        crc2.fillStyle="black";
        crc2.fill();
        crc2.stroke();
        crc2.closePath();
        
        crc2.beginPath();
        crc2.moveTo(randomXBee-80,randomYBee);
        crc2.arc(randomXBee-85,randomYBee,5,0,2*Math.PI);
        crc2.fillStyle="black";
        crc2.fill();
        crc2.stroke();
        crc2.closePath();

        //Flügel
        crc2.beginPath();
        crc2.moveTo(randomXBee-65,randomYBee-30);
        crc2.bezierCurveTo(randomXBee-70,randomYBee-80, randomXBee-80, randomYBee-24, randomXBee-65, randomYBee-30);
        crc2.stroke();
        crc2.fillStyle="lightgrey";
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.moveTo(randomXBee-65,randomYBee-30);
        crc2.bezierCurveTo(randomXBee-60,randomYBee-80, randomXBee-50, randomYBee-24, randomXBee-55, randomYBee-30);
        crc2.stroke();
        crc2.fillStyle="lightgrey";
        crc2.fill();
        crc2.closePath();
        
    };

    moveTheirself(_timeslice: number):void {

        let offset: Vector= new Vector(this.speed.x, this.speed.y);
        offset.scale(_timeslice);
        this.position.subtract(offset); //addiert auf position den offset

        if(this.position.x < 0){
        this.position.x += 1.5;}
        
        if(this.position.y < 0){
        this.position.y += crc2.canvas.height;}

        if(this.position.y > crc2.canvas.height){
        this.position.y += 0;}
        
    };

//     sumsum(_timeslice:number){

//         let sum:string="Sum Sum";
//         crc2.fillStyle = "white";
//         crc2.fillRect(this.position.x, this.position.y - 200, 500, 30);
      
//         crc2.fillStyle = "black";
//         crc2.font='20px Arial';
//         crc2.fillText(sum, this.position.x-180, this.position.y-180,crc2.measureText(sum).width);

}











}