
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
// 배열에서 원하는 값 가져오기 => 배열이름[숫자]
  console.log(arr[1])

// {key : value} 
  let tel =  01084847386;
  let obj = {
    이름 : 'enjoo',
    전화 : tel,
    주소 : '대전광역시'
  }

  console.log(obj.전화)

  let hi = '안녕하세요 저는 ';
  let name = '박은주';
  // 변수, 문자열 
// ``(빽팀~~)backtick ${변수명}
  let my = hi + name + '입니다';
  let my1 = `안녕하세요 저는 ${name} 입니다`

  // 문자열
  // ''
  // ""
  // ``
    console.log(my1)
    console.log(typeof(my1))

  // 매개변수(parameter)로 이름값
    function info(abc){
      console.log(`안녕하세요 저는 ${abc} 입니다`);
    }

    info('아무개');

// 배열(Array), Object [],{}
// 배열 원하는 값 / 배열이름[num]/배열의 시작은 0부터
//object 원하는 값 / 오브젝트이름. 키값
// key :value, key : value
// 여러 값을 입력하고 싶을 때에는 , 로 구분한다

// 변수,문자열
// 문자열 : '',"",``(백틱, 큰 따옴표, 따옴표)
// + : 변수 + '문자열'
// '안녕' + name(변수) + '나는' + age(변수)
// ``:`안녕 ${name} 나는 ${age}`
// parameter(매개변수)
// 함수를 호출할 때 함수에 넘겨주는 값
