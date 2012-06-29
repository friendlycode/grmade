jQuery(document).ready(function(){

  var $container = $('#cards');

  $container.imagesLoaded( function(){
    $container.isotope({
      itemSelector : '.card',
      columnWidth : 270,
      animationEngine : 'best-available'
    });
  });

  $('nav a').click(function(){
    var selector = $(this).attr('data-filter');
    $container.isotope({ filter: selector });
    return false;
  });

  $('.tell').click(function() {
    var tell_display = $('#tell').css('display');
    var help_display = $('#help').css('display');

    if (tell_display == 'none' && help_display == 'none') {
      $('.tell').addClass('active');
      $('#tell').slideDown('slow', function() {});

    } else if (tell_display == 'none' && help_display != 'none') {
      $('.tell').addClass('active');
      $('.help').removeClass('active');
      $('#help').slideUp('slow', function() {
        $('#tell').slideDown('slow', function() {});
      });

    } else {
      $('#tell').slideUp('slow', function() {
        $('.tell').removeClass('active');
      });

    }
  });

  $('.help').click(function() {
    var tell_display = $('#tell').css('display');
    var help_display = $('#help').css('display');

    if (help_display == 'none' && tell_display == 'none') {
      $('.help').addClass('active');
      $('#help').slideDown('slow', function() {});

    } else if (help_display == 'none' && tell_display != 'none') {
      $('.help').addClass('active');
      $('.tell').removeClass('active');
      $('#tell').slideUp('slow', function() {
        $('#help').slideDown('slow', function() {});
      });

    } else {
      $('#help').slideUp('slow', function() {
        $('.help').removeClass('active');
      });
    }
  });


});

