

const slides = document.querySelectorAll(".armchairs_card");
let idx = 0;

function ChangeSlide() {
  if (idx > slides.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = slides.length - 1;
  }
  for (const slide of slides) {
    slide.style.transform = `translate(${-idx * 250}px   )`;
  }
}

$("#slide-arrow-next").addEventListener("click", (e) => {
  idx++;
  resetInterval();
  ChangeSlide();
});
$("#slide-arrow-prev").addEventListener("click", (e) => {
  idx--;
  resetInterval();
  ChangeSlide();
});

let interval = setInterval(run, 4000);

function run() {
  idx++;

  ChangeSlide();
}

function resetInterval() {
  clearInterval(interval);

  interval = setInterval(run, 4000);
}












