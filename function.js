const carouselConfigs = [
  { id: "carousel-1", speed: 1, scrollY: 0 },
  { id: "carousel-2", speed: 2, scrollY: 0 },
  { id: "carousel-3", speed: 0.5, scrollY: 0 },
];

const carousels = carouselConfigs.map(config => {
  const el = document.getElementById(config.id);
  el.innerHTML += el.innerHTML; // Duplicate content
  return { ...config, el };
});

function loop() {
  carousels.forEach(carousel => {
    carousel.scrollY += carousel.speed;

    if (carousel.scrollY >= carousel.el.scrollHeight / 2) {
      carousel.scrollY = 0;
    }

    carousel.el.style.transform = `translateY(-${carousel.scrollY}px)`;
  });

  requestAnimationFrame(loop);
}

loop();

//added function for fade in effect
//es5
// window.addEventListener('load', function () {
//   const stage = document.getElementById('carousel-stage');
//   if (stage) {
//     stage.classList.add('fade-in');
//   }
// });

//es6
window.addEventListener('load', () => {
  document.getElementById('carousel-stage')?.classList.add('fade-in');
});




// const carousel1 = document.getElementById("carousel-1");
// const carousel2 = document.getElementById("carousel-2");
// const carousel3 = document.getElementById("carousel-3");
// const speed = 1;
// let scrollY = 0;

// // Duplicate the content
// carousel1.innerHTML += carousel1.innerHTML;
// carousel2.innerHTML += carousel2.innerHTML;
// carousel3.innerHTML += carousel3.innerHTML;

// function loop() {
//   scrollY += speed;

//   // Reset transform position once it's halfway
//   if (scrollY >= carousel1.scrollHeight / 2) {
//     scrollY = 0;
//   }
//   if (scrollY >= carousel2.scrollHeight / 2) {
//     scrollY = 0;
//   }
//   if (scrollY >= carousel3.scrollHeight / 2) {
//     scrollY = 0;
//   }

//   carousel1.style.transform = `translateY(-${scrollY}px)`;
//   carousel2.style.transform = `translateY(-${scrollY}px)`;
//   carousel3.style.transform = `translateY(-${scrollY}px)`;

//   requestAnimationFrame(loop);
// }

// loop();

// function animate() {
//     y += speed;
  
//     // Reset when full scroll height is done (not half)
//     if (y >= carousel.scrollHeight / 2) {
//       y = 0;
//     }
  
//     carousel.style.transform = `translateY(-${y}px)`;
//     requestAnimationFrame(animate);
//   }
  
//   animate();