{
    const images = [
        'img/carousel_style.jpg'
        'img/carousel_make_up.jpg'
        'img/carousel_body_painting.jpg'
    ]

    let currentIdx = 0;

    function showCurrent() {
        const imgElement = document.querySelector('.carousel-try .carousel-test');
        imgElement.src = images[currentIdx];
    }

    function showNext() {
        currentIdx++;
        if (currentIdx >= images.length) currentIdx = 0;
        showCurrent();
    }

    function showPrev() {
        currentIdx--
        if (currentIdx < 0) currentIdx = images.length -1;
        showCurrent();
    }

    setInterval(showNext, 3000);

    document.querySelector('.carousel-try .next').addEventListener('click', showNext);
    document.querySelector('.carousel-try .prev').addEventListener('click', showPrev);

    showCurrent();
}
