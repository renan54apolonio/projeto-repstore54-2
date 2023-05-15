let container = $(".container");
let inner = $(".inner");
let isDragging = false;
let startClientX, startPageX, currentX = 0;

inner.on("touchstart", e => {
	isDragging = true;
	startClientX = e.touches[0].clientX;
	startPageX = e.touches[0].pageX;
	currentX = inner.offset().left;
});

inner.on("touchmove", e => {
	if (!isDragging) return;
	let currentClientX = e.touches[0].clientX;
	let currentDeltaX = currentClientX - startClientX;
	let currentPageX = e.touches[0].pageX;
	let currentDeltaPageX = currentPageX - startPageX;
	let newX = currentX + currentDeltaPageX;
	if (newX > 0) newX = 0;
	if (newX < - (inner.width() - container.width())) newX = - (inner.width() - container.width());
	inner.css({ left: newX });
	e.preventDefault();
});

inner.on("touchend", e => {
	isDragging = false;
});

inner.on("touchcancel", e => {
	isDragging = false;
});
