//export { addTask, removeTask, updateTask, getTaskId } from './utils/domFunctions';

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

console.log(db[0].title);

const newTask = document.querySelector('#inputTxtNewTask');
const form = document.querySelector("#addNewTask");
form.addEventListener("submit",(e) => {
    e.preventDefault();
});

newTask.addEventListener("keyup",(e)=>{
    e.preventDefault();
    e.stopPropagation();
    if (e.key == "Enter") {
        alert(newTask.value);

        db.push({  id: Number(db.length) +1, title: newTask.value });

        newTask.value = "";
        console.log(db);
    }
});