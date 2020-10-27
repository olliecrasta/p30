class Box {
    constructor(x, y, width, height){
      var options = {
        density : 0.1,
        restitution : 0.8,
        friction : 0.5,
        isStatic : false
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.visibility = 255;
    this.color = color(200,230,25,255);
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;

  
    if( this.body.speed > 3)
    {
      this.visibility = this.visibility-5;
    }
    
      if(this.visibility<255 && this.visibility >0){
        console.log("remove")
          push();
          //tint(255,this.visibility);
          this.visibility--;
          rectMode(CENTER);
          translate(pos.x,pos.y)
          rotate(this.body.angle)
          fill(200,230,25,this.visibility);
          rect(0,0, this.width, this.height);
          pop();
      
          if(this.visibility === 0){
            //noStroke();
              World.remove(world,this.body);
          }
          
      }
      if(this.visibility === 255){
        push();
        rectMode(CENTER);
        translate(pos.x,pos.y)
        rotate(this.body.angle)
        fill(this.color);
        rect(0,0, this.width, this.height);
        pop();

      }
     
      
    }
  
  };