$(document).ready(function(){
    $(".up").hide();


    $(window).scroll(function(){
        if($(this).scrollTop() > 4100){

            $(".up").fadeIn(200);
        }else{
            $(".up").fadeOut(200);
        }
    });

    $(".up").click(function(){
     $("body, html").animate({
        scrollTop:0
    },150);
});

});