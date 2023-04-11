const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");
const removeButton = document.getElementById("remove-all-button");

// Add task event listener
taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  setTimeout(() => {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      let taskZone = document.createElement("div");
      taskZone.classList.add("div-task");
      let taskItem = document.createElement("label");
      let taskCheckbox = document.createElement("input");
      taskCheckbox.type = "checkbox";
      taskItem.textContent = taskText;
      taskZone.append(taskCheckbox);
      taskZone.append(taskItem);

      taskList.appendChild(taskZone);
      taskInput.value = "";
    }
  }, 100);
});

taskList.addEventListener("change", function (event) {
  const checkbox = event.target;

  if (checkbox.checked) {
    setTimeout(() => {
      const taskItem = checkbox.parentNode;
      taskItem.remove();
    }, 100);
  }
});

removeButton.addEventListener("click", (e) => {
  e.preventDefault();
  setTimeout(() => {
    while (taskList.firstChild) {
      taskList.firstChild.remove();
    }
  }, 100);
});
