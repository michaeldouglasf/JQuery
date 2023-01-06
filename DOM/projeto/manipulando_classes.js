// ADICIONANDO REMOVENDO CLASS
$("header .menu ul li:last a").addClass("stylized_menu");
$("header .menu ul li:last a").removeClass("stylized_menu");

$("header .menu ul li:last a").addClass("stylized_menu1");

//   ALTERNANDO UMA CLASSE
$("header .menu ul li a").click(function (event) {
  event.preventDefault();
  $(this).toggleClass("stylized_menu");
});
//   VERIFICANDO SE UM ELEMENTO POSSUI UMA CLASSE
$("header .menu ul li:last a").hasClass("stylized_menu");

$("p").each(function () {
  if ($(this).hasClass("paragrafo")) {
    $(this).append('<span style="color: red;"> Aqui tem um paragrafo</span>');
  }
});
