
var floresta
var LoloS2
var Lolos2
function preload(){ // função que carregar todas as imagens e animações
  
floresta = loadImage("bg.png");
Lolos2 = loadImage("lolo<3.png");

}
// teste

function setup(){ // todas as configuraçoes dos objetos
  createCanvas(1669,912);
  LoloS2 = createSprite(479,722,20,20)
  LoloS2.addImage(Lolos2);
LoloS2.scale = 0.3
}

function draw(){
  background(floresta);
  drawSprites(); 

  text (mouseX+","+mouseY,mouseX,mouseY);
  andei();

}
function andei(){
  if(keyDown("up")){
LoloS2.y -= 3;
  }
  if(keyDown("down")){
LoloS2.y += 3;
  }
if(keyDown("left")){
LoloS2.x -=3;
}
if(keyDown("right")){
LoloS2.x += 3;
}
}

