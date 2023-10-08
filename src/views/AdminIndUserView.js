
import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { usersState, checkedState } from "../states";
import { useParams, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";


export function AdminIndUserView() {
  const [users, setUsers] = useRecoilState(usersState);
  const { id } = useParams();
  const isCompleted = useRecoilValue(checkedState);
  const navigate = useNavigate();

  const handleDeleteUser = () => {
    const updatedUsers = users.filter((user) => user.id !== parseInt(id));
    setUsers(updatedUsers);
    navigate("/admin/users");
  };

  const indUser = users.find((user) => user.id === parseInt(id));

  if (!indUser) {
    return <div>Användaren hittades inte.</div>;
  }

  return (
    <div className="indUserContainer">
      <h1>Användare: {indUser.name}</h1>
      <p>Lösenord: {indUser.password}</p>
      <h2>Uppgifter:</h2>
      <ul>
        {indUser.tasks.map((task, index) => (
          <li key={index}>
            Task: {task.name}
           
            Genomförd:{" "}
            {isCompleted[`${indUser.id}-${task.name}`]
              ? "     ja"
              : "     nej"}
          </li>
        ))}
      </ul>
      <Button onClick={handleDeleteUser}>Ta bort användare</Button>
    </div>
  );
}
