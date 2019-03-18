document.addEventListener("DOMContentLoaded", initJs)



function initJs() {
	const d = document;
	const w = window;
	console.log('document loaded');
}

function autoHeight(el) {
	el.style.height = (el.scrollHeight) + "px";
}