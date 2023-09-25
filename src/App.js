import "./App.css";
import { createContext, useContext, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { tasksState, userState, usersState, viewState } from "./states";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { LoginView } from "./views/LoginView";
import { loadUsers } from "./storage/user";

export function App() {
  const [user, setUser] = useRecoilState(userState);

  const [users, setUsers] = useRecoilState(usersState);

  const [tasks, setTasks] = useRecoilState(tasksState);

  useEffect(() => {
    let loaded = loadUsers();
    if (loaded.length !== 0) {
      setUsers(loaded);
    }
    loaded = loadTasks();
    setTasks(loaded);

}, []);

  return <div className="App">

  </div>;
}

// import './App.css';
// import React, { Fragment } from "react";
// import "./index.css"
// import "./views/LoginView"

// import { BrowserRouter as Router } from 'react-router-dom';

// export function App() {
//   return (
//     <Router>
//       <div className="App">
//         <header className="App-header">
//           <nav>
//           <ul>
//             <li>ååå</li>
//             <li>JAHAOKEJ</li>
//             <li>JAHAOKEJ</li>
//           </ul>
//           </nav>
//         </header>
//       </div>
//     </Router>
//   );
// }

// export default App;
