/*
Aufgabe: <L09.2_Alpenflug>
Name: <Dominik Putz>
Matrikel: <272244>
Datum: <25.05.2023>
Quellen: <->
*/


namespace AlpenFlug {
    
    window.addEventListener("load", handleload);
    export let crc2: CanvasRenderingContext2D;
    let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
    
    let back:ImageData;
    
    let min_X:number=400;
    let max_X:number=600;
    let min_Y:number=550;
    let max_Y:number=700;

    let randomPositionX:number=Math.floor(Math.random() * (max_X - min_X + 1)) + min_X;
    let randomPositionY:number=Math.floor(Math.random() * (max_Y - min_Y + 1)) + min_Y;

    let randomPosition:number[]=[randomPositionX,randomPositionY]



    function handleload(_event: Event): void {

        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        background();
        mountains();
        sun();
        cloud({ x: 100, y: 100 })
        mountain();
        kiosk();
        ellipse();
        windsack();
    
        back=crc2.getImageData(0,0,canvas.width,canvas.height);

        let parachutlist: Parachutist[]=[] 
        for(let i=0;i<10;i++){
            parachutlist[i]=new Parachutist(new Vector (0,0),[1,1],"blue", new Vector(2,2));
        }

        window.setInterval(()=>{

            crc2.putImageData(back,0,0);
            for(let parachutist of parachutlist){
                parachutist.movement(0.1);
                parachutist.drawParachutes();
            }
            
        },500);//alle 20ms wird update ausgeführt

        // let climber:People=new Climber(new Vector(randomPosition[0],randomPosition[1]),[50,30],"yellow",new Vector(1,2));//Jirkas code?
        // climber.color="yellow";//randomColor
        // climber.draw();
        
        // let walker:People=new People(new Vector(randomPosition[0],randomPosition[1]),[50,30],"yellow",new Vector(1,2));//);//Jirkas code?
        // walker.color="yellow";//randomColor
        // walker.draw();

        // let bumblebee:Bumblebee=new Bumblebee(new Vector(randomPosition[0],randomPosition[1]),[50,30],"yellow",new Vector(1,2));//Jirkas code?
        // bumblebee.color="yellow";//randomColor
        // bumblebee.draw();
    };


//img data hier um hintergrund zu speichern
//mehrere vektoren hier im skript anlegen um mehrere unterschiedliche bewegungen zu animieren
//random vektoren
// ab gewissem y wert nach oben bzw unten fliegen 
// ab gewissen y wert type ändern von parachutist zu climber oder läufer
// jedes Bild wird über das alte gemalt
  
    function windsack(){

        
        crc2.beginPath();
        crc2.moveTo(650,551);
        crc2.bezierCurveTo(670,560, 690, 544, 710, 542);
        crc2.stroke();
        crc2.closePath();
        
        crc2.moveTo(710,542);
        crc2.bezierCurveTo(710, 527, 670, 545, 650, 531);
        crc2.lineTo(650,551);
        crc2.fillStyle="hsl(348,83%,47%)";
        crc2.stroke();
        crc2.fill();
        crc2.closePath();   
        
        crc2.beginPath();
        crc2.moveTo(650,600);
        crc2.lineTo(650,550);
        crc2.stroke();
        crc2.closePath();
        crc2.beginPath();
        crc2.ellipse(650, 541, 5, 10, 0, 0, 2*Math.PI);
        crc2.fillStyle="hsl(348,83%,47%)";
        crc2.fill();
        crc2.stroke();
        crc2.closePath();
    };



            
           


// function climber(){

//     for(let guys:number=0; guys<5; guys++){
//     let minX:number= 5;
// let maxX:number= 100;
// let randomX:number=Math.floor(Math.random() * (maxX - minX + 1)) + minX;
// let climbers:[]=[];
// let isUnique:boolean;

// do {
//   isUnique = true;
//   randomX = Math.floor(Math.random() * (maxX - minX + 1)) + minX;
//   randomY = Math.floor(Math.random() * (maxY - minY + 1)) + minY;

//   for (let i = 0; i < climbers.length; i++) {
//     let existingClimber = climbers[i];
//     let distance = Math.sqrt((existingClimber.x - randomX)**2 + (existingClimber.y - randomY)**2);
//     if (distance < 20) {
//       isUnique = false;
//       break;
//     }
//   }
// } while (!isUnique);

// climbers.push({x: randomX, y: randomY});
// // funktioniert trotz Fehler??
// // Schleife verhindert das Überlappen der Climber

// }
// };

