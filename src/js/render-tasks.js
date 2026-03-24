import { refs } from "./refs.js";

export function createTaskMarkup({ taskName, taskDescription }) {
  return `<li class="task-list-item">
    <button class="task-list-item-btn">Delete</button>
    <h3>${taskName}</h3>
    <p>${taskDescription}</p>
  </li>`;
}

export function renderTasks(tasks) {
  refs.taskList.innerHTML = tasks
    .map(task => createTaskMarkup(task))
    .join("");
}