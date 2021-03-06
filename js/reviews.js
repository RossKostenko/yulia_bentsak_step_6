let idx = 0;

class NiceReviews {
    constructor() {
        fetch('reviews.json')
            .then(response => response.json())
            .then(reviews => {
                this.reviews = reviews;
                showCurrentReview();
            } )
    }


    
    showCurrentReview() {
        this.currentReview = this.reviews[idx];
        const reviewElement = document.querySelector('.review-container');
        reviewElement.innerHTML  = `<div class="reviews">
            <div class="character-pic">
                <img class="character-img" src="img/${currentReviews.image}" alt="${currentReviews.name}">
            </div>
            <div class="character">
                <p>${currentReviews.name}</p>
            </div>
            <div class="review">
                <p>${currentReviews.text}</p>
            </div>
        </div>`;
    }

    function showNextReview() {
        idx++;
        if (idx >= reviews.length) idx = 0;
        showCurrentReview();
    }

    function showPrevRevew() {
        idx--
        if (idx < 0) idx = reviews.length -1;
        showCurrentReview();
    }

    document.querySelector('.next-review').addEventListener('click', showNextReview);
    document.querySelector('.prev-review').addEventListener('click', showPrevReview);

    showCurrentReview();
}