const header = document.querySelector(".header");
const toggleBtn = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-links");
const svgCode = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
  class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5" />
</svg>`;
let isMenuOpen = false;

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        if (!isMenuOpen) {
            header.classList.remove("scrolled");
        }
    }
});

toggleBtn.addEventListener("click", () => {
    isMenuOpen = !isMenuOpen;
    navMenu.classList.toggle("active");
    toggleBtn.textContent = isMenuOpen ? "×" : "☰";
    toggleBtn.setAttribute("aria-expanded", isMenuOpen);
    if (isMenuOpen) {
        header.classList.add("menu-open");
    } else {
        header.classList.remove("menu-open");
        if (window.scrollY <= 50) {
            header.classList.remove("scrolled");
        }
    }
});
