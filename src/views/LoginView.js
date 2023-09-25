import { useState } from "react";
import { login } from "../storage/user";
import { useRecoilState } from "recoil";
import { userState, usersState } from "../states";


export function LoginView({}) {
  const [user, setUser] = useRecoilState(userState);

  const [users, setUsers] = useRecoilState(usersState);

  const [username, setUsername] = useState("");
  
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");

  /*
    En funktion som anroppas när man trycker på "Login" knappen på sidan. Den hämtar information från input fälten och försöker koppla den till en användare.
    Om en användare hittas så skickas den informationen vidare till App komponenten (som har en state som håller koll på vem som är inloggad).
    */
  const tryLogin = () => {
    // Kopplar användare till namn och lösenord
    let user = login(username, password, users);
    if (user === null) {
      setMessage("You entered the wrong name or password.");
    } else {
      // Säger att en användare har loggat in (eller stannar kvar på 'null' ifall man skrev in fel användarnamn eller lösenord)
      setUser(user);
    }

    // Följande rader tar bort innehållet i input fälten så att de "resettas".
    setPassword("");
    setUsername("");
  };

  return (
    <>
      <label>Username</label>
      <input
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        required
      />
      <br />
      <label>Password</label>
      <input
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        required
      />
      <br />
      <button onClick={tryLogin}>Login</button>
      {message}
    </>
  );
}