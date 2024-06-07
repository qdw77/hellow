// mode-btn class안 텍스트를 가져온다
// 텍스트가 Dark일 경우(조건)
// mode-btn 클릭하면 (클릭 이벤트) 텍스트를 'Light'로 바꾼다
// header태그에 dark class add

let modeBtn = document.querySelector('.mode-btn');
let count = 0;

function modeToggle() {
  let modeTxt = modeBtn.innerHTML;
  let header = document.querySelector('header');
  
  // count = count +1;
    count += 1;

  console.log(count)

  if(count % 2 == 0) {
    this.innerHTML = 'Dark';
    header.classList.remove('dark');
  }
    else {
      this.innerHTML = 'Light';
      header.classList.add('dark');
    }


  // if(modeTxt == 'Dark') {
  //   //텍스트를 LIght로 바꾼다
  //   modeBtn.innerHTML = 'Light';
  //   //header태그에 dark class add
  //   header.classList.add('dark');
  // } 
  // else {
  //   // 텍스트를 'Dark'로 바꾼다
  //   modeBtn.innerHTML = 'Dark';
  //   // header태그에 dark class add
  //   header.classList.remove('dark');
  // }
}
//클릭 이벤트
modeBtn.addEventListener('click', modeToggle)