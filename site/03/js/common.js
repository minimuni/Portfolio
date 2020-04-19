$(function(){
    // Menu Button
    $('.nav').append('<button class=\"nav-btn\">Menu</button>');
    $('.nav-btn').on('click', function(){
        // $('.nav').toggleClass('on')
        if($('.nav').hasClass('on')) {
            $('.nav').removeClass('on');
            $('#header .nav').css('padding-bottom','0');
            $('.nav ul').slideUp();
        }
        else {
            $('.nav').addClass('on');
            $('#header .nav').css('padding-bottom','20px');
            $('.nav ul').slideDown();
        }
    });
});