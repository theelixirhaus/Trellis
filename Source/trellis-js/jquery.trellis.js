/* Mobile nav on Scroll*/
$ =jQuery;
var header = document.querySelector("html");
// construct an instance of Headroom, passing the element

new Headroom(header, {
        tolerance: {
            down : 0,
            up : 0
        },
        offset : 0,
        classes: {
            initial: "slide",
            pinned: "slide--reset",
            unpinned: "slide--up"
        }
    }).init();


//Add margin to item below nav to see it
var navH;


function sizeNav(){
    if($('.t-mobmenu').length ==0){
        navH = $('#t-scrollnav').height();
         $('#t-scrollnav-holder').css('height',navH);
        /*$('.t-nav-mobile').css('top',navH);*/
        $('#t-scrollnav-holder').next().css('margin-top',navH);
    }

}
$(window).resize(function(){
        sizeNav();
        if($('.t-mobmenu').length && navdelay==0){
            $(".t-button-mobile-menu").click();
        }
});
$(window).resize();







oldScroll=0;
scroll=0;
var navdelay=0;

function removeDelay(){
    navdelay =0
}

var scrollTop = $(window).scrollTop();
function setMenuClick(){
   /// console.log('set menu');
    sizeNav();
    


    $(".t-button-mobile-menu").click(function(e){
        e.preventDefault();
        var winH =$(window).height();
        if(!$('html.t-nav-ease').length){
            $('html').addClass('t-nav-ease');
            if($('.t-mobmenu').length){
                $('html').removeClass('t-mobmenu');
                $('.t-nav-mobile').css('height',0).css('top','0');
                navdelay=0;
            }
            else{
                $('html').addClass('t-mobmenu');
                $('.t-nav-mobile').css('height',winH-navH).css('top',navH);
                navdelay=1;
                setTimeout(removeDelay, 2000);
            }    
            setTimeout(function(){  $('html').removeClass('t-nav-ease'); }, 1000);
        }
    })


    //Detailed header functionality
    $(window).scroll(function(){
        //console.log('scroll');
         if($('.t-mobmenu').length && navdelay==0){
          //  $('html').removeClass('t-mobmenu');
        }

        scrollTop = Math.max(0,$(window).scrollTop());

    
        scroll = scroll+(oldScroll - scrollTop);

        oldScroll = scrollTop;


        if(scroll>0){
            scroll = 0;

        }

    
        if(scroll< 0-navH){
            scroll = 0-navH;

        }
        //console.log('scrollTop= '+scrollTop);
        scrollState = !$('.slide--reset').length;
        scrollState += !$('.headroom--not-top').length;


        if(scrollTop<navH){
            if(!$('html.navThreshold').length){
                $('html').addClass('navThreshold');

            }
        }
        else{
            if($('html.navThreshold').length){
                $('html').removeClass('navThreshold');
            }
        }
         
       
       $('#t-scrollnav-holder').css('-webkit-transform', 'translateY('+(scroll)+'px)');
       $('#t-scrollnav-holder').css('-moz-transform', 'translateY('+(scroll)+'px)');
       $('#t-scrollnav-holder').css('-ms-transform', 'translateY('+(scroll)+'px)');
       $('#t-scrollnav-holder').css('transform', 'translateY('+(scroll)+'px)');
   });

    $(window).scroll();
}
setMenuClick();