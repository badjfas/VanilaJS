const toDoForm=document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");
    
    const TODOS_LS = "toDos";

    let toDos=[];

    function paintToDo(text){
        console.log(text);
        const newId=toDos.length+1;
        const li= document.createElement("li");
        const delBtn =document.createElement("button");
        const span = document.createElement("span");
        delBtn.innerHTML=`X`;
        delBtn.addEventListener("click",deleteToDos);
        span.innerText=text;
        li.appendChild(span);
        li.appendChild(delBtn);
        li.id=newId;
        toDoList.appendChild(li); 

        const toDoObj = {
            text : text,
            id : newId
        };

        toDos.push(toDoObj);
        saveToDos();
    }

    function handleSubmit(event){
        event.preventDefault();
        const currentValue = toDoInput.value;
        paintToDo(currentValue);
        toDoInput.value="";
    }

    function deleteToDos(event){
        const btn= event.target;
        const li=btn.parentNode;
        toDoList.removeChild(li);
        const cleanToDos = toDos.filter(function(toDo){
            return toDo.id !== parseInt(li.id);
        });
        toDos = cleanToDos;
        saveToDos();
    }

    function loadToDos(){
        const loadedToDos = localStorage.getItem(TODOS_LS);
        if(loadedToDos !== null){
            const parseToDos=JSON.parse(loadedToDos);
            parseToDos.forEach(function(toDos){
                paintToDo(toDos.text);
            });
        }
    }

    function saveToDos()
    {
        localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
    }

    function init(){
        loadToDos();
        toDoForm.addEventListener("submit",handleSubmit);
    }
    init();