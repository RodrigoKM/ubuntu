(function($) {
    $(function() {
        $('.carousel.carousel-slider').carousel({ fullWidth: true });

        $('.dropdown-button').dropdown({
            inDuration: 300,
            outDuration: 225,
            constrainWidth: false, // Does not change width of dropdown to that of the activator
            hover: true, // Activate on hover
            gutter: 0, // Spacing from edge
            belowOrigin: true, // Displays dropdown below the button
            alignment: 'left', // Displays dropdown with edge aligned to the left of button
            stopPropagation: false // Stops event propagation
        });

        $('.button-collapse').sideNav({
            closeOnClick: true
        });

        $('.materialboxed').materialbox();
    }); // end of document ready
})(jQuery); // end of jQuery name space
