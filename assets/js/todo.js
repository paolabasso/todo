import { addTask, getAllTasks } from './utils/domFunctions.js';

const db = [

    {
        id: 1,
        title:'Concluir Site do ChatBot',
        steps: [
            {step: 'Finalizar design'},
            {step: 'Desenvolver telas'},
        ],
        done: false,
        dueDate:'2022-05-06',
        reminder: '2022-05-02 10:00',
    },

    {
        id: 2,
        title:'Aula de Python',
        steps: [
            {step: 'Fazer  aula 1'},
            {step: 'Fazer aula 2'},
            {step: 'Fazer aula 3'},
        ],
        done: false,
        dueDate:'2022-06-06',
        reminder: '2022-06-02 10:00',
    }
]

getAllTasks(db);

console.log(db[0].title);

const newTask = document.querySelector('#inputTxtNewTask');
const form = document.querySelector("#addNewTask");
form.addEventListener("submit",(e) => {
    e.preventDefault();
});

newTask.addEventListener("keyup",(e)=>{
    e.preventDefault();
    e.stopPropagation();
    if (e.key == "Enter" && newTask.value) {
            alert(newTask.value);

            const d = new Date();
            const today = `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
    
            db.push({  
                id: Number(db.length) +1, 
                title: newTask.value,
                 done: false, 
                dueDate: today, });
            addTask(newTask.title);
            newTask.value = "";
            console.log(db);
            
        }
});