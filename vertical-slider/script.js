const sliderContainer = document.querySelector('.slider-container');
const rightSlide = document.querySelector('.right-slide');
const leftSlide = document.querySelector('.left-slide');
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const slideLength = rightSlide.querySelectorAll('div').length;

let activeSlideIndex = 0;

leftSlide.style.top = `-${(slideLength - 1) * 100}vh`

upButton.addEventListener('click', () => changeSlides('up'));
downButton.addEventListener('click', () => changeSlides('down'));

const changeSlides = (direction) => {
    const slideHeight = sliderContainer.clientHeight;

    if (direction === 'up') {
        activeSlideIndex++;

        if (activeSlideIndex > slideLength - 1) {
            activeSlideIndex = 0;
        }
    } else if (direction === 'down') {
        activeSlideIndex--;
        if (activeSlideIndex < 0) {
            activeSlideIndex = slideLength - 1;
        }

    }

    rightSlide.style.transform = `translateY(-${slideHeight * activeSlideIndex}px)`;
    leftSlide.style.transform = `translateY(${slideHeight * activeSlideIndex}px)`;
}
