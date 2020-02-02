const divsRating = document.querySelectorAll('#rating');
console.log(divsRating);

divsRating.forEach((divRating) => {
  let numOfStars = Number(divRating.getAttribute('data-rating'));
  let half_star = false;

  if ((numOfStars%2) != 0) {
    half_star = true;
    numOfStars = Math.floor(numOfStars);
  };

  for (i = 0; i < 5; i++) {
    const star = document.createElement('img');
    star.classList.add('rating-star');

    if (i < numOfStars) {
      star.src = '/img/icons/rating/ic_star_full.png';
      divRating.appendChild(star);
      continue;
    }
    if (half_star) {
      half_star = false;
      star.src = '/img/icons/rating/ic_star_half.png';
      divRating.appendChild(star);
      continue;
    }
    star.src = '/img/icons/rating/ic_star_empty.png';
    divRating.appendChild(star);
  }
});
