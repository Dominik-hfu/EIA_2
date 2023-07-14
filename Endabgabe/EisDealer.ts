namespace EisDealer{

    export class Eisdealer{
    
        protected position: Vector;
    
    
        constructor(_position: Vector) {
    
            this.position = _position;

        }
    
             public draw():void{

                crc2.beginPath();
                crc2.arc(this.position.x,this.position.y,40,0,2*Math.PI);
                crc2.fillStyle="hsl(50, 98%, 88%)";
                crc2.fill();
                crc2.stroke();
                crc2.closePath();//Kopf

                crc2.beginPath();
                crc2.arc(this.position.x-15,this.position.y-5,10,0,2*Math.PI);
                crc2.fillStyle="black";
                crc2.fill();
                crc2.closePath();

                crc2.beginPath();
                crc2.arc(this.position.x+15,this.position.y-5,10,0,2*Math.PI);
                crc2.fillStyle="black";
                crc2.fill();
                crc2.closePath();//Augen

                crc2.beginPath();
                crc2.bezierCurveTo(this.position.x-15,this.position.y+15,this.position.x,this.position.y+25,this.position.x+15,this.position.y+15);
                crc2.strokeStyle="black";
                crc2.stroke();
                crc2.closePath();//Mund

                crc2.beginPath();
                crc2.moveTo(this.position.x,this.position.y-105);
                crc2.lineTo(this.position.x+40,this.position.y-15);
                crc2.lineTo(this.position.x-40,this.position.y-15);
                crc2.fillStyle="white";
                crc2.fill();
                crc2.closePath();
                crc2.stroke();//Mütze

             };


    }
}