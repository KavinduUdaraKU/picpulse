(function($) {
    "use strict";
    $('.slider-4posts').owlCarousel({
        loop: !0,
        nav: !0,
        autoplay: !0,
        autoplayTimeout: 4000,
        dots: !1,
        responsive: {
            0: {
                items: 1
            },
            568: {
                items: 2
            },
            1024: {
                items: 4
            },
        }
    });
    $('.slider-1post').owlCarousel({
        items: 1,
        loop: !0,
        nav: !0,
        dots: !1,
        autoplay: !0,
        autoplayTimeout: 7000,
        animateOut: 'fadeOut'
    });
    $('.slider-3items').owlCarousel({
        loop: !0,
        autoplay: !0,
        autoplayTimeout: 6000,
        margin: 30,
        dots: !1,
        nav: !0,
        navText: '',
        responsive: {
            0: {
                items: 1
            },
            568: {
                items: 2
            },
            1024: {
                items: 3
            },
        }
    });
    $(window).on('load', function() {
        var portfolioItems = $('.layout-masonry');
        portfolioItems.isotope({
            itemSelector: '.blog-item-masonry',
            layoutMode: 'masonry',
        });
        $('.portfolio-filter a').on('click', function() {
            $('.portfolio-filter .current').removeClass('current');
            $(this).addClass('current');
            var selector = $(this).attr('data-filter');
            portfolioItems.isotope({
                filter: selector
            });
            return !1
        })
    });
    $('.nav-button').on('click', function(e) {
        e.preventDefault();
        $('.mobile-menu-holder, .menu-mask').addClass('is-active');
        $('body').addClass('has-active-menu')
    });
    $('.exit-mobile, .menu-mask').on('click', function(e) {
        e.preventDefault();
        $('.mobile-menu-holder, .menu-mask').removeClass('is-active');
        $('body').removeClass('has-active-menu')
    });
    $('.menu-mobile > li.menu-item-has-children > a').on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        if ($(this).parent().hasClass('menu-open'))
            $(this).parent().removeClass('menu-open');
        else {
            $(this).parent().addClass('menu-open')
        }
    });
    if ($('.gallery-post a').length) {
        $('.gallery-post a').simpleLightbox({
            heightRatio: 1,
            widthRatio: 0.8
        })
    }
    if ($('.blocks-gallery-item a').length) {
        $('.blocks-gallery-item a').simpleLightbox({
            heightRatio: 1,
            widthRatio: 0.8
        })
    }
    $(".scrollup").hide();
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 400) {
            $('.scrollup').fadeIn()
        } else {
            $('.scrollup').fadeOut()
        }
    });
    $("a.scrolltop[href^='#']").on('click', function(e) {
        e.preventDefault();
        var hash = this.hash;
        $('html, body').stop().animate({
            scrollTop: 0
        }, 1000, 'easeOutExpo')
    })
})(jQuery);