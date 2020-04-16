const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;
var box1;
var box2;
var box3;
var box4;
var tri;


function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

 box1=new Box(20,30,20,330);
 box2=new Box(380,10,20,330);
 box3=new Box(200,200,70,200);
 box4=new Box(300,60,40,285);
 box5=new Box(100,60,40,285);
 ground=new Ground(200,390,400,10);

}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    tri=triangle(100, 100, 300, 100, 200, 50);

}