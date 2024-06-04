
let hello = document.getElementById('hello');
let changeBtn = document.getElementById('txt-changing-btn');

hello.innerHTML = '안녕!';
hello.style.color = 'red';

changeBtn.addEventListener('click', () => {
  hello.innerHTML = 'Hello';
  hello.style.color = 'blue';
})
  //querySelectorAll은 모든 item들을 다 찾아온다
let item = document.querySelectorAll('.item');

document.querySelectorAll('.item')[0].style.color = 'blue';
document.querySelectorAll('.item')[1].style.color = 'blue';
document.querySelectorAll('.item')[2].style.color = 'blue';

  //j-Qurey
  $('.item').css('color', 'red');

