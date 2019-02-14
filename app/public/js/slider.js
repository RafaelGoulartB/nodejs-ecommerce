let current = 1;

updateSlider(1);

function updateSlider(pos) {
  const frame = document.getElementById('frame');
  const dotSlider = document.getElementById('dots');
  
  if(pos == 1) {
    // Change IMG
    frame.classList.add('img-1');
    frame.classList.remove('img-2');
    frame.classList.remove('img-3');
    // Change Dots
    dotSlider.children[0].classList.add('selected');
    dotSlider.children[1].classList.remove('selected');
    dotSlider.children[2].classList.remove('selected');
  }
  if(pos == 2) {
    frame.classList.remove('img-1');
    frame.classList.add('img-2');
    frame.classList.remove('img-3');

    dotSlider.children[0].classList.remove('selected');
    dotSlider.children[1].classList.add('selected');
    dotSlider.children[2].classList.remove('selected');
  }
  if(pos == 3) {
    frame.classList.remove('img-1');
    frame.classList.remove('img-2');
    frame.classList.add('img-3');

    dotSlider.children[0].classList.remove('selected');
    dotSlider.children[1].classList.remove('selected');
    dotSlider.children[2].classList.add('selected');
  }
}

function nextSlider() {
  if(current >= 3) current = 1;
  else current = ++current;

  updateSlider(current)
}
function previusSlider() {
  if(current <= 1) current = 3;
  else current = --current;

  updateSlider(current)
}
