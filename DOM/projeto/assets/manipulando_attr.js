    //verificando o conteudo de um atriburo'
    console.log($("img").attr("alt"));
    //ALTERANDO ATRIBUDO SRC
    setTimeout(function () {
      $("img").attr("src", "/DOM/projeto/assets/images/jquery.jpg");
    }, 2000);
    //REMOVE ATTR
    $('img').removerAttr('title')