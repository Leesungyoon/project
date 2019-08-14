$(document).ready(function(){
    $(".homeContain article:first-of-type").fadeIn(400);
    $(".homeContain article:first-of-type").animate({"top":"37%"},300);
        $(".homeContain>article:first-of-type>h3").click(function(){
            $(".homeContain>article:first-of-type>h1").animate({"top":"-1600px"},1500);
            $(".homeContain>article:first-of-type>div>hr").eq(0).animate({"left":"-1600px"},1500);
            $(".homeContain>article:first-of-type>div>p").fadeOut(1500);
            $(".homeContain>article:first-of-type>div>hr").eq(1).animate({"right":"-1600px"},1500);
            $(".homeContain>article:first-of-type>h2").animate({"left":"-1600px"},1500);
            $(".homeContain>article:first-of-type>h3").animate({"bottom":"-1600px"},1500);
            $(".aboutMe").fadeIn();
            $(".aboutMe").animate({"top":"10%"},500);
        });
        $(".aboutMeTop>img").click(function(){
            if (matchMedia("screen and (max-width:375px)").matches){
                $(".homeContain>article:first-of-type>h1").animate({"top":"15%"},1500);
                $(".homeContain>article:first-of-type>h3").animate({"bottom":"0%"},1500);
            }
            else if (matchMedia("screen and (max-width:620px)").matches){
                $(".homeContain>article:first-of-type>h1").animate({"top":"15%"},1500);
                $(".homeContain>article:first-of-type>h3").animate({"bottom":"0%"},1500);
            }
            else if (matchMedia("screen and (max-width:1000px)").matches){
                $(".homeContain>article:first-of-type>h1").animate({"top":"10%"},1500);
                $(".homeContain>article:first-of-type>h3").animate({"bottom":"0%"},1500);
            }
            else{
                $(".homeContain>article:first-of-type>h1").animate({"top":"0%"},1500);
                $(".homeContain>article:first-of-type>h3").animate({"bottom":"5%"},1500);
            }
            $(".homeContain>article:first-of-type>div>hr").eq(0).animate({"left":"0%"},1500);
            $(".homeContain>article:first-of-type>div>p").fadeIn(1500);
            $(".homeContain>article:first-of-type>div>hr").eq(1).animate({"right":"0%"},1500);
            $(".homeContain>article:first-of-type>h2").animate({"left":"50%"},1500);
            $(".aboutMe").fadeOut();
            $(".aboutMe").animate({"top":"70%"},500);
        });
    $(window).scroll(function(){
        if($(this).scrollTop()>880){
            $('.header').css({"background-color":'white'});
            $('.nav li').css({"color":'black'});
            if (matchMedia("screen and (max-width:620px)").matches){
                $('.header').css({"box-shadow":'none'});
                $('.logo').attr({"src":'img/logo.png'});
            } 
            else {
                $('.logo').attr({"src":'img/logo2.png'});
            }
            $('.header').css({"box-shadow":'1px 1px 1px gray'});
        }
        else{
            $('.logo').attr({"src":'img/logo.png'});
            $('.header').removeAttr('style');
            $('.nav li').removeAttr('style');
        }
        if(($(this).scrollTop()>650) && ($(this).scrollTop()<=1250)){
            $('.nav li').eq(0).css({"color":'white'});
            $('.nav li').eq(1).css({"color":'burlywood'});
        }
        if(($(this).scrollTop()>650) && ($(this).scrollTop()>880)){
            $('.nav li').eq(0).css({"color":'black'});
        }
        if(($(this).scrollTop()>1250) && ($(this).scrollTop()<=1800)){
            $('.nav li').eq(2).css({"color":'burlywood'});
        }
        if(($(this).scrollTop()>1800) && ($(this).scrollTop()<=3100)){
            $('.nav li').eq(3).css({"color":'burlywood'});
        }
        if($(this).scrollTop()>3100){
            $('.nav li').eq(4).css({"color":'burlywood'});
        }
        if($(this).scrollTop()>300){
            $('.aboutLeft').fadeIn(400);
            $('.aboutLeft').animate({"bottom":'30px'},400);
            $('.aboutRight').fadeIn(800);
            $('.aboutRight').animate({"bottom":'30px'},800);
        }
        if($(this).scrollTop()>1000){
            if (matchMedia("screen and (max-width:375px)").matches){
                    if($(this).scrollTop()>1300){
                        $(".skillDetail>div:first-of-type>span").eq(0).animate({"width":"47%"},2000);
                    }
                    if($(this).scrollTop()>1400){
                        $(".skillDetail>div:nth-of-type(2)>span").eq(0).animate({"width":"47%"},2000);
                    }
                    if($(this).scrollTop()>1500){
                        $(".skillDetail>div:nth-of-type(3)>span").eq(0).animate({"width":"40%"},2000);
                    }
                    if($(this).scrollTop()>1600){
                        $(".skillDetail>div:nth-of-type(4)>span").eq(0).animate({"width":"33%"},2000);
                    }
                    if($(this).scrollTop()>1700){
                        $(".skillDetail>div:nth-of-type(5)>span").eq(0).animate({"width":"33%"},2000);
                    }
            }
            else{
                $(".skillDetail>div:first-of-type>span").eq(0).animate({"width":"47%"},2000);
                $(".skillDetail>div:nth-of-type(2)>span").eq(0).animate({"width":"47%"},2000);
                $(".skillDetail>div:nth-of-type(3)>span").eq(0).animate({"width":"40%"},2000);
                $(".skillDetail>div:nth-of-type(4)>span").eq(0).animate({"width":"33%"},2000);
                $(".skillDetail>div:nth-of-type(5)>span").eq(0).animate({"width":"33%"},2000);
            }
        }
    });
    $(".works>article:nth-of-type(2)>div:first-of-type>p").eq(5).click(function(){
       
    });
    $(".worksMoreinfo>img:first-of-type").click(function(){
        
    });    
    
    $(".works>article:nth-of-type(3)>div:first-of-type>p").eq(5).click(function(){
        $(".worksMoreinfo").eq(1).fadeIn();
        $(".blackBackground").fadeIn();
    });
        $(".worksMoreinfo>img:first-of-type").click(function(){
        $(".worksMoreinfo").eq(1).fadeOut();
        $(".blackBackground").fadeOut();
    }); 
    $(".works>article:nth-of-type(4)>div:first-of-type>p").eq(5).click(function(){
        $(".worksMoreinfo").eq(0).fadeIn();
        $(".blackBackground").fadeIn();
    });
        $(".worksMoreinfo>img:first-of-type").click(function(){
        $(".worksMoreinfo").eq(0).fadeOut();
        $(".blackBackground").fadeOut();
    }); 
    
    
    $('.nav a').click(function(e){
        e.preventDefault();
        var link = this;
        $.smoothScroll({
            scrollTarget:link.hash, //a태그에 있는 해쉬#값을 타겟으로 건다.
            offset: -90,
            speed:1300
        });
    });
        if (matchMedia("screen and (max-width:375px)").matches){
                $(window).scroll(function(){
                    if($(this).scrollTop()<400){
                        $('.nav2 img').eq(0).attr({"src":'img/homeiconactive.png'});
                    }
                    else{
                        $('.nav2 img').eq(0).attr({"src":'img/homeicon.png'});
                    }
                    if(($(this).scrollTop()<1250) && ($(this).scrollTop()>=400)){
                        $('.nav2 img').eq(1).attr({"src":'img/aboutmeiconactive.png'});
                    }
                    else{
                        $('.nav2 img').eq(1).attr({"src":'img/aboutmeicon.png'});
                    }
                    if(($(this).scrollTop()>=1250) && ($(this).scrollTop()<=2400)){
                        $('.nav2 img').eq(2).attr({"src":'img/skilliconactive.png'});
                    }
                    else{
                        $('.nav2 img').eq(2).attr({"src":'img/skillicon.png'});
                    }
                    if(($(this).scrollTop()>2400) && ($(this).scrollTop()<=3800)){
                        $('.nav2 img').eq(3).attr({"src":'img/worksiconactive.png'});
                    }
                    else{
                        $('.nav2 img').eq(3).attr({"src":'img/worksicon.png'});
                    }
                    if($(this).scrollTop()>3800){
                        $('.nav2 img').eq(4).attr({"src":'img/contacticonactive.png'});
                    }
                    else{
                        $('.nav2 img').eq(4).attr({"src":'img/contacticon.png'});
                    }
                });
            $('.nav2 a').click(function(e){
                e.preventDefault();
                var link = this;
                $.smoothScroll({
                    scrollTarget:link.hash, //a태그에 있는 해쉬#값을 타겟으로 건다.
                    offset: -50,
                    speed:1300
                });
            });
            
        }
});