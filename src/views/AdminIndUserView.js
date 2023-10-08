import React from "react";
import { useRecoilValue } from "recoil";
import { usersState, checkedState } from "../states";
import { useParams } from "react-router-dom";

export function AdminIndUserView() {
  // Hämta listan med användare från Recoil
  const users = useRecoilValue(usersState);
  const { id } = useParams();
  const isCompleted = useRecoilValue(checkedState);

  // Hitta den specifika användaren med hjälp av id
  const indUser = users.find((user) => user.id === parseInt(id));

  if (!indUser) {
    // Hantera om användaren inte hittades
    return <div>Användaren hittades inte.</div>;
  }

  return (
    <div>
      <h1>Användare: {indUser.name}</h1>
      <p>Lösenord: {indUser.password}</p>
      <h2>Uppgifter:</h2>
      <ul>
        {indUser.tasks.map((task, index) => (
          <li key={index}>
            Task: {task.name}
            <br />
            Completed:{" "}
            {isCompleted[`${indUser.id}-${task.name}`]
              ? "Checked"
              : "Unchecked"}
          </li>
        ))}
      </ul>
    </div>
  );
}
