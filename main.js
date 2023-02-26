// add items to the list 

// Get the form and button elements from the DOM
const taskForm = document.getElementById("task-form");
const newTaskInput = document.getElementById("new-task-input");
const prioritySelect = document.getElementById("priority-select");
const dueDateInput = document.getElementById("dueDate");
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
	dueDate: dueDate,
	
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
      alert("You've completed a task!!");
    } else {
      taskListItem.classList.remove("completed");
    }
  });
  
  taskListItem.appendChild(checkbox);

  //add task name to the list item
  const taskNameSpan = document.createElement("span");
  taskNameSpan.textContent = task.name;
  taskListItem.appendChild(taskNameSpan);

  //add dueDate to task list item
  const taskDueDateSpan = document.createElement("span");
  taskDueDateSpan.textContent = task.dueDate;
  taskListItem.appendChild(taskDueDateSpan);
  
  
// add task priority to task list item
  // const taskPrioritySpan = document.createElement("span");
  // taskPrioritySpan.className = "badge bg-primary rounded-pill";
  // taskPrioritySpan.textContent = task.priority;
  // taskListItem.appendChild(taskPrioritySpan);

  //add taskListItem to task list
  // taskList.appendChild(taskListItem);


    // Append the task list item to the appropriate priority column
    if (prioritySelect.value === "high") {
      document.getElementById("high-priority-tasks").appendChild(taskListItem);
    } else if (prioritySelect.value === "medium") {
      document.getElementById("medium-priority-tasks").appendChild(taskListItem);
    } else {
      document.getElementById("low-priority-tasks").appendChild(taskListItem);
    }



    // add the edit and delete buttons
    const taskActions = document.createElement('div');
    
    taskActions.classList.add('actions');
      
    // const task_edit_el = document.createElement('button');
    // task_edit_el.classList.add('edit');
    // task_edit_el.innerText = 'Edit';

    const task_delete_el = document.createElement('button');
    task_delete_el.classList.add('delete');
    task_delete_el.innerText = 'Delete';

    // taskActions.appendChild(task_edit_el);
    taskActions.appendChild(task_delete_el);

    taskListItem.appendChild(taskActions);

    input.value = '';

    // task_edit_el.addEventListener('click', function() {
    //   if (task_edit_el.innerText.toLowerCase() == "edit") {
    //     task_edit_el.innerText = "Save";
    //     task_input_el.removeAttribute("readonly");
    //     task_input_el.focus();
    //   } else {
    //     task_edit_el.innerText = "Edit";
    //     task_input_el.setAttribute("readonly", "readonly");
    //   }
    //   console.log("edit ")
    // });

    // Create a function to delete a task
    function deleteTask(taskListItem) {
      // Find the index of the task in the tasks array
      const index = tasks.findIndex(task => task.name === taskListItem.firstChild.textContent);
      // Remove the task from the tasks array
      tasks.splice(index, 1);
      // Remove the task from the DOM
      taskListItem.remove();
    }

    // Add the delete button to the taskListItem
    task_delete_el.addEventListener('click', function() {
      deleteTask(taskListItem);
    });
    taskListItem.appendChild(task_delete_el);

    // task_delete_el.addEventListener('click', function(){
    //   taskList.removeChild(taskListItem);
    //   console.log("edit")
    // });

  
}





// Add an event listener to the form submit button
newTaskSubmit.addEventListener("click", function (event) {
  event.preventDefault();
  const taskName = newTaskInput.value;
  const priority = prioritySelect.value;
  const dueDate = dueDateInput.value;
//   const dueDate = dueDateInput.value;
  if (taskName === "" || priority === "" ||dueDate ==="") {
    alert("Please enter a task name,select the due date and select a priority");
    return;
  }
  addTask(taskName, priority, dueDate);
  newTaskInput.value = "";
  dueDateInput.value = "";
  dueDate.value ="";

});

