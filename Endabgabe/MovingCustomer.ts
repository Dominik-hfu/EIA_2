namespace EisDealer {

    export enum MOOD {
        HAPPY,
        SAD
    }

    export enum CUSTOMER {
        WAITING,
        ORDERING,
        EATING
    }

    export enum ICEVARIATION {
        VANILLA,
        CHOCOLATE,
        STRAWBERRY
    }//wie kann ich die ganzen einzelnen Varianten speichern?

    export abstract class Customer {

        public position: Vector;
        public speed: Vector;
        private mood: MOOD;
        private type: CUSTOMER;
        private personalIce: ICEVARIATION;


        constructor(_position: Vector, _speed: Vector) {

            this.position = _position;
            this.speed = _speed;

        }


        public draw(): void {

            // let positionX:number=475;
            // let positionY:number=550;

            // crc2.beginPath();
            // crc2.arc(475, 550, 30, 0, 2 * Math.PI);
            // crc2.fillStyle = "hsl(50, 98%, 88%)";
            // crc2.fill();
            // crc2.stroke();
            // crc2.closePath();//Kopf

            // crc2.beginPath();
            // crc2.arc(460, 545, 10, 0, 2 * Math.PI);
            // crc2.fillStyle = "black";
            // crc2.fill();
            // crc2.closePath();

            // crc2.beginPath();
            // crc2.arc(490, 545, 10, 0, 2 * Math.PI);
            // crc2.fillStyle = "black";
            // crc2.fill();
            // crc2.closePath();//Augen

            // crc2.beginPath();
            // crc2.bezierCurveTo(460, 565, 475, 575, 490, 565);
            // crc2.strokeStyle = "black";
            // crc2.stroke();
            // crc2.closePath();//Mund



        };

        public move(_timeslice: number): void {

        };
        
        
        public changeMood(): void {
            
            
        };
        
        
    }
    
    export class WaitingCustomer extends Customer {
        
        public drawSelf(): void {

            // let minX: number = 200;
            // let maxX: number = 1000;
            let positionx: number = 475;

            // let minY: number = -100;
            // let maxY: number = 150;//150
            // let positiony: number = Math.floor(this.position.y * (maxY - minY + 1)) + minY;
            // console.log(positiony)
            let positiony:number=590;


            crc2.beginPath();
            crc2.arc(positionx, positiony, 30, 0, 2 * Math.PI);
            crc2.fillStyle = "hsl(50, 98%, 88%)";
            crc2.fill();
            crc2.stroke();
            crc2.closePath();//Kopf

            crc2.beginPath();
            crc2.arc(positionx-10, positiony-10, 8, 0, 2 * Math.PI);
            crc2.fillStyle = "black";
            crc2.fill();
            crc2.closePath();

            crc2.beginPath();
            crc2.arc(positionx+10, positiony-10, 8, 0, 2 * Math.PI);
            crc2.fillStyle = "black";
            crc2.fill();
            crc2.closePath();//Augen

            crc2.beginPath();
            crc2.bezierCurveTo(positionx-10, positiony+5, positionx, positiony+10, positionx+10, positiony+5);
            crc2.strokeStyle = "black";
            crc2.stroke();
            crc2.closePath();//Mund


    
        }
        public move(_timeslice: number): void {

            let offset: Vector = new Vector(this.speed.x, this.speed.y);
            offset.scale(_timeslice);
            this.position.add(offset); //addiert auf position den offset

        }


        public waitOutside(): void {


        }
    }


    export class OrderingCustomer extends Customer {
        

        public drawSelf(): void {

             // let minX: number = 200;
            // let maxX: number = 1000;
            let positionx: number = 475;

            // let minY: number = -100;
            // let maxY: number = 150;//150
            // let positiony: number = Math.floor(this.position.y * (maxY - minY + 1)) + minY;
            // console.log(positiony)
            let positiony:number=520;


            crc2.beginPath();
            crc2.arc(positionx, positiony, 30, 0, 2 * Math.PI);
            crc2.fillStyle = "hsl(50, 98%, 88%)";
            crc2.fill();
            crc2.stroke();
            crc2.closePath();//Kopf

            crc2.beginPath();
            crc2.arc(positionx-10, positiony-10, 8, 0, 2 * Math.PI);
            crc2.fillStyle = "black";
            crc2.fill();
            crc2.closePath();

            crc2.beginPath();
            crc2.arc(positionx+10, positiony-10, 8, 0, 2 * Math.PI);
            crc2.fillStyle = "black";
            crc2.fill();
            crc2.closePath();//Augen

            crc2.beginPath();
            crc2.bezierCurveTo(positionx-10, positiony+5, positionx, positiony+10, positionx+10, positiony+5);
            crc2.strokeStyle = "black";
            crc2.stroke();
            crc2.closePath();//Mund


        }

        public move(_timeslice: number): void {
            let offset: Vector = new Vector(this.speed.x, this.speed.y);
            offset.scale(_timeslice);
            this.position.add(offset);
        }


        public order(): void {

            let positionx: number = 590;
            let positiony:number=510;

            crc2.beginPath();
            crc2.arc(positionx, positiony, 50, 0, 2 * Math.PI);
            crc2.fillStyle = "white";
            crc2.fill();
            crc2.stroke();
            crc2.closePath();//Eisbestellung
            
            crc2.beginPath();
            crc2.arc(positionx-65, positiony+10, 10, 0, 2 * Math.PI);
            crc2.fillStyle = "white";
            crc2.fill();
            crc2.stroke();
            crc2.closePath();//Eisbestellung

            
            crc2.beginPath();
            crc2.moveTo(positionx-25,positiony-20);
            crc2.lineTo(positionx,positiony+50);
            crc2.lineTo(positionx+25,positiony-20);
            crc2.closePath();
            crc2.fillStyle="hsl(53, 91%, 81%)"
            crc2.fill();
            crc2.stroke();//Waffel

            crc2.beginPath();
            crc2.arc(positionx-15, positiony-30, 15, 0, 2 * Math.PI);
            crc2.fillStyle = "red";
            crc2.fill();
            crc2.closePath();

            crc2.beginPath();
            crc2.arc(positionx+15, positiony-30, 15, 0, 2 * Math.PI);
            crc2.fillStyle = "green";
            crc2.fill();
            crc2.closePath();//Kugeln


        }
    }


    export class EatingCustomer extends Customer {

        public drawSelf(): void {

              // let minX: number = 200;
            // let maxX: number = 1000;
            let positionx: number = 126;

            // let minY: number = -100;
            // let maxY: number = 150;//150
            // let positiony: number = Math.floor(this.position.y * (maxY - minY + 1)) + minY;
            // console.log(positiony)
            let positiony:number=520;


            crc2.beginPath();
            crc2.arc(positionx, positiony, 30, 0, 2 * Math.PI);
            crc2.fillStyle = "hsl(50, 98%, 88%)";
            crc2.fill();
            crc2.stroke();
            crc2.closePath();//Kopf

            crc2.beginPath();
            crc2.arc(positionx-10, positiony-10, 8, 0, 2 * Math.PI);
            crc2.fillStyle = "black";
            crc2.fill();
            crc2.closePath();

            crc2.beginPath();
            crc2.arc(positionx+10, positiony-10, 8, 0, 2 * Math.PI);
            crc2.fillStyle = "black";
            crc2.fill();
            crc2.closePath();//Augen

            crc2.beginPath();
            crc2.bezierCurveTo(positionx-10, positiony+5, positionx, positiony+10, positionx+10, positiony+5);
            crc2.strokeStyle = "black";
            crc2.stroke();
            crc2.closePath();//Mund


        }

        public move(_timeslice: number): void {
            let offset: Vector = new Vector(this.speed.x, this.speed.y);
            offset.scale(_timeslice);
            this.position.add(offset);
        }


        public eat(): void {

                          // let minX: number = 200;
            // let maxX: number = 1000;
            let positionx: number = 126;

            // let minY: number = -100;
            // let maxY: number = 150;//150
            // let positiony: number = Math.floor(this.position.y * (maxY - minY + 1)) + minY;
            // console.log(positiony)
            let positiony:number=520;

            crc2.beginPath();
            crc2.moveTo(positionx+30,positiony+10);
            crc2.lineTo(positionx+55,positiony+80);
            crc2.lineTo(positionx+80,positiony+10);
            crc2.closePath();
            crc2.fillStyle="hsl(53, 91%, 81%)"
            crc2.fill();
            crc2.stroke();//Waffel

            crc2.beginPath();
            crc2.arc(positionx+42.5, positiony, 15, 0, 2 * Math.PI);
            crc2.fillStyle = "red";
            crc2.fill();
            crc2.closePath();

            crc2.beginPath();
            crc2.arc(positionx+70, positiony, 15, 0, 2 * Math.PI);
            crc2.fillStyle = "green";
            crc2.fill();
            crc2.closePath();//Kugeln

            //Hier Essanzeige


        }

        public pay(): void {

            //hier cash counter :)  


        }
    }



}