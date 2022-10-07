$(function(){
    $('.mobile-menu').click(function(e){
        $('.mobile-menu').find('ul').slideToggle();
        e.stopPropagation();
    });

    $('body').click(function(){
        $('.mobile-menu ul').fadeOut(); 
    })
});