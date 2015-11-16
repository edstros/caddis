  var $sticky = $('.sticky');
  var $win = $(window);
  var $logcart = $('#logcart-icons');
  var $searchwrap = $('#searchboxwrapper');
  var $underside = $('.underside');
  var $undersearch = $('.undersearch');
  var $roll = $('.roll');

  $(function () { // document ready
    /*================
    STICKY SIDEBAR
     ================ */
    var stickyTop = $sticky.offset().top; // returns number
    $win.scroll(function () { // scroll event
      var windowTop = $win.scrollTop(); // returns number
      if (stickyTop - 50 < windowTop) {
        $sticky.css({
          position: 'fixed',
          top: 0
        });
      } else {
        $sticky.css('position', 'static');
      }
      /*===============================
      MOVE SEARCH BAR FROM TOP RIGHT
      TO UNDER SIDEBAR AND BACK AGAIN
      ================================= */
      if (windowTop > 300) {
        $searchwrap
          .appendTo('#sidebar')
          .fadeIn()
          .css({
            marginTop: '10px'
          });
        $logcart
          .appendTo($searchwrap)
          .css({
            margin: '10px',
            paddingLeft: '45px'
          });
        $underside.slideUp();
        $undersearch.slideUp();
      } else {
        $logcart
          .appendTo('#top-right')
          .fadeIn()
          .css({
            marginTop: 0,
            marginRight: '10px',
            paddingLeft: 0
          });
        $searchwrap
          .appendTo('#top-right')
          .css({
            margin: 0
          });
        $underside.fadeIn();
        $undersearch.fadeOut();
      }
    });

    /*==========================
    SIDEBAR MENU WITH JQUERY UI
    ============================ */
    $("#menu").menu();
    $('ui-menu-item').css({
      borderTop: '1px solid #ccc'
    });
    /*=============================
    ROLLOVER EFFECT ON ROUND IMAGES
    ===============================*/
    // opacity of button set to 0%
    $roll.css('opacity', '0');
    // on mouse over
    $roll.hover(function () {
        // set opacity to 70%
        $(this).stop().animate({
          opacity: 0.7
        }, 'fast');
      },
      // on mouse out
      function () {
        // set opacity back to 0%
        $(this).stop().animate({
          opacity: 0
        }, 'slow');
      });
  });