    function kiosk(){

        //Gebäude
        crc2.beginPath();
        crc2.moveTo(720,650);
        crc2.lineTo(820,680);
        crc2.lineTo(870,650);
        crc2.lineTo(870,580);
        crc2.lineTo(840,520);
        crc2.lineTo(720,580);
        crc2.lineTo(720,650);

        crc2.strokeStyle="black";
        crc2.stroke();
        crc2.fillStyle="hsl(348,83%,47%)";
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.moveTo(820,680);
        crc2.lineTo(820,610);
        crc2.lineTo(870,580);

        crc2.strokeStyle="black";
        crc2.stroke();
        crc2.fillStyle="hsl(348,83%,47%)";
        crc2.fill();
        crc2.closePath();
        
        crc2.beginPath();
        crc2.moveTo(820,610);
        crc2.lineTo(790,545);
        
        crc2.strokeStyle="black";
        crc2.stroke();
        crc2.closePath();

        //Markise

        crc2.beginPath();
        crc2.moveTo(820,610);
        crc2.lineTo(720,580);
        crc2.lineTo(700,610);
        crc2.lineTo(800,640);
        crc2.lineTo(820,610);
        
        crc2.fillStyle="HSL(360,0%,80%)";
        crc2.fill();
        crc2.closePath();

    };

    function ellipse(){
        
        let centerX:number = 550; // x-Koordinate des Mittelpunkts der Ellipse
        let centerY:number = 650; // y-Koordinate des Mittelpunkts der Ellipse
        
        let minRadiusX:number = 120; // Halbachse in X-Richtung
        let maxRadiusX:number = 140; 
        
        let minRadiusY:number = 10;  // Halbachse in Y-Richtung
        let maxRadiusY:number = 30;  
        
        let randomXRadius:number=Math.floor(Math.random() * (maxRadiusX - minRadiusX + 1)) + minRadiusX;
        let randomYRadius:number=Math.floor(Math.random() * (maxRadiusY - minRadiusY + 1)) + minRadiusY;
        
        let gradient = crc2.createRadialGradient(centerX, centerY, randomXRadius, centerX, centerY, maxRadiusY);
        gradient.addColorStop(0, "HSL(360,0%,96%)");
        gradient.addColorStop(1, "HSL(348,83%,47%)");

    let startAngle:number = 0;
    let endAngle:number = 2 * Math.PI;
        
        crc2.beginPath();
        crc2.ellipse(centerX, centerY, randomXRadius, randomYRadius, 0, startAngle, endAngle);
        crc2.stroke();
        crc2.fillStyle = "HSL(84,100%,65%)";
        crc2.fill();
        crc2.closePath();
      
        
};

let minX:number= 200;
let maxX:number= 400;
let randomX:number=Math.floor(Math.random() * (maxX - minX + 1)) + minX;

let minY:number= 400;
let maxY:number= 600;
let randomY:number=Math.floor(Math.random() * (maxY - minY + 1)) + minY;

function mountain(){
    

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 100, 0, crc2.canvas.height);
        gradient.addColorStop(0, "HSL(360,0%,100%)");
        gradient.addColorStop(1, "HSL(360,0%,20%)");

        crc2.beginPath();
        crc2.moveTo(0,200)
        crc2.lineTo(randomX,600);
        crc2.lineTo(0,600);
        crc2.fillStyle=gradient;
        
