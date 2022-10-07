$(function(){

    var amt = $('.sobre-autor').length;
    var curIndex = 0;
    
    initSlider();
    autoPlay();

    function initSlider(){
        var amt = $('.sobre-autor').length;
        var sizeContainer = 100 * amt;
        var sizeBoxSingle = 100 / amt;

        $('.sobre-autor').css('width',sizeBoxSingle+'%');
        $('.scroll-wraper').css('width',sizeContainer+'%');

        for(var i = 0; i < amt; i++){
            if(i == 0){
                $('.slider-bullets').append('<span style="background-color:rgb(170,170,170);"></span>');
            }
            else{
                $('.slider-bullets').append('<span></span>');
            }
        }
    }

    function autoPlay(){
        setInterval(function(){
            curIndex++;
            if(curIndex == amt){
                curIndex = 0;
            }
            goToSlider(curIndex);
        },5000)
    }

    function goToSlider(curIndex){
         var offSetX = $('.sobre-autor').eq(curIndex).offset().left - $('.scroll-wraper').offset().left;

        $('.scrollEquipe').stop().animate({'scrollLeft':offSetX});
        $('.slider-bullets span').css('background-color','rgb(200, 200, 200)');
        $('.slider-bullets span').eq(curIndex).css('background-color','rgb(170,170,170)');

    }

    $(window).resize(function(){
        $('.scrollEquipe').stop().animate({'scrollLeft':0});
    })
})