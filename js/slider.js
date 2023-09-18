const slider = document.getElementsByTagName("figure");

let i = 0;

const leftSlide = () => {
  slider[i].className = "portfolio_container_img";
  i--;
  if (i <= -1) {
    i = slider.length - 1;
  }
  slider[i].className = "portfolio_container_img_active";
};

const rightSlide = () => {
  slider[i].className = "portfolio_container_img";
  i++;
  if (i >= slider.length) {
    i = 0;
  }
  slider[i].className = "portfolio_container_img_active";
};

document
  .querySelector(".portfolio_leftArrow")
  .addEventListener("click", leftSlide);

document
  .querySelector(".portfolio_rightArrow")
  .addEventListener("click", rightSlide);
