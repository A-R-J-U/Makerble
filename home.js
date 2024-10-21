const menuToggle = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobileNav');
const overlay = document.getElementById('overlay');

menuToggle.addEventListener('click', function() {
    mobileNav.classList.toggle('active');
    overlay.classList.toggle('active');
});

overlay.addEventListener('click', function() {
    mobileNav.classList.remove('active');
    overlay.classList.remove('active');
});




const drp= document.querySelector('.dropbtn');

drp.addEventListener('click',()=>{document.getElementById("myDropdown").classList.toggle("show");})

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


const likeButtons = document.querySelectorAll('.like-button');

likeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const likeCount = button.querySelector('.like-count');
        let currentLikes = parseInt(likeCount.textContent);
        if (!button.classList.contains('liked')) {
            currentLikes++;
            button.classList.add('liked');
        } else {
            currentLikes--;
            button.classList.remove('liked');
        }
        likeCount.textContent = currentLikes;
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    const addTask = () => {
        const taskText = taskInput.value.trim();
        
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create new task item
        const taskItem = document.createElement('li');

        // Create checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                taskItem.classList.add('completed');
            } else {
                taskItem.classList.remove('completed');
            }
        });

        // Create task text
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;

        // Create delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', () => {
            taskItem.remove();
        });

        // Add checkbox, task text, and delete button to task item
        taskItem.appendChild(checkbox);
        taskItem.appendChild(taskSpan);
        taskItem.appendChild(deleteBtn);

        // Add the task item to the task list
        taskList.appendChild(taskItem);

        // Clear the input field
        taskInput.value = "";
    };

    // Add task when clicking the button
    addTaskBtn.addEventListener('click', addTask);

    // Add task when pressing 'Enter' key
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});

