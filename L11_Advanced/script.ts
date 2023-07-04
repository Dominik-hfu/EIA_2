/*
Aufgabe: <L11_Advanced:Alpenflug>
Name: <Dominik Putz>
Matrikel: <272244>
Datum: <23.06.2023>
Quellen: <->
*/

namespace AlpenFlug {

    window.addEventListener("load", handleload);

    export let crc2: CanvasRenderingContext2D;
    let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
    let back: ImageData;
    let isDaytime:boolean= true

    function handleload(_event: Event): void {

        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        
        let x_mountain=background(true);
        back = crc2.getImageData(0, 0, canvas.width, canvas.height);        

        enum DIRECTION{
          LEFT,
          RIGHT
        }
        let direction:number=0;

        document.addEventListener('keydown', (event: KeyboardEvent) => {
          if (event.key === 'ArrowLeft') {

            direction=DIRECTION.LEFT

            for(let i=0;i<movingObjects.length;i++){

              if(direction==DIRECTION.RIGHT){
              
              if(movingObjects[i] instanceof Parachutists){

               movingObjects[i].speed.scale(3)

              if (movingObjects[i] instanceof Bumblebees){

               movingObjects[i].speed.scale(.3)

              }}              

            }

      
            // console.log(movingObjects)
            console.log('Linker Pfeil wurde gedrückt!');
          }

        }});
        
        document.addEventListener('keydown', (event: KeyboardEvent) => {
          if (event.key === 'ArrowRight') {

            direction=DIRECTION.RIGHT;


            for(let i=0;i<movingObjects.length;i++){

              if(direction==DIRECTION.RIGHT){

              if (movingObjects[i] instanceof Parachutists){

               movingObjects[i].speed.scale(.3)

              }

              
              if (movingObjects[i] instanceof Bumblebees){

                movingObjects[i].speed.scale(3)
 
               }
            }

          }
          console.log('Rechter Pfeil wurde gedrückt!');

        }});
        

        let movingObjects: MovingObjects[] = [];
for (let i = 0; i < 10; i++) {
  let parachutist = new Parachutists(
    new Vector((Math.floor(Math.random() * (1000 - 0 + 1)) + 0) * 0.001, (Math.floor(Math.random() * (500 - 100 + 1)) + 100) * 0.001),
    new Vector(0.08, 0.08)
  );
  movingObjects.push(parachutist);
}

for (let i = 0; i < 2; i++) {
  let climber = new Climbers(
    new Vector((Math.floor(Math.random() * ((x_mountain - 100) - 5 + 1)) + 5) * 0.001, 900 * 0.001),
    new Vector(0.1, 0.2)
  );
  movingObjects.push(climber);
}

for (let i = 0; i < 3; i++) {
  let people = new Guys(
    new Vector((Math.floor(Math.random() * (x_mountain - 200 + 1)) + 200) * 0.001, (Math.floor(Math.random() * (700 - 600 + 1)) + 600) * 0.001),
    new Vector(0.2, 0.2)
  );
  movingObjects.push(people);
}

for (let i = 0; i < 3; i++) {
  let x = Math.floor(Math.random() * (1500 + 1)) * 0.001;
  let y = Math.floor(Math.random() * (1500 + 1)) * 0.001;
  let speedX = 0.2;
  let speedY = (Math.random() < 0.5 ? Math.random() : -Math.random()) * (Math.floor(Math.random() * (200 - 100 + 1)) + 100) * -0.001;

  let canvasWidth = crc2.canvas.width * 0.001;
  let canvasHeight = crc2.canvas.height * 0.001;
  let position = new Vector(Math.max(0, Math.min(x, canvasWidth)), Math.max(0, Math.min(y, canvasHeight)));
  
  let bumblebee = new Bumblebees(position, new Vector(speedX, speedY));
  movingObjects.push(bumblebee);
}

window.setInterval(() => {
  crc2.putImageData(back, 0, 0);
  if (isDaytime) {
    background(true)
  } else {
    background(false)
  }
  
  
  for (let i = 0; i < movingObjects.length; i++) {
    let movingObject = movingObjects[i];
    
    if (movingObject instanceof Parachutists) {
      let change = movingObject.moveTheirself(0.1);
      if (change === true) {
        movingObjects.splice(i, 1);
        movingObjects.push(new Guys(movingObject.position, new Vector(Math.floor(Math.random() * (0.5 - 0.3 + 1)) + 0.3, Math.floor(Math.random() * (0.5 - 0.3 + 1)) + 0.3)));
        // console.log(movingObject)  
      }
    } else if (movingObject instanceof Climbers) {
      let change = movingObject.moveTheirself(0.1);
      if (change === true) {
        movingObjects.splice(i, 1);
        movingObjects.push(new Parachutists(movingObject.position, new Vector(Math.floor(Math.random() * (0.3 - 0.1 + 1)) + 0.1, Math.floor(Math.random() * (0.3 - 0.1 + 1)) + 0.1)));
      }
    } else if (movingObject instanceof Guys) {
      let change = movingObject.moveTheirself(0.05);
      if (change === true) {
        movingObjects.splice(i, 1);
        movingObjects.push(new Climbers(new Vector((Math.floor(Math.random() * ((x_mountain - 100) - 5 + 1)) + 5) * 0.001, 900 * 0.001), new Vector(Math.floor(Math.random() * (0.4 - 0.2 + 1)) + 0.2, Math.floor(Math.random() * (0.4 - 0.2 + 1)) + 0.2)));
      }
    }
    else if (movingObject instanceof Bumblebees) {
      movingObject.moveTheirself(0.05);
      movingObject.drawTheirself();
    } 
    
    movingObject.drawTheirself();
    // console.log(movingObject)
  }
}, 100);


//img data hier um hintergrund zu speichern
//mehrere vektoren hier im skript anlegen um mehrere unterschiedliche bewegungen zu animieren
//random vektoren
// ab gewissem y wert nach oben bzw unten fliegen 
// ab gewissen y wert type ändern von parachutist zu climber oder läufer
// jedes Bild wird über das alte gemalt


function helicopter(){
  
  //Standfüße
  crc2.beginPath();
  crc2.moveTo(190,730);
  crc2.lineTo(200,740);
  crc2.lineTo(300,740);
        crc2.stroke();
        crc2.closePath();
        
        crc2.beginPath();
        crc2.moveTo(230,740);
        crc2.lineTo(235,730);
        crc2.stroke();
        crc2.closePath();
        
        crc2.beginPath();
        crc2.moveTo(260,740);
        crc2.lineTo(265,730);
        crc2.stroke();
        crc2.closePath();
        
        //Körper
        crc2.beginPath();
        crc2.moveTo(250,710);
        crc2.ellipse(250,711,50,20,0,0,2*Math.PI);
        // crc2.stroke();
        crc2.fillStyle="black";
        crc2.fill();
        crc2.closePath();
        
        //Rotor_hinten
        crc2.beginPath();
        crc2.moveTo(300,710);
        crc2.lineTo(350,690);
        
        crc2.lineTo(360,730);
        crc2.lineTo(365,720);
        crc2.lineTo(355,690);
        crc2.lineTo(365,660);
        crc2.lineTo(360,650);
        crc2.lineTo(350,690);
        crc2.stroke();
        crc2.closePath();
        
        crc2.beginPath();
        crc2.moveTo(290,710);
        crc2.lineTo(351,684);
        crc2.stroke();
        crc2.closePath();
        
        //Rotor oben
        crc2.beginPath();
        crc2.moveTo(250,695);
        crc2.lineTo(255,680);
        crc2.lineTo(260,680);
        crc2.lineTo(265,695);
        crc2.stroke();
        crc2.closePath();
        
        //Rotorblätter
        crc2.beginPath();
        crc2.moveTo(260,680);
        crc2.lineTo(350,650);
        crc2.lineTo(320,650);
        crc2.lineTo(260,680);
        crc2.stroke();
        crc2.closePath();
        
        crc2.beginPath();
        crc2.moveTo(255,680);
        crc2.lineTo(140,650);
        crc2.lineTo(170,650);
        crc2.lineTo(255,680);
        crc2.stroke();
        crc2.closePath();
        
      };
      
      function windsack() {
        
        
        crc2.beginPath();
        crc2.moveTo(650, 551);
        crc2.bezierCurveTo(670, 560, 690, 544, 710, 542);
        crc2.stroke();
        crc2.closePath();
        
        crc2.moveTo(710, 542);
        crc2.bezierCurveTo(710, 527, 670, 545, 650, 531);
        crc2.lineTo(650, 551);
        crc2.fillStyle = "hsl(348,83%,47%)";
        crc2.stroke();
        crc2.fill();
        crc2.closePath();
        
        crc2.beginPath();
        crc2.moveTo(650, 600);
        crc2.lineTo(650, 550);
        crc2.stroke();
        crc2.closePath();
        crc2.beginPath();
        crc2.ellipse(650, 541, 5, 10, 0, 0, 2 * Math.PI);
        crc2.fillStyle = "hsl(348,83%,47%)";
        crc2.fill();
        crc2.stroke();
        crc2.closePath();
      };
      
      function kiosk() {

        //Gebäude
        crc2.beginPath();
        crc2.moveTo(720, 650);
        crc2.lineTo(820, 680);
        crc2.lineTo(870, 650);
        crc2.lineTo(870, 580);
        crc2.lineTo(840, 520);
        crc2.lineTo(720, 580);
        crc2.lineTo(720, 650);
        
        crc2.strokeStyle = "black";
        crc2.stroke();
        crc2.fillStyle = "hsl(348,83%,47%)";
        crc2.fill();
        crc2.closePath();
        
        crc2.beginPath();
        crc2.moveTo(820, 680);
        crc2.lineTo(820, 610);
        crc2.lineTo(870, 580);
        
        crc2.strokeStyle = "black";
        crc2.stroke();
        crc2.fillStyle = "hsl(348,83%,47%)";
        crc2.fill();
        crc2.closePath();
        
        crc2.beginPath();
        crc2.moveTo(820, 610);
        crc2.lineTo(790, 545);
        
        crc2.strokeStyle = "black";
        crc2.stroke();
        crc2.closePath();
        
        //Markise
        
        crc2.beginPath();
        crc2.moveTo(820, 610);
        crc2.lineTo(720, 580);
        crc2.lineTo(700, 610);
        crc2.lineTo(800, 640);
        crc2.lineTo(820, 610);
        
        crc2.fillStyle = "HSL(360,0%,80%)";
        crc2.fill();
        crc2.closePath();
        
      };
      
      function ellipse() {
        
        let centerX: number = 550; // x-Koordinate des Mittelpunkts der Ellipse
        let centerY: number = 650; // y-Koordinate des Mittelpunkts der Ellipse
        
        // let minRadiusX: number = 120; // Halbachse in X-Richtung
        // let maxRadiusX: number = 140;
        
        // let minRadiusY: number = 10;  // Halbachse in Y-Richtung
        // let maxRadiusY: number = 30;
        
        let randomXRadius: number = 130;
        let randomYRadius: number = 20;
        
        let gradient = crc2.createRadialGradient(centerX, centerY, randomXRadius, centerX, centerY, 140);
        gradient.addColorStop(0, "HSL(360,0%,96%)");
        gradient.addColorStop(1, "HSL(348,83%,47%)");
        
        let startAngle: number = 0;
        let endAngle: number = 2 * Math.PI;
        
        crc2.beginPath();
        crc2.ellipse(centerX, centerY, randomXRadius, randomYRadius, 0, startAngle, endAngle);
        crc2.stroke();
        crc2.fillStyle = "HSL(84,100%,65%)";
        crc2.fill();
        crc2.closePath();
        
        
      };
      
      
      function mountain(): number {
        
        // let minX: number = 200;
        let maxX: number = 400;
        let randomX: number = 300
        
        
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 100, 0, crc2.canvas.height);
        gradient.addColorStop(0, "HSL(360,0%,100%)");
        gradient.addColorStop(1, "HSL(360,0%,20%)");
        
        crc2.beginPath();
        crc2.moveTo(0, 200)
        crc2.lineTo(randomX, 600);
        crc2.lineTo(0, 600);
        crc2.fillStyle = gradient;
        
        crc2.fill();
        crc2.closePath();
        return maxX
        
      };
      
