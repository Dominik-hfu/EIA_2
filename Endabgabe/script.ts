/*
Aufgabe: <Endabgabe_Eisdealer>
Name: <Dominik Putz>
Matrikel: <272244>
Datum: <04.07.2023>
Quellen: <->
*/

namespace EisDealer{

    window.addEventListener("load", handleload);
    export let crc2: CanvasRenderingContext2D;
    let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
    
    let back: ImageData;
    // let background:boolean=true;
    // let serve:boolean=false;
    let button:HTMLButtonElement;
    let closeButton:HTMLButtonElement;
    let isDay:boolean;

    
    function handleload(_event: Event): void {
        
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        function createStartButton(): void {
            button = document.createElement("button");
            button.textContent = "Start Day";
            button.addEventListener("click", () => {
                day();
            });
    
            document.body.appendChild(button);
            
        }
        createStartButton();
        
        //Funktionen aufrufen()
        
        back = crc2.getImageData(0, 0, canvas.width, canvas.height);
        
        function drawStore(isDay:boolean){
            
            
            crc2.beginPath();
        crc2.fillStyle="hsl(160, 2%, 60%)";
        crc2.fillRect(0,0,canvas.width,canvas.height);
        crc2.fill();
        crc2.closePath();
        
        crc2.beginPath();
        crc2.moveTo(25,100);
        crc2.lineTo(25,700);
        crc2.lineTo(975,700);
        crc2.lineTo(975,100);
        crc2.closePath();
        crc2.fillStyle="hsl(160, 100%, 98%)";
        crc2.fill();
        crc2.stroke();// Umriss Gebäude
        
        crc2.beginPath();
        crc2.moveTo(25,450);
        crc2.lineTo(975,450);
        crc2.lineTo(975,300);
        crc2.lineTo(25,300);
        crc2.closePath();
        crc2.stroke();//Theke Grundriss
        
        crc2.beginPath();
        crc2.moveTo(25,375);
        crc2.lineTo(975,375);//Mitte Horizontal
        
        crc2.moveTo(475,300);
        crc2.lineTo(475,450);// Mitte Vertikal (Saucen)
        
        crc2.moveTo(237.5,300);
        crc2.lineTo(237.5,450);//Eissorten
        
        crc2.moveTo(593.75,300);//Saucen
        crc2.lineTo(593.75,450);
        
        crc2.moveTo(712.5,300);//Toppings
        crc2.lineTo(712.5,450);
        
        crc2.moveTo(831.25,300);//Toppings
        crc2.lineTo(831.25,450);
        crc2.stroke();
        crc2.closePath();
        
        crc2.beginPath();
        crc2.moveTo(25,200);
        crc2.lineTo(225,200);
        crc2.lineTo(225,100);
        crc2.stroke();
        crc2.closePath();//Kasse
        
        crc2.beginPath();
        crc2.moveTo(450,700);
        crc2.lineTo(450,625);
        crc2.lineTo(500,625);
        crc2.lineTo(500,700);
        crc2.stroke();
        crc2.closePath();//Eingang
        
        crc2.beginPath();
        crc2.moveTo(100,700);
        crc2.lineTo(100,625);
        crc2.lineTo(150,625);
        crc2.lineTo(150,700);
        crc2.stroke();
        crc2.closePath();//Ausgang

    //     if(isDay==true){
    //         crc2.beginPath();
    //         crc2.moveTo(0,0);
    //         crc2.fillStyle="white"
    //         crc2.fillRect(0,0,canvas.width,canvas.height);
    //         crc2.closePath();
    // }
    
    // else{
        
    //     crc2.beginPath();
    //     crc2.moveTo(0,0);
    //     crc2.fillStyle="black"
    //     crc2.fillRect(0,0,canvas.width,canvas.height);
    //     crc2.closePath();

    // }
    //macht den ganzen canvas einfarbig, deswegen ist umriss nicht mehr zu sehen :/ und dealer macht feierabend nach timeout
    
    
    
    
    
    }

    function day(){

        isDay=true;
        console.log(isDay)
    
        let dealer=new Eisdealer(new Vector(400,100));//Vector unnötig hier?
        dealer.draw();
        console.log("Ich wurde geklickt");

        let cashRegister:HTMLParagraphElement=document.createElement("p")as HTMLParagraphElement;
        cashRegister.textContent="Kasse";
        document.body.appendChild(cashRegister);
        console.log(cashRegister);//Wort Kasse
        
        let cash:HTMLParagraphElement=document.createElement("p")as HTMLParagraphElement;
        cash.classList.add("cash");
        cash.textContent="100€";
        document.body.appendChild(cash);
        button.remove();// Kassenbestand
        createCloseStoreButton();


        //set Timeout für Button Erstellung
        function createCloseStoreButton(): void {
            closeButton = document.createElement("button");
            closeButton.classList.add("closeButton");
            closeButton.textContent = "Close Store";
            closeButton.addEventListener("click", () => {
                closeStore();
            });
    
            document.body.appendChild(closeButton);
            
        }

        function closeStore(){//Schönere Variante?Theke weiß

            //imageData=black
            console.log("Store wurde geschlossen")
            isDay=false;
            console.log(isDay)

            closeButton.remove();
            document.body.appendChild(button);

   
    };
        
        let amarena:HTMLButtonElement;
        amarena = document.createElement("button")as HTMLButtonElement;
        amarena.classList.add("amarena")
        amarena.textContent = "Amarena";
        document.body.appendChild(amarena);
        amarena.addEventListener("click", () => {
            amarenaIce();
        });
        
        let banana:HTMLButtonElement;
        banana = document.createElement("button")as HTMLButtonElement;
        banana.classList.add("banana")
        banana.textContent = "Banane";
        document.body.appendChild(banana);
        banana.addEventListener("click", () => {
            bananaIce();
        });

        let pistazie:HTMLButtonElement;
        pistazie = document.createElement("button")as HTMLButtonElement;
        pistazie.classList.add("pistazie")
        pistazie.textContent = "Pistazie";
        document.body.appendChild(pistazie);
        pistazie.addEventListener("click", () => {
            pistazieIce();
        });

        let coffee:HTMLButtonElement;
        coffee = document.createElement("button")as HTMLButtonElement;
        coffee.classList.add("coffee")
        coffee.textContent = "Kaffee";
        document.body.appendChild(coffee);
        coffee.addEventListener("click", () => {
            coffeeIce();
        });//Eissorten


        let vanilla:HTMLButtonElement;
        vanilla = document.createElement("button")as HTMLButtonElement;
        vanilla.classList.add("vanilla")
        vanilla.textContent = "Vanille Soße";
        document.body.appendChild(vanilla);
        vanilla.addEventListener("click", () => {
            vanillaSauce();
        });

        let chocolate:HTMLButtonElement;
        chocolate = document.createElement("button")as HTMLButtonElement;
        chocolate.classList.add("chocolate")
        chocolate.textContent = "Schokoladen Soße";
        document.body.appendChild(chocolate);
        chocolate.addEventListener("click", () => {
            chocolateSauce();
        });

        let caramel:HTMLButtonElement;
        caramel = document.createElement("button")as HTMLButtonElement;
        caramel.classList.add("caramel")
        caramel.textContent = "Karamel Soße";
        document.body.appendChild(caramel);
        caramel.addEventListener("click", () => {
            caramelSauce();
        });

        let liqueur:HTMLButtonElement;
        liqueur = document.createElement("button")as HTMLButtonElement;
        liqueur.classList.add("liqueur")
        liqueur.textContent = "Likör";
        document.body.appendChild(liqueur);
        liqueur.addEventListener("click", () => {
            liqueurSauce();
        });//Soßen

        let krokant:HTMLButtonElement;
        krokant = document.createElement("button")as HTMLButtonElement;
        krokant.classList.add("krokant")
        krokant.textContent = "Krokant";
        document.body.appendChild(krokant);
        krokant.addEventListener("click", () => {
            krokantTopping();
        });

        let streusel:HTMLButtonElement;
        streusel = document.createElement("button")as HTMLButtonElement;
        streusel.classList.add("streusel")
        streusel.textContent = "Streusel";
        document.body.appendChild(streusel);
        streusel.addEventListener("click", () => {
            streuselTopping();
        });

        let coffeePowder:HTMLButtonElement;
        coffeePowder = document.createElement("button")as HTMLButtonElement;
        coffeePowder.classList.add("coffeePowder")
        coffeePowder.textContent = "Kaffeepulver";
        document.body.appendChild(coffeePowder);
        coffeePowder.addEventListener("click", () => {
            coffeeTopping();
        });

        let marshmallow:HTMLButtonElement;
        marshmallow = document.createElement("button")as HTMLButtonElement;
        marshmallow.classList.add("marshmallow")
        marshmallow.textContent = "Marshmallows";
        document.body.appendChild(marshmallow);
        marshmallow.addEventListener("click", () => {
            marshmallowTopping();
        });//Toppings

        let cup:HTMLButtonElement;
        cup = document.createElement("button")as HTMLButtonElement;
        cup.classList.add("cup")
        cup.textContent = "Becher";
        document.body.appendChild(cup);
        cup.addEventListener("click", () => {
            iceInCup();
        }); 

        let waffle:HTMLButtonElement;
        waffle = document.createElement("button")as HTMLButtonElement;
        waffle.classList.add("waffle");
        document.body.appendChild(waffle);
        waffle.addEventListener("click", () => {
            iceInWaffle();

        }); 
        
        let waffleFont=document.createElement("span") as HTMLSpanElement;
        waffleFont.classList.add("waffleFont");
        document.body.appendChild(waffleFont);
        waffleFont.textContent="Waffel";
        
        let cream:HTMLButtonElement;
        cream = document.createElement("button")as HTMLButtonElement;
        cream.classList.add("cream");
        document.body.appendChild(cream);
        cream.addEventListener("click", () => {
            iceWithCream();
            
        }); 
        
        let creamFont=document.createElement("span") as HTMLSpanElement;
        creamFont.classList.add("creamFont");
        document.body.appendChild(creamFont);
        creamFont.textContent="Sahne";
        console.log(creamFont)
            
        
    };
    
    // window.setInterval(() => {
    //     crc2.putImageData(back, 0, 0);
    //     if (isDay) {
    //       drawStore(true)
    //     } else {
    //       drawStore(false)
    //     }},5000)}

//Intervall einkomentieren für tag nacht funktion
 
    drawStore(true);
    //hier enum oder switch case
    function amarenaIce(){
        console.log("1 Kugel Amarena")
        
    }
    function bananaIce(){
        console.log("1 Kugel Banane")
        
    }
    function pistazieIce(){
        console.log("1 Kugel Pistazie")
        
    }
    function coffeeIce(){
        console.log("1 Kugel Kaffee")
        
    }

    function vanillaSauce(){
        console.log("1x Vanillesoße")
        
    }
    function caramelSauce(){
        console.log("1x Karamellsoße")
        
    }
    function chocolateSauce(){
        console.log("1x Schokoladensoße")
        
    }
    function liqueurSauce(){
        console.log("1x Likör")
        
    }
    function krokantTopping(){
        console.log("1x Krokant")
        
    }
    function streuselTopping(){
        console.log("1x Streusel")
        
    }
    function coffeeTopping(){
        console.log("1x Kaffeepulver")
        
    }
    function marshmallowTopping(){
        console.log("1x Marshmallows")
        
    }
    function iceInCup(){
        console.log("1x Eis im Becher")
        
    }
    function iceInWaffle(){
        console.log("1x Eis in der Waffel")
        
    }
    function iceWithCream(){
        console.log("1x Eis mit Sahne")
        
    }
}

}



