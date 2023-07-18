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

    let button:HTMLButtonElement;
    let closeButton:HTMLButtonElement;
    let serveButton:HTMLButtonElement;

    let eater:EatingCustomer;
    let waiter:WaitingCustomer[]=[];
    let orderer: OrderingCustomer;
    let newwaiter:WaitingCustomer;
    let finalorder:string[];
    let amount:number=100
    let startamount:number=100
    export let selectedItems:string[]=[];  // console.log(started)
    
    
    function handleload(_event: Event): void {
        
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        drawStore();

        checkStart();

        createStartButton();
        
        
        back = crc2.getImageData(0, 0, canvas.width, canvas.height);
   

}
let previousorder:string[]
let prevSelection:string[]
 function check_order(order:string[],selection:string[]){
    if(eater==undefined){
        previousorder=order
        prevSelection=selection
    }
    else{
    let success:Boolean;
    if(previousorder.length==prevSelection.length){
        for(let item of prevSelection){

            if(previousorder.includes(item)){
                success=true
            }
            else{
                success=false
                previousorder=order
                prevSelection=selection
                return success
            }
        }
        previousorder=order
        prevSelection=selection
        return true
    }
    previousorder=order
    prevSelection=selection
    return false
 }
 return false 
}

async function checkStart() {
    let collectionExists = await findCollection('items')

    if (collectionExists == true) {
      console.log("Alles schon erstellt")

    }
    else {
      let create = await createData(createURL, payload)
      console.log(create)
      for (let i = 0; i < 13; i++) {

        let item = items[i]
        let insert = await insertItems('items', item)
        console.log(insert)
      }
    }

  }


export interface order {
    // orderId:number;
    container:string;
    variation: string[];
    sauce: string;
    topping: string;
    cream: string;
  };

export let iceCreamFlavors = ["Amarena", "Kaffee", "Banane", "Pistazie"];
export let Toppings=["Krokant","Streusel","Eiswaffel","Marshmallow"]
export let IceCreamSauce=["Vanillesauce","Schokosauce","Karamellsauce","Likör"]
export let container=["Waffel","Becher"]
export let sahne=["ja","nein"]
export function getRandomListItems(_list:string[]) {
    // Bestimme zufällig, wie viele Items ausgewählt werden sollen (min 1, max 3)
    let numberOfItems = Math.floor(Math.random() * 3) + 1;

    let chosenItems = [];

    for (let i = 0; i < numberOfItems; i++) {
        // Wähle eine zufällige Eissorte aus dem Array aus
        let randomIndex = Math.floor(Math.random() *3 )+1;

        // Füge die ausgewählte Eissorte zum Array der ausgewählten Eissorten hinzu
        chosenItems.push(_list[randomIndex]);

    }
    console.log(chosenItems)
    return chosenItems;
}

export function get1RandomListItem(_list:string[]){
    // Bestimme zufällig, wie viele Items ausgewählt werden sollen (min 1, max 3)

    let chosenItems = [];

    // Wähle eine zufällige Eissorte aus dem Array aus
    let randomIndex = Math.floor(Math.random() *_list.length )+1;

    // Füge die ausgewählte Eissorte zum Array der ausgewählten Eissorten hinzu
    chosenItems.push(_list[randomIndex-1]);
    return chosenItems;
}
function checkSelection(selection:string[],checkarray:string[]){

    for (let item of selection) {
        if (checkarray.includes(item)) {
            window.alert("Du hast schon ein Topping/ eine Sauce/ einen Behälter oder eine kleks Sahne ausgewählt")
            return false
        } 
            
        
    }
    return true
}

export function checkServing(selection:string[]){
    
    let selectedorder = {
        container: "",
        topping: "",
        sauce: "",
        cream: "",
        variation: [] as string[],
      };
    for (let i=0;i< selection.length;i++)
    {
        if (container.includes(selection[i])) {
            selectedorder.container=selection[i]
        }
        else if(Toppings.includes(selection[i]))
        {
            selectedorder.topping=selection[i]
        }
        else if(IceCreamSauce.includes(selection[i]))
        {
            selectedorder.sauce=selection[i]
        }
        else if(sahne.includes(selection[i]))
        {
            selectedorder.cream=selection[i]
        }
        else
        {
            selectedorder.variation.push(selection[i])
        } 
    
    }
    return selectedorder

    }
    

