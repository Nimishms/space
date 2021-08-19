var bgImg,issimg,iss,spacecraftOgImg,spacecraft,spacecraftleft,spacecraftright,spacecraftup;
function preload(){
bgImg = loadImage("spacebg.jpg")
issimg = loadImage("iss.png");
spacecraftOgImg = loadImage("spacecraft1.png")



}
function setup() {
  createCanvas(1200,800);
iss = createSprite(600,200);
iss.addImage("iss",issimg)
spacecraft = createSprite(600,500)
spacecraft.addImage("og",spacecraftOgImg);
spacecraft.scale = 0.3
}

function draw() {
  background(bgImg); 
  spacecraft = spacecraft.x + random(-1,1) 
spacecraft = spacecraft.x+ random(-1,1)
spacecraft = spacecraft.x + random(-1,1)
spacecraft = spacecraft.x + random(-1,1)

  drawSprites();
}
function keyPressed(){
  if(keyCode = RIGHT_ARROW){
    spacecraft.x = spacecraft.x + 10;
    spacecraftright = loadImage("spacecraft4.png")
    spacecraft.addImage("right",spacecraftright)
  }
  if(keyCode = LEFT_ARROW){
    spacecraft.x = spacecraft.x - 10;
    spacecraftleft = loadImage("spacecraft3.png")
    spacecraft.addImage("left",spacecraftleft)
  }
  if(keyCode = UP_ARROW){
    spacecraft.x = spacecraft.y - 10;
    spacecraftup = loadImage("spacecraft2.png")
    spacecraft.addImage("up",spacecraftup)
  }
}