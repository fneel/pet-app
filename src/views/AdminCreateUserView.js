import React, { useState } from "react";
import { UserModel } from "../models/user";
import { saveUsers } from "../storage/user";
import { useRecoilState } from "recoil";
import { usersState } from "../states";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

export function AdminCreateUserView() {
  const [users, setUsers] = useRecoilState(usersState);
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const register = () => {
    let existing = users.find((user) => user.name === username);
    if (existing !== undefined) {
      setMessage("That username is taken");
    } else {
      const newUser = new UserModel(username, password);

      let value = [...users, newUser];
      saveUsers(value);
      setUsers(value);
      navigate("/admin/users");
    }
  };

  return (
    <div>
      <div className="newUserContainer">
        <h2 className="title"> Skapa en ny användare</h2>
        <label>Användarnamn</label>
        <input
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <br />
        <label>Lösenord</label>
        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <br />

        <h4>Standarduppgifter:</h4>
        <ul>
          <li>Promenad - Morgon </li>
          <li>Promenad - Eftermiddag </li>
          <li>Promenad - Kväll </li>
        </ul>
        <br />
        <Button variant="primary" size="lg" onClick={register}>
          Skapa Användare
        </Button>
        <br />
        {message}
      </div>
    </div>
  );
}
