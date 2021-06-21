class Particle{
	constructor(x,y,r)
	{
	// assign options to the rubber ball
	var options = {
      restitution:0.4,
	//   friction:10,
	//   density:7

	}
		this.x=20;
		this.y=20;
        this.r=r;
		this.body=Bodies.circle(x,y,this.r, options)
        this.color=color(random(0,255),random(0,255),random(0,255))
		World.add(world, this.body);

	}
	display()
	{       var particlePos=this.body.position;	
			push()
		// translate(particlePos.x, particlePos.y);
			//  rectMode()
			strokeWeight(5);
			  fill(this.color);
			  rotate();
			//draw the ellipse here to display the rubber ball
			ellipseMode(CENTER);
			ellipse(particlePos.x,particlePos.y,this.r,this.r)
			pop()
	}

}