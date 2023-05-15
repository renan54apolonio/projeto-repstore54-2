var inner = document.querySelector('.inner');
var touchstartX = 0;
var touchendX = 0;
var distanceX = 0;

inner.addEventListener('touchstart', function(event) {
    touchstartX = event.touches[0].screenX;
});

inner.addEventListener('touchmove', function(event) {
    touchendX = event.touches[0].screenX;
    distanceX = touchstartX - touchendX;
    inner.style.transform = 'translateX(' + -distanceX + 'px)';
});

inner.addEventListener('touchend', function(event) {
    inner.style.transform = 'translateX(0)';
});
