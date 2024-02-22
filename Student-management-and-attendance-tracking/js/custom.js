$(document).ready(function () {
  var trigger = $('.hamburger'),
      overlay = $('.overlay'),
     isClosed = false;

    trigger.click(function () {
      hamburger_cross();      
    });

    function hamburger_cross() {

      if (isClosed == true) {          
        overlay.hide();
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        isClosed = false;
      } else {   
        overlay.show();
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        isClosed = true;
      }
  }
  
  $('[data-toggle="offcanvas"]').click(function () {
        $('#wrapper').toggleClass('toggled');
  });  
	
	// Select All checkbox
	$('.chk-head').click(function () {
		if ($('.chk-head').is(':checked')) {
			$('.chk-present').prop('checked', true);
			$("table tbody tr").addClass('info');
		}
		else {
			$('.chk-present').prop('checked', false);
			$("table tbody tr").removeClass('info');
		}
	});
	
	// toglle row class
	$("table tbody tr").click(function() {
		$(this).toggleClass("info");
		if ($(this).hasClass('info')) {
			$(this).find('.chk-present').prop('checked', true);
		}
		else {
			$(this).find('.chk-present').prop('checked', false);
		}
	});
	
});