      function cloud(position: { x: number, y: number }) {
        let size = {
          x: 180,
          y:150
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
        
        // let maxPeaks: number = 8;
        // let minPeaks: number = 5;
        // let peakHeightMin: number = 100;
        // let peakHeightMax: number = 200;
        
        let startX: number = 0;
        let endX: number = 1000;
        let baseY: number = 450;
        
        crc2.beginPath();
        crc2.moveTo(startX, baseY);
        
        // Berechnen der Anzahl der Spitzen
        let numPeaks: number = 7;
        
        // Berechnen des Abstands zwischen den Spitzen
        let peakDistance: number = (endX - startX) / numPeaks;
        
        // Zeichnen der Zickzack-Linie
        for (let i = 0; i < numPeaks; i++) {
          // Berechnen der zufälligen Höhe für die aktuelle Spitze
          let peakHeight: number = 150;
          
          // Berechnen der x-Koordinate für die aktuelle Spitze
          let peakX: number = startX + i * peakDistance;
          
          // Berechnen der y-Koordinate für die aktuelle Spitze
            let peakY: number = baseY - peakHeight + 30

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
          crc2.strokeStyle = "transparent";
          crc2.fillStyle = gradient;
          crc2.fill();
          crc2.closePath();
          
        };
        
        
        function background(isDaytime:boolean) {
          
          let sunX = canvas.width / 1.1;
          let sunY = canvas.height / 1.1;
          let sunRadius = 20;
          if(isDaytime==true){
          
          let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
          gradient.addColorStop(0, "#51d9ed");
          gradient.addColorStop(.25, "HSL(220, 80%, 80%)");
          gradient.addColorStop(1, "HSL(129,60%,37%)");
          
          crc2.beginPath();
          crc2.fillStyle = gradient;
          crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
          crc2.closePath();

          
          // Zeichne die Sonnenstrahlen
          let rayLength = 30;
          let rayCount = 12;
          let angleIncrement = (2 * Math.PI) / rayCount;
          for (let i = 0; i < rayCount; i++) {
            let angle = i * angleIncrement;
            let rayEndX = sunX + Math.cos(angle) * (sunRadius + rayLength);
            let rayEndY = sunY + Math.sin(angle) * (sunRadius + rayLength);
          
          crc2.beginPath();
          crc2.moveTo(sunX, sunY);
          crc2.lineTo(rayEndX, rayEndY);
          crc2.strokeStyle="yellow"
          crc2.stroke();
          crc2.closePath();
          // Zeichne die Sonne
          crc2.beginPath();
          crc2.arc(sunX, sunY, sunRadius, 0, 2 * Math.PI);
          crc2.fillStyle="yellow"
          crc2.fill();
          crc2.closePath();
        
          }}

          else{

            let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
            gradient.addColorStop(0, "#000000");
            gradient.addColorStop(.25, "#000000");
            gradient.addColorStop(1, "HSL(129,60%,37%)");
            
            crc2.beginPath();
            crc2.fillStyle = gradient;
            crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
            crc2.closePath();
            
      
          
  
        }
         // Zeichne die Sonnenstrahlen
         let rayLength = 30;
         let rayCount = 12;
         let angleIncrement = (2 * Math.PI) / rayCount;
         for (let i = 0; i < rayCount; i++) {
           let angle = i * angleIncrement;
           let rayEndX = sunX + Math.cos(angle) * (sunRadius + rayLength);
           let rayEndY = sunY + Math.sin(angle) * (sunRadius + rayLength);
         
         crc2.beginPath();
         crc2.moveTo(sunX, sunY);
         crc2.lineTo(rayEndX, rayEndY);
         crc2.strokeStyle="yellow"
         crc2.stroke();
         crc2.closePath();
         // Zeichne die Sonne
         crc2.beginPath();
         crc2.arc(sunX, sunY, sunRadius, 0, 2 * Math.PI);
         crc2.fillStyle="yellow"
         crc2.fill();
         crc2.closePath();

         crc2.beginPath()
         crc2.moveTo(sunX,sunY-100)
         crc2.lineTo(sunX+50,sunY-100)
         crc2.lineTo(sunX+50,sunY-50)
         crc2.lineTo(sunX-50,sunY-50)
         crc2.lineTo(sunX-50,sunY-100)
         crc2.lineTo(sunX,sunY-100)
         crc2.strokeStyle="black"
         crc2.stroke()
         crc2.closePath();

         crc2.beginPath();
       
        crc2.fillStyle = "white";
        crc2.font='16px Arial';
        crc2.fillText('Click Me!', sunX-36, sunY-70,crc2.measureText('Click Me!').width);
         crc2.fill()
         crc2.closePath()

       }
       
      mountains();
      sun();
      cloud({ x: 100, y: 100 })
      let x_mountain = mountain();
      kiosk();
      ellipse();
      windsack();
      helicopter();

      return x_mountain
      };  

      
        canvas.addEventListener('click', (event) => {
          let rect = canvas.getBoundingClientRect();
          let mouseX = event.clientX - rect.left;
          let mouseY = event.clientY - rect.top;
        
          // Überprüfe, ob der Klick innerhalb der Grenzen der Sonne liegt
          if (
            mouseX >= canvas.width/1.1 - 20 &&
            mouseX <= canvas.width/1.1 + 20&&
            mouseY >= canvas.height/1.1 - 20 &&
            mouseY <= canvas.height/1.1 + 20
          ) {
            // Führe hier den gewünschten Code aus, der auf den Klick auf die Sonne reagiert
            console.log('Sonne wurde geklickt!');
            console.log(isDaytime)
            if(isDaytime==true){
              isDaytime= false 
            }
            else{
              isDaytime= true 

            }
                       
            
            // console.log(isDaytime)

          }

        });


        
        //mit translate verschiebt man das allgemeine koordinatensystem vom ursprung 0,0 zu einer bestimmten position
        // Koordinatensystem könnte auch mit *(-1) umgekehrt werden
        // In der Funktion muss die Translation am Ende wieder Rückgängig gemacht werden mit safe und restore ansonsten addieren sich die Koordinatensysteme auf
        // Oder mit reset transform
        
      }}