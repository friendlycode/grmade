jQuery(document).ready(function(){

  var aboutHeight = [];

  // $('#about .content div').each(function (index) {
  //   var t = $(this);
  //   // t.height(t.height());  // Read the computed height and then set it explicitly
  //   aboutHeight[t.attr('id')] = t.height + 90;
  //   if (t.attr('id') == 'tell' || t.attr('id') == 'help') t.hide();
  // });

  // Isotope
  var $container = $('#cards');
  $container.imagesLoaded(function(){
    $container.isotope({
      itemSelector : '.card',
      columnWidth : 270,
      animationEngine : 'best-available'
    });
    $container.isotope('shuffle');
  });

  // Isotope filtering
  $('#filters a').click(function(){
    var active_filter = $('nav a.active');
    var selector = $(this).attr('data-filter');

    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $container.isotope({ filter: '*' });
      return false;
    } else {
      active_filter.removeClass('active');
      $(this).addClass('active');
      $container.isotope({ filter: selector });
      return false;
    }
  });

  $('#about-links a').click(function() {
    var activeState  = $(this).hasClass('active');
    var introState   = $('#intro').is(':visible');
    var clickedClass;
    var unclickedClass;

    switch ($(this).hasClass('tell')) {
      case true:
        clickedClass   = 'tell';
        unclickedClass = 'help';
        break;
      case false:
        clickedClass   = 'help';
        unclickedClass = 'tell';
        break;
    }

    if (activeState === true) {
      $(this).removeClass('active');
      $('#' + clickedClass).slideUp('slow', function() {
        $('#intro').slideDown('slow');
      });

    } else if (activeState === false && introState === true) {
      $(this).addClass('active');
      $('#intro').slideUp('slow', function() {
        $('#' + clickedClass).slideDown('slow');
      });

    } else if (activeState === false && introState === false) {
      $(this).addClass('active');
      $('.' + unclickedClass).removeClass('active');
      $('#' + unclickedClass).slideUp('slow', function() {
        $('#' + clickedClass).slideDown('slow');
      });
    }
  });
});

