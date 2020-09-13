/*
roberto carlos castillo castellanos
*/
const d = document;
const c = console;
//funciones
const getTasks = () => {
  let tasks = JSON.parse(localStorage.getItem("tasks"));
  const tasksView = d.getElementById("tasks");
  tasksView.innerHTML = "";
  for (let i = 0; i < tasks.length; i++) {
    let title = tasks[i].title;
    let desc = tasks[i].discription;
    tasksView.innerHTML += `<div class="card mb-4 ">
      <div class="card-body">
      <p>${title}</p>
      <p>${desc}</p>
      <a class="btn btn-danger" onclick="dropTask(${i})">borrar</a>
       </div> 
      </div>`;
  }
};
const dropTask = (title) => {
  c.log(title);
  let tareas = JSON.parse(localStorage.getItem("tasks"));
  tareas.splice(title, 1);
  localStorage.setItem("tasks", JSON.stringify(tareas));
  getTasks();
};
const saveTask = (e) => {
  const title = d.getElementById("title").value;
  const discription = d.getElementById("description").value;
  const task = {
    title,
    discription,
  };
  if (localStorage.getItem("tasks") == null) {
    let tasks = [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  } else {
    let jsonTasks = JSON.parse(localStorage.getItem("tasks"));
    jsonTasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(jsonTasks));
  }
  getTasks();
  d.getElementById("formTask").reset();
  //   local storage
  //guardar datos
  //   localStorage.setItem("task", JSON.stringify(task));
  //obtenerdatos
  //   c.log(JSON.parse(localStorage.getItem("task")));
  e.preventDefault();
};

//eventos del formulario
const form = document.getElementById("formTask");
form.addEventListener("submit", saveTask);

getTasks();
