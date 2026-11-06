jQuery(function($) {
    "use strict";

    // Function to add effect class after a delay
    setTimeout(function() {
        $('.fixedRight .titleBox').addClass('effect');
    }, 200);

    // Toggle 'active' class on click of titleBox
    $('.fixedRight .titleBox').on('click', function() {
        $(this).parent().toggleClass('active');
    });

    // Remove 'active' class on click of close button
    $('.fixedRight .closes').on('click', function() {
        $('.fixedRight').removeClass('active');
    });

    // Remove 'active' class when clicking outside the fixedRight container
    $(document).on('click', function(event) {
        if (!$(event.target).closest('.fixedRight').length) {
            $('.fixedRight').removeClass('active');
        }
    });

    var $gallery = $('.home-slider .slick-slider');
    var slideCount = null;

    // Initialize slick slider on document ready
    $(document).ready(function() {
        $gallery.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 3500,
            lazyLoad: 'ondemand',
            dots: false,
            fade: true,
            centerMode: false,
            focusOnSelect: true
        });

        // Initial animations for the current slide
        animateCurrentSlide();
    });

    // Set up afterChange event to manage slide animations and attributes
    $gallery.on('afterChange', function(event, slick, currentSlide) {
        updateSlideAttributes();
        animateCurrentSlide();
    });

    // Function to update slide attributes
    function updateSlideAttributes() {
        $('.home-slider .slick-slider img').removeClass('active').attr('aria-hidden', 'true');
        $('.home-slider .slick-slider .slick-current img').addClass('active').attr('aria-hidden', 'false');
    }

    // Function to add animations to the current slide
    function animateCurrentSlide() {
        setTimeout(function() {
            $('.home-slider .slick-slider .slick-current .line1').addClass('animated fadeInLeft');
        }, 300);
        setTimeout(function() {
            $('.home-slider .slick-slider .slick-current .line2').addClass('animated fadeInLeft');
        }, 700);
    }

    // Previous and next button handlers
    $('.carousel-prev').on('click', function() {
        $gallery.slick('slickPrev');
    });

    $('.carousel-next').on('click', function(e) {
        e.preventDefault();
        $gallery.slick('slickNext');
    });

    // Set up initial slide count and current slide number
    $gallery.on('init', function(event, slick) {
        slideCount = slick.slideCount;
        setSlideCount();
        setCurrentSlideNumber(slick.currentSlide);
    });

    // Update current slide number before slide change
    $gallery.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        setCurrentSlideNumber(nextSlide);
    });

    // Function to set total slide count
    function setSlideCount() {
        var $el = $('.slide-count-wrap').find('.total');
        $el.text(slideCount);
    }

    // Function to set current slide number
    function setCurrentSlideNumber(currentSlide) {
        var $el = $('.slide-count-wrap').find('.current');
        $el.text(currentSlide + 1);
    }

    // Initialize AOS (Animate On Scroll) library
    AOS.init({
        easing: 'ease-in-out-sine',
        disable: 'mobile'
    });

    var time = 4; // Time for progress bar
    var $bar = $('.slider-progress .progress');
    var isPause, tick, percentTime;

    // Function to start the progress bar
    function startProgressbar() {
        resetProgressbar();
        percentTime = 0;
        isPause = false;
        tick = setInterval(interval, 10);
    }

    // Interval function to update progress bar
    function interval() {
        if ($(".slick-dots .animated-dot").hasClass("play")) {
            isPause = true;
        }
        if (!isPause) {
            percentTime += 1 / (time + 0.1);
            $bar.css({ width: percentTime + "%" });
            if (percentTime >= 100) {
                $gallery.slick('slickNext');
                startProgressbar();
            }
        }
    }

    // Function to reset the progress bar
    function resetProgressbar() {
        $bar.css({ width: '0%' });
        clearTimeout(tick);
    }

    // Start progress bar and reset on slide change
    startProgressbar();
    $gallery.on("beforeChange", function() {
        resetProgressbar();
        startProgressbar();
        $bar.css({ width: '100%' });
    });

    // Toggle display of sssTabBot2 elements
    $('.sssTab').on('click', function() {
        if($(this).find('.sssTabBot2').css('display') === "none") {
            $('.sssTabBot2').slideUp();
            $(this).find('.sssTabBot2').slideDown()
        } else {
            $('.sssTabBot2').slideUp();
        }
    });

    // Add arrow icon to side menu items with children
    $('#side-menu ul.menu li.menu-item-has-children > a').append('<i class="ri-arrow-down-s-fill"></i>');
    $('#side-menu ul.menu li.menu-item-has-children > a i').click(function(e) {
        e.preventDefault();
        $(this).parent('a').parent('li').toggleClass('opened');
    });

    // Open: Mobile Menu
    window.openMobileMenu = function() {
        $('a.mobile-hamburger-menu').attr('onclick', 'closeMobileMenu()');
        $('.hamburger-menus').addClass('animate');
        $('body').addClass('modal-opened');
        $('header').addClass('mobile-menu-opened');
        $('#side-menu').fadeIn(400, function() {
            $(this).css({
                display: 'flex'
            });
            $('#side-menu .content').addClass('in');
        });
    };

    // Close: Mobile Menu
    window.closeMobileMenu = function() {
        $('a.mobile-hamburger-menu').attr('onclick', 'openMobileMenu()');
        $('.hamburger-menus').removeClass('animate');
        $('body').removeClass('modal-opened');
        $('header').removeClass('mobile-menu-opened');
        $('#side-menu .content').removeClass('in');
        $('#side-menu').fadeOut();
    };

    var $grid = $('.grid').isotope({
        itemSelector: '.grid-item',
        layoutMode: 'fitRows'
    });

    // Recalculate Isotope layout after page load
    $(window).on('load', function() {
        $grid.isotope('layout');
    });

    // Filter items on button click
    $('.filter-button-group').on('click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });

    // Add 'is-checked' class to buttons
    $('.button-group').each(function(i, buttonGroup) {
        var $buttonGroup = $(buttonGroup);
        $buttonGroup.on('click', 'button', function() {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $(this).addClass('is-checked');
        });
    });
});

// Initialize Swiper for project slider
const projectSlider = new Swiper(".project-slider", {
    spaceBetween: 30,
    speed: 1300,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".dot-3",
        clickable: true,
    },
    breakpoints: {
        1199: {
            slidesPerView: 3,
        },
        991: {
            slidesPerView: 2,
        },
        767: {
            slidesPerView: 2,
        },
        575: {
            slidesPerView: 1,
        },
        0: {
            slidesPerView: 1,
        },
    },
});
