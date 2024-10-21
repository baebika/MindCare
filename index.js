//Active page
// const activePage = window.location.pathname;
// console.log(activePage)


//Blog Section Slider
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const blogsContainer = document.querySelector('.blogs-container');

function updateArrowVisibility() {
    const scrollLeft = blogsContainer.scrollLeft;
    const scrollWidth = blogsContainer.scrollWidth;
    const clientWidth = blogsContainer.clientWidth;

    // Show left arrow only if scrolled to the right
    if (scrollLeft > 0) {
        leftArrow.classList.remove('hidden');
    } else {
        leftArrow.classList.add('hidden');
    }

    // Show right arrow only if not at the end
    if (scrollLeft < scrollWidth - clientWidth) {
        rightArrow.classList.remove('hidden');
    } else {
        rightArrow.classList.add('hidden');
    }
}

// Initial visibility check
updateArrowVisibility();

// Add scroll event listener
blogsContainer.addEventListener('scroll', updateArrowVisibility);

// Add click event for left arrow
leftArrow.addEventListener('click', () => {
    blogsContainer.scrollBy({
        left: -blogsContainer.clientWidth, 
        behavior: 'smooth' 
    });
});

// Add click event for right arrow
rightArrow.addEventListener('click', () => {
    blogsContainer.scrollBy({
        left: blogsContainer.clientWidth, 
        behavior: 'smooth' 
    });
});

