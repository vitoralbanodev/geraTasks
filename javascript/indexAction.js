function insertTask() {
    const inputValue = document.getElementById("taskTitle").value;
    const inputCleaned = inputValue.replace(/[^a-zA-Z0-9]/g, "");
    const selectValue = document.getElementById("prioritySelect").value;

    if (inputCleaned) {
        const taskToInsert = { taskTitle: inputCleaned, priority: selectValue };
        let taskList = JSON.parse(localStorage.getItem("taskList")) || [];

        taskList.push(taskToInsert);

        localStorage.setItem("taskList", JSON.stringify(taskList));

        document.getElementById("taskTitle").value = "";
        renderTasks();
    } else {
        document.getElementById("taskTitle").value = "";

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

        const taskTitle = task.taskTitle.replace(/[^a-zA-Z0-9]/g, "");
        const taskTitleShorted = taskTitle.length > 30 ? taskTitle.substring(0, 30) + "..." : taskTitle;

        li.innerHTML = `
            <div class="task-info">
                <span title=${taskTitle}><strong>${taskTitleShorted}</strong></span>
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
