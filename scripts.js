document.addEventListener("DOMContentLoaded", () => {
  console.log("Portfolio loaded successfully!");
  const navLinks = document.querySelectorAll("nav ul li a");
  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
  const projects = document.querySelectorAll(".project");
  projects.forEach(item => {
    item.addEventListener("mouseenter", () => {
      item.style.transform = "scale(1.02)";
    });
    item.addEventListener("mouseleave", () => {
      item.style.transform = "scale(1)";
    });
  });
});
