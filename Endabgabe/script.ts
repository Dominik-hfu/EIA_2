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
    let isDay:boolean=true;
    let started:boolean=false;
    console.log(started)

    
    function handleload(_event: Event): void {
        
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        drawStore();


        createStartButton();
        
        
        back = crc2.getImageData(0, 0, canvas.width, canvas.height);
   

}

interface ice {
    type:number;
    container:string;
    scoops: number;
    variation: string[];
    sauce: string;
    topping: string;
    cream: boolean;
  };

  // Array muss deklariert aber kann auch leer sein, da Daten in json sind
  let iceCream: ice[] = [
    {
      type:1,
      container: "waffle",
      scoops: 3,
      variation: ["amarena, banana, pistazie"],
      sauce: "vanille",
      topping: "coffeepowder",
      cream: false// Attribute von Elementen
    },
    {
      type:2,
      container: "cup",
      scoops: 2,
      variation: ["coffee, banana"],
      sauce: "chocolate",
      topping: "krokant",
      cream: true
    },

    {
        type:3,
      container: "cup",
      scoops: 1,
      variation: ["pistazie"],
      sauce: "liqueur",
      topping: "marshamllows",
      cream: true

    },];

    // for (let i = 0; i < iceCream.length; i++) {
    //     switch (iceCream[i].type) {
    //       case 1:
    //         console.log("Type 1: Waffle");
    //         // Weitere Aktionen für Typ 1 hier einfügen
    //         break;
    //       case 2:
    //         console.log("Type 2: Cup");
    //         // Weitere Aktionen für Typ 2 hier einfügen
    //         break;
    //       case 3:
    //         console.log("Type 3: Cup");
    //         // Weitere Aktionen für Typ 3 hier einfügen
    //         break;
    //       default:
    //         console.log("Unbekannter Typ");
    //         // Aktionen für unbekannten Typ hier einfügen
    //     }
    //   }
      
    //Hier switch case die überprüft welches eis

    // switch (type {
    //     case 'not-started':
    //       progressBar.value = 0;
    //       break;
    //     case 'in-progress':
    //       progressBar.value = 50;
    //       break;
    //     case 'completed':
    //       progressBar.value = 100;
    //       break;
    //   }



function createStartButton(): void {
            
    button = document.createElement("button");
    button.textContent = "Start Day";
    button.addEventListener("click", () => {
        day();
    });

    document.body.appendChild(button);
    
}
export let cash:HTMLParagraphElement;
export let cashEnd:HTMLParagraphElement;

let amarena:HTMLButtonElement;
let banana:HTMLButtonElement;
let pistazie:HTMLButtonElement;
let coffee:HTMLButtonElement;
let vanilla:HTMLButtonElement;
let chocolate:HTMLButtonElement;
let caramel:HTMLButtonElement;
let liqueur:HTMLButtonElement;
let krokant:HTMLButtonElement;
let streusel:HTMLButtonElement;
let coffeePowder:HTMLButtonElement;
let marshmallow:HTMLButtonElement;
let cup:HTMLButtonElement;
let waffle:HTMLButtonElement;
let waffleFont=document.createElement("span") as HTMLSpanElement;
let cream:HTMLButtonElement;
let creamFont=document.createElement("span") as HTMLSpanElement;

function night(){

    // started=true;
    console.log("jetzt ist nacht")
    crc2.beginPath();
    crc2.fillStyle="black";
    crc2.fillRect(0,0,canvas.width,canvas.height);
    crc2.fill();
    crc2.closePath();
    
    crc2.beginPath();
    crc2.moveTo(25,100);
    crc2.lineTo(25,700);
    crc2.lineTo(975,700);
    crc2.lineTo(975,100);
    crc2.closePath();
    crc2.fillStyle="grey";
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

    amarena.remove();
    banana.remove();
    pistazie.remove();
    coffee.remove();
    vanilla.remove();
    chocolate.remove();
    caramel.remove();
    liqueur.remove();
    krokant.remove();
    streusel.remove();
    coffeePowder.remove();
    marshmallow.remove();
    cup.remove();
    waffle.remove();
    waffleFont.remove();
    cream.remove();
    creamFont.remove();

}

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


function drawStore(){
            
    console.log("jetzt ist tag")

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
    
}

