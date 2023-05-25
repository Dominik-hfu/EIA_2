namespace AlpenFlug {


    export class People {

        position: Vector;
        sizeX: number;
        sizeY: number;
        color: string;
        speed: Vector;


        constructor(_position: Vector, _size: Array<number>, _color: string, _speed: Vector) {

            this.position = _position;
            this.sizeX = _size[0];
            this.sizeY = _size[1];
            this.color = _color;
            this.speed = _speed;
            // this.speed.random(100,200); bei Jirka


        }

        drawPeople(): void {

            // crc2.save();
            // crc2.translate(this.position.x, this.position.y);//Koordinatensystem hier hin
            // crc2.scale(this.sizeX, this.sizeY);
            // crc2.stroke(parachutistPaths[this.type]);
            // crc2.restore();

            let minX: number = 200;
            let maxX: number = 700;
            let randomX: number = Math.floor(Math.random() * (maxX - minX + 1)) + minX;

            let minY: number = 600;
            let maxY: number = 700;
            let randomY: number = Math.floor(Math.random() * (maxY - minY + 1)) + minY;

            crc2.beginPath();
            crc2.moveTo(randomX, randomY);
            crc2.arc(randomX, randomY, 8, 0, 2 * Math.PI);
            crc2.stroke();
            crc2.fillStyle = "white";
            crc2.fill();
            crc2.closePath();

            crc2.beginPath();
            crc2.moveTo(randomX, randomY + 8);
            crc2.lineTo(randomX, randomY + 20)
            crc2.moveTo(randomX, randomY + 20);
            crc2.lineTo(randomX - 10, randomY + 30);
            crc2.moveTo(randomX, randomY + 20);
            crc2.lineTo(randomX + 10, randomY + 30);
            crc2.stroke();
            crc2.closePath();

            crc2.beginPath();
            crc2.moveTo(randomX, randomY + 15);
            crc2.lineTo(randomX - 20, randomY);
            crc2.moveTo(randomX, randomY + 15);
            crc2.lineTo(randomX + 20, randomY);
            crc2.stroke();
            crc2.closePath();

        };


        movement(_timeslice: number): void {

            let offset: Vector = new Vector(this.speed.x, this.speed.y);
            offset.scale(_timeslice);
            this.position.add(offset); //addiert auf position den offset

            if (this.position.x < 0)
                this.position.x += crc2.canvas.width;

            if (this.position.y < 0)
                this.position.y += crc2.canvas.height;

            if (this.position.x > crc2.canvas.width)
                this.position.x -= crc2.canvas.width;

            if (this.position.y > crc2.canvas.height)
                this.position.y -= crc2.canvas.height;
        };


    }

    export class Parachutist extends People {

        drawParachutes() {

            let minX: number = 200;
            let maxX: number = 1000;
            let randomX: number = Math.floor(Math.random() * (maxX - minX + 1)) + minX;

            let minY: number = 100;
            let maxY: number = 500;
            let randomY: number = Math.floor(Math.random() * (maxY - minY + 1)) + minY;

            // Seile
            crc2.beginPath();
            crc2.moveTo(randomX - 3, randomY + 10);
            crc2.lineTo(randomX - 25, randomY - 20);
            crc2.stroke();
            crc2.closePath();

            crc2.beginPath();
            crc2.moveTo(randomX + 3, randomY + 10);
            crc2.lineTo(randomX + 25, randomY - 20);
            crc2.stroke();
            crc2.closePath();

            crc2.beginPath();
            crc2.moveTo(randomX + 3, randomY + 10);
            crc2.lineTo(randomX + 10, randomY - 20);
            crc2.stroke();
            crc2.closePath();

            crc2.beginPath();
            crc2.moveTo(randomX - 3, randomY + 10);
            crc2.lineTo(randomX - 10, randomY - 20);
            crc2.stroke();
            crc2.closePath();

            //Schirm

            crc2.beginPath();
            crc2.moveTo(randomX - 25, randomY - 20)
            crc2.bezierCurveTo(randomX - 10, randomY - 20, randomX + 10, randomY - 20, randomX + 25, randomY - 20);
            crc2.fill();
            crc2.fillStyle = "HSL(39,100%,50%)";
            crc2.stroke();
            crc2.closePath();

            crc2.beginPath();
            crc2.arc(randomX, randomY - 20, 25, Math.PI, 2 * Math.PI)
            crc2.lineTo(randomX - 25, randomY - 20);
            crc2.fill();
            crc2.stroke();
            crc2.closePath();

            crc2.beginPath();
            crc2.moveTo(randomX, randomY);
            crc2.arc(randomX, randomY, 8, 0, 2 * Math.PI);
            crc2.stroke();
            crc2.fillStyle = "white";
            crc2.fill();
            crc2.closePath();

            crc2.beginPath();
            crc2.moveTo(randomX, randomY + 8);
            crc2.lineTo(randomX, randomY + 20)
            crc2.moveTo(randomX, randomY + 20);
            crc2.lineTo(randomX - 10, randomY + 30);
            crc2.moveTo(randomX, randomY + 20);
            crc2.lineTo(randomX + 10, randomY + 30);
            crc2.stroke();
            crc2.closePath();

            crc2.beginPath();
            crc2.moveTo(randomX, randomY + 15);
            crc2.lineTo(randomX - 20, randomY);
            crc2.moveTo(randomX, randomY + 15);
            crc2.lineTo(randomX + 20, randomY);
            crc2.stroke();
            crc2.closePath();

        }
    }

    let minY: number = 400;
    let maxY: number = 600;
    let randomY: number = Math.floor(Math.random() * (maxY - minY + 1)) + minY;
    export class Climber extends People {

        drawClimber() {

            let minX: number = 5;
            let maxX: number = 100;
            let randomX: number = Math.floor(Math.random() * (maxX - minX + 1)) + minX;
            let climbers: [] = [];
            let isUnique: boolean;

            do {
                isUnique = true;
                randomX = Math.floor(Math.random() * (maxX - minX + 1)) + minX;
                randomY = Math.floor(Math.random() * (maxY - minY + 1)) + minY;

                for (let i = 0; i < climbers.length; i++) {
                    let existingClimber = climbers[i];
                    let distance = Math.sqrt((existingClimber - randomX) ** 2 + (existingClimber - randomY) ** 2);
                    if (distance < 20) {
                        isUnique = false;
                        break;
                    }
                }
            } while (!isUnique);

            crc2.beginPath();
            crc2.moveTo(randomX, randomY);
            crc2.arc(randomX, randomY, 8, 0, 2 * Math.PI);
            crc2.stroke();
            crc2.fillStyle = "white";
            crc2.fill();
            crc2.closePath();

            
            crc2.beginPath();
            crc2.moveTo(randomX, randomY + 8);
            crc2.lineTo(randomX, randomY + 20)
            crc2.moveTo(randomX, randomY + 20);
            crc2.lineTo(randomX - 10, randomY + 30);
            crc2.moveTo(randomX, randomY + 20);
            crc2.lineTo(randomX + 10, randomY + 30);
            crc2.stroke();
            crc2.closePath();
            
            crc2.beginPath();
            crc2.moveTo(randomX, randomY + 15);
            crc2.lineTo(randomX - 20, randomY);
            crc2.moveTo(randomX, randomY + 15);
            crc2.lineTo(randomX + 20, randomY);
            crc2.stroke();
            crc2.closePath();

            //Rucksack
            crc2.beginPath();
            crc2.moveTo(randomX, randomY+10);
            crc2.lineTo(randomX+8,randomY+10);
            crc2.lineTo(randomX+8,randomY+20);
            crc2.lineTo(randomX-8,randomY+20);
            crc2.lineTo(randomX-8,randomY+10);
            crc2.fillStyle="red";
            crc2.fill();
            crc2.closePath();
        };

    }
    
}