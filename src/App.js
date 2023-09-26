import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createContext, useContext, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { tasksState, userState, usersState, viewState } from "./states";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { LoginView } from "./views/LoginView";
import { loadUsers } from "./storage/user";
import { loadTasks } from "./storage/tasks";
import { KidDashboardView } from "./views/KidDashboardView";
import { AdminDashboardView } from "./views/AdminDashboardView";
import { KidTaskListView } from "./views/KidTaskListView";
import { KidTasksView } from "./views/KidTasksView";
import { AdminTasksView } from "./views/AdminTasksView";
import { AdminUsersView } from "./views/AdminUsersView";
import { AdminCreateUserView } from "./views/AdminCreateUserView";
import { AdminEditTaskView } from "./views/AdminEditTaskView";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";


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
            <Navbar expand="lg" className="bg-body-tertiary">
              <Container>
                <Navbar.Brand href="/">Dashboard</Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  {user.name === "admin" ? (
                    <>
                      <Nav className="me-auto">
                        <Nav.Link href="/admin/tasks">Tasks</Nav.Link>
                        <Nav.Link href="/admin/users">Users</Nav.Link>
                      </Nav>
                    </>
                  ) : (
                    <>
                      <Nav className="me-auto">
                        <Nav.Link href="/admin/tasks">Tasks</Nav.Link>
                        <Nav.Link href="/admin/users">Users</Nav.Link>
                      </Nav>
                    </>
                  )}
                </Navbar.Collapse>
              </Container>
            </Navbar>
            //gamla nav
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
          </div>
          <div>
            <Routes>
              <Route
                index
                element={
                  user.name === "admin" ? (
                    <AdminDashboardView />
                  ) : (
                    <KidDashboardView />
                  )
                }
              />
              <Route path="/kid/tasks" element={<KidTaskListView />} />
              <Route path="/kid/tasks:name" element={<KidTasksView />} />
              <Route path="/admin/tasks" element={<AdminTasksView />} />
              <Route path="/admin/users" element={<AdminUsersView />} />
              <Route
                path="/admin/create-user"
                element={<AdminCreateUserView />}
              />
              <Route path="/admin/edit-task" element={<AdminEditTaskView />} />
            </Routes>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

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
