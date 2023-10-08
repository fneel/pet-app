import { atom } from "recoil";
import { UserModel } from "../models/user";

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

// atom för att hantera isCompleted-attributet för varje task
export const checkedState = atom({
  key: "checked-state",
  default: {}, // objekt för att lagra isCompleted för varje task
});