function closeStore(){//Schönere Variante?Theke weiß

    //imageData=black
    console.log("Store wurde geschlossen")
    isDay=false;
    console.log(isDay)
    console.log(started)

    closeButton.remove();
    document.body.appendChild(button);

    cashEnd=document.createElement("p")as HTMLParagraphElement;
    cashEnd.classList.add("cash");
    cash?.remove();
    // cash.textContent="100€";
    document.body.appendChild(cashEnd);


    cashEnd.textContent = ""; 
    cash.textContent = ""; 
    updateCash("0€");
    console.log(cash.textContent)
    // night();


};
export function updateCash(amount: string) {
cash.textContent = amount;
}

//Ab 5mal zahlen werden überschrieben


function day(){

    drawStore();

    started=true;
    isDay=true;
    console.log(isDay)
    console.log(started)
    
    let dealer=new Eisdealer(new Vector(400,100));//Vector unnötig hier?
    dealer.draw();
    console.log("Ich wurde geklickt");

    // let waitingCustomer= new WaitingCustomer(new Vector(800,600),new Vector(0.05,0.05));
    // waitingCustomer.drawSelf();
    // waitingCustomer.move(0.05);
    // console.log("HALLOICHWILLEIS")
    // console.log(waitingCustomer.position)

    let orderingCustomer= new OrderingCustomer(new Vector(800,600), new Vector(0.01,0.01));
    orderingCustomer.drawSelf();
    orderingCustomer.order();
        
        for(let i=0;i<2;i++){
        let eatingCustomer= new EatingCustomer(new Vector(800,600), new Vector(0.01,0.01));
        if(i<2){
        eatingCustomer.drawSelf();
        eatingCustomer.eat();
        }}
        let waitingCustomer= new WaitingCustomer(new Vector(200,400),new Vector(0.5,0.5));
        waitingCustomer.move(0.5);
        waitingCustomer.drawSelf();
        console.log(waitingCustomer.position)





    
    let cashRegister:HTMLParagraphElement=document.createElement("p")as HTMLParagraphElement;
    cashRegister.textContent="Kasse";
    cashEnd?.remove();
    document.body.appendChild(cashRegister);
    console.log(cashRegister);//Wort Kasse
    
    cash=document.createElement("p")as HTMLParagraphElement;
    cash.textContent="";
    cash.textContent="100€";
    cash.classList.add("cash");
    // updateCash("100€");
    // cash.textContent="100€";
    document.body.appendChild(cash);
    button.remove();// Kassenbestand
    createCloseStoreButton();

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
    crc2.fillStyle="hsl(53, 91%, 81%)"
    crc2.fill();
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
    crc2.fillStyle="white";
    crc2.fill();
    crc2.stroke();//Sahnedeckel

    amarena = document.createElement("button")as HTMLButtonElement;
    amarena.classList.add("amarena")
    amarena.textContent = "Amarena";
    document.body.appendChild(amarena);
    amarena.addEventListener("click", () => {
        amarenaIce();
    });
    
    banana = document.createElement("button")as HTMLButtonElement;
    banana.classList.add("banana")
    banana.textContent = "Banane";
    document.body.appendChild(banana);
    banana.addEventListener("click", () => {
        bananaIce();
    });

    pistazie = document.createElement("button")as HTMLButtonElement;
    pistazie.classList.add("pistazie")
    pistazie.textContent = "Pistazie";
    document.body.appendChild(pistazie);
    pistazie.addEventListener("click", () => {
        pistazieIce();
    });

    coffee = document.createElement("button")as HTMLButtonElement;
    coffee.classList.add("coffee")
    coffee.textContent = "Kaffee";
    document.body.appendChild(coffee);
    coffee.addEventListener("click", () => {
        coffeeIce();
    });//Eissorten

    vanilla = document.createElement("button")as HTMLButtonElement;
    vanilla.classList.add("vanilla")
    vanilla.textContent = "Vanille Soße";
    document.body.appendChild(vanilla);
    vanilla.addEventListener("click", () => {
        vanillaSauce();
    });

    chocolate = document.createElement("button")as HTMLButtonElement;
    chocolate.classList.add("chocolate")
    chocolate.textContent = "Schokoladen Soße";
    document.body.appendChild(chocolate);
    chocolate.addEventListener("click", () => {
        chocolateSauce();
    });

    caramel = document.createElement("button")as HTMLButtonElement;
    caramel.classList.add("caramel")
    caramel.textContent = "Karamel Soße";
    document.body.appendChild(caramel);
    caramel.addEventListener("click", () => {
        caramelSauce();
    });

    liqueur = document.createElement("button")as HTMLButtonElement;
    liqueur.classList.add("liqueur")
    liqueur.textContent = "Likör";
    document.body.appendChild(liqueur);
    liqueur.addEventListener("click", () => {
        liqueurSauce();
    });//Soßen

    krokant = document.createElement("button")as HTMLButtonElement;
    krokant.classList.add("krokant")
    krokant.textContent = "Krokant";
    document.body.appendChild(krokant);
    krokant.addEventListener("click", () => {
        krokantTopping();
    });

    streusel = document.createElement("button")as HTMLButtonElement;
    streusel.classList.add("streusel")
    streusel.textContent = "Streusel";
    document.body.appendChild(streusel);
    streusel.addEventListener("click", () => {
        streuselTopping();
    });

    coffeePowder = document.createElement("button")as HTMLButtonElement;
    coffeePowder.classList.add("coffeePowder")
    coffeePowder.textContent = "Kaffeepulver";
    document.body.appendChild(coffeePowder);
    coffeePowder.addEventListener("click", () => {
        coffeeTopping();
    });

    marshmallow = document.createElement("button")as HTMLButtonElement;
    marshmallow.classList.add("marshmallow")
    marshmallow.textContent = "Marshmallows";
    document.body.appendChild(marshmallow);
    marshmallow.addEventListener("click", () => {
        marshmallowTopping();
    });//Toppings

    cup = document.createElement("button")as HTMLButtonElement;
    cup.classList.add("cup")
    cup.textContent = "Becher";
    document.body.appendChild(cup);
    cup.addEventListener("click", () => {
        iceInCup();
    }); 

    waffle = document.createElement("button")as HTMLButtonElement;
    waffle.classList.add("waffle");
    document.body.appendChild(waffle);
    waffle.addEventListener("click", () => {
        iceInWaffle();

    }); 
    
    waffleFont.classList.add("waffleFont");
    document.body.appendChild(waffleFont);
    waffleFont.textContent="Waffel";
    
    cream = document.createElement("button")as HTMLButtonElement;
    cream.classList.add("cream");
    document.body.appendChild(cream);
    cream.addEventListener("click", () => {
        iceWithCream();
        
    }); 
    
    creamFont.classList.add("creamFont");
    document.body.appendChild(creamFont);
    creamFont.textContent="Sahne";
    console.log(creamFont)
 
    
};
console.log(started)


