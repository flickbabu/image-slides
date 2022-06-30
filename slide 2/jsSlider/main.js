const images = [
    'images/neck2.jpg',
    'images/watch2.jpg',
    'images/watch4.jpg',
]

const imageSlider = document.querySelector('#imageSlider')

let current = 0

imageSlider.src = images[current]

function slideImages() {
    imageSlider.src = images[current]
    if (current < images.length - 1) {
        current++;
    }
    else {
        current = 0;
    }


    setTimeout('slideImages()', 2000);
}

slideImages()
