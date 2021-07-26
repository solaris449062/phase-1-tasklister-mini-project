document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("form")
    form.addEventListener("submit", (event) => {
    event.preventDefault();
    buildToDo(event.target.new_task_description.value);
    form.reset();
  })
})

function buildToDo(todo) {
  // console.log(todo)
  let taskItem = document.createElement('li');
  taskItem.textContent = todo + " ";
  
  let prioritySelector = document.getElementById("priority_dropdown");
  if (prioritySelector.value === "low") {
    taskItem.setAttribute("class", "low");
  }
  else if (prioritySelector.value === "medium") {
    taskItem.setAttribute("class", "medium");
    document.getElementsByClassName("low");

  }
  else if (prioritySelector.value === "high") {
    taskItem.setAttribute("class", "high");
    document.getElementsByClassName("low");

  }

  // document.getElementsByClassName("low").style.color="green"
  // document.getElementsByClassName("medium").style.color="blue"
  // document.getElementsByClassName("high").style.color="red"

  let deleteButton = document.createElement('button');
  deleteButton.textContent = 'x';
  deleteButton.addEventListener('click', handleDelete)

  taskItem.appendChild(deleteButton);
  document.querySelector("#tasks").appendChild(taskItem);
}

function handleDelete(event) {
  event.target.parentNode.remove();
}

