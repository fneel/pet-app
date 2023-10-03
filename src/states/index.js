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

export const taskCheckState = atom({
  key: "taskCheckState",
  default: {}, // Här sparar vi användarens klick i checkboxen för varje uppgift
});