const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");

slides.forEach(function(slide, index) {
  slide.style.left = `${index * 100}%`;
});

let counter = 0;

nextBtn.addEventListener("click", () => {
  counter++;
  carousel();
});

prevBtn.addEventListener("click", () => {
  counter--;
  carousel();
});

carousel = () => {
  // working with slides
  // when we reach last slide, go back to the first one
  if (counter === slides.length) {
    counter = 0;
  }
  // when we are at first one and click previous, go to the last one
  if (counter < 0) {
    counter = slides.length - 1;
  }
  slides.forEach(function(slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}
