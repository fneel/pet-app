import { atom } from "recoil";
import { UserModel } from "../models/user";
import { Task } from "../models/tasks";
import React, { useState } from "react";



//state som minns vilket konto du loggat in på
export const userState = atom({
    key: "user-login", 
    default: null,
});

//state som minns samtliga konton. Default-konto för att kunna logga in som admin
export const usersState = atom({
    key: "users",
    default: [new UserModel("admin", "admin")],
});

//state som minns alla tasks
export const tasksState = atom({
    key: "tasks",
    default: [new Task("Promenad")],
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
// läs på sidan intill pga error som inte accepterar objekt som child