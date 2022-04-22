
function alertquestion(){
    if(LoloS2.collide(Algoritimo5jr )){
      swal({
        title: `Oi lolo`,
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
  }
  