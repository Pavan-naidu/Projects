const input = document.getElementById("taskInput")
const addBtn = document.getElementById("addBtn")
const taskList = document.getElementById("taskList")

let tasks = JSON.parse(localStorage.getItem("tasks")) || []

function renderTasks(){
  taskList.innerHTML = ""

  tasks.forEach((task, index)=>{

    const li = document.createElement("li")

    if(task.completed){
      li.classList.add("completed")
    }

    li.innerText = task.text

    li.addEventListener("click", ()=>{
      task.completed = !task.completed
      saveTasks()
      renderTasks()
    })

    const delBtn = document.createElement("button")
    delBtn.innerText = "X"

    delBtn.addEventListener("click",(e)=>{
      e.stopPropagation()
      tasks.splice(index,1)
      saveTasks()
      renderTasks()
    })

    li.appendChild(delBtn)
    taskList.appendChild(li)

  })
}

function saveTasks(){
  localStorage.setItem("tasks", JSON.stringify(tasks))
}

addBtn.addEventListener("click", ()=>{

  const taskText = input.value.trim()

  if(taskText === "") return

  tasks.push({
    text: taskText,
    completed:false
  })

  input.value=""

  saveTasks()
  renderTasks()
})

renderTasks()