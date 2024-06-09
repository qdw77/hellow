let year = document.querySelector('.year');
let kst = new Date();
let getYear = kst.getFullYear();

for(let i = 1920; i <= getYear; i++ ) {
    let options = `<option>${i}</option>`;
    year.insertAdjacentHTML('beforeend',options)
}