function insertTask() {
    const inputValue = document.getElementById("taskTitle").value;
    const selectValue = document.getElementById("prioritySelect").value;

    if (inputValue) {
        const taskToInsert = { taskTitle: inputValue, priority: selectValue };
        let taskList = JSON.parse(localStorage.getItem("taskList")) || [];

        taskList.push(taskToInsert);

        localStorage.setItem("taskList", JSON.stringify(taskList));

        document.getElementById("taskTitle").value = "";
        renderTasks();
    } else {
        alert("Digite o título da tarefa!");
    }
}

function renderTasks() {
    const listContainer = document.getElementById("taskListDisplay");
    const taskList = JSON.parse(localStorage.getItem("taskList")) || [];
    listContainer.innerHTML = "";

    taskList.forEach((task, index) => {
        const li = document.createElement("li");
        li.className = `prioridade-${task.priority}`;

        li.innerHTML = `
            <div class="task-info">
                <strong>${task.taskTitle}</strong> 
                <span>Prioridade ${task.priority}</span>
            </div>
            <button class="remove-btn" onclick="removeTask(${index})" title="Remover Tarefa">
                <img src="../assets/trashIcon.svg" alt="Remover" class="trash-icon">
            </button>
        `;

        listContainer.appendChild(li);
    });
}

function removeTask(index) {
    let taskList = JSON.parse(localStorage.getItem("taskList")) || [];

    taskList.splice(index, 1);

    localStorage.setItem("taskList", JSON.stringify(taskList));
    renderTasks();
}

window.onload = renderTasks;
