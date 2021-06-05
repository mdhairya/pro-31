class Particle{
	constructor(x,y,r)
	{
	// assign options to the rubber ball
	var options = {
      restitution:1,
	  friction:10,
	  density:5


	}
		this.x=x;
		this.y=y;
        this.r=r;
		this.body=Bodies.circle(x,y,this.r, options)
        this.color=color(random(0,255),random(0,255),random(0,255))
		World.add(world, this.body);

	}
	display()
	{
			push()
			
			pop()
	}

}