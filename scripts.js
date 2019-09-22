$(document).ready(function() {
$('.menu-toggle').click(function() {
    $('nav').toggleClass('active')
})

$('ul li').click(function() {
    $(this).siblings().removeClass('active');
    $(this).toggleClass('active');
})

var btn = $('#backToTopBtn');

$(window).scroll(function(){
if($(this).scrollTop() <= 0){ // if user is at the top remove button
    $(btn).fadeOut('fast');
} else {
    $(btn).fadeOut('fast');
    clearTimeout($.data(this, 'scrollTimer'));
    $.data(this, 'scrollTimer', setTimeout(function() {
    if ($(this).scrollTop() != 0){ //only run if not at top
        $(btn).fadeIn('fast'); // if user stops scrolling show button
    }
}, 270));
}
});

btn.on('click', function(e){
    e.preventDefault();
    $('html, body'). animate({scrollTop:0},'300');
});

$('#emailLink').on('click', function (event) {
    var email = 'mariellejde@gmail.com';
    window.location = 'mailto:' + email;
});

}
)
