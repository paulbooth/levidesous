$(function(){
$('a[href^="#"]').on('click',function (e) {
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);

    $('html, body').stop().animate({
        'scrollTop': $target.offset() && $target.offset().top || 0
    }, 900, 'swing', function () {
        window.location.hash = target;
    });
});
});
