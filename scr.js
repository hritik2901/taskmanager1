let black = document.querySelector("#black");
let topScreen = document.querySelector("#topScreen");
let resultScreen = document.querySelector("#resultScreen");
let container = document.querySelector(".container");

const tl = gsap.timeline();

tl.fromTo(
  "#text",
  2.2,
  {
    transform: "translate(-50%, -50%) translateX(200px)",
    opacity: 1,
  },
  {
    transform: "translate(-50%, -50%) translateX(0px)",
    opacity: 1,
    ease: Expo.easeInOut,
  }
)
  .fromTo(
    "#text",
    2.2,
    {
      transform: "translate(-50%, -50%) translateX(0px)",
      opacity: 1,
    },
    {
      transform: "translate(-50%, -50%) translateX(-200px)",
      opacity: 0,
      ease: Expo.easeInOut,
    }
  )
  .fromTo(
    black,
    2,
    {
      x: "0%",
      opacity: 1,
    },
    {
      x: "-120%",
      opacity: 0.7,
      ease: Expo.easeInOut,
      onComplete: function () {
        black.style.display = "none";
      },
    },
    "-=1.5"
  )
  .to(
    "#topScreen",
    1.4,
    {
      top: "0%",
      ease: Expo.easeInOut,
    },
    "-=1.4"
  )
  .fromTo(
    "#topScreen .container",
    2,
    {
      y: "30px",
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      onComplete: function () {
        topScreen.style.position = "static";
      },
      ease: Expo.easeInOut,
    }
  )
  .fromTo(
    "#resultScreen",
    3.5,
    {
      opacity: 0,
      y: "30px",
    },
    {
      opacity: 1,
      y: 0,
      ease: Expo.easeInOut,
    },
    "-=1"
  );

