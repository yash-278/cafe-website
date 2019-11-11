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

const mapsSelector = () => {
  if (
    /* if we're on iOS, open in Apple Maps */
    navigator.platform.indexOf("iPhone") != -1 ||
    navigator.platform.indexOf("iPad") != -1 ||
    navigator.platform.indexOf("iPod") != -1
  )
    window.open(
      "maps://maps.google.com/maps?daddr=16.8458696,74.5821868&amp;ll="
    );
  /* else use Google */ else
    window.open(
      "https://maps.google.com/maps?daddr=16.8458696,74.5821868&amp;ll="
    );
};

navSlide();
