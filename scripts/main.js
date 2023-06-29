function onScroll() {
  showNavOnScroll();
}

function showNavOnScroll() {
  const navigationBar = document.getElementById("navigation");

  if (scrollY > 0) {
    navigationBar.classList.add("scroll");
  } else {
    navigationBar.classList.remove("scroll");
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
