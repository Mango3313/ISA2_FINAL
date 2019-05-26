$(document).ready(function(){
    $('nav').css('transition','500ms ease-out');
    $(window).scroll(function(){
        console.log($(this).scrollTop());
        $('nav').toggleClass('bg-warning', $(this).scrollTop() > 620);
        $('nav').toggleClass('bg-success', $(this).scrollTop() > 3500);
    });
});