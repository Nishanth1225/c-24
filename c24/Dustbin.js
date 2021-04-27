class Dustbin {
    constructor(x, y, width, height){
        var options = {
            isStatic: true,
            'restitution' :0,
            'friction':1,
            'density' :0.1   
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("dustbingreen.png")

        World.add(world, this.body);
    }
    display(){
        rectMode(CENTER);

        fill(255);

        rect(this.body.position.x, this.body.position.y, this.width, this.height);

        Push()
         Translate(posLeft.x, posLeft.y);
         rectMode(CENTER)
         angleMode(RADIANS)
         fill(255)
         Rotate(this.angle)
         Pop()

         Push()
         Translate(posRight.x, posRight.y);
         rectMode(CENTER)
         angleMode(RADIANS)
         fill(255)
         Rotate(-1*this.angle)  
         Pop()
 
         Push()
         Translate(posBottem.x, posBottem.y);
         rectMode(CENTER)
         angleMode(RADIANS)
         fill(255)
         imageMode(CENTER)
         image(this.image, 0, -this.dustbinHeight/2, this.dustbinWidth, this.dustbinHeight)
         Pop()

         
         














    }
}