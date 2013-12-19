/*
jQuery(document).ready(function ($) {

	//initialise Stellar.js
    $(window).stellar();

    //Cache some variables
    my_arrow = $('.my_arrow');


    //When the user clicks on the arrow, get the get the data-slide attribute value of the arrow and pass that variable to the goToByScroll function
    arrow.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);

    });

});
   
 */

 $(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash,
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});