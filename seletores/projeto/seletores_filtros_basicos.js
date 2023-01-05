$(document).ready(function(){
    $('.cars_list li:last').click(function(){
    alert('Carro Selecionado')
  })
  $('.cars_list li:first').click(function(){
    console.log('cliquei no primeiro carro');
})
//selecting elements alternately
$('.cars_list li:odd').css('background-color','#ccc')
$('.cars_list li:eq(0)').css('font-size','50px')
$('.cars_list li:gt(1)').css('color','red')
$('.cars_list li:lt(3)').css('font-weight','italic')
 })