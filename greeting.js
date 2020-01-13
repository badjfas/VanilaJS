
//querySelector는 class,tag,id ... element들을 다 가져오지만 제일 첫번째로 
//찾아지는 것 을 쓴다.. 

const form = document.querySelector(".js-form") 
    input = form.querySelector("input");

const greeting = document.querySelector(".js-greetings");
const USER_LS="currentUser", 
    SHOWING_CN="showing";

    function paintGreeting(text){
        form.classList.remove(SHOWING_CN);
        greeting.classList.add(SHOWING_CN);
        greeting.innerText =   `Hello ${text}`
    }
    function loadName(){
    const currentUser=localStorage.getItem(USER_LS);
    
    if(currentUser===null){
        //사용자 null
    }else{
        paintGreeting(currentUser);
    }
}
function init() {
    loadName();
}
init();