//funktion som sparar alla tasks till localStorage ("databasen")

export function saveTasks(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}


//funktion som laddar in all data från "saveTasks" -funktionen ovanför
//från början finns ingen data - därav en tom array
export function loadTasks() {
    let json = localStorage.getItem("tasks");
    if (json ===  null) {
        return [];
    } else {
        return JSON.parse(json);        
    }
    
}