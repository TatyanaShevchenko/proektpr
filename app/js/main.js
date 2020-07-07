$(document).ready(function() {
    let sliderWidth = $("div.slider").width();
    $(".slider__inner").width(sliderWidth - 120);

    function repaintSlider(days) {

    }

    $.fn.repaint = function() {
        var display = this.css('display');
        this.css('display', 'none');
        this.css('display', display);
        console.log('Repaint!')
    };

    $(".menu__btn-nav").on("click", function() {
        $(".menu").toggleClass("min");
    });

    $(".nav__menu-item").on("click", function() {
        var navs = $(".nav__menu-item");
        console.log(navs);
        for (i = 0; i < navs.length; i++) {
            navs[i].classList.remove("active");
        }

        var el = $(this);
        el.toggleClass("active");
    });

    $(".header__radiobutton").on("click", function() {
        var elements = $(".header__radiobutton");
        for (i = 0; i < elements.length; i++) {
            elements[i].classList.remove("active");
        }
        var el = $(this);
        $('.slider__inner').repaint();
        el.toggleClass("active");
    });

    $(".slider__inner").slick({
        slidesToShow: 6,
        slidesToScroll: 1,
    });
});

(function($) {
    $(function() {
        $("input").styler();
    });
})(jQuery);