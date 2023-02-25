const taskForm = document.querySelector("#task-form");
const taskInput = document.querySelector("#new-task-input");
const taskDateInput = document.querySelector("#new-task-date");
const taskPriorityInput = document.querySelector("#priority-select");
const taskList = document.querySelector("#list-group");

let tasks = [];

// Add a new task to the task list
function addTask(task, dueDate, priority) {
  const newTask = {
    id: Date.now(),
    name: task,
    dueDate: dueDate,
    priority: priority
  };
  tasks.push(newTask);
  displayTasks();
}

// Remove a task from the task list
function removeTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  displayTasks();
}

// Display all the tasks in the task list
function displayTasks() {
  taskList.innerHTML = "";
  for (let i = 0; i < tasks.length; i++) {
    const taskItem = document.createElement("li");
    taskItem.classList.add("list-group-item");

    const taskCheckbox = document.createElement("input");
    taskCheckbox.type = "checkbox";
    taskCheckbox.addEventListener("change", function() {
      removeTask(tasks[i].id);
    });

    const taskName = document.createElement("span");
    taskName.textContent = tasks[i].name;

    const taskDueDate = document.createElement("span");
    taskDueDate.classList.add("badge", "bg-secondary", "ms-2");
    taskDueDate.textContent = tasks[i].dueDate;

    const taskPriority = document.createElement("span");
    if (tasks[i].priority === "low") {
      taskPriority.classList.add("badge", "bg-success", "ms-2");
    } else if (tasks[i].priority === "medium") {
      taskPriority.classList.add("badge", "bg-warning", "ms-2");
    } else {
      taskPriority.classList.add("badge", "bg-danger", "ms-2");
    }
    taskPriority.textContent = tasks[i].priority;

    taskItem.appendChild(taskCheckbox);
    taskItem.appendChild(taskName);
    taskItem.appendChild(taskDueDate);
    taskItem.appendChild(taskPriority);
    taskList.appendChild(taskItem);
  }
}

// Handle form submission
taskForm.addEventListener("submit", function(event) {
  event.preventDefault();
  const task = taskInput.value.trim();
  const dueDate = taskDateInput.value;
  const priority = taskPriorityInput.value;
  if (task === "") {
    return;
  }
  addTask(task, dueDate, priority);
  taskInput.value = "";
  taskDateInput.value = "";
  taskPriorityInput.value = "low";
});

// Initialize the app by displaying any existing tasks
displayTasks();
