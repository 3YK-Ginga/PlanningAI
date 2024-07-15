document.addEventListener('DOMContentLoaded', function() {
    const images = [
        'url(./images/image1.jpg)',
        'url(./images/image2.jpg)',
        'url(./images/image3.jpg)',
        'url(./images/image4.jpg)',
        'url(./images/image5.jpg)'
    ];

    const slideshowElement = document.querySelector('.slideshow');

    images.forEach(image => {
        const div = document.createElement('div');
        div.style.backgroundImage = image;
        slideshowElement.appendChild(div);
    });
});
