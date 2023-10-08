//src\views\AdminCreateUserView.js

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
      <label>Username</label>
      <input
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <br />
      <label>Password</label>
      <input
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <br />
      <Button variant="primary" size="lg" onClick={register}>Register</Button>
      <br />
      {message}
      <br />

      {/* Lista de tre standarduppgifterna */}
      <h2>Standard Uppgifter:</h2>
      <ul>
        <li>Promenad 1</li>
        <li>Promenad 2</li>
        <li>Promenad 3</li>
      </ul>
    </div>
  );
}
