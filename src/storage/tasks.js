export function saveTasks(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

export function loadTasks() {
    let json = localStorage.getItem("tasks");
    if (json ===  null) {
        return [];
    } else {
        return JSON.parse(json);
    }
}