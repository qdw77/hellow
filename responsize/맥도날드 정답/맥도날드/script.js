// 검색칭
// 클래스 탈부착

// search-btn 클릭 했을 때 search한테 is-open class add(검색 창 열기)
// search-close-btn 클릭 했을 때 search 한테 is-open class remove (검색창)

let search = document.querySelector('.search');
let searchOpenBtn = document.querySelector('.search-btn');
let searchClose = document.querySelector('.search-close-btn');


function searchOpen(){
///search한테 is-open class add(검색창 열기)
// 대상.classList.add('클래스명')
  search.classList.add('is-open');
}

searchOpenBtn.addEventListener('click', searchOpen);

function searchCloseBtn(){
  //search 한테 is-open class remove (검색창)
  search.classList.remove('is-open');
}

/// search-close-btn 클릭 했을 때 클릭 이벤트 추가
searchClose.addEventListener('click', searchCloseBtn );

// 사이드바
// sidebarOpen 함수 생성
// sidebar active class add /overlay active class add
let sidebar = document.querySelector('.sidebar');
let sidebarOpenBtn = document.querySelector('.sidebar-open-btn');
let overlay = document.querySelector('.overlay');


function sidebarOpen() {
  ///sidebar active class add
  ///overlay active class add
  sidebar.classList.add('active');
  overlay.classList.add('active');
}



sidebarOpenBtn.addEventListener('click', sidebarOpen);

function sidebarClose(){
  sidebar.classList.remove('active');
  overlay.classList.remove('active');
}

overlay.addEventListener('click', sidebarClose);