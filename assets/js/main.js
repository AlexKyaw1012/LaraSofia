const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const revealElements = document.querySelectorAll(".reveal");
const parallaxTarget = document.querySelector("[data-parallax]");
const profilePhoto = document.querySelector("#profile-photo");
const form = document.querySelector(".contact-form");
const feedback = document.querySelector(".form-feedback");
const year = document.querySelector("#year");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}

if (revealElements.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  revealElements.forEach((element) => observer.observe(element));
}

if (parallaxTarget) {
  window.addEventListener("scroll", () => {
    const y = window.scrollY * 0.06;
    parallaxTarget.style.transform = `translate3d(0, ${y}px, 0)`;
  });
}

if (profilePhoto) {
  profilePhoto.addEventListener("error", () => {
    profilePhoto.src = "assets/images/profile-placeholder.svg";
  });
}

if (form && feedback) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name || !email || !message) {
      feedback.textContent = "Please complete all fields before sending.";
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      feedback.textContent = "Please provide a valid email address.";
      return;
    }

    feedback.textContent = "Message drafted. Opening your email client...";
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\nReply to: ${email}`);
    window.location.href = `mailto:kyawhmawe553@gmail.com?subject=${subject}&body=${body}`;
    form.reset();
  });
}
