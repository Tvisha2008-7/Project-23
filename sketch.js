const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//creating variables
var engine, world;
var canvas;
var playerBase;
var player;



function preload() {
  //loading the images
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
}

function setup() {
  //specific width and height to the canvas
  canvas = createCanvas(1000,500);

  engine = Engine.create();
  world = engine.world;

  //giving the isStatic property as true so the the base does not fall
  var options = {
    isStatic: true
  };
//the player base should be a rectangle
  playerBase = Bodies.rectangle(200, 350, 180, 150, options);
  World.add(world, playerBase);

  player = Bodies.rectangle(250, 200, 55, 180, options);
  World.add(world,player)
}

function draw() {
  background(backgroundImg);

  Engine.update(engine);
  //to show the image, function image() is used.
  image(baseimage,playerBase.position.x,playerBase.position.y,180,150)

  image(playerimage,player.position.x,player.position.y,50,180)

//creating text with assigning its position, size and colour 
  fill("white");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY!!", width / 2, 100);
}




