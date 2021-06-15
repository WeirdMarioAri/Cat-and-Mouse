var garden, gardenImg;
var cat, catImg1, catImg2, catImg3;
var mouse, mouseImg1, mouseImg2, mouseImg3;

function preload() {
gardenImg = loadImage("images/garden.png");
catImg1 = loadAnimation("images/cat1.png");
mouseImg1 = loadAnimation("images/mouse1.png");
catImg2 = loadAnimation("images/cat2.png", "images/cat3.png");
mouseImg2 = loadAnimation("images/mouse2.png", "images/mouse3.png");
catImg3 = loadAnimation("images/cat4.png");
mouseImg3 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    garden = createSprite(500, 400, 1000, 800);
    garden.addImage(gardenImg);

    mouse = createSprite(200, 600, 40, 40);
    mouse.addAnimation("Jerry", mouseImg1);
    mouse.scale = 0.2;

    cat = createSprite(800, 620, 40, 40);
    cat.addAnimation("Tom", catImg1);
    cat.scale = 0.2;
}

function draw() {

    background(225);
    
    if(cat.x - mouse.x < (cat.width - mouse.width)/2) {
      mouse.addAnimation("mouseHappy", mouseImg3);
      mouse.changeAnimation("mouseHappy");
      cat.addAnimation("catHappy", catImg3);
      cat.changeAnimation("catHappy");
      cat.velocityX = 0;
    }

    drawSprites();
}


function keyPressed(){
  if(keyCode === LEFT_ARROW) {
    mouse.addAnimation("mouseTeasing", mouseImg2);
    mouse.changeAnimation("mouseTeasing");
    cat.velocityX = -5;
    cat.addAnimation("catWalking", catImg2);
    cat.changeAnimation("catWalking");
  }


}
