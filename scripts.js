function addTask() {
  const taskInput = document.getElementById('taskInput').value;
  const importance = parseInt(document.getElementById('importanceSlider').value);
  const urgency = parseInt(document.getElementById('urgencySlider').value);

  const taskList = document.getElementById('taskList');

  const li = document.createElement('li');
  li.innerHTML = `
    <span>${taskInput}</span>
    <span>Importance: ${importance}, Urgency: ${urgency}</span>
    <button onclick="deleteTask(this)">X</button>
  `;

  const ratio = importance / urgency;

  let inserted = false;
  const tasks = taskList.getElementsByTagName('li');
  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    const existingRatio = parseFloat(task.getAttribute('data-ratio'));

    if (ratio > existingRatio) {
      taskList.insertBefore(li, task);
      inserted = true;
      break;
    }
  }

  if (!inserted) {
    taskList.appendChild(li);
  }

  li.setAttribute('data-ratio', ratio);
}

function deleteTask(button) {
  const task = button.parentNode;
  task.parentNode.removeChild(task);
}
