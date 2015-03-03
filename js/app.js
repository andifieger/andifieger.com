	jQuery(function($){
    	$( '.menu-btn' ).on("click", function(e){
            e.preventDefault();
            $(".responsive-menu").toggle('fast');
    	})
  	})