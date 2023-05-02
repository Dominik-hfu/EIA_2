let canvas: HTMLCanvasElement = document.querySelector("canvas");
let crc2: CanvasRenderingContext2D = canvas.getContext("2d");
let pattern: CanvasRenderingContext2D = document.createElement('canvas').getContext('2d');
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

crc2.fillStyle = crc2.createPattern(pattern.canvas, 'repeat');
crc2.fillRect(0, 0, canvas.width, canvas.height);
crc2.save();
crc2.fillStyle = "#FA1111";
crc2.fillRect(0, 0, crc2.canvas.width-0.5, crc2.canvas.height-0.5);

crc2.beginPath();
crc2.arc(150, 100, 30, 0, 2 * Math.PI);
crc2.closePath();
crc2.stroke();

// Ellipse???
crc2.beginPath();
crc2.fillStyle="#FA8072"
crc2.moveTo(500,500)
crc2.lineTo(200,50)
crc2.lineTo(175,30)
crc2.lineTo(150,50)
crc2.stroke()
crc2.strokeText("hallo", 120, 120 )
crc2.closePath();

let path: Path2D = new Path2D();
path.arc(100, 60, 50, 0, 2 * Math.PI);
crc2.fill(path);

crc2.beginPath();
crc2.moveTo(2.1, 1);
crc2.lineTo(2.1, 10);
crc2.moveTo(4.5, 1);
crc2.lineTo(4.5, 10);
crc2.moveTo(7.5, 1);
crc2.lineTo(10.5, 10);
crc2.stroke();
crc2.closePath
crc2.beginPath
crc2.moveTo(5.0,5.0)
let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, 70);
gradient.addColorStop(0, "black");
gradient.addColorStop(0.2, "black");
gradient.addColorStop(0.3, "red");
gradient.addColorStop(0.5, "red");
gradient.addColorStop(0.7, "red");
gradient.addColorStop(0.8, "gold");
gradient.addColorStop(1, "gold");

crc2.fillStyle = gradient;
crc2.fillRect(100, 0, 200, 90);
crc2.closePath
