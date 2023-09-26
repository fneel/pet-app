import { useState } from "react";
import { User } from "../models/user";
import { saveUsers } from "../storage/user";
import { useRecoilState } from "recoil";
import { usersState, viewState } from "../states";
import { useNavigate } from "react-router-dom";



export function AdminCreateUserView({}) {

  const [users, setUsers] = useRecoilState(usersState);
  const navigate = useNavigate();


  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");


  const register = () => {
    let existing = users.find((all) => all.name === username);
    if (existing !== undefined) {
      setMessage("That username is taken");
    } else {
      let value = [...users, new User(username, password)];
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
      <button onClick={register}>Register</button>
      <br />
      {message}
    </div>
  );
}