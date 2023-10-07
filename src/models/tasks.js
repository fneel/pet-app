
export class Task {
  constructor(name) {
    this.name = name;
    this.isCompleted = false;
  }

  getName() {
    return this.name;
  }
}

// export class Task {
//     constructor(name) {
//         this.name = name;
//         // this.users = [];
//         this.isCompleted = false; // fält för checkbox status
//     }
// }
