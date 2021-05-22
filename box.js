class Box{

    constructor()
    {
            var options={
            restitution:2
            }
            this.body=Bodies.rectangle(200,200,50,50,options)
            this.width=50;
            this.height=50;
            World.add(world,this.body);
    }
   display(){
       fill("white")
       rectMode(CENTER)
      rect(this.body.position.x, this.body.position.y,this.width, this,height)


   }
   


}