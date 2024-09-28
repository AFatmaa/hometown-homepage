function changeTitle() {
    let title = document.getElementById('main-title');
    title.innerHTML = 'Welcome to Istanbul!';
}


const images = [
    ["hagia-sophia.jpg", "hagia-sophia2.jpg", "hagia-sophia3.jpg"],
    ["maidens-tower.jpg", "maidens-tower2.jpg", "maidens-tower3.jpg"],
    ["galata.jpg", "galata2.jpg", "galata3.jpg"]
];

let currentIndices = [0, 0, 0];

function nextImage(carouselIndex) {
    currentIndices[carouselIndex] = (currentIndices[carouselIndex] + 1) % images[carouselIndex].length
    updateCarouselImage(carouselIndex);
}


function prevImage(carouselIndex) {
    currentIndices[carouselIndex]--;
    if (currentIndices[carouselIndex] < 0) {
        currentIndices[carouselIndex] = images[carouselIndex].length - 1;
    }
    updateCarouselImage(carouselIndex);
}


function updateCarouselImage(carouselIndex) {
    const imgElement = document.getElementById(`carousel-img-${carouselIndex}`);
    imgElement.src = images[carouselIndex][currentIndices[carouselIndex]];
}
