

document.addEventListener("DOMContentLoaded", () => {
  const slides = document.getElementById("slides");
  const totalSlides = slides.children.length;
  let index = 0;

  function showSlide(i) {
    slides.style.transform = `translateX(-${i * 100}%)`;
  }

  document.getElementById("next").addEventListener("click", () => {
    index = (index + 1) % totalSlides;
    showSlide(index);
  });

  document.getElementById("prev").addEventListener("click", () => {
    index = (index - 1 + totalSlides) % totalSlides;
    showSlide(index);
  });

  setInterval(() => {
    index = (index + 1) % totalSlides;
    showSlide(index);
  }, 6000);
});
