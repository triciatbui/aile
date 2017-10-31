// JavaScript Document

// Sticky Header
$(window).scroll(function() {

    if ($(window).scrollTop() > 100) {
        $('.main_h').addClass('sticky');
    } else {
        $('.main_h').removeClass('sticky');
    }
});

// Mobile Navigation
$('.mobile-toggle').click(function() {
    if ($('.main_h').hasClass('open-nav')) {
        $('.main_h').removeClass('open-nav');
    } else {
        $('.main_h').addClass('open-nav');
    }
});

$('.main_h li a').click(function() {
    if ($('.main_h').hasClass('open-nav')) {
        $('.navigation').removeClass('open-nav');
        $('.main_h').removeClass('open-nav');
    }
});

// navigation scroll lijepo radi materem
$('nav a').click(function(event) {
    var id = $(this).attr("href");
    var offset = 70;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 500);
    event.preventDefault();
});

//----------------------------
//----------------------------

// horizontal scroll 
jQuery(document).ready(function ($) {
    var height = 9000;

    $.jInvertScroll(['.scroll'], {
        height: height
    });

    $('.navigation').find('a').on('click', function(e) {
        e.preventDefault();

        $('.navigation').find('a').removeClass('active');
        $(this).addClass('active');

        var slide = $(this).data('slide');
        var slidePos = $('#'+slide).position().left;

        var percent = slidePos / $('#postcards').width() * 100;

        $('html,body').animate({
            scrollTop: height / 100 * percent
        });
    });
});
