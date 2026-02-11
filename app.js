const STORAGE_KEY = "web3_prequiz";
const $ = (selector) => document.querySelector(selector);

document.getElementById('foot').innerHTML = 'Entrega: WEB-01 | Grupo: C | Código: SC01';


let n = 0, comp = 0;
function updatePendientes() {
    document.getElementById('count').innerHTML = 'Pendiente: ' + (n - comp);
}



let taskList = [];

function addTask(t) {
    if (t != false && t.length>3) {//que el nuevo task no esté vacío ni sea solo espacios
        taskList.push({ id: n, text: t, done: false });//agrega elemento al array
        document.getElementById('tasks').innerHTML += `<li id=${n}>${t}</li>`;
        n++;
        updatePendientes();
    } else {
        alert("Entrada inválida");
        //está vacío o tiene menos de 4 caracteres
    }
}


const btnAdd = $("#btnAdd");
const input = $("#taskInput");

btnAdd.addEventListener("click", (e) => {
    e.preventDefault();
    addTask(input.value);//recibe el nombre del task y llama la func
});

const btnFocus = $("#btnFocus");//focus al input
const taskForm = $("#taskForm");

btnFocus.addEventListener("click", (e) => {
    e.preventDefault();
    $("#taskInput")?.focus();//Te lleva al espacio donde escribes las tareas
});




const elemento = $("#tasks");//elemento = <ul>
elemento.addEventListener('click', (e) => {
    console.log(e);
    console.log(e.srcElement.id);
    togglee(e.srcElement.id);//id del <li> específico
})
function togglee(id) {
    if (!taskList[id].done) {//así solo se ejecuta una vez
        taskList[id].done = true;
        console.log(taskList[id].done);
        comp++;
        document.getElementById(id).style.textDecoration = "line-through";
        document.getElementById(id).style.color = "#6b7280";
        updatePendientes();//actualiza contador
    }
}