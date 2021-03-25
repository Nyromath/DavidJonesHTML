console.log('javascript');

//html document must be ready before jQuery triggers any functionality
$(document).ready(function(){
  $('#women, #fashion, #home').hide();

  $('#navMen').click(function(){
    $(this).css('color', 'purple');
    $('#women').hide();
    $('#men').show();
    $('#fashion').hide();
    $('#home').hide();
  });

  $('#navWomen').click(function(){
    $(this).css('color', 'purple');
    $('#women').show();
    $('#men').hide();
    $('#fashion').hide();
    $('#home').hide();
  });

  $('#navFashion').click(function(){
    $(this).css('color', 'purple');
    $('#women').hide();
    $('#men').hide();
    $('#fashion').show();
    $('#home').hide();
  });

  $('#navHome').click(function(){
    $(this).css('color', 'purple');
    $('#women').hide();
    $('#men').hide();
    $('#fashion').hide();
    $('#home').show();
  });

});
