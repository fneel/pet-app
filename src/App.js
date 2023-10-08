import "bootswatch/dist/minty/bootstrap.min.css";
// TODO: Note: Replace ^[theme]^ (examples: darkly, slate, cosmo, spacelab, and superhero. See https://bootswatch.com/ for current theme names.)
import "./bootstrap.min.css";
import "./App.css";

import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { userState, usersState } from "./states";
import { Route, Routes, useNavigate } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { LoginView } from "./views/LoginView";
import { loadUsers } from "./storage/user";
import { KidDashboardView } from "./views/KidDashboardView";
import { AdminDashboardView } from "./views/AdminDashboardView";
import { KidTaskListView } from "./views/KidTaskListView";
import { AdminUsersView } from "./views/AdminUsersView";
import { AdminCreateUserView } from "./views/AdminCreateUserView";
import { AdminIndUserView } from "./views/AdminIndUserView";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { FactView } from "./views/FactView";

export function App() {
  const [user, setUser] = useRecoilState(userState);

  const [users, setUsers] = useRecoilState(usersState);

  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear the user's session (set user to null or perform your logout logic)
    setUser(null);
    // Navigate to the login page
    navigate("/"); // Assuming "/" is your login page route
  };
  // fetch("https://bootswatch.com/api/5.json")
  //   .then((response) => response.json())
  //   .then((data) => console.log(data));

  useEffect(() => {
    let loaded = loadUsers();
    if (loaded.length !== 0) {
      setUsers(loaded);
    }

    // Check the user's role and navigate accordingly
    if (user) {
      if (user.name === "admin") {
        // Navigate to AdminDashboardView for 'admin'
        navigate("/admin/dashboard");
      } else {
        // Navigate to KidDashboardView for 'kid'
        navigate("/kid/dashboard");
      }
    }
  }, []);

  return (
    <div className="App">
      {user === null ? (
        <LoginView />
      ) : (
        <div>
          <div id="view">
            <Navbar expand="lg" className="bg-primary" data-bs-theme="dark">
              <LinkContainer to="/">
                <Nav.Link>Dashboard</Nav.Link>
              </LinkContainer>

              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  {user.name === "admin" ? (
                    <>
                      <LinkContainer to="/admin/users">
                        <Nav.Link>Users</Nav.Link>
                      </LinkContainer>
                    </>
                  ) : (
                    <>
                      <LinkContainer to="/kid/task-list">
                        <Nav.Link>TaskList</Nav.Link>
                      </LinkContainer>
                      <LinkContainer to="/kid/fact">
                        <Nav.Link>Dog Facts</Nav.Link>
                      </LinkContainer>
                    </>
                  )}
                </Nav>
                <Button onClick={handleLogout}>Log Out</Button>{" "}
                {/* Add the Log Out button */}
              </Navbar.Collapse>
            </Navbar>
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
              <Route
                path="/admin/dashboard" // Add the route for AdminDashboardView
                element={<AdminDashboardView />}
              />

              <Route path="/admin/users" element={<AdminUsersView />} />

              <Route
                path="/admin/ind-user/:id"
                element={<AdminIndUserView />} // Rendera AdminIndUserView
              />

              <Route
                path="/admin/create-user"
                element={<AdminCreateUserView />}
              />
              <Route
                path="/kid/dashboard" // Add the route for KidDashboardView
                element={<KidDashboardView />}
              />
              <Route path="/kid/task-list" element={<KidTaskListView />} />
              <Route path="/kid/fact" element={<FactView />} />
            </Routes>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
