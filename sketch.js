const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

   box1 = new Box();
   box2 = new Box();

}

function draw(){
    background(0);
    Engine.update(engine);
   
    box1.display();
    box2.display();

}