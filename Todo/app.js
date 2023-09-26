const users = []; // Array zum Speichern der Benutzer

document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();
  let username = document.getElementById('username').value;
  let password = document.getElementById('password').value;

  // Benutzer hinzufügen
  let user = {
    email: 'mathias.popow@docc.techstarter.de',
    password: '1234',

    email: 'andreas.kort@docc.techstarter.de',
    password: '1234',

    email: 'bartlomiej.idzinski@docc.techstarter.de',
    password: '321',

    email: 'ingo.neubert@docc.techstarter.de',
    password: '321'

  };
  users.push(user);

  // Überprüfen der Benutzeranmeldeinformationen
  let isValidUser = users.some(function(user) {
    return user.email === username && user.password === password;
  });
// Anmeldeformular wir ausgeblendet und Anwendungsbereich angezeigt
  if (isValidUser) {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('app-container').style.display = 'block';
    //Öffnet Pop Up Fenster bei falscher Eingabe
  } else {
    alert('Falscher Benutzername oder Passwort!');
  }
});

// Aufgabe hinzufügen
document.getElementById('add-task-form').addEventListener('submit', function(event) {
  event.preventDefault();
  let title = document.getElementById('task-title').value;
  let description = document.getElementById('task-description').value;
  let task = {
    title: title,
    description: description,
    completed: false
  };
  // Hier kannst du die Aufgabe zur Liste hinzufügen
  // Beispiel: Speichern der Aufgabe in einer Datenbank oder im Local Storage
  addTaskToList(task);
  clearAddTaskForm();
});

// Aufgabenliste anzeigen
function addTaskToList(task) {
  let taskList = document.getElementById('tasks');
  let li = document.createElement('li');
  li.innerHTML = '<input type="checkbox"> ' + task.title + " / " + task.description;
  if (task.completed) {
    li.classList.add('completed');
  }
  taskList.appendChild(li);
}

/* Aufgabe als erledigt markieren /
den Status der Aufgabe (dargestellt als <li>-Element mit zugehörigem Checkbox-Element) 
zu aktualisieren und visuell anzuzeigen, 
ob die Aufgabe als abgeschlossen markiert ist oder nicht.*/
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

// Hilfsfunktionen / Task werden geleert
function clearAddTaskForm() {
  document.getElementById('task-title').value = '';
  document.getElementById('task-description').value = '';
}
