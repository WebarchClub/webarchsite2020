// animations

let tl = anime.timeline({
  easing: "easeOutExpo",
  duration: 500
});
tl.add({
  targets: ".animateDiv",
  width: "100%",
  backgroundColor: "#00bdaa",
  delay: anime.stagger(100)
});
tl.add({
  targets: ".animateDiv",
  width: "100%",
  backgroundColor: "#0f4c75"
});
tl.add({
  targets: ".logo",
  top: "23%",
  opacity: "1",
  duration: "100",
  delay: anime.stagger(100)
});
tl.add({
  targets: ".main-heading",
  top: "20%",
  opacity: "1",
  duration: "100"
});
tl.add({
  targets: "p",
  top: "37%",
  opacity: "1",
  delay: anime.stagger(50)
});
tl.add({
  targets: "nav",
  opacity: "1"
});
tl.add({
  targets: ".social-icons",
  opacity: "1"
});

// hamburger

const hamburger = document.getElementById("hamburger");
const navul = document.getElementById("nav-ul");
const container = document.getElementById("container");

hamburger.addEventListener("click", () => {
  navul.classList.toggle("show");
  container.classList.toggle("height");
});

//Aos
AOS.init();

// carousel
$(".carousel").carousel({
  interval: 2000,
  keyboard: true,
  pause: "hover",
  wrap: true
});
