const date = new Date();

const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();
const hour = date.getHours();
const minutes = date.getMinutes();


const $el = document.querySelector('.user-time');

$el.innerHTML += `<p id="meal-time-p">${year}년 ${month}월 ${day}일 ${hour}:${minutes}</p>`;

// check
const $meslt = document.querySelector('.meat');
const $poslt = document.querySelector('.poultry');
const $fislt = document.querySelector('.fish');
const $egslt = document.querySelector('.egg');
const $daslt = document.querySelector('.dairy');
const $veslt = document.querySelector('.vegetable');

function mechk() {
    me = !me;
    if(me==true) $meslt.innerHTML += `<i class='mschk bx bx-check'></i>`
    else $meslt.innerHTML = `<img src="/img/vege_2.png">`
}
function pochk() {
    po = !po;
    if(po==true) $poslt.innerHTML += `<i class='mschk bx bx-check'></i>`
    else $poslt.innerHTML = `<img src="/img/vege_3.png">`
}
function fichk() {
    fi = !fi;
    if(fi==true) $fislt.innerHTML += `<i class='mschk bx bx-check'></i>`
    else $fislt.innerHTML = `<img src="/img/vege_4.png">`
}
function egchk() {
    eg = !eg;
    if(eg==true) $egslt.innerHTML += `<i class='mschk bx bx-check'></i>`
    else $egslt.innerHTML = `<img src="/img/vege_5.png">`
}
function dachk() {
    da = !da;
    if(da==true) $daslt.innerHTML += `<i class='mschk bx bx-check'></i>`
    else $daslt.innerHTML = `<img src="/img/vege_6.png">`
}
function vechk() {
    ve = !ve;
    if(ve==true) $veslt.innerHTML += `<i class='mschk bx bx-check'></i>`
    else $veslt.innerHTML = `<img src="/img/vege_1.png">`
}