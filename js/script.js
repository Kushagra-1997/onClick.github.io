let myImage = document.querySelector('img');

myImage.onclick = function() {
    let imgValue = myImage.getAttribute('src');
    if (imgValue == "img1.jpeg") {
        myImage.setAttribute('src', 'img2.jpeg');
    } else {
        alert('No change in the Image');
    }
}