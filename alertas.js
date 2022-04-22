
function alertquestion(){
    if(LoloS2.collide(Algoritimo5jr )){
      swal({
        title: `Oi Lolo`,
        text: "Você pode me ajudar a encontar minha amiga Lily?  ",
        imageUrl:"algt5.png",
          imageSize: "100x100",
          confirmButtonText: "Claro, vamos até ela",
      },
      function(isConfirm) {
        if (isConfirm) {
            ajuda = true;
        }
      }

      );
    }
if(LoloS2.x<329&&LoloS2.y<136){
swal({
title: `Parabéns! Você chegou ao fim!`,
text: "Curte para a continuação",
imageUrl: "algt4.png",
imageSize: "150x150",
confirmButtonText: "Obrigada por jogar",
})
}

  }
  