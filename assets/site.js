// Shared behaviour for aak581.github.io: footer year, reveal-on-scroll, GIF covers that play on hover.
(function () {
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var items = document.querySelectorAll('.reveal');
  if (reduce || !('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -8% 0px' });
    items.forEach(function (el) { io.observe(el); });
  }

  document.querySelectorAll('img[data-gif]').forEach(function (img) {
    var still = img.src, box = img.closest('[data-hover]') || img;
    box.addEventListener('mouseenter', function () { img.src = img.dataset.gif; });
    box.addEventListener('mouseleave', function () { img.src = still; });
  });
})();
