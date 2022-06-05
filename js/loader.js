$(function() {
    $(document).on('click', '.catalog__btn-inner', function() {
        var $loader = $('.catalog__btn-load');
        $loader.removeClass('none').addClass('active');
        setTimeout(function () {
            $loader.removeClass('active').addClass('none');
        }, 4000);
    });
});