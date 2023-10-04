export class Task {
    constructor(name) {
        this.name = name;
        this.kids = [];
        this.isCompleted = false; // fält för checkbox status
    }
}