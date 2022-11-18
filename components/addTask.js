import checkComplete from "./checkComplete.js";
import deleteIcon from "./deleteIcon.js";

export const addTask = (evento) => {
    const list = document.querySelector("[data-list]");
    const task = createTask(evento);
    list.appendChild(task);
  
  }

  //Arrow functions o funciones anonimas
  const createTask = (evento) => {
    evento.preventDefault();
    
    //Creamos este array para que vaya guardando todas las tareas que creamos
    // const taskList = []

    //para obtener la informacion del local STORAGE
    const taskList = JSON.parse(localStorage.getItem("tasks")) || [];
    console.log(taskList);

    const input = document.querySelector("[data-form-input]");
    const calendar = document.querySelector("[data-form-date]");
  
    const value = input.value;
    const date = calendar.value;
  
    const dateFormat = moment(date).format("DD/MM/YYYY");
    console.log(dateFormat);
  
  
    const task = document.createElement("li");
  
    task.classList.add("card");
  
    input.value = "";
  
    const taskContent = document.createElement("div");
    
    //console.log(value,dateFormat);
    const taskObj = {
      value,
      dateFormat
    }
  
    taskList.push(taskObj)
  
    localStorage.setItem("tasks",JSON.stringify(taskList))
  
    
    const titleTask = document.createElement("span");
    titleTask.classList.add("task");
    titleTask.innerText = value;
  
    taskContent.appendChild(checkComplete());
    taskContent.appendChild(titleTask);
  
    //taskContent.appendChild(deleteIcon());
    //task.innerHTML = content;
  
  
    const dateElement = document.createElement("span");
    dateElement.innerHTML = dateFormat;
    console.log(dateElement);
  
    task.appendChild(taskContent);
    task.appendChild(dateElement);
    task.appendChild(deleteIcon());
  
    return task;
  };