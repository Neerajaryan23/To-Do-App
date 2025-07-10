let tasks = [];
let dates = [];
let Time = [];
displayTasks();


// This function adds a new task to the task list
function addTask() {
  const input = document.getElementById('taskInput');
  const dateInput = document.getElementById('DateInput');
  const timeInput = document.getElementById('timeInput');
  const task = input.value.trim();
  const Date = dateInput.value.trim();
  const time = timeInput.value.trim();

  if(task === ``) {
    alert(`Task cant be empty!`)
  }

  const taskDate = Date !== ``? Date : ``;
  const taskTime = time !== ``? time : ``;
    tasks.push(task);
    dates.push(Date);
    Time.push(time);
    displayTasks();
    input.value = '';
    dateInput.value = '';
  timeInput.value = ``;
}

// This function displays the tasks in the task list

function displayTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    // li.textContent = `${task}`;
    // li.textContent += `${dates[index]}`;
    // li.textContent += `${Time[index]}`;

    const taskText = document.createElement(`span`);
    taskText.textContent = task;

    const dateText = document.createElement(`span`);
    dateText.textContent += `${dates[index]}`;

    const timeText = document.createElement(`span`);
    timeText.textContent += `${Time[index]}`;

    li.appendChild(taskText);
    li.appendChild(dateText);
    li.appendChild(timeText);


    // Create a delete button
    // This button will remove the task from the list
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = () => {
      tasks.splice(index, 1);
      dates.splice(index, 1);
      Time.splice(index, 1);
      displayTasks();
    };

    // Create an edit button
    // This button will allow the user to edit the task
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.onclick = () => {
      const newTask = prompt('Edit task:', task);
      const newDate = prompt('Edit date:', dates[index]);
      const newTime = prompt('Edit time:', Time[index]);
      if (newTask !== null && newTask.trim() !== '' && newDate !== null 
      && newDate.trim() !== '' && newTask !== task && newDate !== dates[index]) {
        tasks[index] = newTask.trim();
        dates[index] = newDate.trim();
        Time[index] = newTime.trim();
        displayTasks();
      }
    };

    // Create a checkbox for marking tasks as done
    // This checkbox will toggle the text decoration of the task
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.onclick = () => {
      li.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
    };

      // Append elements to the list item
    li.appendChild(checkbox);
    li.appendChild(editButton);
    li.appendChild(deleteButton);
    taskList.appendChild(li);
  });
}

    function clearAll() {
      // Clear all tasks, dates, and times
      const taskList = document.getElementById('taskList');
      taskList.innerHTML = '';
      // Reset the arrays
      tasks = [];
      dates = [];
      Time = [];
      displayTasks();

    }
