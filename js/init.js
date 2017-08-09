(function ($) {
  $(function () {
    $('.dropdown-button').dropdown({
      hover: true,
      belowOrigin: true
    });
    $('.button-collapse').sideNav({
      closeOnClick: true
    });

    function showModalandUpScreen() {
      $("html, body").animate({ scrollTop: 0 }, 600);
    }
  }); // end of document ready
})(jQuery); // end of jQuery name space