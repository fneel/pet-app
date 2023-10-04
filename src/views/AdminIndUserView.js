import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { Task } from "../models/tasks";
import { usersState, userState, taskCompletedState } from "../states";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { KidTaskListView } from "./KidTaskListView";
import { AdminTasksView } from "./AdminTasksView";

export function AdminIndUserView( kidsTasks) {
  const { id } = useParams(); // Hämta id från URL
  const users = useRecoilValue(usersState); // Hämta listan med användare från Recoil
  const { kidId } = useParams();
  const isCompleted = useRecoilValue(taskCompletedState); // Hämta taskCheck-state

  // Använd id för att hitta den specifika användaren
  const user = users.find((user) => user.id === parseInt(id));

  if (!user) {
    // Om användaren inte hittades, hantera det här
    return <div>Användaren hittades inte.</div>;
  }
    console.log("Användare:", user);
    // console.log(taskChecks);

  // Nu har du den specifika användaren i "user" att använda för att visa deras information
  return (
    <div>
      <h1>Användare: {user.name}</h1>
      <p>Lösenord: {user.password}</p>
      <h2>Uppgifter:</h2>
      <ul>
        {kidsTasks.map((task) => (
          <li key={task.name}>
            Course: {task.name}
            <br />
            Completed: {task.isCompleted ? "Yes" : "No"}
          </li>
        ))}
      </ul>
      {/* {user.task && (
        <ul>
          {user.tasks.map((task) => (
            <li key={task.name}>
              {task.name} -{" "}
              {taskChecks[`${user.id}-${task.name}`]
                ? "Klickad"
                : "Inte klickad"} 
            </li> 
          ))}
        </ul> 
      )} */}

      {/* Visa andra användarinformation här */}
    </div>
  );


}