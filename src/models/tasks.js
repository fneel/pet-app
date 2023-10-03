export class Task {
    constructor(name) {
        this.name = name;
        this.kids = [];
        this.clicked = false; // fält för checkbox status
    }
}