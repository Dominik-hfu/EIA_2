namespace Art {

    window.addEventListener("load", handleload);
    let crc2: CanvasRenderingContext2D;

    function handleload(_event: Event): void {
        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        background();
        circleStyle();
        triangleStyle();
    }

    function createRandomColor():string{
        
        let color = Math.floor(Math.random() * 360);
        let saturation = Math.floor(Math.random() * 100);
        let lightness = Math.floor(Math.random() * 100);
        let alpha = Math.random();
    
        let randomColor = `hsl(${color}, ${saturation}%, ${lightness}%, ${alpha})`;

        return randomColor
    }


    function background() {
            crc2.save();
        let gradient: CanvasGradient = crc2.createLinearGradient(100, 0, 0, 130);

        gradient.addColorStop(0, createRandomColor());
        gradient.addColorStop(.5, createRandomColor());
        gradient.addColorStop(1, createRandomColor());

        crc2.beginPath();
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.closePath();
        crc2.restore();

    }

    function circleStyle() {

        let path: Path2D = new Path2D();
        path.arc(200, 200, 200, 0, 2 * Math.PI);
        crc2.stroke(path);

        path = new Path2D();
        path.arc(400, 200, 200, 0, 2 * Math.PI);
        crc2.stroke(path);

        for(let i=0;i<10;i++){

            crc2.beginPath();
            crc2.arc(200, 250, 50, 0, 2 * Math.PI);
            crc2.stroke();
        }

    }

    function triangleStyle(){
        crc2.beginPath();
        crc2.moveTo(5,5);
        crc2.lineTo(200,5);
        crc2.lineTo(100,100);
        crc2.lineTo(5,5);
        crc2.stroke();
        crc2.closePath();
    }

}


    // state?
    // translate(), rotate(), scale()
    // save? restore? unterschied getTransform(), setTransform(), zugriff?
    // Schleifen nutzen

// crc2.fillStyle = "#FF0000";

// crc2.beginPath();
// crc2.arc(100, 100, 20, 0, 1.5 * Math.PI);
// crc2.closePath();
// crc2.stroke();
// crc2.closePath()

// ellipse

// moveTo(...)
// lineTo(...)
    // let pattern: CanvasRenderingContext2D = <CanvasRenderingContext2D>document.createElement('canvas').getContext('2d');
// pattern.canvas.width = 40;
// pattern.canvas.height = 20;

// pattern.fillStyle = '#fec';
// pattern.fillRect(0, 0, pattern.canvas.width, pattern.canvas.height);
// pattern.moveTo(0, 10);
// pattern.lineTo(10, 10);
// pattern.lineTo(20, 0);
// pattern.lineTo(30, 0);
// pattern.lineTo(40, 10);
// pattern.lineTo(30, 20);
// pattern.lineTo(20, 20);
// pattern.lineTo(10, 10);
// pattern.stroke();

// crc2.fillStyle = <CanvasRenderingContext2D>crc2.createPattern(pattern.canvas, 'repeat');
// crc2.fillRect(0, 0, canvas.width, canvas.height);

// crc2.save();
// crc2.restore();