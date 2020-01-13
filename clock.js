const clockContaioner = document.querySelector(".js-clock"),
      clockTitle = clockContaioner.querySelector("h1");

function getTime(){
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`; 
  // ?--> if : --> else 조건 ? 조건 : 조건 --> 삼항연산자

}
function init(){
  getTime();
  setInterval(getTime,1000);
}
init();

