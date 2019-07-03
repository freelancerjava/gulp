$(function() {

	var vid = document.getElementById("myVideo"); 
	var flag = false;

	function playVid() { 
	vid.play(); 
	} 

	function pauseVid() { 
	vid.pause(); 
	} 

	$(".close").on("click", function(){
		playVid();
		$(".close").css("display","none");
	})

	$("#myVideo").on("click pause", function(){
		pauseVid();
		$(".close").css("display","flex");		
	})

	$("#lang").selectize({
		"hideSelected":true,
	});
	$(".menu-main").click(function() {
		$("html, body").animate({
			scrollTop : $(".header").offset().top
		}, 800);
	});

	$(".menu-prod").click(function() {
		$("html, body").animate({
			scrollTop : $(".section1").offset().top
		}, 800);
	});

	$(".menu-make").click(function() {
		$("html, body").animate({
			scrollTop : $(".section2").offset().top
		}, 800);
	});

	$(".menu-price").click(function() {
		$("html, body").animate({
			scrollTop : $(".section3").offset().top
		}, 800);
	});

	$(".menu-partner").click(function() {
		$("html, body").animate({
			scrollTop : $(".section4").offset().top
		}, 800);
	});

	$(".menu-contact").click(function() {
		$("html, body").animate({
			scrollTop : $(".section5").offset().top
		}, 800);
	});

	

	$(".car-brands").owlCarousel({
		loop:true,
		margin: 0,
		nav: true,
		navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		responsive:{
				0:{
						items:3,
				},
				768:{
						items:3,
				},
				992:{
						items:3,
				},
				1200:{
						items:5,
				}
		}
	});

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});



});


var theToggle = document.getElementById('toggle');

// based on Todd Motto functions
// https://toddmotto.com/labs/reusable-js/

// hasClass
function hasClass(elem, className) {
	return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}
// addClass
function addClass(elem, className) {
    if (!hasClass(elem, className)) {
    	elem.className += ' ' + className;
    }
}
// removeClass
function removeClass(elem, className) {
	var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';
	if (hasClass(elem, className)) {
        while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
            newClass = newClass.replace(' ' + className + ' ', ' ');
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    }
}
// toggleClass
function toggleClass(elem, className) {
	var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, " " ) + ' ';
    if (hasClass(elem, className)) {
        while (newClass.indexOf(" " + className + " ") >= 0 ) {
            newClass = newClass.replace( " " + className + " " , " " );
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    } else {
        elem.className += ' ' + className;
    }
}






