$(function () { // document ready
  if (!!$('.sticky').offset()) { // make sure ".sticky" element exists
    var stickyTop = $('.sticky').offset().top; // returns number
    $(window).scroll(function () { // scroll event
      var windowTop = $(window).scrollTop(); // returns number
      if (stickyTop < windowTop) {
        $('.sticky').css({
          position: 'fixed',
          top: 0
        });
      } else {
        $('.sticky').css('position', 'static');
      }
    });
  }

});

$(function () {
  // opacity of button set to 0%
  $('.roll').css('opacity', '0');

  // on mouse over
  $('.roll').hover(function () {

      // set opacity to 70%
      $(this).stop().animate({
        opacity: .7
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
$(window).scroll(function () {
  var top = $(this).scrollTop();
  if (top > 300) {
    $('#searchboxwrapper').appendTo('#sidebar');
    $('.spacer').appendTo('searchboxwrapper');
    $('#logcart-icons').appendTo('#searchboxwrapper');
    $('#logcart-icons').css('margin', '10px').css('padding-left', '45px');
    $('.underside').fadeOut();
    $('.undersearch').fadeIn();
  } else {
    $('#logcart-icons').appendTo('#top-right');
    $('#logcart-icons').css('margin-top', '0').css('margin-right', '10px').css('padding-left', '0');
    $('#searchboxwrapper')
      .appendTo('#top-right');

    $('.underside').fadeIn();
    $('.undersearch').fadeOut();
  }


});
