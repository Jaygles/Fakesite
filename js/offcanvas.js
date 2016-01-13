$(function() {

	// Setting a jQuery variable for .offcanvas-navbar
	var offcanvasNavbar = $(".offcanvas-navbar");

	//Setting a jQuery variable for .modal-wrapper
	var modalWrapper = $(".modal-wrapper");


	$(".hamburger-icon").click(function() {
		animateOffcanvas();
	});

	$("header, main").click(function() {
		if (offcanvasNavbar.hasClass("offcanvas-open")) {
			closeOffcanvas();
		}
	});

	$(".cta-button").click(function() {
		openModal();
		console.log("asdf");
	});

	$(".modal-close").click(function() {
		closeModal();
		console.log("closed");
	});

	$(".modal-wrapper").click(function() {
		closeModal();
	});

	$(".modal").click(function(event) {
		event.stopPropagation();
	});
});

//Moves the offcanvas-navbar into view
function openOffcanvas() {
	var offcanvasNavbar = $(".offcanvas-navbar");
	var offcanvasWidth = offcanvasNavbar.width();
	offcanvasNavbar.addClass("offcanvas-open");
	offcanvasNavbar.css("transform", "translate3d(" + offcanvasWidth + "px, 0, 0)");
}

//Moves the offcanvas-navbar out of view
function closeOffcanvas() {
	var offcanvasNavbar = $(".offcanvas-navbar");
	var offcanvasWidth = offcanvasNavbar.width();
	offcanvasNavbar.removeClass("offcanvas-open");
	offcanvasNavbar.css("transform", "translate3d(-" + offcanvasWidth + "px, 0, 0)");
}

//Calls openOffcanvas or closeOffcanvas depending on its position
function animateOffcanvas() {
	var offcanvasNavbar = $(".offcanvas-navbar");
	if (offcanvasNavbar.hasClass("offcanvas-open")) {
		closeOffcanvas();
	}	else {
		openOffcanvas();
	}
}

//Adds modal-open class and 'visibility: visible' and 'opacity: 1' to .modal-wrapper
function openModal() {
	var modalWrapper = $(".modal-wrapper");
	modalWrapper.css("opacity", "1");
	modalWrapper.css("visibility", "visible");
}

//Removes modal-open class and adds 'visibility: hidden' and 'opacity: 0' to .modal-wrapper
function closeModal() {
	var modalWrapper = $(".modal-wrapper");
	modalWrapper.css("opacity", "0");
	modalWrapper.css("visibility", "hidden");
}