(function($) {
    // Smooth scrolling
    $(".nav-link").click(function(event){
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 600);
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.nav-link').click(function() {
      $('.navbar-collapse').collapse('hide');
    });
  
    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#main-nav',
      offset: 54
    });
  
})(jQuery);