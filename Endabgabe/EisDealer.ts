namespace EisDealer{

    export class Eisdealer{
    
        protected position: Vector;//PROTECTED EVTL: FEHLER!!!!!!!!!BZW VEKTOR unnötig????
    
    
        constructor(_position: Vector) {
    
            this.position = _position;

        }
    
             public draw():void{

                crc2.beginPath();
                crc2.arc(475,215,40,0,2*Math.PI);
                crc2.fillStyle="hsl(50, 98%, 88%)";
                crc2.fill();
                crc2.stroke();
                crc2.closePath();//Kopf

                crc2.beginPath();
                crc2.arc(460,210,10,0,2*Math.PI);
                crc2.fillStyle="black";
                crc2.fill();
                crc2.closePath();

                crc2.beginPath();
                crc2.arc(490,210,10,0,2*Math.PI);
                crc2.fillStyle="black";
                crc2.fill();
                crc2.closePath();//Augen

                crc2.beginPath();
                crc2.bezierCurveTo(460,230,475,240,490,230);
                crc2.strokeStyle="black";
                crc2.stroke();
                crc2.closePath();//Mund

                crc2.beginPath();
                crc2.moveTo(475,120);
                crc2.lineTo(515,200);
                crc2.lineTo(435,200);
                crc2.fillStyle="white";
                crc2.fill();
                crc2.closePath();

             };

             public startDay():void{

             };

             public createIce():void{

             };
             
             public serveIce():void{

             };

             public closeStore():void{

             };//ALLE METHODEN BENÖTIGT???


    }
}