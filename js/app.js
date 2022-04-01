$(document).ready(function(){

    $('.nav__main_social-person').on('click', () => {
        $('body').addClass('noScroll');      
        $('.modal-loginAccount').addClass('active-js');
        $('.burgerMenu__wrapper').removeClass('active-js');
    });

    $('.modal__checkbox_losePass').on('click', () => {
        $('.modal-recoverPass').addClass('active-js');
    });

    $('.js-btn__header').on('click', () => {
        $('body').addClass('noScroll');
        $('.modal-call').addClass('active-js');
        $('.burgerMenu__wrapper').removeClass('active-js');
    });

    $('.js-btn__footer').on('click', () => {
        $('body').addClass('noScroll');
        $('.modal-footerCall').addClass('active-js');
    });

    $('.modal__btn-registration').on('click', () => {
        $('.modal-registration').addClass('active-js');
        $('.modal-loginAccount').removeClass('active-js');
    });

    $('.burgeMenu__iconWrapper').on('click', () => {
        $('body').addClass('noScroll');
        $('.burgerMenu__wrapper').addClass('active-js');
    })

    $('.js-close__iconModal').on('click', () => {
        $('body').removeClass('noScroll');
        $('.modal-call').removeClass('active-js');
        $('.modal-registration').removeClass('active-js');
        $('.modal-footerCall').removeClass('active-js');
        $('.burgerMenu__wrapper').removeClass('active-js');
        $('.modal').removeClass('active-js');
    });

    $('.headerBg__wrapper').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 900,
        arrows: false,
        dots: true
    });

    $('.header__slider__wrapper').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        centerMode: false,
        infinite: false,
        responsive: [
            {
                breakpoint: 1601,
                settings: {
                    slidesToShow: 2,
                    variableWidth: true,
                    centerMode: false,
                }
            },
            {
                breakpoint: 1441,
                settings: {
                    slidesToShow: 4,
                    variableWidth: true,
                    centerMode: false,
                }
            },
            {
                breakpoint: 1281,
                settings: {
                    slidesToShow: 3,
                    variableWidth: true,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                }
            },            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 3,
                    arrows: false,
                }
            },
            {
                breakpoint: 321,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                }
            }
        ],
      });

    // $('.popular__excursions_cards').slick({
    //     infinite: true,
    //     responsive: [
    //         {
    //             breakpoint: 2560,
    //             settings: 'unslick'
    //         },
    //         {
    //             breakpoint: 822,
    //             settings: {
    //                 arrows: false,
    //                 slidesToScroll: 1,
    //                 variableWidth: true,
    //             }
    //         },
    //         {
    //             breakpoint: 580,
    //             settings: {
    //                 arrows: false,
    //                 slidesToScroll: 1,
    //                 variableWidth: true,
    //             }
    //         },
    //         {
    //             breakpoint: 415,
    //             settings: {
    //                 arrows: false,
    //                 slidesToScroll: 1,
    //                 variableWidth: true,
    //             }
    //         }
    //     ],
    // });

    $('.whatSay__slider_wrapper').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                }
            },
            {
                breakpoint: 822,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                }
            },
            {
                breakpoint: 580,
                settings: {
                    variableWidth:true,
                    slidesToShow: 2,
                    arrows: false,
                }
            }
        ],
    });
    
    $('.certificates__items').slick({
        infinite: false,
        responsive: [
            {
                breakpoint: 2560,
                settings: 'unslick'
            },
            {
                breakpoint: 580,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    variableWidth: true,
                }
            }
        ]
    });

    $('.favoriteExcursion__cards').slick({
        infinite: false,
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 1025,
                settings: 'unslick'
            },
        ]
    });

    $('.booking__cards-slider').slick({
        infinite: false,
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 1025,
                settings: 'unslick'
            },
        ]

    });

    $('.certificatesPage__sliderWrapper-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        infinite: false,
        fade: true,
        asNavFor: '.certificatesPage__sliderWrapper-nav',
        responsive: [
            {
                breakpoint: 822,
                settings: 'unslick'
            },
        ]
    });

    $('.certificatesPage__sliderWrapper-nav').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
        asNavFor: '.certificatesPage__sliderWrapper-for',
        centerMode: false,
        variableWidth: true,
        centerPadding: '0px',
        responsive: [
            {
                breakpoint: 1281,
                settings: {
                    
                }
            },
            {
                breakpoint: 822,
                settings: 'unslick'
            },
        ]
    });

    $('.accordion__title').on('click', function() {
        $(this).toggleClass('activeAccordionText').next().slideToggle();
        return false;
    });

    /* Локализация datepicker */
    $.datepicker.regional['ru'] = {
        closeText: 'Закрыть',
        prevText: 'Предыдущий',
        nextText: 'Следующий',
        currentText: 'Сегодня',
        monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
        monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'],
        dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
        dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
        dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
        weekHeader: 'Не',
        dateFormat: 'dd.mm.yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    };
    $.datepicker.setDefaults($.datepicker.regional['ru']);

    $(".formTour__el-date").datepicker({
        numberOfMonths: [1,2],
        showOn: "both",
        buttonImage: './img/calendar-form.svg',
        buttonImageOnly: true,
        showOtherMonths: true,
        selectOtherMonths: true,
    });

    $('.calendar__form-js').datepicker({
        showOn: "both",
        buttonImage: './img/calendar-form.svg',
        buttonImageOnly: true,
        showOtherMonths: true,
        selectOtherMonths: true,
    });
        
});




