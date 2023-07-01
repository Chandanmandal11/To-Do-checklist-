<script>
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const pendingTasksList = document.getElementById('pending-tasks');
const completedTasksList = document.getElementById('completed-tasks');

const noteForm = document.getElementById('note-form');
const noteInput = document.getElementById('note-input');
const notesList = document.getElementById('notes');

taskForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const task = taskInput.value.trim();
  if (task !== '') {
    addTask(task);
    taskInput.value = '';
  }
});

noteForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const note = noteInput.value.trim();
  if (note !== '') {
    addNote(note);
    noteInput.value = '';
  }
});

function addTask(task) {
  const listItem = document.createElement('li');
  listItem.innerHTML = `
    <div class="task-item">
      <span>${task}</span>
      <div class="task-actions">
        <button class="complete-button">Complete</button>
        <button class="edit-button">Edit</button>
        <button class="delete-button">Delete</button>
      </div>
    </div>
    <small>${getCurrentDateTime()}</small>
  `;
  listItem.querySelector('.complete-button').addEventListener('click', completeTask);
  listItem.querySelector('.edit-button').addEventListener('click', editTask);
  listItem.querySelector('.delete-button').addEventListener('click', deleteTask);

  pendingTasksList.appendChild(listItem);
}

function completeTask() {
  const listItem = this.closest('li');
  listItem.querySelector('.complete-button').remove();
  listItem.classList.add('completed');
  completedTasksList.appendChild(listItem);
}

function editTask() {
  const taskItem = this.closest('.task-item');
  const taskText = taskItem.querySelector('span');
  const newTask = prompt('Edit task:', taskText.textContent);
  if (newTask !== null && newTask.trim() !== '') {
    taskText.textContent = newTask.trim();
    const dateTime = taskItem.nextElementSibling;
    dateTime.textContent = getCurrentDateTime();
  }
}

function deleteTask() {
  const listItem = this.closest('li');
  listItem.remove();
}

function addNote(note) {
  const noteItem = document.createElement('li');
  noteItem.textContent = note;
  notesList.appendChild(noteItem);
}


function getCurrentDateTime() {
  const now = new Date();
  const date = now.toLocaleDateString();
  const time = now.toLocaleTimeString();
  return `${date} ${time}`;
}

</script>

  
