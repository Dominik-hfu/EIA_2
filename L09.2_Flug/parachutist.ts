namespace AlpenFlug{

    export class Parachutist{

    type:string;
    positionX:number;
    positionY:number;
    sizeX:number;
    sizeY:number;
    color:string;
    movementX:Vector;
    movementY:Vector;


    constructor(_type:string, _position: Array<number>, _size: Array<number>, _color: string, _movement:Vector){
        
        this.type=_type;
        this.positionX=_position[0];
        this.positionY=_position[1];
        this.sizeX=_size[0];
        this.sizeY=_size[1];
        this.color=_color;
        this.movementX=Vector;
        this.movementY=Vector;

    }

    draw(){};
    movement(){};


}
}