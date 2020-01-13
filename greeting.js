//querySelector는 class,tag,id ... element들을 다 가져오지만 제일 첫번째로 
//찾아지는 것 을 쓴다.. 

const form = document.querySelector(".js-form") 
    input = form.querySelector("input");

const greeting = document.querySelector(".js-greetings");
const USER_LS="currentUser", 
    SHOWING_CN="showing";
    
    function saveName(text){
        localStorage.setItem(USER_LS,text);
    }

    function handleSubmit(event){
        event.preventDefault(); //submit이라는 event가 발생하면 page가 refresh 됌.
        const currentValue = input.value;
        paintGreeting(currentValue);
        saveName(currentValue);
    }

    function askForName(){
        form.classList.add(SHOWING_CN);
        form.addEventListener("submit",handleSubmit); //Page가 refresh 되는걸 막음.
    }

    function paintGreeting(text){
        form.classList.remove(SHOWING_CN);
        greeting.classList.add(SHOWING_CN);
        greeting.innerText =   `Hello ${text}`
    }
    function loadName(){
    const currentUser=localStorage.getItem(USER_LS);
    
    if(currentUser===null){
        askForName();
    }else{
        paintGreeting(currentUser);
    }
}
function init() {
    loadName();
}
init();