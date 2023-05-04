namespace Art{

let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
let crc2: CanvasRenderingContext2D =<CanvasRenderingContext2D> canvas.getContext("2d");

crc2.fillStyle = "#FF0000";
crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

crc2.beginPath();
crc2.arc(100, 100, 20, 0, 1.5 * Math.PI);
crc2.closePath();
crc2.stroke();
crc2.closePath()

// ellipse

// moveTo(...)
// lineTo(...)

let path: Path2D = new Path2D();
path.arc(60, 60, 50, 0, 2 * Math.PI);
crc2.stroke(path);

let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, 100);

gradient.addColorStop(0, "black");
gradient.addColorStop(.5, "red");
gradient.addColorStop(1, "gold");

crc2.fillStyle = gradient;
crc2.fillRect(0, 0, 200, 100);

let pattern: CanvasRenderingContext2D = <CanvasRenderingContext2D>document.createElement('canvas').getContext('2d');
pattern.canvas.width = 40;
pattern.canvas.height = 20;

pattern.fillStyle = '#fec';
pattern.fillRect(0, 0, pattern.canvas.width, pattern.canvas.height);
pattern.moveTo(0, 10);
pattern.lineTo(10, 10);
pattern.lineTo(20, 0);
pattern.lineTo(30, 0);
pattern.lineTo(40, 10);
pattern.lineTo(30, 20);
pattern.lineTo(20, 20);
pattern.lineTo(10, 10);
pattern.stroke();

crc2.fillStyle=<CanvasRenderingContext2D> crc2.createPattern(pattern.canvas, 'repeat');
crc2.fillRect(0, 0, canvas.width, canvas.height);

crc2.save();
crc2.restore();
// state?
// translate(), rotate(), scale()
// save? restore? unterschied getTransform(), setTransform(), zugriff?


}