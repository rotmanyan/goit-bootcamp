'use strict';

function getValue() {
    let input = document.querySelector('.cars').value;
    let url = `https://pixabay.com/api/?key=5018958-ed49ccd90878e6614abdf24a6&q=${input}&per_page=9`;
    fetch(url)
        .then(response => response.ok ? response.json() : '')
        .then(data => data.hits)
        .then(boto => console.log(boto[0]))
        // .then(galleryArr => galleryCreate(galleryArr, galleryContainer));
    /*    if (input.length > 10) {
            alert('Введите меньше, блять!!!')
        }

        else if (input.length >= 2) {
            console.log(input);
            document.querySelector('.cars').value = '';
        }
        else {
            alert('Введите что-то, блять!!!')
    }*/
}
getValue();
// function galleryCreate(arr, container) {
//     container.innerHTML = arr.reduce((acc, el) => acc + `<div class="one"><p>Photographer is ${el.user}</p><img src=${el.webformatURL}></div>`, '');
// }
//
// let btn = document.querySelector('.btn');
// let galleryContainer = document.querySelector('#container');
//
// btn.addEventListener('click', getValue);
// window.addEventListener('keypress', function (e) {
//     if (e.key.toLowerCase() === 'enter') {
//         // console.log(e);
//         getValue();
//     }
// });
