const date = new Date();

const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();
const hour = date.getHours();
const minutes = date.getMinutes();

// console.log('date: ' + date.toLocaleDateString('ko-kr'));
// console.log('year: ' + year);
// console.log('month: ' + month);
// console.log('day: ' + day);

const $el = document.querySelector('.user-time')

$el.innerHTML += `<p id="meal-time-p">${year}년 ${month}월 ${day}일 ${hour}:${minutes}</p>`;

