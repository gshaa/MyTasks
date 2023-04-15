const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");
const removeButton = document.getElementById("remove-all-button");

const darkModeButton = document.getElementById("dark-mode-button");
const moonImage = document.getElementById("moon-image");
const sunImage = document.getElementById("sun-image");

window.addEventListener("load", () => {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((task) => {
    let taskZone = document.createElement("div");
    taskZone.classList.add("div-task");
    let taskItem = document.createElement("label");
    let taskCheckbox = document.createElement("input");
    taskCheckbox.type = "checkbox";
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
      tasks.push({ text: taskText });
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

darkModeButton.onclick = function () {
  document.querySelector("body").classList.toggle("dark-mode-style");
  moonImage.classList.toggle("hidden");
  sunImage.classList.toggle("hidden");
};
