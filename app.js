closeButton = document.querySelector('.popup-image span');

document.querySelectorAll('.image-container img').forEach(image => {
    image.onclick = () => {
    document.querySelector('.popup-image ').style.display = 'block';
    document.querySelector('.popup-image img').src = image.getAttribute('src');;
    }
});

closeButton.addEventListener('click', () => {
    document.querySelector('.popup-image ').style.display = 'none';

});