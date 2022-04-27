
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
  if(LoloS2.collide(final)){
    final.visible = true
    swal({
      title: `Parabéns! Você chegou ao fim!`,
      text: "Curte para a continuação",
      imageUrl: "algt4.png",
      imageSize: "150x150",
      confirmButtonText: "Clique para jogar novamente",
    },
    function(isConfirm) {
      if (isConfirm) {
        location.reload();
      }
    }

    )
  }

  if(LoloS2.collide(alg1)){
    swal({
      title: `Caminho errado`,
      text: "Lolo, você precisa retornar ao caminho da cabaninha",
      imageUrl: "algt1.png",
      imageSize: "150x150",
      confirmButtonText: "Ok",
    }

    )
  }

  if(LoloS2.isTouching(find)){
    swal({
      title: `Obrigado por achar a Lily`,
      text: "Ficarei aqui com ela! Tchau Lolo!",
      imageUrl: "algt5.png",
      imageSize: "150x150",
      confirmButtonText: "Ok",
    },
    function(isConfirm) {
      if (isConfirm) {
          ajuda = false;
      }
    })
  }


}
  