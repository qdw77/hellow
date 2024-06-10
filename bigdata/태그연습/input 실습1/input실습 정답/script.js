let year = document.getElementById('year')
let month = document.getElementById('month')
let date = document.getElementById('date')

let kst = new Date();
let getYear = kst.getFullYear();

// 1900 i 값이 작거나 같을 때까지 i를 1씩 더하며 반복
for(let i = 1920; i <= getYear; i++) {
  let option = `<option>${i}</option>`;
  year.insertAdjacentHTML('beforeend',option);
}

for(let i = 1; i <=12; i++) {
  let option = `<option>${i}</option>`;
  month.insertAdjacentHTML('beforeend',option);
}

for(let i = 1; i <=31; i++) {
  let option = `<option>${i}</option>`;
  date.insertAdjacentHTML('beforeend',option);
}
