;(function ($){

    $('.section').on('click', function (e) {

        //моя реализация аккордеона
        // $(e.target).next().toggleClass('active');
        // $(e.target).parent().prevAll().find('.active').removeClass('active');
        // $(e.target).parent().nextAll().find('.active').removeClass('active');

        // реализация аккордеона автором макета, исправленого под мою разметку
        $(e.target).next().slideToggle(100);
        $('div.section__description').not($(e.target).next()).slideUp('fast');

    });

})(jQuery);