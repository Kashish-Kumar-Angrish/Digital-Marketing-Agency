let wrapper = document.querySelector(".wrapper");
let cursor = document.querySelector(".cursor");
console.log(wrapper);

wrapper.addEventListener("mousemove", (event) => {
  gsap.to(cursor, {
    x: event.x,
    y: event.y,
  });
});

function page1Animation() {
  let tl = gsap.timeline();

  tl.from(".main h1, .nav h4, .nav button", {
    y: -200,
    opacity: 0,
    delay: 0.5,
    duration: 1.2,
    stagger: 0.1,
  });

  tl.from(
    ".center-1 h1",
    {
      x: -100,
      opacity: 0,
      duration: 1.2,
    },
    "-=1"
  );

  tl.from(
    ".center-1 p",
    {
      x: -100,
      opacity: 0,
      duration: 1.6,
    },
    "-=1"
  );

  tl.from(
    ".center-1 button",
    {
      opacity: 0,
    },
    "-=1"
  );
  tl.from(
    ".center img",
    {
      x: 100,
      rotateY: 180,
      opacity: 0,
      duration: 0.5,
    },
    "-=1"
  );
}
page1Animation();
