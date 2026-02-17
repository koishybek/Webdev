document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('new-task');
    const addButton = document.getElementById('add-btn');
    const taskList = document.getElementById('task-list');

    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        // Create list item
        const li = document.createElement('li');

        // Create checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'checkbox';
        checkbox.addEventListener('change', function() {
            li.classList.toggle('done', this.checked);
        });

        // Create span for text
        const span = document.createElement('span');
        span.textContent = taskText;

        // Create delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.innerHTML = '&#128465;'; // Trash can icon
        deleteBtn.addEventListener('click', function() {
            taskList.removeChild(li);
        });

        // Assemble the list item
        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteBtn);

        // Add to list
        taskList.appendChild(li);

        // Clear input
        taskInput.value = "";
    }

    // Event listeners
    addButton.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});
