

$('#scrollButton').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
        $('#scrollButton').fadeIn();
    } else {
        $('#scrollButton').fadeOut();
    }
});
