$(document).ready(function () {

    // Main-slider

    $('#main-slider').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        navText: [],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    // Main-slider end

    function toogleSearch() {
        $('.box-search').hasClass('display-none') ? $('.box-search').removeClass('display-none') : $('.box-search').addClass('display-none');
    }

    $('.icon-search').on('click', function () {
        toogleSearch();
    });

    $('.search-close').on('click', function () {
        toogleSearch();
    });


    // Ui select

    function uiSelect() {
        if ($('.ui-select__container').hasClass('ui-select__container_view')) {
            $('.ui-select__container').removeClass('ui-select__container_view');
            $('.ui-select__head').css({borderRadius: '6px'});
        } else {
            $('.ui-select__container').addClass('ui-select__container_view');
            $('.ui-select__head').css({borderRadius: '6px 6px 0 0'});
        }
    }

    $('.ui-select__head').on('click', function () {
        uiSelect();
    });

    $('.ui-select__container').on('change', function (e) {
        var textLabel = e.target.previousElementSibling.innerHTML;
        $('.ui-select__head').html(textLabel);
    });

    $('.ui-select__head').blur(function () {
        uiSelect();
    });

    // Ui select end


    // Menu drop

    $('.menu-drop-hamburger').on('click', function () {

        $('.menu-drop').hasClass('view') ? $('.menu-drop').removeClass('view') : $('.menu-drop').addClass('view');

    });

    // Menu drop end


    // Menu mobile

    function mobileMenuToogle() {

        if ($('.menu-mobile-box').hasClass('visible-block')) {
            $('.menu-mobile-box').removeClass('visible-block');
            $('.substrate-menu-mobile').removeClass('visible-block');
        } else {
            $('.menu-mobile-box').addClass('visible-block');
            $('.substrate-menu-mobile').addClass('visible-block');
        }
    }

    $('.mobile-close').on('click', function () {
        return mobileMenuToogle();
    });

    $('.btn-mobile-menu').on('click', function () {
        return mobileMenuToogle();
    });

    $('.substrate-menu-mobile').on('click', function () {
        return mobileMenuToogle();
    });

    // Menu mobile end


    // Scroll menu-sticky

    $(window).on('scroll', function () {

        console.log($(this).scrollTop());

        if ($(this).scrollTop() > 700) {

            $('.menu-sticky').addClass('menu-sticky-view');
        } else {
            $('.menu-sticky').removeClass('menu-sticky-view');
        }

    });

    // Scroll menu-sticky end

});