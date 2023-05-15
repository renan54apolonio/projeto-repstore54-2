let container = document.querySelector(".container");
let buttons = document.querySelectorAll(".button");
let startX, endX;

container.addEventListener("touchstart", e => {
	startX = e.touches[0].clientX;
});

container.addEventListener("touchmove", e => {
	endX = e.touches[0].clientX;
	let diffX = endX - startX;
	container.scrollLeft -= diffX;
	startX = endX;
});

container.addEventListener("touchend", e => {
	endX = e.changedTouches[0].clientX;
	let diffX = endX - startX;
	container.scrollLeft -= diffX;
});
