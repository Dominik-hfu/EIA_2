namespace AlpenFlug{

    export class Bumblebee{

    
    position:Vector;
    speed:Vector;

    constructor(_position: Vector, _speed:Vector){
        
        this.position= _position;
        this.speed= _speed;

    }

    drawBumblebee(){

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


        movement(_timeslice:number):void{

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


}
}