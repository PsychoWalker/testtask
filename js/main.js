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
    if ($('.prize').is(':in-viewport(1000)')) {
      $('.prize')
        .addClass('animation-move-out');
    }
  })

   $(window).scroll(() => {
    if ($('.balloon').is(':in-viewport(1000)')) {
      $('.balloon')
        .addClass('animation-move');
    }
  })

     $(window).scroll(() => {
    if ($('.beach').is(':in-viewport(1000)')) {
      $('.beach')
        .addClass('animation-move-out');
    }
  })

   $(window).scroll(() => {
    if ($('.summer').is(':in-viewport(1000)')) {
      $('.summer')
        .addClass('animation-move');
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