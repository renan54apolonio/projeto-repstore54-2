let container = $(".container");
let buttons = $(".button");
let isDragging = false;
let startX, scrollLeft;

container.on("mousedown", e => {
	isDragging = true;
	startX = e.pageX - container.offset().left;
	scrollLeft = container.scrollLeft();
});

container.on("mousemove", e => {
	if (!isDragging) return;
	let x = e.pageX - container.offset().left;
	let walk = (x - startX) * 2;
	container.scrollLeft(scrollLeft - walk);
});

container.on("mouseup", e => {
	isDragging = false;
});

container.on("mouseleave", e => {
	isDragging = false;
});