function checkIceCream(selection:string[],checkarray:string[]){
    let countIceCream=0
    for (let item of selection) {
        if (checkarray.includes(item)) {
           countIceCream+=1
        } 
        
        
    }
    if(countIceCream==3){
        window.alert("Du hast schon drei Kugeln ausgewählt!!")
        return false
    }
    return true
}
let chosenIceCreams = getRandomListItems(iceCreamFlavors);

console.log(chosenIceCreams);


            console.log("Type 1: Waffle");

            console.log("Type 2: Cup");

            console.log("Type 3: Cup");

            console.log("Unbekannter Typ");


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
    // console.log("jetzt ist nacht")
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
  
  function createCloseStoreButton(): void {
      closeButton = document.createElement("button");
      closeButton.classList.add("closeButton");
      closeButton.textContent = "Close Store";
      closeButton.addEventListener("click", () => {
          closeStore();
      });
  
      document.body.appendChild(closeButton);
      
  }
//set Timeout für Button Erstellung


function createServeButton():void{

    serveButton = document.createElement("button");
    serveButton.classList.add("serveButton");
    serveButton.textContent = "Serve";
    document.body.appendChild(serveButton)
    serveButton.addEventListener("click", () => {
        serveIce();

    
})}
let bill:number;
let price: number | undefined
let previousSelection: string[] = []; // Variable für die vorherige Auswahl
async function serveIce(){

    if(!selectedItems.includes("ja")){

        selectedItems.push("nein")
    }

    let hasIcecream:boolean=false;
    let hasContainer:boolean=false;
    console.log((selectedItems));
    if (eater == undefined){
        
            bill=0;
    }    
    else{
        bill=0
        for(let item of previousSelection){
            if(item!=="Waffel" && item!=="Becher"){
            if(item == "ja"){
                let itemprice:Promise<number | undefined>=findPreis("items","Sahne")
                price = await itemprice;
            }
            else{
                let itemprice:Promise<number | undefined>=findPreis("items",item)
                price = await itemprice;
            }
                
            if(price !== undefined){
                    bill=bill+price
                }
            }
            
            
        }
    }
    previousSelection=selectedItems.slice()
    for(let item of selectedItems){


        if(iceCreamFlavors.includes(item)){

            hasIcecream=true;
        }

        if(container.includes(item)){

            hasContainer=true;
        }

        
        
    }
    if(hasIcecream==false||hasContainer==false){
        window.alert("Du musst mindestens einen Behälter und eine Kugel auswählen")

        return false
        
    }

    
    newwaiter=new WaitingCustomer(new Vector(1000,750),new Vector(0.1,0),1)
    let count =0;
    let limit=60;
    let richtigeBestellung=check_order(finalorder,selectedItems)
    if(eater==undefined){

    }
    
    let intervalID=setInterval(function(){
        count++;
    
        crc2.putImageData(back, 0, 0);
        
        dealer.draw();

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
        crc2.moveTo(646.625,230);//651.625
        crc2.lineTo(646.625,215);
        crc2.lineTo(656.625,215);
        crc2.lineTo(656.625,230);
        crc2.closePath();
        crc2.fillStyle="white";
        crc2.fill();
        crc2.stroke();//Sahnedeckel
        orderer.move(-57);
        waiter[0].move(-12);
        waiter[1].move(-27);
        waiter[2].move(-24);
        newwaiter.move(-65);

        
        orderer.drawSelf();
        waiter[0].drawSelf();
        waiter[1].drawSelf();
        waiter[2].drawSelfSad();
        newwaiter.drawSelfSad();
       if(eater !== undefined)
        {
            eater.speed=new Vector(0,0.1)
            eater.move(60)
        } 
        if(eater !== undefined)
        {   
            if(richtigeBestellung==true){
                eater.drawSelf();
            }
            else{
                eater.drawSelfSad();
            }
            
        }
        if(count ==limit-5){
            updateCash(bill)
        }
        
        // console.log(orderingCustomer.position)
        if(count>=limit){
            
            if(eater!==undefined){

                crc2.clearRect(eater.position.x,eater.position.y,30,30)


            }
            eater=new EatingCustomer(orderer.position,orderer.speed,0)  
            // console.log(orderer)
            orderer=new OrderingCustomer(waiter[0].position,new Vector(0.1,0),0)
            
            finalorder=orderer.order()
            eater.eat();
            // console.log(orderer)     
            waiter.splice(0,1)
            waiter[2]=newwaiter;
            waiter[0].speed=new Vector(0,0.1)
            waiter[1].speed=new Vector(0,0.1)
            waiter[2].speed=new Vector(0.1,0)
            clearInterval(intervalID)
        }
    },50)

    return true



}


