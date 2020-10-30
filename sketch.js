const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var ball

var ourengine,ourworld,ground;

function setup() {
  createCanvas(400,400);
ourengine = Engine.create();
ourworld = ourengine.world;

var ground_options ={
  isStatic: true
}

var ball_options = {
restitution: 0.8
}
ground = Bodies.rectangle(200,390,400,20,ground_options);
World.add(ourworld,ground)
console.log(ground);

ball = Bodies.circle(200,100,20,ball_options)
World.add(ourworld,ball)

}

function draw() {
  background(0); 
  Engine.update(ourengine) 
  rectMode(CENTER)
 //rect(200,200,50,50)
 rect(ground.position.x,ground.position.y,400,20)
 ellipseMode(RADIUS)
 ellipse(ball.position.x,ball.position.y,20,20)
}