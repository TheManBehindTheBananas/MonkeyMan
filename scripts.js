// Function to add a task
function addTask() {
  const taskInput = document.getElementById('taskInput').value;
  const importance = document.getElementById('importanceSlider').value;
  const urgency = document.getElementById('urgencySlider').value;

  const taskList = document.getElementById('taskList');

  // Create list item
  const li = document.createElement('li');
  li.innerHTML = `
    <span>${taskInput}</span>
    <span>Importance: ${importance}, Urgency: ${urgency}</span>
    <button onclick="deleteTask(this)">X</button>
  `;

  // Calculate importance/urgency ratio
  const ratio = importance / urgency;

  // Insert task based on calculated ratio
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

  // Set data attribute for sorting
  li.setAttribute('data-ratio', ratio);
}

// Function to delete a task
function deleteTask(button) {
  const task = button.parentNode;
  task.parentNode.removeChild(task);
}
