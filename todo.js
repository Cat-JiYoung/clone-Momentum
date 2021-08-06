const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
let toDos = []; //const를 let으로 바꿔서 업데이트가 가능하게끔 만든다

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //toDos를 string으로 바꿔줌
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); //li.id는 문자열타입이므로 숫자로 변환해줌
    saveToDos();
}

function paintToDo(newTodo) { //html에 리스트 추가하는 함수
    const li = document.createElement("li"); //html을 js에서 만들어줌
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌"
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);  //li안에 span을 넣어줌
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) { //form input 값 제출 시 리스트를 만들어주는 함수
    event.preventDefault(); //엔터를 눌러도 새로고침되지 않음
    const newTodo = toDoInput.value; //input의 현재 value를 새로운 변수에 복사
    toDoInput.value = ""; //입력창 비워줌
    const newTodoObj = {
        text: newTodo,
        id: Date.now(), //랜덤 숫자값
    };
    toDos.push(newTodoObj); //빈배열인 toDos에 서버로 입력받은 text를 push해줌
    paintToDo(newTodoObj); //입력받은 값을 paintToDo함수로 보냄(화면에 노출되게끔)
    saveToDos(); //데이터를 저장소에 저장한다.
}

toDoForm.addEventListener("submit",handleToDoSubmit); 

const SavedToDos = localStorage.getItem(TODOS_KEY);

if (SavedToDos !== null) {
    const parsedToDos = JSON.parse(SavedToDos); //local storage에 todos가 있으면 
    toDos = parsedToDos; //예전 todos도 보관하게끔 한다
    parsedToDos.forEach(paintToDo);
}