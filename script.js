import { addTask } from "./components/addTask.js"

const btn = document.querySelector("[data-form-btn]");

//Escuchar los eventos
//listener
//click
btn.addEventListener("click", addTask);
