export class UserModel {
  static nextId = 1; // Startvärde för UserModel ID

  constructor(name, password) {
    this.id = UserModel.nextId++; // Tilldela ett unikt UserModel ID och öka nästa ID för nästa användare
    this.name = name;
    this.password = password;
    this.tasks = [
      { id: `${this.id}-1`, name: "Promenad 1", isCompleted: false },
      { id: `${this.id}-2`, name: "Promenad 2", isCompleted: false },
      { id: `${this.id}-3`, name: "Promenad 3", isCompleted: false },
    ];
  }
}
