$(document).ready(function() {

    $('.method').on('click', function() {
      $('.method').removeClass('blue-border');
      $(this).addClass('blue-border');
    });

    $('.next-btn').on('click', function() {
        $('.modal-container').toggleClass('hidden');
        $('.payment-step').toggleClass('active');
    });

    $('.redo').on('click', function() {
        $('.modal-container').toggleClass('hidden');
        $('.payment-step').toggleClass('active');
    });
 
      
  })


