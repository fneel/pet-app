import { Task } from "./tasks";

export class UserModel {
  static nextId = 1; // Startvärde för ID

  constructor(name, password) {
    this.id = UserModel.nextId++; // Tilldela ett unikt ID och öka nästa ID för nästa användare
    this.name = name;
    this.password = password;
    this.tasks = [];
  }
  addTask(taskName) {
    const newTask = new Task(taskName); // Skapa en ny instans av Task
    this.tasks.push(newTask); // Lägg till uppgiften i användarens lista
  }
} // task is not defined när jag klickar registrera user. inga tasks dyker upp när jag trycker 'add task'
