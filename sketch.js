
var floresta
var LoloS2
var Lolos2
var Algoritimo5, Algoritimo5jr, edge, find
var Lily, LilyAxolotl, alg1, alg1_img, final, final_img;
var fl, ajuda = false;

function preload(){ // função que carregar todas as imagens e animações
  floresta = loadImage("bg.png");
  Lolos2 = loadImage("lolo_3.png");
  Algoritimo5 = loadImage("algt5.png");  
  Lily = loadAnimation("ax7.png","ax8.png");
  alg1_img = loadImage ("algt1.png");
  final_img = loadImage("ax11.png")
}

function setup(){ // todas as configuraçoes dos objetos
  createCanvas(1669,912);
  fl = new Group () // grupo das partes da floresta que o lolo não pode passar
  donotenter();
  edge = createEdgeSprites()
  

  LoloS2 = createSprite(479,722,20,20)
  LoloS2.addImage(Lolos2);
  LoloS2.scale = 0.3
 

  Algoritimo5jr = createSprite(613,609,20,20);
  Algoritimo5jr.addImage(Algoritimo5);  
  Algoritimo5jr.scale = 0.2;

  Lily.frameDelay = 11;
  LilyAxolotl = createSprite(1293,313,20,20);
  LilyAxolotl.addAnimation("Lily",Lily);
  LilyAxolotl.scale = 0.4

  alg1 = createSprite(292,441, 20,20)
  alg1.addImage(alg1_img)
  alg1.scale = 0.5

  final = createSprite(157,147, 20,20)
  final.addImage(final_img)
  final.scale = 0.5
  final.visible = false

  find = createSprite (1493,291, 70,20)
  find.visible = false
}

function draw(){
  background(floresta);
  drawSprites(); 
  alertquestion();

  if(ajuda === true){
    Algoritimo5jr.x = LoloS2.x-100;
    Algoritimo5jr.y = LoloS2.y;
  }else if(LoloS2.isTouching(find)){
    Algoritimo5jr.x = 1418;
    Algoritimo5jr.y = 315;
  }

  text (mouseX+","+mouseY,mouseX,mouseY);
  andei();
  LoloS2.collide (fl)
  LoloS2.collide (edge)

  if(LoloS2.x<1000&&LoloS2.y<165&&LoloS2.x>581){
    LilyAxolotl.x = 602;
    LilyAxolotl.y = 78;
  } else if(LoloS2.x<580&&LoloS2.y>411){
    LilyAxolotl.x = 510;
    LilyAxolotl.y = 576;
  }else{
    LilyAxolotl.x = 1293;
    LilyAxolotl.y = 313; 
  }
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
