$("#toggle_cars").click(function () {
  let hiddenCars = $(".cars_list li:hidden").length;
  let method = hiddenCars > 0 ? "show" : "hide";

  eval(`$('.cars_list li').${method}()`);
});
// selecting button
//$('#register :button').text()

//selecionando um checkbox
// $('#register :checkbox').trigger('click')

$("[type=radio").change(function () {
  let value = $("input:checked").val();
  let gender = value == "M" ? "Masculino" : "Feminino";

  alert(`Voce selecionou o sexo ${gender}`);
});

$(document).ready(function () {
  $("#toggle_cars").click(function () {
    let hiddenCars = $(".cars_list li:hidden").length;
    let method = hiddenCars > 0 ? "show" : "hide";

    eval(`$('.cars_list li').${method}()`);
  });
  // selecting button
  //$('#register :button').text()

  //selecionando um checkbox
  // $('#register :checkbox').trigger('click')

  //selecionando se um elemento esta checked
  $("[type=radio").change(function () {
    let value = $("input:checked").val();
    let gender = value == "M" ? "Masculino" : "Feminino";

    alert(`Voce selecionou o sexo ${gender}`);
  });

  //selecionando elementos desabilitados
  $("#register :disabled")
    .val("michael@gmail.com")
    .css({
      "background-color": "red",
      color: "white",
    })
    .prop("disabled", false);

  $("input").focus(function () {
    $("input:focus").val("Ola voce clicou aqui");
  });
  //selecionando botao submit
  $("#register :submit")
    .click(function (event) {
      event.preventDefault();
      console.log("voce clicou ");
    })
    .css("background-color", "pink");
});
