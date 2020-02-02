let current = 1;

updateSlider(1);

function updateSlider(pos) {
  const frame = document.getElementById('slider');
  const dotSlider = document.getElementById('slider-tabs');

  if (pos == 1) {
    // Change IMG
    frame.classList.add('img-slider1');
    frame.classList.remove('img-slider2');
    frame.classList.remove('img-slider3');
    // Change Dots
    dotSlider.children[0].classList.add('current-tab');
    dotSlider.children[1].classList.remove('current-tab');
    dotSlider.children[2].classList.remove('current-tab');
  }
  if (pos == 2) {
    frame.classList.remove('img-slider1');
    frame.classList.add('img-slider2');
    frame.classList.remove('img-slider3');

    dotSlider.children[0].classList.remove('current-tab');
    dotSlider.children[1].classList.add('current-tab');
    dotSlider.children[2].classList.remove('current-tab');
  }
  if (pos == 3) {
    frame.classList.remove('img-slider1');
    frame.classList.remove('img-slider2');
    frame.classList.add('img-slider3');

    dotSlider.children[0].classList.remove('current-tab');
    dotSlider.children[1].classList.remove('current-tab');
    dotSlider.children[2].classList.add('current-tab');
  }
}

function nextSlider() {
  if (current >= 3) current = 1;
  else current = ++current;

  updateSlider(current);
}
function previusSlider() {
  if (current <= 1) current = 3;
  else current = --current;

  updateSlider(current);
}
