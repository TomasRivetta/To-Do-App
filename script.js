import checkComplete from "./components/checkComplete.js";
import deleteIcon from "./components/deleteIcon.js";

const btn = document.querySelector("[data-form-btn]");


const addTask = (evento) => {
  const list = document.querySelector("[data-list]");
  const task = createTask(evento);
  list.appendChild(task);

}


//Arrow functions o funciones anonimas
const createTask = (evento) => {
  evento.preventDefault();
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

//Escuchar los eventos
//listener
//click
btn.addEventListener("click", addTask);
