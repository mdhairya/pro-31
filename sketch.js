var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create division objects
  for (var k = 0; k <=80; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var k = 0; k <=170; k = k +170) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var k = 0; k <=270; k = k +270) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 0; k <=370; k = k +370) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 0; k <=470; k = k +470) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 0; k <=570; k = k +570) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 0; k <=670; k = k +670) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 0; k <=770; k = k +770) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }



  //create 1st row of plinko objects
  for (var j = 75; j <=width-100; j=j+70) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 50; j <=width-100; j=j+70) 
  {
    plinkos.push(new Plinko(j,175));
  }

  //create 3rd row of plinko objects
  for (var j = 75; j <=width-100; j=j+70) 
  {
    plinkos.push(new Plinko(j,275));
  }
  
  //create 4th row of plinko objects
  for (var j = 50; j <=width-100; j=j+70) 
  {
    plinkos.push(new Plinko(j,375));
  }

  

}
 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();

  //create particle objects
  if(frameCount%50===0){
    var particle = new Particle(random(width/2-15,width/2+15),20,20);
    particles.push(particle)
   
    }
  
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {

    plinkos[i].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  //display the paricles 
  for (var j = 0; j < particles.length; j++) {
    console.log(particles[j])
    particles[j].display();
  }
}