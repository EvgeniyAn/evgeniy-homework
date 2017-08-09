;(function ($) {

    $('#close').on('click', function (e) {
            $('.popup').hide();
    });
    $('.popup').on('click', function (e) {
        if (e.target.className === 'popup') {
            $(this).hide();
        }
    });

    $('#far-cry4').on('click', function () {
        $('.popup').show().find('.card-content.info').show();

    });

    $('.card-tabs__tab').on('click', function () {

        $(this)
            .toggleClass('active')
            .siblings()
            .removeClass('active');

        var dataAttr = $(this).data('content');

        $('.' + dataAttr)
            .show()
            .siblings()
            .not('.card-tabs')
            .not('#close')
            .hide();
    });

    $('.card-btn_buy').on('click', function () {
        swal("Good job!", "You buyed this game!", "success");
    })


})(jQuery);