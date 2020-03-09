const {Engine, World, Bodies} = Matter;

var world, engine;

var sun, planet1;

function setup() 
{
  createCanvas(800,500);
  engine = Engine.create();
  world = engine.world;

  sun = new Sun(800, 0, 50);
  planet1 = new Planet(740, 100, 20);
}

function draw() 
{
  Engine.update(engine);
  
  background(0);
  
  sun.display();

  planet1.display();
}