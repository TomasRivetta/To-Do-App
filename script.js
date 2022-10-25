const btn = document.querySelector("[data-form-btn]");

//Arrow functions o funciones anonimas
const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    console.log(input.value);
}

console.log(btn);

//Escuchar los eventos
//listener
//click
btn.addEventListener("click", createTask)

