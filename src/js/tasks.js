import { saveToLS, loadFromLS } from "./local-storage-api.js";
import { renderTasks } from "./render-tasks.js";

const STORAGE_KEY = "tasks";

export function addTask(task) {
  const tasks = loadFromLS(STORAGE_KEY, []);
  tasks.push(task);
  saveToLS(STORAGE_KEY, tasks);
  renderTasks(tasks);
}

export function deleteTask(index) {
  const tasks = loadFromLS(STORAGE_KEY, []);
  tasks.splice(index, 1);
  saveToLS(STORAGE_KEY, tasks);
  renderTasks(tasks);
}

export function initTasks() {
  const tasks = loadFromLS(STORAGE_KEY, []);
  renderTasks(tasks);
}