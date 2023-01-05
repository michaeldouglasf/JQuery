$(".cars_list li:hidden").show();

$("#toggle_cars").click(function () {
  $(".cars_list li:hidden").css("color", "red").show();
});
$("#hide_cars").click(function () {
  $(".cars_list li:visible").css("color", "green").hide();
});