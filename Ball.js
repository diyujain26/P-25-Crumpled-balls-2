class Ball {
  constructor(x, y, radius) {
    var options = {
        isStatic:false,
        restitution:0.3,
        friction:0.4,
        density:1.4
  
    }
    this.image = loadImage("sprites/Paperball.png")
    this.x= x;
    this.y= y;
    this.radius=radius;

    World.add(world, this.body);
  }
  display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  } 
};