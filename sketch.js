
var astronaut, astronaut_floating
var alien, alien_ufo
var backdrop, background_moving


function preload() {
astronaut_floating = loadImage("astronaut floating 2.png");
alien_ufo = loadImage("alien ufo.png");
background_moving= loadImage("space 2.jpeg");

}


function setup() {
  createCanvas(1200,800);
  backdrop = createSprite(600,400,600,600);
  backdrop.addImage("moving",background_moving);
  backdrop.scale = 4;
  astronaut = createSprite(400, 200, 50, 50);
  alien = createSprite(200,200,50,50);
  astronaut.addImage("floating",astronaut_floating);
  astronaut.scale = 0.1;
  alien.addImage("ufo",alien_ufo);
  alien.scale = 0.4;
}


function draw() {
  background(255,255,255);  
  drawSprites();
}