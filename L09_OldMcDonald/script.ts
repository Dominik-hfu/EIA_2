namespace OldMcDonald {

    window.addEventListener("load", handleload);
    export let crc2: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");

    let minX:number=400;
    let maxX:number=600;
    let minY:number=550;
    let maxY:number=700;

    let randomPositionX:number=Math.floor(Math.random() * (maxX - minX + 1)) + minX;
    let randomPositionY:number=Math.floor(Math.random() * (maxY - minY + 1)) + minY;

    let randomPosition:number[]=[randomPositionX,randomPositionY]


    function handleload(_event: Event): void {

        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        
        background();
        sun();
        house();
        tree();
        cloud({x:100,y:100});
        cloud({x:400,y:120});
        cloud({x:800,y:110});
        
    let dog:Animal=new Animal("dog",randomPosition,[50,30],"brown", "Bello", "Knochen", 30, "wuff");
    dog.color="black";//randomColor
    dog.draw(); //muss in Funktion stehen
    // dog.sing();

    let cow:Animal=new Animal("cow",randomPosition,[80,50],"white", "Herbert", "Gras", 5, "muuh");
    cow.color="white";
    cow.draw();

    let pig:Animal=new Animal("pig",randomPosition,[40,20],"pink", "Jens", "Getreide", 30, "grunz");
    pig.color="pink";
    pig.draw();

    let chicken:Animal=new Animal("chicken",randomPosition,[10,10],"yellow", "Chicko", "Körner", 10, "kikeriki");
    chicken.color="yellow";
    chicken.draw();

    let donkey:Animal=new Animal("donkey",randomPosition,[60,40],"grey", "Bernhard", "Hafer",4 , "iaa");
    donkey.color="grey";
    donkey.draw();
    //size??
    let farm:Farm=new Farm([dog,cow,pig,chicken,donkey]);
    farm.simulateDay();

    // myDog.bark(); // Ausgabe: Woof woof!
    // myDog.sing("La la la"); // Ausgabe: I'm singing: La la la
    // myDog.eat("bone"); // Ausgabe: I'm eating bone


    };
    function tree() {
        for (let i = 0; i < 12; i++) {
          const x = Math.random() * canvas.width; // Zufällige X-Koordinate innerhalb des Canvas-Bereichs
      
          // Zeichne den braunen Stamm
          crc2.fillStyle = 'brown';
          crc2.fillRect(x + 70, 300, 40, 100);
      
          // Zeichne die grüne Krone
          crc2.fillStyle = 'green';
          crc2.beginPath();
          crc2.moveTo(x, 300);
          crc2.lineTo(x + 200, 300);
          crc2.lineTo(x + 100, 150);
          crc2.closePath();
          crc2.fill();
        }
      }

    function house(){

        crc2.fillStyle = 'red';
        crc2.fillRect(400, 200, 200, 150);
      
        // Zeichne das weiße Dach
        crc2.fillStyle = 'white';
        crc2.beginPath();
        crc2.moveTo(400, 200);
        crc2.lineTo(600, 200);
        crc2.lineTo(500, 100);
        crc2.closePath();
        crc2.fill();
      
      
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




    function background() {

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "#51d9ed");
        gradient.addColorStop(.2, "HSL(220, 80%, 80%)");
        gradient.addColorStop(.4, "HSL(129,60%,37%)");
        gradient.addColorStop(1, "HSL(30, 100%, 30%)");

        crc2.beginPath();
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.closePath();

    };



}