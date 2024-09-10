onload();


function onload() {
  menuSideBar();
  animationForMobile();
  dekstopAnimation();
}

function menuSideBar(){
  const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const close = document.getElementById("close");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("show");
  hamburger.classList.toggle("toggle");
});

close.addEventListener("click", () => {
  menu.classList.remove("show");
  hamburger.classList.remove("toggle");
});
}

function animationForMobile() {
  let mm = gsap.matchMedia();
  let tl = gsap.timeline();
  mm.add("(max-width:1023px)", ()=>{

    gsap.from(".logo",  {
      x: -1000,
      opacity: 0,
      duration: 1,
    })
    gsap.from("#hamburger",  {
      x: 1000,
      opacity: 0,
      duration: 1.2,
    })
    gsap.from(".textarea h1, .textarea h2, .textarea p,.textarea button", {
      opacity: 0,
      y: 50,
      stagger: 0.2,   // 0.2 seconds delay between each animation
      duration: 1     // Each animation lasts 1 second
    });

    gsap.from(".img img", {
      opacity: 0,
      y: 50,
      duration: 1,
    })

    // gsap.from(".pictures img, .pictures h1", {
    //   y: 100,
    //   opacity: 0,
    //   duration: 1,
    //   stagger: 0.2,
    //   scrollTrigger: {
    //     trigger: ".second-page",
    //   }
    // })

  })
}

function dekstopAnimation(){
  let mm = gsap.matchMedia();
  mm.add("(min-width:1024px)", ()=>{
    gsap.from(".logo, .desktop-menu a",{
      y: -100,
      duration: 1,
      opacity: 0,
      stagger: 0.2,
    });
    gsap.from(".textarea h1, .textarea h2, .textarea p, .textarea button", {
      x: -100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
    })
    gsap.from(".img img", {
      x: 100,
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
    })
    gsap.from(".pictures img, .pictures h1",{
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".pictures",
        start: "top 60%"
      }
    })
    gsap.from(".textsarea h1, .textsarea p, .textsarea button, .textsarea i", {
      y: 100,
      duration: 1,
      opacity: 0,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".textsarea",
        start: "top 40%",
      }
    })
    gsap.from(".textarea-fourth h1, .textarea-fourth p, .textarea-fourth button", {
      y: 100,
      duration: 1,
      opacity: 0,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".textarea-fourth",
        start: "top 50%",
      }
    })
  })
}


