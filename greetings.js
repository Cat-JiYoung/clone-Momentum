const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; //반복되는 string은 변수로 못박아두자 (오타 방지)
const USERNAME_KEY = "username";

/*브라우저가 기본 동작을 실행하지 못하게 막아줌*/
function LoginSubmit(event){ 
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME); //입력 후에 창이 사라지게끔 함
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username); //로컬저장소에 입력받은 이름을 저장함
    paintGreetings(username);
}

function paintGreetings(username) {  //화면 출력해주는 함수
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME); //greeting에 기본적으로 hidden이 내장되어 있어서 해제시켜줘야함
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME); //기본값이 form창 없는거니까 해제해줌
    loginForm.addEventListener("submit", LoginSubmit);
} else {
    paintGreetings(savedUserName); //위에 있는 문구가 나오게끔 hidden 해제
}