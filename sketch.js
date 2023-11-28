var Trex
var Trex_running
var Trex_collided;
var ground
var groundImage

function preload(){
    Trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
    groundImage = loadImage("ground2.png")
}

function setup(){
    createCanvas(600,400)
    Trex = createSprite(50,180,20,50);
    Trex.addAnimation("running",Trex_running)
    ground = createSprite(200,225,400,20);
    ground.addImage("ground",groundImage)
    ground.velocityX = -6
}

function draw(){
    background("white")
    drawSprites();
}