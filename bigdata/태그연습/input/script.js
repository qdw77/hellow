let year = document.querySelector('.year');
// 한국표준시 (korea standard time)
let kst = new Date();
let getYear = kst.getFullYear(); // 년도
let getMonth = kst.getMonth(); //월
let gatDat = kst.getDate(); //일
console.log(gatDat)


// for(let i = 1920; i <= 2024; i++) {
//   let options = document.createElement('option');
//   options.innerHTML = i
//   year.appendChild(options);
// }-방법1
for(let i = 1920; i <= getYear; i++) {
  // let options = `<option>${i}</option> `;
  // // afterbegin,beforebegin,afterbegin,afterend,beforend
  // // 추가하고 싶은 곳.insertAdjacentHTML('위치',추가할 요소)
  // year.insertAdjacentHTML('beforeend', options);


  // jQuery
  $('.year').append('<option>' + i + '</option>');
}

