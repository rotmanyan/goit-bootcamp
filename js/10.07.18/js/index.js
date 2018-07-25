'use strict';
/*

//по названию атрибута document.querySelector('[href = #]')

// window.addEventListener('DOMContentLoaded', totalPrice);
// const formClass = document.querySelector('.form');
// const totalP = document.querySelector('.total');
// const amount = document.querySelector('.amount');
// function totalPrice() {
//     const priceInput = document.querySelector('#price').value;
//     const quantityInput = document.querySelector('#quantity').value;
//     let sum = priceInput * quantityInput;
//     totalP.textContent = `${sum.toFixed(2)} грн`;
//     amount.textContent = quantityInput;
//     console.log(priceInput);
//     console.log(quantityInput);
// }
//
// formClass.addEventListener('input', function () {
//     totalPrice()
// });
//

//
// 1) Створити в HTML 5 кнопок
// 2) Написати скрипт який при ховері буде міняти позицію кнопок на екрані, щоб не можна було по них клікнути
// 3) Нова позиція кнопок має бути випадковою
// 4) Кнопки не повинні виїжати за межі екрану
// 5) Позиція кнопок має вираховуватися відносно висоти і ширини вікна браузера
// 6) Переміщення кнопок зробити плавним за допомогою transition
// 7) Визначати кнопку на якій відбулася подія двома способами:
//     7.1) event
// 7.2) this
// 8) Корисні команди:
//     window.innerWidth
// window.innerHeight
// clientHeight
// clientWidth
// mouseenter

// const winButton = document.querySelector('.win');
// const faillButton = document.querySelector('.faill');
// const dangerButton = document.querySelector('.danger');
// const atentionButton = document.querySelector('.atention');
/!*
const btns = document.querySelectorAll('.btn');
const container = document.querySelector('.container');

console.log(btns[0]);
let mass = [200, 300, 400, 555, 665, 989];

function moveBtn(event) {
    let w = window.innerWidth;
    let h = window.innerHeight;
    // console.log(`${w} w, ${h} h`);
    // console.log(event.target);
    event.target.style.top = `${Math.floor(Math.random() * 1000)}px`;
    event.target.style.left = `${Math.floor(Math.random() * 1000)}px`;
}

btns.forEach(el => el.addEventListener('mouseenter', moveBtn));

// container.addEventListener('mouseenter', moveBtn);*!/

/!*
let btns = document.querySelectorAll('.btn');
// let container = document.querySelector('.container');
console.log(btns);

function moveBtn(evt) {
    let btnH = evt.target.clientHeight;
    let btnW = evt.target.clientWidth;
    let randomLeft = Math.floor(Math.random() * (window.innerWidth - btnW));
    let randomTop = Math.floor(Math.random() * (window.innerHeight - btnH));
    evt.target.style.top = `${randomTop}px`;
    evt.target.style.left = `${randomLeft}px`;

}

btns.forEach(el => el.addEventListener('mouseenter', moveBtn));*!/


// const buton = document.querySelector('.btnMa');
//
// function takeBtn(el) {
//     list.classList.toggle('list');
// }
//
// buton.addEventListener('click', takeBtn)

/!*
const list = document.querySelector('.list');

const items = document.querySelectorAll('.item');
const button = document.querySelector('#button');
function wind(e) {
    // console.log(e.target);
    list.classList.toggle('list');
    // list.
    // console.log(el.target);
    // el.target.style.color = 'red';
    // el.target.classList.toggle('color');
    // console.log(navigator.userAgent);
}

button.addEventListener('click', wind);*!/

*/

