// import React from "react";
// import { Navbar, Nav } from "react-bootstrap";
// import { LinkContainer } from "react-router-dom";
// function NavigationBar() {
//   return (
//     <Navbar bg="dark" expand="lg" variant="dark">
//       <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//       <Navbar.Toggle aria-controls="basic-navbar-nav" />
//       <Navbar.Collapse id="basic-navbar-nav">
//         <Nav className="mr-auto">
//           <Nav.Link href="#home">Home</Nav.Link>
//           <Nav.Link href="#link">Link</Nav.Link>
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
//   );
// }
// export default NavigationBar;


//  <Navbar expand="lg" className="bg-primary" data-bs-theme="dark">
//    <Container>
//      <Navbar.Brand as={Link} to="/">
//        <strong>Dashboard</strong>
//      </Navbar.Brand>
//      <Nav className="me-auto">
//        <NavItem eventkey={1} href="/admin/tasks">
//          <Nav.Link as={Link} to="/admin/tasks">
//            Home
//          </Nav.Link>
//        </NavItem>
//      </Nav>
//      <Navbar.Toggle aria-controls="basic-navbar-nav" />
//      <Navbar.Collapse id="basic-navbar-nav">
//        {user.name === "admin" ? (
//          <>
//            <Nav.Link to="/admin/tasks">Tasks</Nav.Link>
//            <Nav.Link href="/admin/users">Users</Nav.Link>
//          </>
//        ) : (
//          <>
//            <Nav.Link href="#KidTasksView">Tasks</Nav.Link> //!!! FIXA
//          </>
//        )}
//      </Navbar.Collapse>
//    </Container>
//  </Navbar>;