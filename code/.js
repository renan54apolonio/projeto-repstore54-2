var touchstartX = 0;
var touchendX = 0;
var distanceX = 0;

$('.inner').on('touchstart', function(event) {
    touchstartX = event.originalEvent.touches[0].screenX;
});

$('.inner').on('touchmove', function(event) {
    touchendX = event.originalEvent.touches[0].screenX;
    distanceX = touchstartX - touchendX;
    $(this).css('transform', 'translateX(' + -distanceX + 'px)');
});

$('.inner').on('touchend', function(event) {
    $(this).css('transform', 'translateX(0)');
});
