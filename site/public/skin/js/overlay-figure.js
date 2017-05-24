$(document).ready(function () {
	$(".overlay-figure-caption .text").css('display', 'block');
	$(".overlay-figure-caption .text").css('margin-top', '0');
	$(".overlay-figure-caption .text").css('opacity', '0');
	$(".overlay-figure-caption .text").css('-webkit-transform', 'translateY(100px) translateZ(0)');
	$(".overlay-figure-caption .text").css('-moz-transform', 'translateY(100px) translateZ(0)');
	$(".overlay-figure-caption .text").css('transform', 'translateY(100px) translateZ(0)');
	$(".overlay-figure-caption .text").css('-webkit-transition', '-webkit-transform 2.5s ease 0s, opacity 2.5s ease 0s');
	$(".overlay-figure-caption .text").css('-moz-transition', '-moz-transform 2.5s ease 0s, opacity 2.5s ease 0s');
	$(".overlay-figure-caption .text").css('transition', 'transform 2.5s ease 0s, opacity 2.5s ease 0s');

	setTimeout(function(){
			$(".overlay-figure-caption .text").css('-webkit-transform', 'translateY(-50px) translateZ(0)');
			$(".overlay-figure-caption .text").css('-moz-transform', 'translateY(-50px) translateZ(0)');
			$(".overlay-figure-caption .text").css('transform', 'translateY(-50px) translateZ(0)');
			$(".overlay-figure-caption .text").css('opacity', '1');		
	},100);

	
	
});