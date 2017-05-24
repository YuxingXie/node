$(document).ready(function () {
	$(window).scrollTop(0);
	$(window).scroll(function(){
		
	    if($(window).scrollTop()<201){
	    	$('.dowebok-hd').css('position',"fixed");
	    	$('.dowebok-hd').css('z-index',"1000");
	    	$('.dowebok-hd').css('width',"100%");
	    	$('.dowebok-hd').css('height',"64px");
	    	$('.dowebok-hd').css('background',"none");
	    	$('.dowebok-hd').css('border-bottom',"none");
	    	$('.dowebok-hd h1 a').css('background-image',"url(/skin/images/logo.png)");
	    	$('.dowebok-hd h1 a').css('display',"block");
	    	$('.dowebok-hd h1 a').css('width',"250px");
	    	$('.dowebok-hd h1 a').css('height',"64px");
	    	$('.dowebok-hd h1 a').css('text-indent',"-9999px");
	    	$('.dowebok-hd .nav a').css('float',"left");
	    	$('.dowebok-hd .nav a').css('padding',"0 10px");
	    	$('.dowebok-hd .nav a').css('line-height',"64px");
	    	$('.dowebok-hd .nav a').css('color',"#fff");
	    	$('.dowebok-hd .nav a').css('text-decoration',"none");
	    	$('.nav-current').css('background',"#00b4ff");
	    	$('.nav-current').css('color',"#fff");
	      };
		
	    if($(window).scrollTop()>200){
	    	$('.dowebok-hd').css('position',"fixed");
	    	$('.dowebok-hd').css('z-index',"1000");
	    	$('.dowebok-hd').css('width',"100%");
	    	$('.dowebok-hd').css('height',"64px");
	    	$('.dowebok-hd').css('background',"#ffffff");
	    	$('.dowebok-hd').css('border-bottom',"#dddddd 1px solid");
	    	$('.dowebok-hd').css('opacity',"0.9");
	    	$('.dowebok-hd h1 a').css('opacity',"1");
	    	$('.dowebok-hd h1 a').css('background-image',"url(/skin/images/logo2.png)");
	    	$('.dowebok-hd h1 a').css('display',"block");
	    	$('.dowebok-hd h1 a').css('width',"250px");
	    	$('.dowebok-hd h1 a').css('height',"64px");
	    	$('.dowebok-hd h1 a').css('text-indent',"-9999px");
	    	$('.dowebok-hd .nav a').css('float',"left");
	    	$('.dowebok-hd .nav a').css('padding',"0 10px");
	    	$('.dowebok-hd .nav a').css('line-height',"64px");
	    	$('.dowebok-hd .nav a').css('color',"#2a2a2a");
	    	$('.dowebok-hd .nav a').css('text-decoration',"none");
	    	$('.nav-current').css('color',"#19bbff");
	    	$('.nav-current').css('background',"none");
	      };
	   });

});