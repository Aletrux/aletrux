const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

sections.forEach(section => {
  const rect = section.getBoundingClientRect();
  if(rect.top < window.innerHeight) {
    section.classList.add("visible");
  }
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

sections.forEach(section => observer.observe(section));

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if(link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});
