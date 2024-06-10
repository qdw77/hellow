let userid = document.getElementById('userid');
let idwran = document.querySelector('.id-wran')


// keyup 은 키를 눌렀을 다가 놨을 때 나오는 이벤트
userid.addEventListener('focusout', function() {
  // userid.value => input에 입력된 텍스트
  // userid.value.length => input에 입력된 길이
  // 8글자 미만일 때 '아이디들 8글자 이상 입력하시오' (color : green)
  // 8글자 이상일 때 '멋진 아이디네요!' 
  console.log(userid.value)
  if(userid.value.length < 8) {
    idwran.innerHTML = `<span class="txt-red">아이디들 8글자 이상 입력하세요</span>`;
  } else {
    idwran.innerHTML = `<span class = "txt-green">멋진 아이디네요</span>`;
  }
})

let userpw = document.getElementById('userpw')
let pwwarn = document.querySelector('.pw-warn')
userpw.addEventListener('focusout',function(){
  let pwExp = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?_]).{8,16}$/;
  if(!pwExp.test(userpw.value)) {
    pwwarn.innerHTML = `<span class="txt-red">비밀번호에 숫자,영문자,특수문자를 사용하여 8~15자의 비밀번호를 만들어야합니다.</span>`
  } else{
    pwwarn.innerHTML = '';
  }
})

let userPwChk  = document.getElementById('user-pwchk');   
let pwchkWarn = document.querySelector('.pwchk-warn');

userPwChk.addEventListener('focusout',function(){
  if(userpw.value == userPwChk.value){
    pwchkWarn.innerHTML = ''
  } 
  else{
    pwchkWarn.innerHTML =`<span class="txt-red">비밀번호가 일치하지 않습니다.</span>`
  }
  
})


let year = document.getElementById('year')
let month = document.getElementById('month')
let date = document.getElementById('date')

let kst = new Date();
let getYear = kst.getFullYear();




// 1900 i 값이 작거나 같을 때까지 i를 1씩 더하며 반복 //어디서 부터 언제까지 반복 //어디에 넣을 건지
for(let i = 1920; i <= getYear; i++)  {
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

// 취미/5개까지만/alect

let CheckBoxs = document.querySelectorAll('input[type="checkbox"][name="hopbby"]');
let maxCount = 5;

CheckBoxs.forEach((item) =>{
  item.addEventListener('chage',()=> {
    let CheckBoxs = document.querySelectorAll('input[type="checkbox"][name="hopbby"]'):CheckCount
   })
  })