document.getElementById('startAnimation').addEventListener('click', () => {
    createSnowflakes();
});

function createSnowflakes() {
    const snowfallElements = document.querySelectorAll('#snowfall');

    snowfallElements.forEach(snowfall => {
        for (let i = 0; i < 30; i++) {
            const snowflake = document.createElement('div');
            snowflake.className = 'snowflake';
            snowflake.style.left = `${Math.random() * 100}vw`;
            snowflake.style.animationDuration = `${Math.random() * 8 + 3}s`;
            const size = Math.random() * (25 - 10) + 10;
            snowflake.style.width = `${size}px`;
            snowflake.style.height = `${size}px`;

            snowfall.appendChild(snowflake);

            snowflake.addEventListener('animationend', () => {
                snowflake.remove();
            });
        }
    });
}

function scrollToNextSection() {
    const section2 = document.getElementById('section2');
    if (section2) {
      section2.scrollIntoView({ behavior: 'smooth' });
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const sliderImages = document.querySelectorAll('.image-slider img');
    let currentIndex = 0;

    function showImage(index) {
        sliderImages.forEach((img, i) => {
            img.style.display = i === index ? 'block' : 'none';
        });
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % sliderImages.length;
        showImage(currentIndex);
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + sliderImages.length) % sliderImages.length;
        showImage(currentIndex);
    }


    showImage(currentIndex);

    document.getElementById('next-button').addEventListener('click', nextImage);
    document.getElementById('prev-button').addEventListener('click', prevImage);
});