const ratingNumber = document.querySelector("[data-rating]");
const ratingButtons = document.querySelectorAll('.rating-lists li button')
const submitButton = document.getElementsByClassName('submit-btn')[0];
const thanksCard = document.getElementsByClassName('thanks-card')[0];
const ratingCard = document.getElementsByClassName('rating-card')[0];
const thankyouRatingNumber = document.querySelector('.thanks-content span')

ratingButtons.forEach(ratingButton => {
    ratingButton.addEventListener('click', (e) => {
        ratingNumber.dataset.rating = e.target.value;
    })
})

submitButton.addEventListener('click', (e) => {
    if (ratingNumber.dataset.rating.length <= 0) return;
    thankyouRatingNumber.innerText = ratingNumber.dataset.rating;
    thanksCard.classList.remove('hidden');
    ratingCard.classList.add('hidden');
})