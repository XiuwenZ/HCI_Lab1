// add items to the list 

// Get the form and button elements from the DOM
const taskForm = document.getElementById("task-form");
const newTaskInput = document.getElementById("new-task-input");
const prioritySelect = document.getElementById("priority-select");
// const dueDateInput = document.getElementById("dueDate");
const newTaskSubmit = document.getElementById("new-task-submit");
const taskList = document.getElementById("list-group");

// Create an array to store the tasks
let tasks = [];

// Function to add a task to the tasks array and update the task list in the DOM
function addTask(taskName, priority, dueDate) {
	
  // Create a new task object
  const task = {
    name: taskName,
    priority: priority,
	// dueDate: dueDate,
	
  };

 
  // Add the task to the tasks array
  tasks.push(task);

 

  // create a taskListItem and add to the check box 
  const taskListItem = document.createElement("li");
  taskListItem.className = "list-group-item";

  //create checkbox to the list item
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "form-check-input me-2";

  checkbox.addEventListener("change", function () {
    if (this.checked) {
      taskListItem.classList.add("completed");
    } else {
      taskListItem.classList.remove("completed");
    }
  });
  
  taskListItem.appendChild(checkbox);

  //add task name to the list item
  const taskNameSpan = document.createElement("span");
  taskNameSpan.textContent = task.name;
  taskListItem.appendChild(taskNameSpan);
  
// add task priority to task list item
  const taskPrioritySpan = document.createElement("span");
  taskPrioritySpan.className = "badge bg-primary rounded-pill";
  taskPrioritySpan.textContent = task.priority;
  taskListItem.appendChild(taskPrioritySpan);

  //add taskListItem to task list
  taskList.appendChild(taskListItem);


  
}

// Add event listener to checkbox to toggle completed class on task list item


// Add an event listener to the form submit button
newTaskSubmit.addEventListener("click", function (event) {
  event.preventDefault();
  const taskName = newTaskInput.value;
  const priority = prioritySelect.value;
//   const dueDate = dueDateInput.value;
  if (taskName === "" || priority === "" ) {
    alert("Please enter a task name,select the due date and select a priority");
    return;
  }
  addTask(taskName, priority);
  newTaskInput.value = "";
  dueDateInput.value = "";
//   dueDate.value ="";

});















