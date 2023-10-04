export class User {
  static nextId = 1; // Startvärde för ID

  constructor(name, password) {
    this.id = User.nextId++; // Tilldela ett unikt ID och öka nästa ID för nästa användare
    this.name = name;
    this.password = password;
    this.tasks = [];
  }
}
