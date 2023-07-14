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



        };

        public move(_timeslice: number): void {

        };
        
        
        public changeMood(): void {
            
            
        };
        
        
    }
    
    export class WaitingCustomer extends Customer {
        
        public drawSelf(): void {

            // let this.position.x: number = 475;
            // let this.position.y:number = 590;


            crc2.beginPath();
            crc2.arc(this.position.x, this.position.y, 30, 0, 2 * Math.PI);
            crc2.fillStyle = "hsl(50, 98%, 88%)";
            crc2.fill();
            crc2.stroke();
            crc2.closePath();//Kopf

            crc2.beginPath();
            crc2.arc(this.position.x-10, this.position.y-10, 8, 0, 2 * Math.PI);
            crc2.fillStyle = "black";
            crc2.fill();
            crc2.closePath();

            crc2.beginPath();
            crc2.arc(this.position.x+10, this.position.y-10, 8, 0, 2 * Math.PI);
            crc2.fillStyle = "black";
            crc2.fill();
            crc2.closePath();//Augen

            crc2.beginPath();
            crc2.bezierCurveTo(this.position.x-10, this.position.y+5, this.position.x, this.position.y+10, this.position.x+10, this.position.y+5);
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


            // let this.position.x: number = 475;
            // let this.position.y:number=520;


            crc2.beginPath();
            crc2.arc(this.position.x, this.position.y, 30, 0, 2 * Math.PI);
            crc2.fillStyle = "hsl(50, 98%, 88%)";
            crc2.fill();
            crc2.stroke();
            crc2.closePath();//Kopf

            crc2.beginPath();
            crc2.arc(this.position.x-10, this.position.y-10, 8, 0, 2 * Math.PI);
            crc2.fillStyle = "black";
            crc2.fill();
            crc2.closePath();

            crc2.beginPath();
            crc2.arc(this.position.x+10, this.position.y-10, 8, 0, 2 * Math.PI);
            crc2.fillStyle = "black";
            crc2.fill();
            crc2.closePath();//Augen

            crc2.beginPath();
            crc2.bezierCurveTo(this.position.x-10, this.position.y+5, this.position.x, this.position.y+10, this.position.x+10, this.position.y+5);
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

            let randomIceCreams=getRandomListItems(iceCreamFlavors);
            let randomtopping=get1RandomListItem(Toppings);
            let randomSauce=get1RandomListItem(IceCreamSauce);
            let randomContainer=get1RandomListItem(container);
            let randomSahne=get1RandomListItem(sahne)
            console.log(randomContainer)
            console.log(randomSauce)
            console.log(randomtopping)
            console.log(randomSahne)
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

            if(randomContainer[0]=="Waffel"){
                crc2.beginPath();
                crc2.moveTo(positionx-25,positiony-20);
                crc2.lineTo(positionx,positiony+50);
                crc2.lineTo(positionx+25,positiony-20);
                crc2.closePath();
                crc2.fillStyle="hsl(53, 91%, 81%)"
                crc2.fill();
                crc2.stroke();//Waffel 
            }
            else{


                crc2.beginPath();
                crc2.moveTo(positionx-25,positiony-15);
                crc2.lineTo(positionx-25,positiony+35);
                crc2.lineTo(positionx+25,positiony+35);
                crc2.lineTo(positionx+25,positiony-15);
                crc2.closePath();
                crc2.fillStyle="blue"
                crc2.fill()
                crc2.stroke();//Eisbecher
                
                crc2.beginPath();
                crc2.moveTo(positionx+10,positiony-15);
                crc2.lineTo(positionx+30,positiony-35);
                crc2.stroke();
                crc2.closePath();//Löffel

            }
            

            if (randomIceCreams.length==1){
                
                switch(randomIceCreams[0]){

                    case'Amarena':
                    crc2.beginPath();
                    crc2.arc(positionx, positiony-30, 15, 0, 2 * Math.PI);
                    crc2.fillStyle = "red";
                    crc2.fill();
                    crc2.closePath();
                    break;
                    case'Banane':
                    crc2.beginPath();
                    crc2.arc(positionx, positiony-30, 15, 0, 2 * Math.PI);
                    crc2.fillStyle = "yellow";
                    crc2.fill();
                    crc2.closePath();
                    break;
                    case'Kaffee':
                    crc2.beginPath();
                    crc2.arc(positionx, positiony-30, 15, 0, 2 * Math.PI);
                    crc2.fillStyle = "brown";
                    crc2.fill();
                    crc2.closePath();
                    break;
                    case'Pistazie':
                    crc2.beginPath();
                    crc2.arc(positionx, positiony-30, 15, 0, 2 * Math.PI);
                    crc2.fillStyle = "green";
                    crc2.fill();
                    crc2.closePath();
                    break;
                }

                
            }
            else{
             for(let i=0; i<randomIceCreams.length;i++){

                if(i==0){

                    switch(randomIceCreams[i]){

                        case'Amarena':
                        crc2.beginPath();
                        crc2.arc(positionx-15, positiony-30, 15, 0, 2 * Math.PI);
                        crc2.fillStyle = "red";
                        crc2.fill();
                        crc2.closePath();
                        break;
                        case'Banane':
                        crc2.beginPath();
                        crc2.arc(positionx-15, positiony-30, 15, 0, 2 * Math.PI);
                        crc2.fillStyle = "yellow";
                        crc2.fill();
                        crc2.closePath();
                        break;
                        case'Kaffee':
                        crc2.beginPath();
                        crc2.arc(positionx-15, positiony-30, 15, 0, 2 * Math.PI);
                        crc2.fillStyle = "brown";
                        crc2.fill();
                        crc2.closePath();
                        break;
                        case'Pistazie':
                        crc2.beginPath();
                        crc2.arc(positionx-15, positiony-30, 15, 0, 2 * Math.PI);
                        crc2.fillStyle = "green";
                        crc2.fill();
                        crc2.closePath();
                        break;
                    }

                }
                else if (i==1){
                    switch(randomIceCreams[i]){

                        case'Amarena':
                        crc2.beginPath();
                        crc2.arc(positionx+15, positiony-30, 15, 0, 2 * Math.PI);
                        crc2.fillStyle = "red";
                        crc2.fill();
                        crc2.closePath();
                        break;
                        case'Banane':
                        crc2.beginPath();
                        crc2.arc(positionx+15, positiony-30, 15, 0, 2 * Math.PI);
                        crc2.fillStyle = "yellow";
                        crc2.fill();
                        crc2.closePath();
                        break;
                        case'Kaffee':
                        crc2.beginPath();
                        crc2.arc(positionx+15, positiony-30, 15, 0, 2 * Math.PI);
                        crc2.fillStyle = "brown";
                        crc2.fill();
                        crc2.closePath();
                        break;
                        case'Pistazie':
                        crc2.beginPath();
                        crc2.arc(positionx+15, positiony-30, 15, 0, 2 * Math.PI);
                        crc2.fillStyle = "green";
                        crc2.fill();
                        crc2.closePath();
                        break;
                    }
                }
                else{
                    switch(randomIceCreams[i]){

                        case'Amarena':
                        crc2.beginPath();
                        crc2.arc(positionx, positiony-45, 15, 0, 2 * Math.PI);
                        crc2.fillStyle = "red";
                        crc2.fill();
                        crc2.closePath();
                        break;
                        case'Banane':
                        crc2.beginPath();
                        crc2.arc(positionx, positiony-45, 15, 0, 2 * Math.PI);
                        crc2.fillStyle = "yellow";
                        crc2.fill();
                        crc2.closePath();
                        break;
                        case'Kaffee':
                        crc2.beginPath();
                        crc2.arc(positionx, positiony-45, 15, 0, 2 * Math.PI);
                        crc2.fillStyle = "brown";
                        crc2.fill();
                        crc2.closePath();
                        break;
                        case'Pistazie':
                        crc2.beginPath();
                        crc2.arc(positionx, positiony-45, 15, 0, 2 * Math.PI);
                        crc2.fillStyle = "green";
                        crc2.fill();
                        crc2.closePath();
                        break;
                    }
                }

            }
}
        }
    }


    export class EatingCustomer extends Customer {

        public drawSelf(): void {

            // let this.position.x: number = 126;
            // let this.position.y:number=520;


            crc2.beginPath();
            crc2.arc(this.position.x, this.position.y, 30, 0, 2 * Math.PI);
            crc2.fillStyle = "hsl(50, 98%, 88%)";
            crc2.fill();
            crc2.stroke();
            crc2.closePath();//Kopf

            crc2.beginPath();
            crc2.arc(this.position.x-10, this.position.y-10, 8, 0, 2 * Math.PI);
            crc2.fillStyle = "black";
            crc2.fill();
            crc2.closePath();

            crc2.beginPath();
            crc2.arc(this.position.x+10, this.position.y-10, 8, 0, 2 * Math.PI);
            crc2.fillStyle = "black";
            crc2.fill();
            crc2.closePath();//Augen

            crc2.beginPath();
            crc2.bezierCurveTo(this.position.x-10, this.position.y+5, this.position.x, this.position.y+10, this.position.x+10, this.position.y+5);
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

            // let this.position.x: number = 126;
            // let this.position.y:number=520;
            // selectedorder.orderId=1;
            selectedorder.container=checkServing(selectedItems,container,false);
            selectedorder.sauce=checkServing(selectedItems,IceCreamSauce,false);
            selectedorder.topping=checkServing(selectedItems,Toppings,false);
            selectedorder.cream=checkServing(selectedItems,sahne,false);
            selectedorder.variation=checkServing(selectedItems,iceCreamFlavors,true);
            


            crc2.beginPath();
            crc2.moveTo(this.position.x+30,this.position.y+10);
            crc2.lineTo(this.position.x+55,this.position.y+80);
            crc2.lineTo(this.position.x+80,this.position.y+10);
            crc2.closePath();
            crc2.fillStyle="hsl(53, 91%, 81%)"
            crc2.fill();
            crc2.stroke();//Waffel

            crc2.beginPath();
            crc2.arc(this.position.x+42.5, this.position.y, 15, 0, 2 * Math.PI);
            crc2.fillStyle = "red";
            crc2.fill();
            crc2.closePath();

            crc2.beginPath();
            crc2.arc(this.position.x+70, this.position.y, 15, 0, 2 * Math.PI);
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