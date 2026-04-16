function insertTask() {
    const inputValue = document.getElementById("taskTitle").value;
    const selectValue = document.getElementById("prioritySelect").value;

    if (inputValue) {
        const taskToInsert = { taskTitle: inputValue, priority: selectValue }
        var taskList = localStorage.getItem("taskList");

        if (taskList) {
            taskList = JSON.parse(taskList);
        } else {
            taskList = []
        }
        console.log("taskList ", taskList);

        taskList.push(taskToInsert);
        console.log("taskList 2 ", taskList);
        localStorage.setItem("taskTitle", taskList)
        console.log("task title ", );
    } 
}