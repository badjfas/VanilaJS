const clockContaioner = document.querySelector(".js-clock"),
      clockTitle = clockContaioner.querySelector("h1");

function getTime(){
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${hours}:${minutes}:${seconds}`;
}

function init(){
  getTime();
}
init();