// Change navbar background slightly on scroll
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    nav.style.background = "#020617";
  } else {
    nav.style.background = "#111827";
  }
});
