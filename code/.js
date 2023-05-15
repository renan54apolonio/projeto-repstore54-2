var inner = document.querySelector('.inner');
var touchstartX = 0;
var touchendX = 0;
var distanceX = 0;
var mousedownX = 0;
var mouseupX = 0;

inner.addEventListener('mousedown', function(event) {
    mousedownX = event.screenX;
});

inner.addEventListener('mousemove', function(event) {
    if (mousedownX !== 0) {
        mouseupX = event.screenX;
        distanceX = mousedownX - mouseupX;
        inner.style.transform = 'translateX(' + -distanceX + 'px)';
    }
});

inner.addEventListener('mouseup', function(event) {
    mousedownX = 0;
    inner.style.transform = 'translateX(0)';
});

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
