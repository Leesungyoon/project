$(document).ready(function(){
    $('.level1 li').click(function(){
     var a=$(this).index();
     $('.level2 p').removeClass('on');
     $('.level2 p').eq(a).addClass('on');
    });
});