namespace OldMcDonald {

    window.addEventListener("load", handleload);
    export let crc2: CanvasRenderingContext2D;
    let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");

    let minX:number=10;
    let maxX:number=900;
    let minY:number=10;
    let maxY:number=700;

    let randomPositionX:number=Math.floor(Math.random() * (maxX - minX + 1)) + minX;
    let randomPositionY:number=Math.floor(Math.random() * (maxY - minY + 1)) + minY;

    let randomPosition:number[]=[randomPositionX,randomPositionY]


    function handleload(_event: Event): void {

        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        
        background();
        sun();
        cloud({x:100,y:100});
        // drawField();
        
    let dog:Animal=new Animal("dog",randomPosition,[50,30],"brown", "bello", "Knochen", 2, "wuff");
    dog.color="black";//randomColor
    dog.draw(); //muss in Funktion stehen
    
    // let dog1:Dog=new Dog(20,20,"brown","black");
    // dog1.draw();
    
    // let myDog = new Dog(30,30,"brown","black");
    // myDog.bark(); // Ausgabe: Woof woof!
    // myDog.sing("La la la"); // Ausgabe: I'm singing: La la la
    // myDog.eat("bone"); // Ausgabe: I'm eating bone


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
        gradient.addColorStop(.25, "HSL(220, 80%, 80%)");
        gradient.addColorStop(.5, "HSL(129,60%,37%)");
        gradient.addColorStop(1, "HSL(30, 100%, 30%)");

        crc2.beginPath();
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.closePath();

    };



}