if (!started==true){
window.setInterval(() => {
    crc2.putImageData(back, 0, 0);
    console.log("aktualisiert")
    console.log(started)
    if (isDay==true) {
    //   drawStore()
      day()

      
    } else{
        night()
        closeStore();
    }

let waitingCustomer= new WaitingCustomer(new Vector(200,400),new Vector(0.5,0.5));
waitingCustomer.move(0.5);
    waitingCustomer.drawSelf();
    console.log(waitingCustomer.position)

let orderingCustomer= new OrderingCustomer(new Vector(200,400),new Vector(0.5,0.5));
orderingCustomer.move(0.5);
    orderingCustomer.drawSelf();
    console.log(orderingCustomer.position)

let eatingCustomer= new EatingCustomer(new Vector(200,400),new Vector(0.5,0.5));
eatingCustomer.move(0.5);
    eatingCustomer.drawSelf();
    console.log(eatingCustomer.position)
    
    },1000)}
 
    // drawStore();
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

    //Funktion für essprozess

    // function drawChart(canvas, progress) {
    //     const ctx = canvas.getContext("2d");
    //     const chartWidth = canvas.width - 20;
    //     const chartHeight = canvas.height - 20;
    //     const barWidth = chartWidth * progress;
    //     const barHeight = chartHeight * 0.6;
    //     const barX = (chartWidth - barWidth) / 2;
    //     const barY = (chartHeight - barHeight) / 2;
  
    //     ctx.clearRect(0, 0, canvas.width, canvas.height);
    //     ctx.fillStyle = "#0066cc";
    //     ctx.fillRect(barX, barY, barWidth, barHeight);
    //   }
  
    //   // Animationsfunktion
    //   function animateChart(canvas, duration) {
    //     const startTime = Date.now();
  
    //     function update() {
    //       const elapsedTime = Date.now() - startTime;
    //       const progress = Math.min(elapsedTime / duration, 1); // Berechnung des Fortschritts zwischen 0 und 1
  
    //       drawChart(canvas, progress);
  
    //       if (progress < 1) {
    //         requestAnimationFrame(update);
    //       }
    //     }
  
    //     update();
    //   }
  
    //   // Canvas und Animation starten
    //   const canvas = document.getElementById("chartCanvas");
    //   animateChart(canvas, 10000); 
}





