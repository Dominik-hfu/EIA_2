namespace EisDealer {

    export enum MOOD {
        HAPPY,
        SAD
    }

    export abstract class Customer {

        public position: Vector;
        public speed: Vector;
        private mood: MOOD;

        constructor(_position: Vector, _speed: Vector,_mood:MOOD) {

            this.position = _position;
            this.speed = _speed;
            this.mood=_mood;

        }
        
    }
    
    export class WaitingCustomer extends Customer {
        
        public drawSelf(): void {

            crc2.beginPath();
            crc2.arc(this.position.x, this.position.y, 30, 0, 2 * Math.PI);
            crc2.fillStyle = "hsl(50, 98%, 88%)";
            crc2.fill();
            crc2.strokeStyle = "black";
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
        public drawSelfSad(): void {

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
            crc2.bezierCurveTo(this.position.x-10, this.position.y+10, this.position.x, this.position.y, this.position.x+10, this.position.y+10);
            crc2.strokeStyle = "black";
            crc2.stroke();
            crc2.closePath();//Mund


    
        }
        public move(_timeslice: number): void {

            let offset: Vector = new Vector(this.speed.x, this.speed.y);
            offset.scale(_timeslice);
            this.position.add(offset); //addiert auf position den offset

        }

    }


    export class OrderingCustomer extends Customer {
        

        public drawSelf(): void {

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


        public order(): string[] {

            let randomIceCreams=getRandomListItems(iceCreamFlavors);
            let randomTopping=get1RandomListItem(Toppings);
            let randomSauce=get1RandomListItem(IceCreamSauce);
            let randomContainer=get1RandomListItem(container);
            let randomCream=get1RandomListItem(sahne)
            let combinedarray=randomIceCreams.concat(randomContainer,randomCream,randomSauce,randomTopping)
            console.log(randomContainer)
            console.log(randomSauce)
            console.log(randomTopping)
            console.log(randomCream)
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
                crc2.fillStyle="#47edff"
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
                    crc2.fillStyle = "#ff4760";
                    crc2.fill();
                    crc2.closePath();
                    break;
                    case'Banane':
                    crc2.beginPath();
                    crc2.arc(positionx, positiony-30, 15, 0, 2 * Math.PI);
                    crc2.fillStyle = "#fcff3e";
                    crc2.fill();
                    crc2.closePath();
                    break;
                    case'Kaffee':
                    crc2.beginPath();
                    crc2.arc(positionx, positiony-30, 15, 0, 2 * Math.PI);
                    crc2.fillStyle = "#c77646";
                    crc2.fill();
                    crc2.closePath();
                    break;
                    case'Pistazie':
                    crc2.beginPath();
                    crc2.arc(positionx, positiony-30, 15, 0, 2 * Math.PI);
                    crc2.fillStyle = "#a3ff47";
                    crc2.fill();
                    crc2.closePath();
                    break;
                    
                }

                switch(randomSauce[0]){

                    case'Vanillesauce':
                    crc2.beginPath();
                    crc2.arc(this.position.x+115, this.position.y-40, 16, Math.PI, 2 * Math.PI);
                    crc2.fillStyle = "#ffeb66";
                    crc2.fill();
                    crc2.closePath();
                    break;
                
                    case'Schokosauce':
                    crc2.beginPath();
                    crc2.arc(this.position.x+115, this.position.y-40, 16, Math.PI, 2 * Math.PI);
                    crc2.fillStyle = "#b58649";
                    crc2.fill();
                    crc2.closePath();
                    break;
                
                    case'Karamellsauce':
                    crc2.beginPath();
                    crc2.arc(this.position.x+115, this.position.y-40, 16, Math.PI, 2 * Math.PI);
                    crc2.fillStyle = "#ff9a1e";
                    crc2.fill();
                    crc2.closePath();
                    break;
                
                    case'Likör':
                    crc2.beginPath();
                    crc2.arc(this.position.x+115, this.position.y-40, 16, Math.PI, 2 * Math.PI);
                    crc2.fillStyle = "#f8ffb5";
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
                        crc2.fillStyle = "#ff4760";
                        crc2.fill();
                        crc2.closePath();
                        break;
                        case'Banane':
                        crc2.beginPath();
                        crc2.arc(positionx-15, positiony-30, 15, 0, 2 * Math.PI);
                        crc2.fillStyle = "#fcff3e";
                        crc2.fill();
                        crc2.closePath();
                        break;
                        case'Kaffee':
                        crc2.beginPath();
                        crc2.arc(positionx-15, positiony-30, 15, 0, 2 * Math.PI);
                        crc2.fillStyle = "#c77646";
                        crc2.fill();
                        crc2.closePath();
                        break;
                        case'Pistazie':
                        crc2.beginPath();
                        crc2.arc(positionx-15, positiony-30, 15, 0, 2 * Math.PI);
                        crc2.fillStyle = "#a3ff47";
                        crc2.fill();
                        crc2.closePath();
                        break;
                    }

                    switch(randomSauce[0]){

                        case'Vanillesauce':
                        crc2.beginPath();
                        crc2.arc(this.position.x+100, this.position.y-40, 16, Math.PI, 2 * Math.PI);
                        crc2.fillStyle = "#ffeb66";
                        crc2.fill();
                        crc2.closePath();
                        break;
                    
                        case'Schokosauce':
                        crc2.beginPath();
                        crc2.arc(this.position.x+100, this.position.y-40, 16, Math.PI, 2 * Math.PI);
                        crc2.fillStyle = "#b58649";
                        crc2.fill();
                        crc2.closePath();
                        break;
                    
                        case'Karamellsauce':
                        crc2.beginPath();
                        crc2.arc(this.position.x+100, this.position.y-40, 16, Math.PI, 2 * Math.PI);
                        crc2.fillStyle = "#ff9a1e";
                        crc2.fill();
                        crc2.closePath();
                        break;
                    
                        case'Likör':
                        crc2.beginPath();
                        crc2.arc(this.position.x+100, this.position.y-40, 16, Math.PI, 2 * Math.PI);
                        crc2.fillStyle = "#f8ffb5";
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
                        crc2.fillStyle = "#ff4760";
                        crc2.fill();
                        crc2.closePath();
                        break;
                        case'Banane':
                        crc2.beginPath();
                        crc2.arc(positionx+15, positiony-30, 15, 0, 2 * Math.PI);
                        crc2.fillStyle = "#fcff3e";
                        crc2.fill();
                        crc2.closePath();
                        break;
                        case'Kaffee':
                        crc2.beginPath();
                        crc2.arc(positionx+15, positiony-30, 15, 0, 2 * Math.PI);
                        crc2.fillStyle = "#c77646";
                        crc2.fill();
                        crc2.closePath();
                        break;
                        case'Pistazie':
                        crc2.beginPath();
                        crc2.arc(positionx+15, positiony-30, 15, 0, 2 * Math.PI);
                        crc2.fillStyle ="#a3ff47";
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
                        crc2.fillStyle = "#ff4760";
                        crc2.fill();
                        crc2.closePath();
                        break;
                        case'Banane':
                        crc2.beginPath();
                        crc2.arc(positionx, positiony-45, 15, 0, 2 * Math.PI);
                        crc2.fillStyle = "#fcff3e";
                        crc2.fill();
                        crc2.closePath();
                        break;
                        case'Kaffee':
                        crc2.beginPath();
                        crc2.arc(positionx, positiony-45, 15, 0, 2 * Math.PI);
                        crc2.fillStyle = "#c77646";
                        crc2.fill();
                        crc2.closePath();
                        break;
                        case'Pistazie':
                        crc2.beginPath();
                        crc2.arc(positionx, positiony-45, 15, 0, 2 * Math.PI);
                        crc2.fillStyle = "#a3ff47";
                        crc2.fill();
                        crc2.closePath();
                        break;
                    }
                }

                
            }
            switch(randomTopping[0]){

                case'Krokant':
                crc2.beginPath();
                crc2.arc(this.position.x+100, this.position.y-30, 5, 0, 2 * Math.PI);
                crc2.fillStyle = "#3c1a03";
                crc2.fill();
                crc2.closePath();
            
                crc2.beginPath();
                crc2.arc(this.position.x+115, this.position.y-40, 5, 0, 2 * Math.PI);
                crc2.fillStyle = "#3c1a03";
                crc2.fill();
                crc2.closePath();
            
                crc2.beginPath();
                crc2.arc(this.position.x+130, this.position.y-30, 5, 0, 2 * Math.PI);
                crc2.fillStyle = "#3c1a03";
                crc2.fill();
                crc2.closePath();
                break;
            
                case'Streusel':
            
                crc2.beginPath();
                crc2.moveTo(this.position.x+105,this.position.y-45);
                crc2.lineTo(this.position.x+125,this.position.y-50);
                crc2.strokeStyle="#ff0000"
                crc2.stroke();
                crc2.closePath();
                
                crc2.beginPath();
                crc2.moveTo(this.position.x+105,this.position.y-40);
                crc2.lineTo(this.position.x+125,this.position.y-45);
                crc2.strokeStyle="#ff0000"
                crc2.stroke();
                crc2.closePath();
                
                crc2.beginPath();
                crc2.moveTo(this.position.x+105,this.position.y-35);
                crc2.lineTo(this.position.x+125,this.position.y-40);
                crc2.strokeStyle="#ff0000"
                crc2.stroke();
                crc2.closePath();
            
            
                
                break;
            
                case'Marshmallow':
                crc2.beginPath();
                crc2.arc(this.position.x+115, this.position.y-40, 12, 0, 2 * Math.PI);
                crc2.fillStyle = "#ffffff";
                crc2.fill();
                crc2.closePath();
                break;
            
                case'Eiswaffel':
                crc2.beginPath();
                crc2.moveTo(this.position.x+130, this.position.y-25);
                crc2.lineTo(this.position.x+170, this.position.y-35);
                crc2.lineTo(this.position.x+160, this.position.y-55);
                crc2.lineTo(this.position.x+120, this.position.y-35);
                crc2.fillStyle = "#c99867";
                crc2.fill();
                crc2.closePath();
                break;
            }
            if(randomCream[0]=="ja"){
            
                if (randomIceCreams.length==1){
                    
                
                    
                    crc2.beginPath();
                    crc2.ellipse(this.position.x+115, this.position.y-20, 20, 10, 0, 0, 2 * Math.PI);
                    crc2.fillStyle = "white";
                    crc2.strokeStyle="black";
                    crc2.fill();
                    crc2.stroke();
                    crc2.closePath();
                
                    crc2.beginPath();
                    crc2.ellipse(this.position.x+115, this.position.y-30, 15, 10, 0, 0, 2 * Math.PI);
                    crc2.fillStyle = "white";
                    crc2.strokeStyle="black";
                    crc2.fill();
                    crc2.stroke();
                    crc2.closePath();
                
                    crc2.beginPath();
                    crc2.ellipse(this.position.x+115, this.position.y-40, 10, 5, 0, 0, 2 * Math.PI);
                    crc2.fillStyle = "white";
                    crc2.strokeStyle="black";
                    crc2.fill();
                    crc2.stroke();
                    crc2.closePath();
                
                }
                //zeichnet Sahne nicht?
                else{
                    
                    
                    crc2.beginPath();
                    crc2.ellipse(this.position.x+115, this.position.y-60, 20, 8, 0, 0, 2 * Math.PI);
                    crc2.stroke();
                    crc2.fillStyle = "white";
                    crc2.strokeStyle="black";
                    crc2.fill();
                    crc2.closePath();
                
                    crc2.beginPath();
                    crc2.ellipse(this.position.x+115, this.position.y-70, 15, 5, 0, 0, 2 * Math.PI);
                    crc2.fillStyle = "white";
                    crc2.strokeStyle="black";
                    crc2.fill();
                    crc2.stroke();
                    crc2.closePath();
                
                    crc2.beginPath();
                    crc2.ellipse(this.position.x+115, this.position.y-80, 10, 2, 0, 0, 2 * Math.PI);
                    crc2.fillStyle = "white";
                    crc2.strokeStyle="black";
                    crc2.fill();
                    crc2.stroke();
                    crc2.closePath();
                }
                
                        }
                    
}

return combinedarray        
}
    }


    export class EatingCustomer extends Customer {

        public drawSelf(): void {

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
        public drawSelfSad(): void {

            crc2.beginPath();
            crc2.arc(this.position.x, this.position.y, 30, 0, 2 * Math.PI);
            crc2.fillStyle = "hsl(50, 98%, 88%)";
            crc2.fill();
            crc2.strokeStyle = "black";
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
            crc2.bezierCurveTo(this.position.x-10, this.position.y+10, this.position.x, this.position.y, this.position.x+10, this.position.y+10);
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

            let order=checkServing(selectedItems);
            console.log(order);
            selectedItems=[]

            if(order.container=="Waffel"){

            crc2.beginPath();
            crc2.moveTo(this.position.x+30,this.position.y+10);
            crc2.lineTo(this.position.x+55,this.position.y+80);
            crc2.lineTo(this.position.x+80,this.position.y+10);
            crc2.closePath();
            crc2.fillStyle="hsl(53, 91%, 81%)"
            crc2.fill();
            crc2.strokeStyle = "black";
            crc2.stroke();//Waffel

            }
            else{

                crc2.beginPath();
                crc2.moveTo(this.position.x+30,this.position.y+10);
                crc2.lineTo(this.position.x+30,this.position.y+60);
                crc2.lineTo(this.position.x+80,this.position.y+60);
                crc2.lineTo(this.position.x+80,this.position.y+10);
                crc2.closePath();
                crc2.fillStyle="#47edff"
                crc2.strokeStyle = "black";
                crc2.fill()
                crc2.stroke();//Eisbecher
                
                crc2.beginPath();
                crc2.moveTo(this.position.x+60,this.position.y+5);
                crc2.lineTo(this.position.x+80,this.position.y-15);
                crc2.strokeStyle = "black"; 
                crc2.stroke();
                crc2.closePath();//Löffel
            }
            
            if (order.variation.length==1){
                
                switch(order.variation[0]){

                    case'Amarena':
                    crc2.beginPath();
                    crc2.arc(this.position.x+55, this.position.y-5, 15, 0, 2 * Math.PI);
                    crc2.fillStyle = "#ff4760";
                    crc2.fill();
                    crc2.closePath();
                    break;
                    case'Banane':
                    crc2.beginPath();
                    crc2.arc(this.position.x+55, this.position.y-5, 15, 0, 2 * Math.PI);
                    crc2.fillStyle = "#fcff3e";
                    crc2.fill();
                    crc2.closePath();
                    break;
                    case'Kaffee':
                    crc2.beginPath();
                    crc2.arc(this.position.x+55, this.position.y-5, 15, 0, 2 * Math.PI);
                    crc2.fillStyle = "#c77646";
                    crc2.fill();
                    crc2.closePath();
                    break;
                    case'Pistazie':
                    crc2.beginPath();
                    crc2.arc(this.position.x+55, this.position.y-5, 15, 0, 2 * Math.PI);
                    crc2.fillStyle = "#a3ff47";
                    crc2.fill();
                    crc2.closePath();
                    break;
                }

                switch(order.sauce){

                    case'Vanillesauce':
                    crc2.beginPath();
                    crc2.arc(this.position.x+55, this.position.y-5, 16, Math.PI, 2 * Math.PI);
                    crc2.fillStyle = "#ffeb66";
                    crc2.fill();
                    crc2.closePath();
                    break;
                
                    case'Schokosauce':
                    crc2.beginPath();
                    crc2.arc(this.position.x+55, this.position.y-5, 16, Math.PI, 2 * Math.PI);
                    crc2.fillStyle = "#b58649";
                    crc2.fill();
                    crc2.closePath();
                    break;
                
                    case'Karamellsauce':
                    crc2.beginPath();
                    crc2.arc(this.position.x+55, this.position.y-5, 16, Math.PI, 2 * Math.PI);
                    crc2.fillStyle = "#ff9a1e";
                    crc2.fill();
                    crc2.closePath();
                    break;
                
                    case'Likör':
                    crc2.beginPath();
                    crc2.arc(this.position.x+55, this.position.y-5, 16, Math.PI, 2 * Math.PI);
                    crc2.fillStyle = "#f8ffb5";
                    crc2.fill();
                    crc2.closePath();
                    break;
                }

                
            }
            else{
             for(let i=0; i<order.variation.length;i++){

                if(i==0){

                    switch(order.variation[i]){

                        case'Amarena':
                        crc2.beginPath();
                        crc2.arc(this.position.x+40, this.position.y-5, 15, 0, 2 * Math.PI);
                        crc2.fillStyle = "#ff4760";
                        crc2.fill();
                        crc2.closePath();
                        break;
                        case'Banane':
                        crc2.beginPath();
                        crc2.arc(this.position.x+40, this.position.y-5, 15, 0, 2 * Math.PI);
                        crc2.fillStyle = "#fcff3e";
                        crc2.fill();
                        crc2.closePath();
                        break;
                        case'Kaffee':
                        crc2.beginPath();
                        crc2.arc(this.position.x+40, this.position.y-5, 15, 0, 2 * Math.PI);
                        crc2.fillStyle = "#c77646";
                        crc2.fill();
                        crc2.closePath();
                        break;
                        case'Pistazie':
                        crc2.beginPath();
                        crc2.arc(this.position.x+40, this.position.y-5, 15, 0, 2 * Math.PI);
                        crc2.fillStyle = "#a3ff47";
                        crc2.fill();
                        crc2.closePath();
                        break;
                    }

                    switch(order.sauce[i]){

                        case'Vanillesauce':
                        crc2.beginPath();
                        crc2.arc(this.position.x+100, this.position.y-40, 16, Math.PI, 2 * Math.PI);
                        crc2.fillStyle = "#ffeb66";
                        crc2.fill();
                        crc2.closePath();
                        break;
                    
                        case'Schokosauce':
                        crc2.beginPath();
                        crc2.arc(this.position.x+100, this.position.y-40, 16, Math.PI, 2 * Math.PI);
                        crc2.fillStyle = "#b58649";
                        crc2.fill();
                        crc2.closePath();
                        break;
                    
                        case'Karamellsauce':
                        crc2.beginPath();
                        crc2.arc(this.position.x+100, this.position.y-40, 16, Math.PI, 2 * Math.PI);
                        crc2.fillStyle = "#ff9a1e";
                        crc2.fill();
                        crc2.closePath();
                        break;
                    
                        case'Likör':
                        crc2.beginPath();
                        crc2.arc(this.position.x+100, this.position.y-40, 16, Math.PI, 2 * Math.PI);
                        crc2.fillStyle = "#f8ffb5";
                        crc2.fill();
                        crc2.closePath();
                        break;
            
            }

                }
                else if (i==1){
                    switch(order.variation[i]){

                        case'Amarena':
                        crc2.beginPath();
                        crc2.arc(this.position.x+70, this.position.y-5, 15, 0, 2 * Math.PI);
                        crc2.fillStyle = "#ff4760";
                        crc2.fill();
                        crc2.closePath();
                        break;
                        case'Banane':
                        crc2.beginPath();
                        crc2.arc(this.position.x+70, this.position.y-5, 15, 0, 2 * Math.PI);
                        crc2.fillStyle = "#fcff3e";
                        crc2.fill();
                        crc2.closePath();
                        break;
                        case'Kaffee':
                        crc2.beginPath();
                        crc2.arc(this.position.x+70, this.position.y-5, 15, 0, 2 * Math.PI);
                        crc2.fillStyle = "#c77646";
                        crc2.fill();
                        crc2.closePath();
                        break;
                        case'Pistazie':
                        crc2.beginPath();
                        crc2.arc(this.position.x+70, this.position.y-5, 15, 0, 2 * Math.PI);
                        crc2.fillStyle = "#a3ff47";
                        crc2.fill();
                        crc2.closePath();
                        break;
                    }
                }
                else{
                    switch(order.variation[i]){

                        case'Amarena':
                        crc2.beginPath();
                        crc2.arc(this.position.x+55, this.position.y-30, 15, 0, 2 * Math.PI);
                        crc2.fillStyle = "#ff4760";
                        crc2.fill();
                        crc2.closePath();
                        break;
                        case'Banane':
                        crc2.beginPath();
                        crc2.arc(this.position.x+55, this.position.y-30, 15, 0, 2 * Math.PI);
                        crc2.fillStyle = "#fcff3e";
                        crc2.fill();
                        crc2.closePath();
                        break;
                        case'Kaffee':
                        crc2.beginPath();
                        crc2.arc(this.position.x+55, this.position.y-30, 15, 0, 2 * Math.PI);
                        crc2.fillStyle = "#c77646";
                        crc2.fill();
                        crc2.closePath();
                        break;
                        case'Pistazie':
                        crc2.beginPath();
                        crc2.arc(this.position.x+55, this.position.y-30, 15, 0, 2 * Math.PI);
                        crc2.fillStyle ="#a3ff47";
                        crc2.fill();
                        crc2.closePath();
                        break;
                    }
                }switch(order.topping){

                    case'Krokant':
                    crc2.beginPath();
                    crc2.arc(this.position.x+45, this.position.y-10, 5, 0, 2 * Math.PI);
                    crc2.fillStyle = "#3c1a03";
                    crc2.fill();
                    crc2.closePath();
                
                    crc2.beginPath();
                    crc2.arc(this.position.x+55, this.position.y-20, 5, 0, 2 * Math.PI);
                    crc2.fillStyle = "#3c1a03";
                    crc2.fill();
                    crc2.closePath();
                
                    crc2.beginPath();
                    crc2.arc(this.position.x+65, this.position.y-10, 5, 0, 2 * Math.PI);
                    crc2.fillStyle = "#3c1a03";
                    crc2.fill();
                    crc2.closePath();
                    break;
                
                    case'Streusel':
                
                
                    crc2.beginPath();
                    crc2.moveTo(this.position.x+45,this.position.y);
                    crc2.lineTo(this.position.x+65,this.position.y-5);
                    crc2.strokeStyle="#ff0000"
                    crc2.stroke();
                    crc2.closePath();
                    
                    crc2.beginPath();
                    crc2.moveTo(this.position.x+45,this.position.y-5);
                    crc2.lineTo(this.position.x+65,this.position.y-10);
                    crc2.strokeStyle="#ff0000"
                    crc2.stroke();
                    crc2.closePath();
                    
                    crc2.beginPath();
                    crc2.moveTo(this.position.x+45,this.position.y);
                    crc2.lineTo(this.position.x+65,this.position.y-5);
                    crc2.strokeStyle="#ff0000"
                    crc2.stroke();
                    crc2.closePath();
                
                
                    break;
                    case'Marshmallow':
                    crc2.beginPath();
                    crc2.arc(this.position.x+55, this.position.y-10, 12, 0, 2 * Math.PI);
                    crc2.fillStyle = "#ffffff";
                    crc2.fill();
                    crc2.closePath();
                    break;
                    case'Eiswaffel':
                    crc2.beginPath();
                    crc2.moveTo(this.position.x+70, this.position.y-5);
                    crc2.lineTo(this.position.x+90, this.position.y-15);
                    crc2.lineTo(this.position.x+85, this.position.y-25);
                    crc2.lineTo(this.position.x+60, this.position.y-15);
                    crc2.fillStyle ="#c99867";
                    crc2.fill();
                    crc2.closePath();
                    break;
                
                }
                if(order.cream=="ja"){
                
                if (order.variation.length==1||order.variation.length==2){
                
                    
                    crc2.beginPath();
                    crc2.ellipse(this.position.x+55, this.position.y-20, 20, 10, 0, 0, 2 * Math.PI);
                    crc2.stroke();
                    crc2.fillStyle = "white";
                    crc2.strokeStyle="black";
                    crc2.fill();
                    crc2.closePath();
                
                    crc2.beginPath();
                    crc2.ellipse(this.position.x+55, this.position.y-30, 15, 10, 0, 0, 2 * Math.PI);
                    crc2.fillStyle = "white";
                    crc2.strokeStyle="black";
                    crc2.fill();
                    crc2.stroke();
                    crc2.closePath();
                
                    crc2.beginPath();
                    crc2.ellipse(this.position.x+55, this.position.y-40, 10, 5, 0, 0, 2 * Math.PI);
                    crc2.fillStyle = "white";
                    crc2.strokeStyle="black";
                    crc2.fill();
                    crc2.stroke();
                    crc2.closePath();
                
                }
                
                else{
                    crc2.beginPath();
                    crc2.ellipse(this.position.x+55, this.position.y-35, 20, 10, 0, 0, 2 * Math.PI);
                    crc2.stroke();
                    crc2.fillStyle = "white";
                    crc2.strokeStyle="black";
                    crc2.fill();
                    crc2.closePath();
                
                    crc2.beginPath();
                    crc2.ellipse(this.position.x+55, this.position.y-45, 15, 10, 0, 0, 2 * Math.PI);
                    crc2.fillStyle = "white";
                    crc2.strokeStyle="black";
                    crc2.fill();
                    crc2.stroke();
                    crc2.closePath();
                
                    crc2.beginPath();
                    crc2.ellipse(this.position.x+55, this.position.y-55, 10, 5, 0, 0, 2 * Math.PI);
                    crc2.fillStyle = "white";
                    crc2.strokeStyle="black";
                    crc2.fill();
                    crc2.stroke();
                    crc2.closePath();
                }
                
                        }
                
                    }

            }
}

}}