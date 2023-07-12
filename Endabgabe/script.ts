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
    
    // let back: ImageData;
    // let background:boolean=true;
    // let serve:boolean=false;
    let button:HTMLButtonElement;
    
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
        
        // back = crc2.getImageData(0, 0, canvas.width, canvas.height);
        
        function drawStore(){
            
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
        
        crc2.beginPath();
        crc2.moveTo(75,250);
        crc2.lineTo(75,300);
        crc2.lineTo(125,300);
        crc2.lineTo(125,250);
        crc2.closePath();
        crc2.stroke();//Eisbecher
        
        crc2.beginPath();
        crc2.moveTo(110,250);
        crc2.lineTo(130,230);
        crc2.stroke();
        crc2.closePath();//Löffel
        
        crc2.beginPath();
        crc2.moveTo(150,230);
        crc2.lineTo(175,300);
        crc2.lineTo(200,230);
        crc2.closePath();
        crc2.stroke();//Waffel
        
        crc2.beginPath();
        crc2.moveTo(638.125,300);
        crc2.lineTo(638.125,230);
        crc2.lineTo(665.125,230);
        crc2.lineTo(665.125,300);
        crc2.closePath();
        crc2.stroke();//Sahne
        
        crc2.beginPath();
        crc2.moveTo(646.625,230);//651.625
        crc2.lineTo(646.625,215);
        crc2.lineTo(656.625,215);
        crc2.lineTo(656.625,230);
        crc2.closePath();
        crc2.stroke();//Sahnedeckel
        
    }
    function day(){
    
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


        let pistazie:HTMLButtonElement;
        pistazie = document.createElement("button")as HTMLButtonElement;
        pistazie.classList.add("pistazie")
        pistazie.textContent = "Pistazie";
        document.body.appendChild(pistazie);
        pistazie.addEventListener("click", () => {
            pistazieIce();
        });

        let pistazie:HTMLButtonElement;
        pistazie = document.createElement("button")as HTMLButtonElement;
        pistazie.classList.add("pistazie")
        pistazie.textContent = "Pistazie";
        document.body.appendChild(pistazie);
        pistazie.addEventListener("click", () => {
            pistazieIce();
        });

        let pistazie:HTMLButtonElement;
        pistazie = document.createElement("button")as HTMLButtonElement;
        pistazie.classList.add("pistazie")
        pistazie.textContent = "Pistazie";
        document.body.appendChild(pistazie);
        pistazie.addEventListener("click", () => {
            pistazieIce();
        });

        let pistazie:HTMLButtonElement;
        pistazie = document.createElement("button")as HTMLButtonElement;
        pistazie.classList.add("pistazie")
        pistazie.textContent = "Pistazie";
        document.body.appendChild(pistazie);
        pistazie.addEventListener("click", () => {
            pistazieIce();
        });
        
        
    };
    
    drawStore();
    
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
    function liqueur(){
        console.log("1x Likör")
        
    }
}

// window.setInterval(() => {
    
    //     crc2.putImageData(back, 0, 0);

// }, 100);//alle 100ms wird aktualisiert


}