        crc2.fill();
        crc2.closePath();

};

    function cloud(position: { x: number, y: number }) {
        let minSize= { x: 100, y: 100 };
        let maxSize = { x: 250, y: 250 };
        let size = {
            x: minSize.x + Math.random() * (maxSize.x - minSize.x),
            y: minSize.y + Math.random() * (maxSize.y - minSize.y)
        };
        let circles = 20;
        let circleRadius = 50;
        let particle = new Path2D();
        let cloudGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, circleRadius);

        particle.arc(0, 0, circleRadius, 0, 2 * Math.PI);
        cloudGradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        cloudGradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");

        crc2.save();
        crc2.translate(position.x, position.y);

        for (let circle = 0; circle < circles; circle++) {

            crc2.save();
            let x = Math.random() * size.x - size.x / 2;
            let y = Math.random() * size.y - size.y / 2;
            crc2.translate(x, y);
            crc2.fillStyle = cloudGradient;
            crc2.fill(particle);
            crc2.restore();

        }
        crc2.restore();

    }


    function sun() {

        let minSunRadius: number = 20;
        let maxSunRadius: number = 50;
        let sunHeight = Math.floor(Math.random() * (maxSunRadius - minSunRadius + 1)) + maxSunRadius;

        let sunX: number = 900;
        let sunY: number = 50;

        let gradient: CanvasGradient = crc2.createRadialGradient(sunX, sunY, sunHeight + 60, sunX, sunY, sunHeight);
        gradient.addColorStop(0, "HSLA(60, 100%, 50%, 0)");
        gradient.addColorStop(1, "HSLA(60, 100%, 90%, 1)");


        crc2.moveTo(sunX, sunY);
        crc2.beginPath();
        crc2.arc(sunX, sunY, sunHeight + 60, 0, 2 * Math.PI);
        crc2.strokeStyle = "transparent"
        crc2.fillStyle = gradient;
        crc2.fill();
        crc2.closePath();

        crc2.moveTo(sunX, sunY);
        crc2.beginPath();
        crc2.arc(sunX, sunY, sunHeight, 0, 2 * Math.PI);
        crc2.strokeStyle = "transparent"
        crc2.fillStyle = gradient;
        crc2.stroke();
        crc2.closePath();

    };

    function mountains() {

        let maxPeaks: number = 8;
        let minPeaks: number = 5;
        let peakHeightMin: number = 100;
        let peakHeightMax: number = 200;

        let startX: number = 0;
        let endX: number = 1000;
        let baseY: number = 450;

        crc2.beginPath();
        crc2.moveTo(startX, baseY);

        // Berechnen der Anzahl der Spitzen
        let numPeaks: number = Math.floor(Math.random() * (maxPeaks - minPeaks + 1)) + minPeaks;

        // Berechnen des Abstands zwischen den Spitzen
        let peakDistance: number = (endX - startX) / numPeaks;

        // Zeichnen der Zickzack-Linie
        for (let i = 0; i < numPeaks; i++) {
            // Berechnen der zufälligen Höhe für die aktuelle Spitze
            let peakHeight: number = Math.floor(Math.random() * (peakHeightMax - peakHeightMin + 1)) + peakHeightMin;

            // Berechnen der x-Koordinate für die aktuelle Spitze
            let peakX: number = startX + i * peakDistance;

            // Berechnen der y-Koordinate für die aktuelle Spitze
            let peakY: number = baseY - peakHeight + Math.floor(Math.random() * 51) - 25;

            // Zeichnen der Linie zur aktuellen Spitze
            crc2.lineTo(peakX, peakY);

            // Zeichnen der Linie zur nächsten Basislinie
            if (i < numPeaks - 1) {
                crc2.lineTo(peakX + peakDistance / 2, baseY);
            }
        }

        // Zeichnen der Linie bis zum Ende
        crc2.lineTo(endX, baseY);
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 100, 0, crc2.canvas.height);
        gradient.addColorStop(0, "HSL(360,0%,100%)");
        gradient.addColorStop(1, "HSL(360,0%,20%)");

        // Linie zeichnen
        crc2.strokeStyle="transparent";
        crc2.fillStyle=gradient;
        crc2.fill();
        crc2.closePath();

    };

    function background() {

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "#51d9ed");
        gradient.addColorStop(.25, "HSL(220, 80%, 80%)");
        gradient.addColorStop(1, "HSL(129,60%,37%)");

        crc2.beginPath();
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.closePath();

    };

    //mit translate verschiebt man das allgemeine koordinatensystem vom ursprung 0,0 zu einer bestimmten position
    // Koordinatensystem könnte auch mit *(-1) umgekehrt werden
    // In der Funktion muss die Translation am Ende wieder Rückgängig gemacht werden mit safe und restore ansonsten addieren sich die Koordinatensysteme auf
    // Oder mit reset transform

}