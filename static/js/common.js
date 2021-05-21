$(window).on('scroll', function() {
    var $this = $(this),
        $header = $('.header');
    if ($this.scrollTop() >= $('.hero-wrapper').height()) {
        $header.addClass('header-scroll');
    }
    else{
        $header.removeClass('header-scroll');
    }
    if ($(window).scrollTop() >= 600) {
        $('.scroll-top').addClass('is-show');
    }
    else{
        $('.scroll-top').removeClass('is-show');
    }
});
if(!$('.page-content').children('.hero-wrapper').length > 0) {
    $(window).on('scroll', function() {
        var $this = $(this),
            $header = $('.header');
        if ($this.scrollTop() >= 200) {
            $header.addClass('header-scroll');
        }
        else{
            $header.removeClass('header-scroll');
        }
    });
}else{
    $(window).on('scroll', function() {
        var $this = $(this),
            $header = $('.header');
        if ($this.scrollTop() >= $('.hero-wrapper').height() + 200) {
            $header.addClass('header-scroll');
        }
        else{
            $header.removeClass('header-scroll');
        }
    });
}


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
function calculateSum() {

    var sum = 0;
    //iterate through each textboxes and add the values
    $(".calc-item").each(function() {

        //add only if the value is number
        if(!isNaN(this.value) && this.value.length!=0) {
            sum += parseInt(this.value) || 0;
        }

    });
    //.toFixed() method will roundoff the final sum to 2 decimal places
    $(".total-sum").text(sum + '$');
}
$('.top-section .modal-group input').on('change', function(e) {
    var $this = $(this);
    var $thisText = $this.next().text();
    $('.title-form .label .input').attr('placeholder', $thisText);
});
$('.calculation-type input').on('change', function(e) {
    var $this = $(this);
    var $thisVal = $this.val();
    $('.calc-type').attr('value', $thisVal);
    calculateSum();
});


$('.calculation-select select').change(function() {
    var sum = 0;
    $('option:selected').each(function() {
        sum += parseInt($(this).val(), 10);
    });
    $(".calc-select").attr('value', sum);
    calculateSum();
});
$('.calculation-delivery input').on('change', function(e) {
    var $this = $(this);
    var $thisVal = $this.val();
    $('.calc-delivery').attr('value', $thisVal);

    calculateSum();
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
if(!$('.title-wrapper__result').children('.progress-container').length > 0) {
    $('.progress-container').each(function (e) {
        var $this = $(this);
        var $thisActive = $this.find('.active').last();
        var $thisActiveData = $this.find('.active').last().data('persent');
        var $thisActiveText = $thisActive.text();
        $thisActive.addClass('is-last');
        $this.find('.progress').css('width', $thisActiveData);
        $this.next('.item-progress__title').text($thisActiveText);
    });
}
if ($(window).width() <= 1024) {

    $('.track-item').on('click', function (e) {
        var $this = $(this);
        $this.toggleClass('is-open')
    })
}
$('.scroll-top').on('click', function () {
    $("html, body").animate({
        scrollTop: 0
    }, 300);
});
$('.basic-multiple').select2();
