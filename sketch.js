
const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;

var division = [];
var particles = [];
var plinkos = [];
var ground = [];
divisionHeight = 300;
var score = 0;


function preload()
{

}




function setup() {
  createCanvas(800,480);
  createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;

  //Create the Bodies Here.
  ground = new Ground(width/2, height, width, 20);
 
  for (var i = 0; i<=width; i= i+80){
    division.push(new Division (i, height-divisionHeight/10, 5, divisionHeight));
  }

  for(var j=40; j<width; j= j+45){
   plinkos.push(new Plinko (j, 75));
  }

  for(var j=30; j<width-10; j= j+45){
    plinkos.push(new Plinko (j, 175));
   }

   for(var j=40; j<width; j= j+45){
    plinkos.push(new Plinko (j, 275));
   }


   Engine.run(engine);
  }
 

  function draw(){
   
    strokeWeight(5);
    stroke("pink")
    background("black")

    for(var n = 0; n<division.length; n++){
      division[n].display();
    }

    if (frameCount %60 === 0){
      particles.push(new Particle(random(width/4-60, width/4+60),10,10));
    }

    for (var h = 0; h<particles.length; h++){
      particles[h].display();
    }

    for (var j = 0; j<plinkos.length; j++){
      plinkos[j].display();
    }
    ground.display();
    
    

    
  }



  


