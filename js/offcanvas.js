$(function() {

	var offcanvasNavbar = $(".offcanvas-navbar");

	$(".hamburger-icon").click(function() {
		animateOffcanvas();
	});

	$("header, main").click(function() {
		if (offcanvasNavbar.hasClass("offcanvas-open")) {
			closeOffcanvas();
		}
	});

});

function openOffcanvas() {
	var offcanvasNavbar = $(".offcanvas-navbar");
	var offcanvasWidth = offcanvasNavbar.width();
	offcanvasNavbar.addClass("offcanvas-open");
	offcanvasNavbar.css("transform", "translate3d(" + offcanvasWidth + "px, 0, 0)");
}

function closeOffcanvas() {
	var offcanvasNavbar = $(".offcanvas-navbar");
	var offcanvasWidth = offcanvasNavbar.width();
	offcanvasNavbar.removeClass("offcanvas-open");
	offcanvasNavbar.css("transform", "translate3d(-" + offcanvasWidth + "px, 0, 0)");
}

function animateOffcanvas() {
	var offcanvasNavbar = $(".offcanvas-navbar");
	if (offcanvasNavbar.hasClass("offcanvas-open")) {
		closeOffcanvas();
	}	else {
		openOffcanvas();
	}
}