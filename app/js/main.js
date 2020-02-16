$(document).ready(function () {

    // Main-slider

    $('#main-slider').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        navText: [],
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        fluidSpeed: 500,
        smartSpeed: 1000,
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


    //  Card item

      var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
      });

      var galleryTop = new Swiper('.gallery-top', {
        spaceBetween: 10,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        thumbs: {
          swiper: galleryThumbs
        }
      });

    //  Card item end




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

        var countItems = $('#form-cost__calculate .ui-select__option').length;
        var height = (countItems * 44) + 'px';

        if ($('#form-cost__calculate .ui-select__container').hasClass('ui-select__container_view')) {
            $('#form-cost__calculate .ui-select__container').removeClass('ui-select__container_view');
            $('#form-cost__calculate .ui-select__container').css({
                height: 0
            });
            $('#form-cost__calculate .ui-select__head').css({borderRadius: '6px'});
        } else {
            $('#form-cost__calculate .ui-select__container').addClass('ui-select__container_view');
            $('#form-cost__calculate .ui-select__container').css({
                height: height
            });
            $('#form-cost__calculate .ui-select__head').css({borderRadius: '6px 6px 0 0'});
        }
    }


    function uiSelectCatalogAll() {

        var countItems = $('#form-cost__catalog-all .ui-select__option').length;
        var height = (countItems * 44) + 'px';

        if ($('#form-cost__catalog-all .ui-select__container').hasClass('ui-select__container_view')) {
            $('#form-cost__catalog-all .ui-select__container').removeClass('ui-select__container_view');
            $('#form-cost__catalog-all .ui-select__container').css({
                height: 0
            });
            $('#form-cost__catalog-all .ui-select__head').css({borderRadius: '6px'});
        } else {
            $('#form-cost__catalog-all .ui-select__container').addClass('ui-select__container_view');
            $('#form-cost__catalog-all .ui-select__container').css({
                height: height
            });
            $('#form-cost__catalog-all .ui-select__head').css({borderRadius: '6px 6px 0 0'});
        }
    }


    $('#form-cost__calculate .ui-select__head').on('click', function () {
        uiSelect();
    });

    $('#form-cost__calculate').on('change', function (e) {
        var textLabel = e.target.previousElementSibling.innerHTML;
        $('#form-cost__calculate .ui-select__head').html(textLabel);
    });

    $('#form-cost__calculate .ui-select__head').blur(function () {
        
        setTimeout(function(){
            uiSelect();
        }, 100)
    });



    $('#form-cost__catalog-all .ui-select__head').on('click', function () {
        uiSelectCatalogAll();
    });

    $('#form-cost__catalog-all').on('change', function (e) {
        var textLabel = e.target.previousElementSibling.innerHTML;
        $('#form-cost__catalog-all .ui-select__head').html(textLabel);
    });

    $('#form-cost__catalog-all .ui-select__head').blur(function () {
        
        setTimeout(function(){
            uiSelectCatalogAll();
        }, 100)
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
            $('body').css({overflow: 'inherit'});
            $('.btn-mobile-menu').css({top: 0});
        } else {
            $('.menu-mobile-box').addClass('visible-block');
            $('.substrate-menu-mobile').addClass('visible-block');
            $('body').css({overflow: 'hidden'});
            $('.btn-mobile-menu').css({top: -30 + 'px'});
        }
    }

    $('.mobile-close').on('click', function () {
         mobileMenuToogle();
    });

    $('.btn-mobile-menu').on('click', function () {
         mobileMenuToogle();
    });

    $('.substrate-menu-mobile').on('click', function () {
         mobileMenuToogle();
    });

    // Menu mobile end


    // Scroll menu-sticky

    $(window).on('scroll', function () {

        if($('.menu-sticky').hasClass('home-page-menu')){

            if ($(this).scrollTop() > 700) {

                $('.menu-sticky').addClass('menu-sticky-view');
            } else {
                $('.menu-sticky').removeClass('menu-sticky-view');
            }
        }
    });

    // Scroll menu-sticky end

});