import "../bootstrap.min.css";
import "bootswatch/dist/minty/bootstrap.min.css";
import { useState } from "react";
import { login } from "../storage/user";
import { useRecoilState } from "recoil";
import { userState, usersState } from "../states";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";


export function LoginView({}) {
  const [user, setUser] = useRecoilState(userState);

  const [users, setUsers] = useRecoilState(usersState);

  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");


  const tryLogin = () => {
    let user = login(username, password, users);
    if (user === null) {
      setMessage("Fel lösenord");
    } else {

      setUser(user);
    }

    setPassword("");
    setUsername("");
  };

  return (
    <>
      <Form.Group className="mb-3" controlId="loginViewUsername">
        <Form.Control
          type="email"
          placeholder="Användarnamn"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          required
        />

        <br />
        <Form.Group className="mb-3" controlId="loginViewPassword">
          <Form.Control
            type="password"
            placeholder="Lösenord"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </Form.Group>
        <br />
        <Button type="Submit" onClick={tryLogin}>
          Login
        </Button>
        {message}
      </Form.Group>
    </>
  );
}
