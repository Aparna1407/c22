const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine, world, box;
function setup() {

  createCanvas(800,400);

engine=Engine.create();
world=engine.world;
var options={
  isStatic:true
}
box=Bodies.rectangle(400,350,800,40,options)
World.add(world,box)

console.log(box)
}

function draw() {
  background("black"); 
  Engine.update(engine) 
rectMode(CENTER)
  rect(box.position.x,box.position.y,800,40)

  
}