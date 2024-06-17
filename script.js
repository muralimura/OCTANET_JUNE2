function addTask() {
    const taskInput = document.getElementById("task-input");
    const tasksList = document.getElementById("tasks");
    const task = taskInput.value.trim();

    if (task) {
        const li = document.createElement("li");
        li.textContent = task;
        tasksList.appendChild(li);
        taskInput.value = "";
    }
}

function markTaskComplete(task) {
    if (task.classList.contains("completed")) {
        task.classList.remove("completed");
    } else {
        task.classList.add("completed");
    }
}

function removeTask(task) {
    task.parentNode.removeChild(task);
}
