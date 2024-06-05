
let hello = document.getElementById('hello');
let changeBtn = document.getElementById('txt-changing-btn');

hello.innerHTML = '안녕!';
hello.style.color = 'red';

changeBtn.addEventListener('click', () => {
  hello.innerHTML = 'Hello';
  hello.style.color = 'blue';
})
//querySelectorAll은 모든 item들을 다 찾아온다
  let items = document.querySelectorAll('.item');
  console.log(items)

document.querySelectorAll('.item')[0].style.color = 'blue';
document.querySelectorAll('.item')[1].style.color = 'blue';
document.querySelectorAll('.item')[2].style.color = 'blue';

//j-Qurey 한 번에 적용
  $('.item').css('color', 'red');

  // for 반복문
  for(let i = 0; i < items.length; i++ ) {
    // console.log(i)
    items[i].innerHTML = 'for 반복문';
  }


  // 배열반복 forEach
  // 배열.forEach((item) => {

  // })

  // items.forEach((item) => {
  //  item.innerHTML ='반복문';
  // })

  // 자료형/ ''가 있을 경우 문자열로 인식
// numbur
  let num = 5;
// string
  let num1 = '5';
  let txt = '안녕하세요!';
  // 숫자, 문자, 변수는 ''에 넣지 않고 문자열은 따옴표에 넣는다.
  console.log(typeof(num1))
  console.log(num1)
  console.log(typeof('txt'));
  console.log(typeof(txt));

  // Array(배열), object
  // 여러 값을 한번에 담을 때
  // Array : []
  // Object : {}
            // 0, 1, 2, 3
  let arr = ['yo', 465, 'gg', 'txt'];
  console.log(arr[1])
