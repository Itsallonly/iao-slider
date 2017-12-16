/*
 Plugin Name: iao slider
         Key: iao-slider
     Version: 1.0.6
      Author: Prashant Kapoor
     Website: http://www.itsallonly.com
        Repo: https://github.com/Itsallonly/iao-slider
      Issues: https://github.com/Itsallonly/iao-slider/issues
       Files: iao-slider.jquery.js, iao-slider.css
  Dependency: Jquery
*/
(function( $ ) {
    $.fn.iaoSlider = function(arr) {
        var opt = $.extend( {

        }, arr ),
        child_count = this.children().length;
        this.addClass('iao-slider')
        .children().addClass('iao-slide');
        this.append('<iao-button type="prev"></iao-button><iao-button type="next"></iao-button>');
        return this;
    };
}( jQuery ));