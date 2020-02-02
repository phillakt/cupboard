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
    })


    function toogleSearch() {
        $('.box-search').hasClass('display-none') ? $('.box-search').removeClass('display-none') : $('.box-search').addClass('display-none');
    }

    $('.icon-search').on('click', function () {
        toogleSearch();
    });

    $('.search-close').on('click', function () {
        toogleSearch();
    });




    function uiSelect() {
        if($('.ui-select__container').hasClass('ui-select__container_view')){
            $('.ui-select__container').removeClass('ui-select__container_view');
            $('.ui-select__head').css({borderRadius: '6px'});
        }else {
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


    $(window).on('scroll', function () {

        console.log($(this).scrollTop());

        if($(this).scrollTop() > 700){

            $('.menu-sticky').addClass('menu-sticky-view');
        }else {
            $('.menu-sticky').removeClass('menu-sticky-view');
        }

    })


});