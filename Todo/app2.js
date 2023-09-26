const users = [
    { email: 'kort@fn.de', password: '1234' },
    { email: 'bartlomiej.idzinski@docc.techstarter.de', password: '1234' },
    { email: 'ingo.neubert@docc.techstarter.de', password: '1234' },
    { email: 'mathias.popow@docc.techstarter.de', password: '1234' }
  ]; // Array zum Speichern der Benutzer
  
  const tasks = []; // Array zum Speichern der Aufgaben
  
  document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
  
    // Überprüfen der Benutzeranmeldeinformationen
    let isValidUser = users.some(function(user) {
      return user.email === username && user.password === password;
    });
  
    // Anmeldeformular wird ausgeblendet und Anwendungsbereich angezeigt
    if (isValidUser) {
      document.getElementById('login-form').style.display = 'none';
      document.getElementById('app-container').style.display = 'block';
    } else {
      alert('Falscher Benutzername oder Passwort!');
    }
  });
  
  // Funktion zum Vergleichen von Datumszeichenfolgen im Format "YYYY-MM-DD"
  function compareDueDates(a, b) {
    const dateA = new Date(a.dueDate);
    const dateB = new Date(b.dueDate);
  
    // Verwenden von getTime(), um den Vergleich in Millisekunden durchzuführen
    if (dateA.getTime() < dateB.getTime()) return -1;
    if (dateA.getTime() > dateB.getTime()) return 1;
    return 0;
  }
  
  // Aufgabe hinzufügen
  document.getElementById('add-task-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let title = document.getElementById('task-title').value;
    let description = document.getElementById('task-description').value;
    let dueDate = document.getElementById('task-dueDate').value;
    let task = {
      title: title,
      description: description,
      dueDate: dueDate, // Hinzufügen eines Fälligkeitsdatums im "YYYY-MM-DD"-Format
      completed: false
    };
  
    // Aufgabe zur Liste hinzufügen
    tasks.push(task);
  
    // Sortieren der Aufgabenliste nach Fälligkeitsdatum
    tasks.sort(compareDueDates);
  
    // Hier kannst du die Aufgabe zur Liste hinzufügen
    // Beispiel: Speichern der Aufgabe in einer Datenbank oder im Local Storage
    addTaskToList(task);
    clearAddTaskForm();
  });
  
  // Aufgabenliste anzeigen
  function addTaskToList(task) {
    let taskList = document.getElementById('tasks');
    let li = document.createElement('li');
    li.innerHTML = '<input type="checkbox"> ' + task.title + '<br>Description: ' + task.description + '<br>Due Date: ' + task.dueDate;
    if (task.completed) {
      li.classList.add('completed');
    }
    taskList.appendChild(li);
  
    // Hier fügen wir die Funktion zur Markierung von Aufgaben hinzu
    li.querySelector('input[type="checkbox"]').addEventListener('click', function(event) {
      task.completed = event.target.checked;
      if (event.target.checked) {
        li.classList.add('completed');
      } else {
        li.classList.remove('completed');
      }
    });
  }
  
  // Suchfunktion
  document.getElementById('search-button').addEventListener('click', function() {
    let searchInput = document.getElementById('search-input').value.toLowerCase();
    let tasksList = document.getElementById('tasks').getElementsByTagName('li');
    for (let i = 0; i < tasksList.length; i++) {
      let taskTitle = tasksList[i].innerText.toLowerCase();
      if (taskTitle.includes(searchInput)) {
        tasksList[i].style.display = 'block';
      } else {
        tasksList[i].style.display = 'none';
      }
    }
  });
  
  // Hilfsfunktionen / Aufgaben werden geleert
  function clearAddTaskForm() {
    document.getElementById('task-title').value = '';
    document.getElementById('task-description').value = '';
    document.getElementById('task-dueDate').value = '';
  }