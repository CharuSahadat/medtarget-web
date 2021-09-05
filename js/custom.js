//Page Loader
var myVar;

function loadFunction() {
    myVar = setTimeout(showPage, 1000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("loader-content").style.display = "block";
}

//Nav Shrink
!function(a){"use strict";a('a[href*="#"]:not([href="#"])').click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var n=a(this.hash);if(n=n.length?n:a("[name="+this.hash.slice(1)+"]"),n.length)return a("html, body").animate({scrollTop:n.offset().top-85},1e3,"easeInOutExpo"),!1}}),a("body").scrollspy({target:"#mainNav",offset:100}),a(".navbar-collapse>ul>li>a").click(function(){a(".navbar-collapse").collapse("hide")}),a(window).scroll(function(){a("#mainNav").offset().top>100?a("#mainNav").addClass("navbar-shrink"):a("#mainNav").removeClass("navbar-shrink")})}(jQuery);

//Tooltip
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

//Scroll Top
$(document).ready(function(){
 $(window).scroll(function () {
		if ($(this).scrollTop() > 50) {
			$('#back-to-top').fadeIn();
		} else {
			$('#back-to-top').fadeOut();
		}
	});
	// scroll body to 0px on click
	$('#back-to-top').click(function () {
		$('#back-to-top').tooltip('hide');
		$('body,html').animate({
			scrollTop: 0
		}, 800);
		return false;
	});
});

//Owl Carousel
$(document).ready(function() {
		  $('.owl-carousel').owlCarousel({
			autoplay:true,
			autoplayTimeout:10000,
			autoplayHoverPause:true,
			autoplaySpeed: false,  
			rewind: true,
			  
			loop:false,
			margin:10,
			responsiveClass: true,
			responsive: {
			  0: {
				items:1,
				nav:false
			  },
			  600: {
				items:1,
				nav:false
			  },
			  1000: {
				items:2,
				nav:false,
				margin: 20
			  }
			}
		  })
		})
		
