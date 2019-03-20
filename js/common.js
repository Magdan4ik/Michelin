document.addEventListener("DOMContentLoaded", initJs)

if (window.NodeList && !NodeList.prototype.forEach) {
	NodeList.prototype.forEach = Array.prototype.forEach;
}

function initJs() {
	const d = document;
	const w = window;


	const filters = {
		cars: d.querySelectorAll('.f-carclass li'),
		diam: d.querySelectorAll('.f-diameter li'),
		size: d.querySelectorAll('.f-size li')
	}
	const typesize = {
		diam: d.querySelector('.f-diameter .active-filter').textContent,
		size: d.querySelector('.f-size .active-filter').textContent,
	}
	const ttip     = d.querySelectorAll('.f-tooltip');
	const tsize     = d.getElementById('typesize');
	// const diam     = d.getElementById('f-diam');
	// const size     = d.getElementById('f-size');
	let   targ;
	
	filters.cars.forEach(function(el) {
		el.addEventListener('click', function(e) {
			e.preventDefault();
			changeFilter(filters.cars, el);
			// targ = e.target.closest('.active-filter'); // Dont work in govnobrowser
			targ = findParent(e.target, 'active-filter');
			removeTooltip();
			targ.querySelector('.f-tooltip').classList.add('f-tooltip--visible')
		});
	});

	filters.diam.forEach(function(el) {
		el.addEventListener('click', function(e) {
			e.preventDefault();
			changeFilter(filters.diam, el);
			changeTypeSize(el.textContent, null);
		});
	});

	filters.size.forEach(function(el) {
		el.addEventListener('click', function(e) {
			e.preventDefault();
			changeFilter(filters.size, el);
			changeTypeSize(null, el.textContent);
		});
	});
	
	d.addEventListener('click', function(e) {
		if (targ && !targ.contains(e.target)) removeTooltip();
	});

	function changeFilter(filters, el) {
		filters.forEach(function(el) {
			el.classList.remove('active-filter');
		});
		el.classList.add('active-filter');
	}

	function changeTypeSize(d, s) {
		if(d) typesize.diam = d;
		if(s) typesize.size = s;
		tsize.innerText = typesize.size + ' ' + typesize.diam;
	}

	function removeTooltip() {
		ttip.forEach(function(el) {
			el.classList.remove('f-tooltip--visible');
		});
	}

	function findParent(el, cls) {
		while ((el = el.parentElement) && !el.classList.contains(cls));
		return el;
	}
	
}