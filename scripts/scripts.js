const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");
const removeButton = document.getElementById("remove-all-button");

window.addEventListener("load", () => {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((task) => {
    let taskZone = document.createElement("div");
    taskZone.classList.add("div-task");
    let taskItem = document.createElement("label");
    let taskCheckbox = document.createElement("input");
    taskCheckbox.type = "checkbox";
    taskCheckbox.checked = task.completed;
    taskItem.textContent = task.text;
    taskZone.append(taskCheckbox);
    taskZone.append(taskItem);

    taskList.appendChild(taskZone);
  });
});

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

      const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
      tasks.push({ text: taskText, completed: false });
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, 100);
});

taskList.addEventListener("change", function (event) {
  const checkbox = event.target;

  if (checkbox.checked) {
    setTimeout(() => {
      const taskItem = checkbox.parentNode;
      taskItem.remove();

      const tasks = JSON.parse(localStorage.getItem("tasks"));
      const taskIndex = Array.from(taskList.children).indexOf(taskItem);
      tasks[taskIndex].completed = true;

      tasks.splice(taskIndex, 1);
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }, 100);
  }
});

removeButton.addEventListener("click", (e) => {
  e.preventDefault();
  setTimeout(() => {
    while (taskList.firstChild) {
      taskList.firstChild.remove();
    }

    localStorage.removeItem("tasks");
  }, 100);
});
