

function addToDo(){
    const title = document.getElementById("title").value;
    console.log(title)

    const desc = document.getElementById("desc").value;
    console.log(desc)
    
}


const buttonElement = document.getElementById("clickMe");
buttonElement.addEventListener("click",addToDo);