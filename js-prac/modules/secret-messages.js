const buttonElem = document.getElementById('secret-button');
const paragraphElem = document.getElementById('secret-p');

const toggleHiddenElement = (domElement) => {
    if (domElement.style.display === 'none') {
        domElement.style.display = 'block';
    } else {
        domElement.style.display = 'none';
    }
}

buttonElem.addEventListener("click", () => {
    toggleHiddenElement(paragraphElem);
})
