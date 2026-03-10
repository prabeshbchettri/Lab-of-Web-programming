let tasks = [];

function addTask() {
    const input = document.getElementById("taskInput");
    if (input.value === "") return;

    tasks.push({ text: input.value, completed: false });
    input.value = "";
    displayTasks("all");
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTasks(currentFilter);
}

function deleteTask(index) {
    tasks.splice(index, 1);
    displayTasks(currentFilter);
}

let currentFilter = "all";

function filterTasks(filter) {
    currentFilter = filter;
    displayTasks(filter);
}

function displayTasks(filter) {
    const list = document.getElementById("taskList");
    list.innerHTML = "";

    let completedCount = 0;

    tasks.forEach((task, index) => {
        if (
            filter === "all" ||
            (filter === "completed" && task.completed) ||
            (filter === "pending" && !task.completed)
        ) {
            const li = document.createElement("li");
            li.className = task.completed ? "completed" : "";

            li.innerHTML = `
                <span onclick="toggleTask(${index})">${task.text}</span>
                <button onclick="deleteTask(${index})">❌</button>
            `;
            list.appendChild(li);
        }

        if (task.completed) completedCount++;
    });

    document.getElementById("count").innerText =
        `Completed Tasks: ${completedCount}`;
}
