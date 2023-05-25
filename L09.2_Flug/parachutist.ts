namespace AlpenFlug{

    export class Parachutist{

    type:string;
    position:Vector;
    sizeX:number;
    sizeY:number;
    color:string;
    speed:Vector;


    constructor(_type:string, _position: Vector, _size: Array<number>, _color: string, _movement:Vector){
        // Nur size als parameter bei jirka warum?
        this.type=_type;//also type als extra klasse statt path?
        this.position= new Vector(0,0);
        this.sizeX=_size[0];
        this.sizeY=_size[1];
        this.color=_color;
        this.speed= new Vector(0,0);
        // this.speed.random(100,200); bei Jirka


    }

    draw():void{

        crc2.save();
        crc2.translate(this.position.x, this.position.y);//Koordinatensystem hier hin
        crc2.scale(this.sizeX, this.sizeY);
        crc2.stroke(parachutistPaths[this.type]);
        crc2.restore();

        //Hier das Zeichnen des Fliegers reinkopieren? 
        //Und dann den Fallschirm, den Rucksack über paths bzw. type hinzufügen???

    };


    movement(_timeslice:number):void{

        let offset: Vector= new Vector(this.speed.x, this.speed.y);
        offset.scale(_timeslice);
        this.position.add(offset); //addiert auf position den offset

        if(this.position.x < 0)
        this.position.x += crc2.canvas.width;
        
        if(this.position.y < 0)
        this.position.y += crc2.canvas.height;

        if(this.position.x > crc2.canvas.width)
        this.position.x -= crc2.canvas.width;

        if(this.position.y > crc2.canvas.height)
        this.position.y -= crc2.canvas.height;
    };


}
}