
productListDomString = '
    <div class="review-karen">
        <div class="character-pic">
            <img class="character-img" src="img/${this.image}" alt="${this.name}">
        </div>
        <div class="character">
            <p>${this.name}</p>
        </div>
        <div class="review">
            <p>${this.text}</p>
        </div>
    </div>';

    class NiceReviews {
        constructor() {
            fetch('reviews.json')
                .then(response => response.json());
                .then(reviews => {
                    this.reviews = reviews;
                    showReview();
                } )
        } 
        showReview() {
            this.reviews.length;
        }
    }