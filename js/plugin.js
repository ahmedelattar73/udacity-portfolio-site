/*global $,jQuery */

(function ($) {
    
    "use strict";
    
    $(document).ready(function () {

        (function () {
            
            $(window).on("scroll", function (event) {
                
                var header = $('header'),
                    scrlTop = $(this).scrollTop();
                
                if ($(window).width() > 768) { // To work on screen wider than 768px
                    
                    if (scrlTop > 300 && scrlTop <= 2000) {
                        
                        header.addClass('sticky fh5co-animated slideInDown');
                        
                    } else if (scrlTop <= 400) {
                        
                        if (header.hasClass('sticky')) {
                            
                            header.addClass('sticky fh5co-animated slideOutUp');
                            
                            setTimeout(function () {
                                
                                header.removeClass('sticky fh5co-animated slideInDown slideOutUp');
                                
                            }, 100);
                            
                        }
                    }
                }
                
            });
            
        }());

    });

}(jQuery));