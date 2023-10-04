import { atom } from "recoil";
import { User } from "../models/user";
import { Task } from "../models/tasks";


//state som minns vilket konto du loggat in på
export const userState = atom({
    key: "user-login", 
    default: null,
});

//state som minns samtliga konton. Default-konto för att kunna logga in som admin
export const usersState = atom({
    key: "users",
    default: [new User("admin", "admin")],
});

//state som minns alla tasks
export const tasksState = atom({
    key: "tasks",
    default: [],
});


// atom för att hantera isCompleted-attributet för varje task
export const taskCompletedState = atom({
  key: 'taskCompletedState',
  default: {}, // objekt för att lagra isCompleted för varje task
});

export const userTasksState = atom({
    key: 'userTasksState',
    default: {},
});