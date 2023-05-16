
$(document).ready(function(){
    $('.lemegy').click(function()   {
       if ($(this).hasClass('nagyobb')) {
        $('ul').slideUp(function(){
            $('.lemegy').removeClass('nagyobb'); 
        });
       }else{
        $(this).addClass('nagyobb');
        setTimeout(function() {
            $('ul').stop().slideDown();
        },200);
       }
    });
});