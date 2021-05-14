$(window).on('scroll', function() {
    var $this = $(this),
        $header = $('.header');
    if ($this.scrollTop() >= $this.height()) {
        $header.addClass('header-scroll');
    }
    else{
        $header.removeClass('header-scroll');
    }
});
$('.header-btn').on('click', function (e) {
    e.preventDefault();
    var $this = $(this);
    $('.header').toggleClass('is-open');
    $('body').toggleClass('scroll');
    $this.toggleClass('open').find('.icon').toggleClass('hidden')
});
$('.header-overlay').on('click', function (e) {
    e.preventDefault();
    $('.header').toggleClass('is-open');
    $('body').toggleClass('scroll');
    $('.header-btn').toggleClass('open').find('.icon').toggleClass('hidden')
});
$('.reviews-item__media').on('click', function(e) {
    $(this).find('.reviews-media-btn').toggleClass('hidden');
    $(this).toggleClass('is-play');
    if ($(this).find('video').get(0).paused) {
        $(this).find('video').get(0).play();
    }
    else {
        $(this).find('video').get(0).pause();
    }
    e.preventDefault();
});



$('.top-section .modal-group input').on('change', function(e) {
    var $this = $(this);
    var $thisText = $this.next().text();
    console.log($thisText);
    $('.title-form .label .input').attr('placeholder', $thisText);
});
$('.calculation-wrap input, .calculation-wrap select').on('change', function(e) {
    var $this = $(this);
    console.log($this.val(), $this.attr('name') );
});


function popupOpen() {
    var $popupButton = $('.btn-popup');
    $popupButton.on('click', function (e) {
        var $this = $(this);
        var popupButtonData = $this.data('popup');
        $('.popup').removeClass('active');
        $('div[data-popup = '+popupButtonData+']').addClass('active');
        $('body').addClass('scroll');
    });
}
popupOpen();
$('.popup-close').on('click', function (e) {
    var $this = $(this);
    $this.parent().parent().removeClass('active');
    $('.popup-overlay').removeClass('active');
    $('body').removeClass('scroll');
});
$('.popup-overlay').on('click', function (e) {
    var $this = $(this);
    $this.removeClass('active');
    $('.popup').removeClass('active');
    $('body').removeClass('scroll');
});

$('.filter-nav .btn').on('click', function () {
    var $this = $(this);
    var popupButtonData = $this.data('filter');
    $('.filter-item').addClass('hidden');
    $('div[data-filter = '+popupButtonData+']').removeClass('hidden');
});

