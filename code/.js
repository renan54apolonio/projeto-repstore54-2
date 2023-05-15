let container = $(".container");
let buttons = $(".button");
let isDragging = false;
let startX, scrollLeft;

container.on("touchstart", e => {
	isDragging = true;
	startX = e.touches[0].clientX - container.offset().left;
	scrollLeft = container.scrollLeft();
});

container.on("touchmove", e => {
	if (!isDragging) return;
	let x = e.touches[0].clientX - container.offset().left;
	let walk = (x - startX) * 2;
	container.scrollLeft(scrollLeft - walk);
});

container.on("touchend", e => {
	isDragging = false;
});

container.on("touchcancel", e => {
	isDragging = false;
});
