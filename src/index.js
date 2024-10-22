document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("create-task-form");
  const tasksList = document.getElementById("tasks");

  taskForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const taskDescription = document.getElementById("new-task-description").value;
    if (taskDescription.trim() !== "") {
      const taskItem = document.createElement("li");
      taskItem.textContent = taskDescription;
      tasksList.appendChild(taskItem);
    }
    taskForm.reset();
  });
});
