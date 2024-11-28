const ratingButtons = document.querySelectorAll('.rating-btn');
const selectedRating = document.getElementById('selected-rating');
const thankYouState = document.getElementById('thank-you-state');
const submitButton = document.querySelector('.submit-btn');
let rating = 0;

ratingButtons.forEach(button => {
  button.addEventListener('click', () => {
    rating = parseInt(button.dataset.rating, 10);
    ratingButtons.forEach(btn => btn.classList.remove('selected'));
    button.classList.add('selected');
  });
});

submitButton.addEventListener('click', () => {
  if (parseInt(rating, 10) > 0) {
    selectedRating.textContent = rating;
    thankYouState.hidden = false;
  } else {
    window.alert('Please select a rating before submitting.');
  }
});
