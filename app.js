const STORAGE_KEY = "web3_prequiz";
const $ = (selector) => document.querySelector(selector);

const input = $("#taskInput"); 


document.getElementById('foot').innerHTML = 'Entrega: WEB-01 | Grupo: C | Código: SC01';



let taskList=[];
let n=0;
function addTask(t){
    if(t!=false){//que el nuevo task no esté vacío ni sea solo espacios
        n++;
        taskList.push({id: n, text: t, done: false})//agrega elemento al array
        document.getElementById('tasks').innerHTML += '<li>'+t+'</li>';
    }else{
        alert("Entrada vacía")
    }
}

const btnAdd = $("#btnAdd");


btnAdd.addEventListener("click", (e)=> {
    console.log("hola lola");
    e.preventDefault();
    addTask(input.value);
});

const btnFocus = $("#btnFocus");
const taskForm = $("#taskForm");

btnFocus.addEventListener("click", (e)=> {
    e.preventDefault();
    $("#taskInput")?.focus();
});

