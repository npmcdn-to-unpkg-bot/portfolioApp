/*--------------------------------------------------------------
# JQUERY
--------------------------------------------------------------*/

jQuery(document).ready(function($){

/************************
BACK TO TOP BUTTON
*************************/

	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		el = $('.sticky-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){

		var windowTop = $(window).scrollTop();
		
		if($(window).scrollTop() + $(window).height() > $(document).height() - 50) {
      		$('.sticky-btn').css({
      			bottom: 90
      		});
   		} else {
   			$('.sticky-btn').css({
      			bottom: 30
      		});
   		}

		( windowTop > offset ) ? el.addClass('cd-is-visible') : el.removeClass('cd-is-visible');
		( windowTop > offset ) ? $('.sticky-home').addClass('home-visible') : $('.sticky-home').removeClass('home-visible');

	});

	//smooth scroll to top
	el.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});

/************************************
HIDE HEADER ON SCROLL DOWN
*************************************/
/*
	var didScroll;
	var lastScrollTop = 0;
	var delta = 5;
	var navbarHeight = $('nav').outerHeight();

	$(window).scroll(function(event){
	    didScroll = true;
	});

	setInterval(function() {
	    if (didScroll) {
	        hasScrolled();
	        didScroll = false;
	    }
	}, 250);

	function hasScrolled() {
	    var st = $(this).scrollTop();
	    
	    // Make sure they scroll more than delta
	    if(Math.abs(lastScrollTop - st) <= delta)
	        return;
	    
	    // If they scrolled down and are past the navbar, add class .nav-up.
	    // This is necessary so you never see what is "behind" the navbar.
	    if (st > lastScrollTop && st > navbarHeight){
	        // Scroll Down
	        $('nav').removeClass('nav-down').addClass('nav-up');
	    } else {
	        // Scroll Up
	        if(st + $(window).height() < $(document).height()) {
	            $('nav').removeClass('nav-up').addClass('nav-down');
	        }
	    }
	    
	    lastScrollTop = st;
	}
*/

/************************************
PARALLAXING
*************************************/

});


