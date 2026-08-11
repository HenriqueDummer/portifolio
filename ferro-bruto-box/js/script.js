(function () {
  "use strict";

  var header = document.getElementById("header");
  var nav = document.getElementById("nav");
  var navToggle = document.getElementById("navToggle");
  var backToTop = document.getElementById("backToTop");
  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Sticky header background on scroll
  function onScroll() {
    var scrolled = window.scrollY > 40;
    header.classList.toggle("is-scrolled", scrolled);
    backToTop.classList.toggle("is-visible", window.scrollY > 500);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Mobile nav toggle
  function closeNav() {
    nav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  }

  navToggle.addEventListener("click", function () {
    var isOpen = nav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll(".nav__link").forEach(function (link) {
    link.addEventListener("click", closeNav);
  });

  // Back to top
  backToTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
  });

  // Reveal on scroll
  var revealEls = document.querySelectorAll(".reveal");
  if (revealEls.length) {
    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      revealEls.forEach(function (el) { el.classList.add("is-visible"); });
    } else {
      var revealObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              revealObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
      );
      revealEls.forEach(function (el) { revealObserver.observe(el); });
    }
  }

  // Stats count-up
  var statEls = document.querySelectorAll(".stat__number[data-count]");
  if (statEls.length) {
    function animateCount(el) {
      var target = parseInt(el.getAttribute("data-count"), 10);
      if (prefersReducedMotion) {
        el.textContent = target;
        return;
      }
      var duration = 1200;
      var start = null;
      function step(timestamp) {
        if (start === null) start = timestamp;
        var progress = Math.min((timestamp - start) / duration, 1);
        el.textContent = Math.floor(progress * target);
        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          el.textContent = target;
        }
      }
      window.requestAnimationFrame(step);
    }

    if ("IntersectionObserver" in window) {
      var statsObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              animateCount(entry.target);
              statsObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.4 }
      );
      statEls.forEach(function (el) { statsObserver.observe(el); });
    } else {
      statEls.forEach(function (el) { el.textContent = el.getAttribute("data-count"); });
    }
  }
})();
