// Avoid `console` errors in browsers that lack a console.

(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }

    var header = document.querySelector("html");
    // construct an instance of Headroom, passing the element

    new Headroom(header, {
        tolerance: {
            down : 10,
            up : 10
        },
        offset : 0,
        classes: {
            initial: "slide",
            pinned: "slide--reset",
            unpinned: "slide--up"
        }
    }).init();



oldScroll=0;
scroll=0;
var scrollTop = $(window).scrollTop();


    //Detailed header functionality
    $(window).scroll(function(){
        //console.log('scroll');
      //  $('html').removeClass('trls-mobmenu');

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
       
       $('.sticky-nav').css('-webkit-transform', 'translateY('+(scroll)+'px)');
       $('.sticky-nav').css('-moz-transform', 'translateY('+(scroll)+'px)');
       $('.sticky-nav').css('-ms-transform', 'translateY('+(scroll)+'px)');
       $('.sticky-nav').css('transform', 'translateY('+(scroll)+'px)');
   });

    
}());

// Place any jQuery/helper plugins in here.
//@prepros-prepend vendor/jquery.js
//@prepros-prepend vendor/jquery.headroom.js
//@prepros-prepend vendor/jquery.trellis.js
//@prepros-prepend example.js

