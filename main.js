// ============================================================
// saurabhsharma92 — terminal theme
// Scrollspy only. No theme toggles, no mobile drawer.
// ============================================================

(function () {
  // Year in footer
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Scrollspy
  var sections = Array.prototype.slice.call(document.querySelectorAll("section[id]"));
  var navLinks = Array.prototype.slice.call(document.querySelectorAll("[data-section]"));

  function setActive(id) {
    navLinks.forEach(function (l) {
      if (l.getAttribute("data-section") === id) l.classList.add("active");
      else l.classList.remove("active");
    });
  }

  if ("IntersectionObserver" in window && sections.length) {
    var io = new IntersectionObserver(function (entries) {
      var visible = entries
        .filter(function (e) { return e.isIntersecting; })
        .sort(function (a, b) { return b.intersectionRatio - a.intersectionRatio; });
      if (visible.length) setActive(visible[0].target.id);
    }, {
      rootMargin: "-20% 0px -60% 0px",
      threshold: [0, 0.15, 0.3, 0.5],
    });
    sections.forEach(function (s) { io.observe(s); });
  }
})();
