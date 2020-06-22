class Dustbin {
    constructor(x,y,width,height) {
        var options = {
            'isStatic': true
        }
        this.image = loadImage("dustbingreen.png");
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.thickness = 20;
        this.bottombody = Bodies.rectangle(this.x, this.y, this.width, this.thickness, options);
        
        this.leftbody = Bodies.rectangle(this.x-this.width/2, this.y-this.height/2, this.thickness, this.height, options);

        this.rightbody = Bodies.rectangle(this.x+this.width/2, this.y-this.height/2, this.thickness, this.height, options);
        
        World.add(world, this.bottombody);
        World.add(world, this.leftbody);
        World.add(world, this.rightbody);
        
      }
      display(){
        var bottompos = this.bottombody.position; 
        var leftpos = this.leftbody.position; 
        var rightpos = this.rightbody.position; 
        push();
        translate(leftpos.x,leftpos.y);
        rectMode(CENTER);
        pop();
        push();
        translate(rightpos.x,rightpos.y);
        rectMode(CENTER);
        pop();
        push();
        translate(bottompos.x,bottompos.y);
        imageMode(CENTER);
        image(this.image,0,-this.height/2,this.width,this.width);
        pop();
    }
}