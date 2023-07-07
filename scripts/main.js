window.addEventListener('scroll', onScroll);

onScroll();
function onScroll() {
  showNavOnScroll();
  showBackToTopButtonOnScroll();
}

function showNavOnScroll() {
  const navigationBar = document.getElementById("navigation");

  if (scrollY > 0) {
    navigationBar.classList.add("scroll");
  } else {
    navigationBar.classList.remove("scroll");
  }
}

function showBackToTopButtonOnScroll() {
  const backToTopButton = document.getElementById("backToTopButton");

  if (scrollY > 550) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
}

function openMenu() {
  document.body.classList.add("menu-expanded");
}

function closeMenu() {
  document.body.classList.remove("menu-expanded");
}

ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 700,
}).reveal(`#home,
#home img,
#home button,
#services, 
#services header, 
#services .card,
#about,
#about header,
#about .content`);
