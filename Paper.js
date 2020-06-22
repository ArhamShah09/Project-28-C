class Paper {
    constructor(x,y,diameter) {
        var options = {
            isStatic : false,
            restitution : 0.3,
            friction : 2,
            density :1.2
        }
        this.image = loadImage("paper.png");
        this.x = x;
        this.y = y;
        this.diameter = diameter;
        this.body = Bodies.circle(x, y, diameter/2, options);
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER); 
        image(this.image,0, 0, this.diameter/2,this.diameter/2);
        pop();
    }
}