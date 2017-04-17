jQuery(function ($) {
  console.warn("jQuery activated");
  
  $(window).scroll(() => {
    if ($('.balloon-image').is(':in-viewport(300)')) {
      $('.balloon-image')
        .addClass('animate-in');
    } else {
      $('.balloon-image')
        .removeClass('animate-in')
    }
  })

  $(window).scroll(() => {
    if ($('.beach-image').is(':in-viewport(300)')) {
      $('.beach-image')
        .addClass('animate-in');
    } else {
      $('.beach-image')
        .removeClass('animate-in')
    }
  })
});