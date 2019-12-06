const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  //*============ Toggle Navbar

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    //* =========== Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +
          0.3}s`;
      }
    });

    //* ============ Animate Burger
    burger.classList.toggle("toggle");
  });
};

const activeButton = () => {
  const menuButton1 = document.querySelector(".menuButton1");
  const menuButton2 = document.querySelector(".menuButton2");
  const menuButton3 = document.querySelector(".menuButton3");

  menuButton1.addEventListener("click", () => {
    menuButton1.classList.toggle("btn-dark");
  });

  menuButton2.addEventListener("click", () => {
    menuButton2.classList.toggle("btn-dark");
  });

  menuButton3.addEventListener("click", () => {
    menuButton3.classList.toggle("btn-dark");
  });
};

navSlide();
activeButton();
