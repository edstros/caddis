  var $sticky = $('.sticky');
  var $win = $(window);
  var $logcart = $('.logcart');
  var $searchwrap = $('.searchboxwrapper');
  var $underside = $('.underside');
  var $undersearch = $('.undersearch');
/*  var $roll = $('.roll');*/

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
            paddingLeft: '35px'
          });
        $underside.slideUp();
        $undersearch.slideUp();
      } else {
        $logcart
          .appendTo('.top-right')
          .fadeIn()
          .css({
            marginTop: 0,
            marginRight: '10px',
            paddingLeft: 0
          });
        $searchwrap
          .appendTo('.top-right')
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
    $(".menu").menu();
    $('ui-menu-item').css({
      borderTop: '1px solid #ccc'
    });

  });
