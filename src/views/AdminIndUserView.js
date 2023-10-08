//src\views\AdminIndUserView.js


import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { usersState, checkedState } from "../states";
import { useParams, useNavigate } from "react-router-dom";

export function AdminIndUserView() {
  const [users, setUsers] = useRecoilState(usersState);
  const { id } = useParams();
  const isCompleted = useRecoilValue(checkedState);
  const navigate = useNavigate();

  const handleDeleteUser = () => {
    // Filtrera ut användaren som ska tas bort
    const updatedUsers = users.filter((user) => user.id !== parseInt(id));
    setUsers(updatedUsers);
    // Navigera tillbaka till AdminUsersView
    navigate("/admin/users");
  };

  const indUser = users.find((user) => user.id === parseInt(id));

  if (!indUser) {
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
      <button onClick={handleDeleteUser}>Ta bort användare</button>
    </div>
  );
}
