document.querySelectorAll('.rv').forEach(function (e) {
	if (!('IntersectionObserver' in window)) { e.classList.add('in'); return }
	new IntersectionObserver(function (en, ob) { en.forEach(function (x) { if (x.isIntersecting) { x.target.classList.add('in'); ob.unobserve(x.target) } }) }, { threshold: .15 }).observe(e)
});
document.querySelectorAll('.quiz').forEach(function (q) {
	var c = +q.dataset.correct, fb = q.querySelector('.fb'), bs = q.querySelectorAll('button');
	bs.forEach(function (b, i) {
		b.addEventListener('click', function () {
			bs.forEach(function (x) { x.disabled = true });
			bs[c].classList.add('ok');
			if (i === c) { fb.textContent = 'Correto! ' + q.dataset.exp } else { b.classList.add('no'); fb.textContent = 'Quase. ' + q.dataset.exp }
		})
	})
});