export  function addTask(taskParam) {
    const task = document.createElement('div');
    task.classList.add('task');
    task.setAttribute('id', taskParam.id);

    const taskBody = `
    <div> <input type="checkbox" id="check_${taskParam.id}"/>
    </div>
                <div>
                    <div><span class="title-task">${taskParam.title}</span></div>
                    <div class="information-task">
                        <ul>
                            <li class="dueDate">${taskParam.dueDate}</li>
                        </ul>
                    </div> 
                </div>
                <div>Star</div>
    `;

    task.innerHTML = taskBody;
    document.querySelector(".tasks").appendChild(task);

}

export function removeTask() {
    alert('Removendo uma tarefa')
}
export function updateTask() { 
    alert('Atualizando uma tarefa')
}

export function getAllTasks(db) {
    db.forEach((item) => {
        addTask(item);
    });
}

export function getTaskId() {
    alert('Exibindo uma tarefa')
}