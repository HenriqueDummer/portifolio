(function () {
  "use strict";

  var header = document.getElementById("header");
  var nav = document.getElementById("nav");
  var navToggle = document.getElementById("navToggle");
  var backToTop = document.getElementById("backToTop");

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
    navToggle.classList.remove("is-active");
    navToggle.setAttribute("aria-expanded", "false");
  }

  navToggle.addEventListener("click", function () {
    var isOpen = nav.classList.toggle("is-open");
    navToggle.classList.toggle("is-active", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll(".nav__link").forEach(function (link) {
    link.addEventListener("click", closeNav);
  });

  // Back to top
  backToTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Reveal on scroll
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }
})();
