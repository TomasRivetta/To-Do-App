import checkComplete from "./checkComplete.js";
import deleteIcon from "./deleteIcon.js";
import { dsplayTasks } from "./readTasks.js";

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

    input.value = "";

    calendar.value = "";

    const taskObj = {
        value,
        dateFormat
    }

    list.innerHTML = "";

    //para obtener la informacion del local STORAGE
    const taskList = JSON.parse(localStorage.getItem("tasks")) || [];
    taskList.push({ value, dateFormat });
    localStorage.setItem("tasks", JSON.stringify(taskList));

    dsplayTasks();

}

//Arrow functions o funciones anonimas
export const createTask = ({ value, dateFormat }) => {

    const task = document.createElement("li");
    task.classList.add("card");


    const taskContent = document.createElement("div");

    //console.log(value,dateFormat);

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