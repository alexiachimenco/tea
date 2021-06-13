$(document).ready(() => {
    $('.top__text').arctext({
        radius: 90,
        dir: 1
    });
    $('.under__text').arctext({
        radius: 90,
        dir: -1
    });

    $('.category').click((e) => {
        let currentElement = $(e.target);
        $('.container__slider__cards').hide();
        let id = currentElement.data('id');
        $('#' + id).show();

        $('.category').removeClass('active');
        currentElement.addClass('active');

        $('#' + id + ' .slider-cards').slick('refresh');
        $('#' + id + ' .sliders-nav').slick('refresh');
    });
    $('#exclusive__container__tea .slider-cards').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        infinite: true,
        asNavFor: ('#exclusive__container__tea .sliders-nav'),
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                    slidesToScroll: 1,
                }
            },
        ]
    });
    $('#exclusive__container__tea .sliders-nav').slick({
        asNavFor: ('#exclusive__container__tea .slider-cards'),
        slidesToShow: 6,
        slidesToScroll: 1,
        focusOnSelect: true
    })
    $('#container__white__tea  .slider-cards').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        infinite: true,
        asNavFor: ('#container__white__tea  .sliders-nav'),
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                    slidesToScroll: 1,
                }
            },
        ]
    });
    $('#container__white__tea .sliders-nav').slick({
        asNavFor: ('#container__white__tea .slider-cards'),
        slidesToShow: 6,
        slidesToScroll: 1,
        focusOnSelect: true
    })
    $('#container__ulun__tea  .slider-cards').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        infinite: true,
        asNavFor: ('#container__ulun__tea  .sliders-nav'),
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                    slidesToScroll: 1,
                }
            },
        ]
    });
    $('#container__ulun__tea .sliders-nav').slick({
        asNavFor: ('#container__ulun__tea .slider-cards'),
        slidesToShow: 6,
        slidesToScroll: 1,
        focusOnSelect: true
    })
    $('#green__container__tea  .slider-cards').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        infinite: true,
        asNavFor: ('#green__container__tea  .sliders-nav'),
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                    slidesToScroll: 1,
                }
            },
        ]
    });
    $('#green__container__tea .sliders-nav').slick({
        asNavFor: ('#green__container__tea .slider-cards'),
        slidesToShow: 6,
        slidesToScroll: 1,
        focusOnSelect: true
    })
    $('#black__container__tea  .slider-cards').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        infinite: true,
        asNavFor: ('#black__container__tea  .sliders-nav'),
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                    slidesToScroll: 1,
                }
            },
        ]
    });
    $('#black__container__tea .sliders-nav').slick({
        asNavFor: ('#black__container__tea .slider-cards'),
        slidesToShow: 6,
        slidesToScroll: 1,
        focusOnSelect: true
    })

    $('.open-modal').click(() => {
        $('#reservation__container').css('display', 'flex')
    });
    $('#reservation-cancel-close, #reservation__container').click((e) => {
        if (e.target.id === 'reservation__container' || e.target.id === 'reservation-cancel-close' || e.target.id === 'reservation-cancel-close-second') {
            $('#reservation__container').hide();
        }
    });
    $('#button__reservation > button').click(() => {
        let order = $('#order');
        let count = $('#count');
        let name = $('#name');
        let phone = $('#phone');
        let loader = $('#loader');
        let change = $('.order__form')
        let luck = $('#luck__operation');
        let error = $('#error__operation');
        let borderInput = $('.order__input')
        if (order.val() && count.val() && name.val() && phone.val()) {
            $.ajax({
                method: 'GET',
                url: 'mail.php',
                data: 'order=' + order.val() + 'count=' + count.val() + 'name=' + name.val() + 'phone=' + phone.val(),
                success: () => {
                    $('#reservation__sent').show();
                    $('#reservation').hide();
                },
                error: () => {
                    $('#reservation__container').hide();
                    alert('Ошибка заказа. Свяжитесь,пожалуйста, по номеру телефона.')
                }
            });

        } else {
            $('.error-input').hide();
            let hasError = false;
            order.css('border-color', '#8fbc62');
            count.css('border-color', '#8fbc62');
            name.css('border-color', '#8fbc62');
            phone.css('border-color', '#8fbc62');

            if (!order.val()) {
                order.siblings('.error-input').show();
                order.css('border-color', 'red');
                hasError = true;
            }
            if (!count.val()) {
                count.siblings('.error-input').show();
                count.css('border-color', 'red');
                hasError = true;
            }

            if (!name.val()) {
                name.siblings('.error-input').show();
                name.css('border-color', 'red');
                hasError = true;
            }

            if (!phone.val()) {
                phone.siblings('.error-input').show();
                phone.css('border-color', 'red');
                hasError = true;

            }
            if (!hasError) {
                loader.css('display', 'flex');


            }
        }
    })
    $('#redeem').click(() => {
        let promo = $('#promo')
        if (promo.val()) {
            $.ajax({
                method: 'POST',
                url: 'mail1.php',
                data: 'promo=' + promo.val(),
                success: () => {
                    $('#sent__discount').show();
                    $('#discount__form').hide();
                },
            });
        } else {
            $('.error-input').hide();
            let hasError = false;
            promo.css('border-color', '#8fbc62');

            if (!promo.val()) {
                promo.siblings('.error-input').show();
                promo.css('border-color', 'red');
                hasError = true;
            }
        }

    });
    $('#burger').click(() => {
        $('#header').toggleClass('menu-open');
    });
    $('#header .menu ').click(() => {
        $('#header').removeClass('menu-open');
    });

    // $('#button__reservation > button').click(function () {
    //     // let url = 'https://itlogia.ru/test/promo-code?name=' + $('#promo').val();
    //     // console.log(url);
    //     // let http = new XMLHttpRequest();
    //     // http.open('GET', url);
    //     // http.send();
    //     // http.onreadystatechange = function () {
    //     //     if (http.readyState === 4 && http.status === 200) {
    //     //         let result = JSON.parse((http.responseText));
    //     //         if (result){
    //     //             $('#promocode').removeClass('hide');
    //     //         }
    //     //     }
    //     // }
    // })

    jQuery(($) => {
        $('.select').on('click', '.select__head', function () {
            if ($(this).hasClass('open')) {
                $(this).removeClass('open');
                $(this).next().fadeOut();
            } else {
                $('.select__head').removeClass('open');
                $('.select__list').fadeOut();
                $(this).addClass('open');
                $(this).next().fadeIn();
            }
        });

        $('.select').on('click', '.select__item', function () {
            $('.select__head').removeClass('open');
            $(this).parent().fadeOut();
            $(this).parent().prev().text($(this).text());
            $(this).parent().prev().prev().val($(this).text());
        });

        $(document).click(function (e) {
            if (!$(e.target).closest('.select').length) {
                $('.select__head').removeClass('open');
                $('.select__list').fadeOut();

            }
        });
        $('.select__item').click((e) => {
            let currentElement = $(e.target);
            $('.select__item').removeClass('active');
            currentElement.addClass('active');
        });
    });

});
