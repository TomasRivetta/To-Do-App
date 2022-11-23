import { addTask } from "./components/addTask.js"
import { dsplayTasks } from "./components/readTasks.js";

const btn = document.querySelector("[data-form-btn]");

//Escuchar los eventos
//listener
//click
btn.addEventListener("click", addTask);

dsplayTasks();