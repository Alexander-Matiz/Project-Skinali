$(function() {

    $(window).load(function() {
        //Именование клавиш в slider before-after
        $(".before-after").twentytwenty({
            before_label: 'Без скинали',
            after_label: 'Со скинали',
        });

        //Настройка slick-slider
        $('.before-slider').slick({
            draggable: false,
            dots: true,
            prevArrow: $('.arrow-left'),
            nextArrow: $('.arrow-right'),
            dotsClass: 'before-slider__dots',
            responsive: [
                {
                    breakpoint: 769,
                    settings: {
                        arrows: false,
                        draggable: false,
                        swipe: false,
                        swipeToSlide: false,
                    }
                },
            ]
        });

        //Настройка раскрывающегося меню
        $('.menu-button').on('click', function() {
            $('.menu').toggleClass('menu--active');
        });

        // Настройка select
        $('.select').on('click', function() {
            $('.select__dropdown').toggleClass('select__dropdown--open');
        });
        $('.select__option').on('click', function() {
            var value = $(this).attr('data-value');
            $('#select-type').val(value);
            $('.select--checked').text(value);
            $('.select__dropdown').toggleClass('select__dropdown--open');
        });

        //Управление передвижение ссылки-якоря
        $("a[href^='#'").click(function() {
            var _href = $(this).attr("href");
            $("html, body").animate({ scrollTop: $(_href).offset().top - 160 + "px"});
            return false;
        });

        //Настройка маски ввода
        $('input[type="tel"]').mask("+7 (999) 999-99-99")

        // Показ карты, только тогда, когда до блока с картой дошли
        var reviews = $('.reviews');
        var reviewsTop = reviews.offset().top;
        $(window).bind('scroll', function() {
            var windowTop = $(this).scrollTop();
            if (windowTop > reviewsTop) {
                $('#map').html('<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A04799ee2b6bac890b1a7e1c7eb7ae2d632cab39f5c93fa138ce33fcd04faf41c&amp;width=100%25&amp;height=410&amp;lang=ru_UA&amp;scroll=false"></script>');
                $(window).unbind('scroll')
            }
        });
    });

});