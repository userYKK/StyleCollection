jQuery(document).ready(function ($) {
		
	/* IMAGE OPACITY EFFECT */
	$(function() {
            $('.hover').each(function() {
                $(this).hover(
                    function() {
                        $(this).stop().animate({ opacity: 0.6 }, 300);
                    },
                   function() {
                       $(this).stop().animate({ opacity: 1.0 }, 300);
                   })
                });
	});

	/* ALERT BOXES ------------ */
	$(".alert-box").delegate("a.close", "click", function(event) {
    event.preventDefault();
	  $(this).closest(".alert-box").fadeOut(function(event){
	    $(this).remove();
	  });
	});


	/* PLACEHOLDER FOR FORMS ------------- */
	$('input, textarea').placeholder();

	/* TOOLTIPS ------------ */
	$(this).tooltips();

	/* PRETTY PHOTO ------------- */
	$(document).ready(function(){
 	   $("a[rel^='prettyPhoto']").prettyPhoto();
 	 });
  
	/* MAIN NAVIGATION ------------- */
	jQuery(function(){
		jQuery('ul.primary-nav').superfish();
	});
	
	/* FLEX SLIDER ------------- */
	$(window).load(function() {
			$('.flexslider').flexslider();
	});

});
