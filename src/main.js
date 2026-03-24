import { refs } from "../src/js/refs.js";
import { addTask, deleteTask, initTasks } from "../src/js/tasks.js";

// запуск при загрузке
initTasks();

// добавление задачи
refs.form.addEventListener("submit", event => {
  event.preventDefault();

  const formData = new FormData(refs.form);

  const taskName = formData.get("taskName").trim();
  const taskDescription = formData.get("taskDescription").trim();

  // ❗ проверка на пустые значения
  if (!taskName || !taskDescription) {
    alert("Заполните все поля!");
    return;
  }

  addTask({ taskName, taskDescription });

  refs.form.reset();
});

// удаление (делегирование)
refs.taskList.addEventListener("click", event => {
  if (!event.target.classList.contains("task-list-item-btn")) return;

  const index = [...refs.taskList.children].indexOf(
    event.target.closest("li")
  );

  deleteTask(index);
});

const THEME_KEY = "theme";

// загрузка темы
const savedTheme = localStorage.getItem(THEME_KEY);

if (savedTheme === "theme-dark") {
  document.body.classList.add("theme-dark");
}

// переключение
refs.themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("theme-dark");

  const currentTheme = document.body.classList.contains("theme-dark")
    ? "theme-dark"
    : "theme-light";

  localStorage.setItem(THEME_KEY, currentTheme);
});
/*
  Створи список справ.
  На сторінці є два інпути які має вводиться назва і текст задачі.
  Після натискання на кнопку "Add" завдання додається до списку #task-list.

  У кожної картки має бути кнопка "Delete", щоб можна було
  прибрати завдання зі списку.
  Список із завданнями має бути доступним після перезавантаження сторінки.

  Розмітка картки задачі
  <li class="task-list-item">
      <button class="task-list-item-btn">Delete</button>
      <h3>Заголовок</h3>
      <p>Текст</p>
  </li>
*/
