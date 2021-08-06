const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");  //string이 가지는 길이를 2로 설정, 그렇지않으면 앞에 '0'추가
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = (`${hours}:${minutes}:${seconds}`)
}
getClock(); //호출해야 기다릴 필요없이 바로 시간이 나옴
setInterval(getClock, 1000); //실시간으로 1초마다 시간갱신