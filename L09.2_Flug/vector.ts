namespace AlpenFlug{

export class Vector{

    x:number;
    y:number;

    constructor(_x:number, _y:number){
        this.set(_x,_y);
    }

    set(_x:number,_y:number):void{
        this.x=_x;
        this.y=_y;
    }

    scale(_factor:number):void{
        this.x*=_factor;
        this.y*=_factor;
    }

    add(_addend:Vector):void{
        this.x+=_addend.x;
        this.y+=_addend.y;
    }
    subtract(_sub:Vector):void{
        this.x-=_sub.x;
        this.y-=_sub.y;
    }
    subtract_climb(_sub:Vector):void{
        // this.x-=_sub.x;
        this.y-=_sub.y;
    }

    // Minute 13 random funktion hier?

}
}