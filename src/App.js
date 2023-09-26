import "./App.css";
import { createContext, useContext, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { tasksState, userState, usersState, viewState } from "./states";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { LoginView } from "./views/LoginView";
import { loadUsers } from "./storage/user";
import { loadTasks } from "./storage/tasks";

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

  return (
  <div className="App">
    {user === null ? (
      <LoginView />
    ) : ( 
      <div>
        <div id="view">
          <nav>
            <Link to="/">Dashboard</Link>
            {user.name === "admin" ? (
              <>
              <Link to="/admin/tasks">Tasks</Link>
              <Link to="/admin/users">Users</Link>
              </>
            ) : (
              <>
              <Link to="/kid/tasks">Tasks</Link>
              </>
            )}
          </nav>
        </div>
        <div>
          <Routes>
            <Route index element={
              user.name === "admin" ? (
                <AdminDashboardView />
              ) : (
                <KidDashboardView />
              )
            }
            />
            <Route
            path="/kid/tasks"
            element={<KidTaskListView />}
            />
            <Route
            path="/kid/tasks:name"
            element={<KidTasksView />}
            />
            <Route path="/admin/tasks" element={<AdminTasksView />} />
            <Route path="/admin/users" element={<AdminUsersView />} />
            <Route
            path="/admin/create-user"
            element={<AdminCreateUserView />}
            />
            <Route
              path="/admin/edit-task"
              element={<AdminEditTaskView />}
            />
          </Routes>
        </div>
      </div>

    )}

  </div>
  );
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
