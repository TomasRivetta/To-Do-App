import { uniqueDates } from "../services/date.js";
import checkComplete from "./checkComplete.js";
import deleteIcon from "./deleteIcon.js";
import { displayTasks } from "./readTasks.js";

export const addTask = (evento) => {
    evento.preventDefault();

    const list = document.querySelector("[data-list]");
    const input = document.querySelector("[data-form-input]");
    const calendar = document.querySelector("[data-form-date]");

    const value = input.value;
    const date = calendar.value;
    const dateFormat = moment(date).format("DD/MM/YYYY");

    if( value === "" || date === ""){
        return
    }

    //Creamos este array para que vaya guardando todas las tareas que creamos
    // const taskList = []

    swal("Tarea creada!", "sonrie y se feliz!", "success");

    input.value = "";

    calendar.value = "";

    const complete = false;

    const taskObj = {
        value,
        dateFormat,
        complete,
        id:uuid.v4()
    }

    list.innerHTML = "";

    //para obtener la informacion del local STORAGE
    const taskList = JSON.parse(localStorage.getItem("tasks")) || [];
    taskList.push( taskObj );
    localStorage.setItem("tasks", JSON.stringify(taskList));

    displayTasks();

}

//Arrow functions o funciones anonimas
export const createTask = ({ value, dateFormat, complete, id }) => {

    const task = document.createElement("li");
    task.classList.add("card");


    const taskContent = document.createElement("div");

    //console.log(value,dateFormat);
    const check = checkComplete(id)

    if(complete){
        
        check.classList.toggle("fas");
        check.classList.toggle("completeIcon");
        check.classList.toggle("far");
    }

    const titleTask = document.createElement("span");
    titleTask.classList.add("task");
    titleTask.innerText = value;
    taskContent.appendChild(check);
    taskContent.appendChild(titleTask);

    //taskContent.appendChild(deleteIcon());
    //task.innerHTML = content;

    //PARA QUE EN LA MISMA TAREA SE VEA LA FECHA DE CREACION
    // const dateElement = document.createElement("span");
    // dateElement.innerHTML = dateFormat;
    //task.appendChild(dateElement);

    //console.log(dateElement);
    task.appendChild(taskContent);
    task.appendChild(deleteIcon(id));

    return task;
};