function drawStore(){
            
    // console.log("jetzt ist tag")

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

function closeStore(){

    serveButton.remove();
    closeButton.remove();
    document.body.appendChild(button);



    cashEnd=document.createElement("p")as HTMLParagraphElement;
    cashEnd.classList.add("cash");
    cash?.remove();
    cash.textContent="100€";
    document.body.appendChild(cashEnd);


    cash.textContent = ""; 
    updateCash(0);
    // console.log(cash.textContent)
    night();

    let cashText=cash.textContent;
    let endAmount=parseInt(cashText.replace(/[^\d.-]/g,''))//löscht Euro zeichen
    let profit:number= endAmount-100
    let profitString: string = profit.toString();

    crc2.beginPath();
    crc2.fillStyle="black"
    crc2.font="20pt Arial"
    crc2.fillText("Umsatz heute "+ profitString +" €",canvas.height/2-150,canvas.width/2)
    crc2.closePath();
    console.log(profitString,endAmount,startamount)


    

};
// let startamount:number=100
export function updateCash(amount: number) {

startamount=startamount+amount
cash.textContent = startamount.toString()+"€";
cashEnd.textContent="0€";
}

//Ab 5mal zahlen werden überschrieben

let dealer:Eisdealer
function day(){

    drawStore();

    // started=true;
    // isDay=true;
    // console.log(isDay)
    // console.log(started)
    
    dealer=new Eisdealer(new Vector(475,220));
    dealer.draw();
  

    let orderingCustomer= new OrderingCustomer(new Vector(475,520), new Vector(0.1,0),0);
    orderingCustomer.drawSelf();
    finalorder=orderingCustomer.order();
    orderer=orderingCustomer
    
        

        let waitingCustomer= new WaitingCustomer(new Vector(475,590),new Vector(0,0.1),0);
        waitingCustomer.drawSelf();
        // console.log(waitingCustomer.position)
        waiter.push(waitingCustomer)

        let waitingCustomer1= new WaitingCustomer(new Vector(475,750),new Vector(0,0.1),1);
        waitingCustomer1.drawSelfSad();
        // console.log(waitingCustomer1.position)
        waiter.push(waitingCustomer1)

        let waitingCustomer2= new WaitingCustomer(new Vector(620,750),new Vector(0.1,0),1);
        waitingCustomer2.drawSelfSad();
        // console.log(waitingCustomer2.position)
        waiter.push(waitingCustomer2)


    let cashRegister:HTMLParagraphElement=document.createElement("p")as HTMLParagraphElement;
    cashRegister.textContent="Kasse";
    cashEnd?.remove();
    document.body.appendChild(cashRegister);
    // console.log(cashRegister);//Wort Kasse

    
    cash=document.createElement("p")as HTMLParagraphElement;
    cash.textContent="";
    cash.textContent=amount+"€";
    cash.classList.add("cash");
    // updateCash("100€");
    // cash.textContent="100€";
    document.body.appendChild(cash);
    button.remove();// Kassenbestand

    setTimeout(() => {
        // Hier können Sie den Code platzieren, der nach der Verzögerung von 1 Minute ausgeführt werden soll
        createCloseStoreButton();
        console.log("1 Minute ist vergangen!");
      }, 60000);
      



    createServeButton();

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
    caramel.textContent = "Karamell Soße";
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
    coffeePowder.textContent = "Eiswaffel";
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
    // console.log(creamFont)
 
    
};

 
    drawStore();
    //hier enum oder switch case
    function amarenaIce(){
        let value:boolean=checkIceCream(selectedItems,iceCreamFlavors)
        if(value==true){
          selectedItems.push("Amarena")  
        }
        
        // console.log("1 Kugel Amarena")
        console.log(selectedItems)
        
    }
    function bananaIce(){
        let value:boolean=checkIceCream(selectedItems,iceCreamFlavors)
        if(value==true){
        selectedItems.push("Banane")
        // console.log("1 Kugel Banane")
        console.log(selectedItems)
        }
    }
    function pistazieIce(){
        let value:boolean=checkIceCream(selectedItems,iceCreamFlavors)
        if(value==true){
        selectedItems.push("Pistazie")
        // console.log("1 Kugel Pistazie")
        console.log(selectedItems)
        }
        
    }
    function coffeeIce(){
        let value:boolean=checkIceCream(selectedItems,iceCreamFlavors)
        if(value==true){
        selectedItems.push("Kaffee")
        // console.log("1 Kugel Kaffee")
        console.log(selectedItems)
        }
    }

    function vanillaSauce(){
        let value:boolean=checkSelection(selectedItems,IceCreamSauce)
        if (value==true){

            selectedItems.push("Vanillesauce")
        }
        
        // console.log("1x Vanillesoße")
        console.log(selectedItems)
        
    }
    function caramelSauce(){
        let value:boolean=checkSelection(selectedItems,IceCreamSauce)
        if (value==true){
        selectedItems.push("Karamellsauce")
        // console.log("1x Karamellsoße")
        }
        
    }
    function chocolateSauce(){
        let value:boolean=checkSelection(selectedItems,IceCreamSauce)
        if (value==true){
        selectedItems.push("Schokosauce")
        // console.log("1x Schokoladensoße")
        console.log(selectedItems)
        }
        
    }
    function liqueurSauce(){
        let value:boolean=checkSelection(selectedItems,IceCreamSauce)
        if (value==true){
        selectedItems.push("Likör")
        // console.log("1x Likör")
        console.log(selectedItems)
        }       
    }
    function krokantTopping(){
        let value:boolean=checkSelection(selectedItems,Toppings)
        if (value==true){
        selectedItems.push("Krokant")
        // console.log("1x Krokant")
        console.log(selectedItems)
    }
        
    }
    function streuselTopping(){
        let value:boolean=checkSelection(selectedItems,Toppings)
        if (value==true){
        selectedItems.push("Streusel")
        // console.log("1x Streusel")
        console.log(selectedItems)
        }
        
    }
    function coffeeTopping(){
        let value:boolean=checkSelection(selectedItems,Toppings)
        if (value==true){
        selectedItems.push("Eiswaffel")
        // console.log("1x Eiswaffel")
        console.log(selectedItems)
        }
    }
    function marshmallowTopping(){
        let value:boolean=checkSelection(selectedItems,Toppings)
        if (value==true){
            selectedItems.push("Marshmallow")
        // console.log("1x Marshmallows")
        console.log(selectedItems)
        }
    }
    function iceInCup(){
        let value:boolean=checkSelection(selectedItems,container)
        if (value==true){
            selectedItems.push("Becher")
        // console.log("1x Eis im Becher")
        console.log(selectedItems)
    }
    }
    function iceInWaffle(){
        let value:boolean=checkSelection(selectedItems,container)
        if (value==true){selectedItems.push("Waffel")
        // console.log("1x Eis in der Waffel")
        console.log(selectedItems)
    }

    }
    function iceWithCream(){
        let value:boolean=checkSelection(selectedItems,sahne)
        if(value==true){

            selectedItems.push("ja")
        }

        // console.log("1x Eis mit Sahne")
        console.log(selectedItems)
        
    }


}




