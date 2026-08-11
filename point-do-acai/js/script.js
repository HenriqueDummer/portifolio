(function () {
  "use strict";

  /* ---------------- Mobile nav toggle ---------------- */
  var navToggle = document.getElementById("navToggle");
  var nav = document.getElementById("nav");

  if (navToggle && nav) {
    navToggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    nav.querySelectorAll(".nav__link").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------------- Scroll-reveal via IntersectionObserver ---------------- */
  var revealEls = document.querySelectorAll(".reveal");
  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (revealEls.length) {
    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      revealEls.forEach(function (el) { el.classList.add("is-visible"); });
    } else {
      var observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
      );
      revealEls.forEach(function (el) { observer.observe(el); });
    }
  }

  /* ---------------- Galeria carousel ---------------- */
  var viewport = document.getElementById("carouselViewport");
  var track = document.getElementById("carouselTrack");
  var prevBtn = document.getElementById("carouselPrev");
  var nextBtn = document.getElementById("carouselNext");

  if (viewport && track) {
    var slides = Array.prototype.slice.call(track.children);

    function scrollByDirection(direction) {
      var slideWidth = slides[0].getBoundingClientRect().width + 20;
      viewport.scrollBy({ left: direction * slideWidth, behavior: prefersReducedMotion ? "auto" : "smooth" });
    }

    if (prevBtn) prevBtn.addEventListener("click", function () { scrollByDirection(-1); });
    if (nextBtn) nextBtn.addEventListener("click", function () { scrollByDirection(1); });
  }
})();
