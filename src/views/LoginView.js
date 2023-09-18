import { useState } from "react";
import { useRecoilState } from "recoil";

export function LoginView({}) {
  // Skapar en referens till "userState" global state. Den fungerar precis som "useState", förutom att den inte skapar en ny state och använder den globala staten istället.
  const [user, setUser] = useRecoilState(userState);

  // Skapar en referens till "usersState" global state. Den fungerar precis som "useState", förutom att den inte skapar en ny state och använder den globala staten istället.
  const [users, setUsers] = useRecoilState(usersState);

  // Denna state håller koll på vad som skrivs in i det första input fältet (username). Det behövs så att informationen kan nås när man ska logga in (vilket händer i "tryLogin" funktionen).
  const [username, setUsername] = useState("");
  // Denna state håller koll på vad som skrivs in i det andra input fältet (password). Det behövs så att informationen kan nås när man ska logga in (vilket händer i "tryLogin" funktionen).
  const [password, setPassword] = useState("");
  // Denna state används för att informera användaren om den har skrivit in fel namn eller lösenord. Den börjar som en tom sträng eftersom man i början inte har skrivit in något än. Om man lyckas logga in på första försöket så ignoreras denna state.
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