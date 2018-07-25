'use strict';
/*

function balyk() {
    alert('Балык на воротник')
}

// setTimeout(balyk, 1000);
// setInterval(balyk, 1);
// set

// const ID = setInterval(balyk,10);
// console.log(ID);
// let btn = document.querySelector('.stop');


// function sayHello() {
//     console.log("Hello!");
// }
//
// // const ID = setTimeout(sayHello, 5000);
// const ID = setInterval(sayHello, 100);
// console.log(ID);
// let btn = document.querySelector('.stop');
// btn.addEventListener('click', function () {
//     // clearTimeout(ID);
//     clearInterval(ID);
//     console.log('timer stop');
// });
// // setImmediate()
//
// let date = new Date();
// console.log(date.getHours());

// let date = new Date('6, 1994, May');
// // console.log(date);
// let arr = '';
// let a = 23;
// let b = 1990;
// let c = 'April';
// // let a = prompt('asdasd');
// //
// // let b =prompt('afsgfas');
// // let c = prompt('asdasd');
// let date = new Date(`${a},${b},${c}`);
// let days = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'Пятниця', 'Субота', 'Неділя'];
// let day = date.getDay();
// console.log(days[day - 1]);
// // console.log(days[day]);
//
// // for (let i = 0; i < 3; i++) {
// //
// //     let kolo = prompt('Введи через запятую');
// //
// //     arr += kolo + ',';
// // }
// console.log(arr);
// console.log(date);

// console.log(moment('DD.MM.YYYY'));*/

// let arr = '';
// let a = 23;
// let b = 1990;
// let c = 'April';

// let date = new Date(`${a},${b},${c}`);
// let daysed = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'Пятниця', 'Субота', 'Неділя'];
// let day = date.getDay();
// console.log(daysed[day - 1]);
// console.log(days[day]);

// for (let i = 0; i < 3; i++) {
//
//     let kolo = prompt('Введи через запятую');
//
//     arr += kolo + ',';
// }
// console.log(arr);
// console.log(date);

// const deadline2 = new Date(2019, 0, 1, 0, 0, 0);

/*
let a = prompt('День');
let b = prompt('Месяц');
let c = prompt('Год');

const days = document.querySelector('.days');
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');

const deadline2 = new Date(`${a},${b},${c}`);

function timer() {
    const today = new Date();
    let result = deadline2 - today;
    let a = Math.floor(result / 1000) % 60;
    let b = Math.floor(result / 60000) % 60;
    let c = Math.floor(result / 3600000) % 24;
    let d = Math.floor(result / 86400000);

    // console.log(`Дней: ${d} - Часов: ${c} - Минут: ${b} - Секунд: ${a}`);
    seconds.textContent = a < 10 ? `0${a}` : a;
    minutes.textContent = b < 10 ? `0${b}` : b;
    hours.textContent = c < 10 ? `0${c}` : c;
    days.textContent = d < 10 ? `0${d}` : d;
}

setInterval(timer, 1000);*/

// const promise = new Promise((resolve, reject) => {
//    setTimeout(() => {
//        resolve('success!');
//    }, 2000)
// });
//
// console.log('before');
//
// promise.then(data => {
//     console.log('inside');
//     console.log(data);
// });

// const promise = new Promise((r))


