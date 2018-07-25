'use strict';

// let url = 'https://pixabay.com/api/?key=5018958-ed49ccd90878e6614abdf24a6&category=backgrounds&order=popular&per_page=9';
//
// fetch(url)
//     .then(response => {
//         if (response.ok) {
//             return response.json()
//         }
//     })
//     .then(data => data.hits);




function getAdressPB() {
    // let input = document.querySelector('.cars').value;
    let city = prompt('City');
    // let adress = prompt('Adress');
    let url =  `https://api.privatbank.ua/p24api/pboffice?json&city=${city}`;
    fetch(url)
        .then(response => response.ok ? response.json() : '')
        .then(data => console.log(data))
}

getAdressPB();

/*

// function getAllPropValues(arr, obj) {
//
// }
//
// const users = [
//     { name: 'Poly', age: 7, mood: 'happy' },
//     { name: 'Mango', age: 4, mood: 'blissful'},
//     { name: 'Ajax', age: 3, mood: 'tired' }
// ];
//
// // Вызовы функции для проверки
// console.log(
//     // getAllPropValues(users, 'name')
// ); // ['Poly', 'Mango', 'Ajax']
//
// console.log(
//     // getAllPropValues(users, 'mood')
// ); // ['happy', 'blissful', 'tired']
//
// console.log(
//     // getAllPropValues(users, 'active')
// ); // []

// for(let i of users) {
//     console.log(i.name);
//     for(let b in i){
//         console.log(i.b);
//     }
// }
*/