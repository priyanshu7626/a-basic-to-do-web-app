// Selecting elements from the DOM
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const pendingTasksList = document.getElementById('pending-tasks-list');
const completedTasksList = document.getElementById('completed-tasks-list');

// Function to create a new task item
function createTask(taskText) {
    const li = document.createElement('li');
    li.classList.add('task-item');
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('checkbox');

    const span = document.createElement('span');
    span.textContent = taskText;
    span.classList.add('task-text');

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-button');

    // Adding event listener to delete button
    deleteButton.addEventListener('click', function() {
        li.remove();
    });

    // Adding event listener to checkbox
    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            span.classList.add('completed');
            completedTasksList.appendChild(li);
        } else {
            span.classList.remove('completed');
            pendingTasksList.appendChild(li);
        }
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteButton);

    return li;
}

// Event listener for the form submission
todoForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const taskText = todoInput.value.trim();
    if (taskText !== '') {
        const newTask = createTask(taskText);
        pendingTasksList.appendChild(newTask);
        todoInput.value = '';
    }
});
