(function ($) {
  $(function () {
    $('.dropdown-button').dropdown({
      hover: true,
      belowOrigin: true
    });
    $('.button-collapse').sideNav({
      closeOnClick: true
    });
  }); // end of document ready
})(jQuery); // end of jQuery name space