$(document).ready(function(){
    // CRIANDO NOSSO PROPRIO FILTRO
      $.expr[':'].carsCentury21 = function(el) {
        return ($(el).data('ano') > 2000);
      }
      $('.cars_list li:carsCentury21').css({'color': 'red', 'font-size': '30px'})

      $.expr[':'].carsBeforeYear = $.expr.createPseudo(function (year){
        
        return function(el){
          return ($(el).data('ano') < year);

        }
      })
      $('.cars_list li:carsBeforeYear(1980)').css('color', 'pink')
   })