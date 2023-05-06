let i = 0;
let slider = document.getElementsByTagName("figure");

function leftSlide() {
  slider[i].className = "portfolio_container_img";
  i--;
  if (i <= -1) {
    i = slider.length - 1;
  }
  slider[i].className = "portfolio_container_img_active";
}

function rightSlide() {
  slider[i].className = "portfolio_container_img";
  i++;
  if (i >= slider.length) {
    i = 0;
  }
  slider[i].className = "portfolio_container_img_active";
}

document
  .getElementsByClassName("portfolio_leftArrow")[0]
  .addEventListener("click", leftSlide);

document
  .getElementsByClassName("portfolio_rightArrow")[0]
  .addEventListener("click", rightSlide);
