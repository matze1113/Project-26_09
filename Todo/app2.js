class AufgabenManager {
    constructor() {
      this.aufgaben = [];
    }
  
    aufgabe_hinzufuegen(aufgabe) {
      this.aufgaben.push(aufgabe);
      this.speichern();
    }
  
    speichern() {
      // Hier fügst du den Code zum Speichern der Aufgaben ein
      // Zum Beispiel könntest du sie in den lokalen Speicher des Browsers speichern oder an einen Server senden
    }
  }
  
  const manager = new AufgabenManager();
  manager.aufgabe_hinzufuegen("Aufgabe 1");
  manager.aufgabe_hinzufuegen("Aufgabe 2");
  
  const users = []; // Array zum Speichern der Benutzer
  
  document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
  
    // Benutzer hinzufügen
    let user = {
      email: 'dabeiisalles@web.de',
      password: '1234'
    };
    users.push(user);
  
    // Überprüfen der Benutzeranmeldeinformationen
    let isValidUser = users.some(function(user) {
      return user.email === username && user.password === password;
    });
  
    if (isValidUser) {
      document.getElementById('login-form').style.display = 'none';
      document.getElementById('app-container').style.display = 'block';
    } else {
      alert('Falscher Benutzername oder Passwort!');
    }
  });
  
  document.getElementById('add-task-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let title = document.getElementById('task-title').value;
    let description = document.getElementById('task-description').value;
    let task = {
      title: title,
      description: description,
      completed: false
    };
    addTaskToList(task);
    clearAddTaskForm();
  });
  
  function addTaskToList(task) {
    let taskList = document.getElementById('tasks');
    let li = document.createElement('li');
    li.innerHTML = '<input type="checkbox"> ' + task.title + " / " + task.description;
    if (task.completed) {
      li.classList.add('completed');
    }
    taskList.appendChild(li);
  }
  
  document.getElementById('tasks').addEventListener('change', function(event) {
    if (event.target.type === 'checkbox') {
      let li = event.target.parentNode;
      if (event.target.checked) {
        li.classList.add('completed');
      } else {
        li.classList.remove('completed');
      }
    }
  });
  
  function clearAddTaskForm() {
    document.getElementById('task-title').value = '';
    document.getElementById('task-description').value = '';
  }
  