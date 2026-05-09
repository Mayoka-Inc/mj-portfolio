/* ============================================
   MJ Portfolio — Main JavaScript
   ============================================ */

(function () {
  "use strict";

  // ---- Newsletter form ----
  const form = document.getElementById("subscribe-form");
  const statusEl = document.getElementById("subscribe-status");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const email = document.getElementById("subscribe-email").value;

      // Show success (placeholder — wire up to real service later)
      statusEl.textContent = "Thanks! You'll hear from us soon.";
      statusEl.className = "gh-subscribe-status success";
      form.reset();

      // Hide after 4 seconds
      setTimeout(() => {
        statusEl.className = "gh-subscribe-status";
      }, 4000);
    });
  }

  // ---- Scroll-triggered animations ----

  // ---- Intersection observer for scroll reveal ----
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        revealObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe post cards for staggered reveal
  document.querySelectorAll(".gh-update-card").forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(16px)";
    card.style.transition = `opacity 0.4s ease ${index * 0.08}s, transform 0.4s ease ${index * 0.08}s`;
    revealObserver.observe(card);
  });

  // Observe subscribe section
  const subscribe = document.querySelector(".gh-subscribe");
  if (subscribe) {
    subscribe.style.opacity = "0";
    subscribe.style.transform = "translateY(16px)";
    subscribe.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    revealObserver.observe(subscribe);
  }

  // Observe footer
  const footer = document.querySelector(".gh-foot");
  if (footer) {
    footer.style.opacity = "0";
    footer.style.transform = "translateY(16px)";
    footer.style.transition = "opacity 0.5s ease 0.05s, transform 0.5s ease 0.05s";
    revealObserver.observe(footer);
  }
})();
