class Box {
  constructor(x, y,width,height ){
    var options = {}
  this.body = Bodies.rectangle(x, y, width, height, options);
  this.width = width;
  this.height = height;
    this.image = loadImage("wood1.png");
    this.visibility = 255;
    this.flag = true;
    World.add(world, this.body);
    
  }

 display(){
  if(this.body.speed>3 ){
    this.flag = false;
   
  } else{
    if(this.flag){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
  }
  if(!this.flag){
    push();
    
    if(this.visibility < 0){
      World.remove(world, this.body);
    }
    this.visibility -= 5;
    tint(255, this.visibility);
    image(this.image, this.body.position.x,this.body.position.y, this.width, this.height);
    pop();
   }
   
   
 }
  score(){
    if(this.visibility < 0 && this.visibility > -105){
      score++;
    }
  }




};