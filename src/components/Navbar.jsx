import React from "react";

// using bootstrap-react to make navbar(makes a request to the server to redirect)
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

// function SiteNavbar(props) {
//   return (
//     <Navbar expand="md" bg="dark" variant="dark">
//       <Container>
//         <Navbar.Brand href="#home" id="brand">Project Robot</Navbar.Brand>
//         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="/">Home</Nav.Link>
//             <Nav.Link href="/education">Education & Skills</Nav.Link>
//             <Nav.Link href="/projects">Projects</Nav.Link>
//             <Nav.Link href="/contact">Contact</Nav.Link>
            
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default SiteNavbar;



import { NavLink } from "react-router-dom";

function SiteNavbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-black animated slideInDown">
                <NavLink className="navbar-brand " id="brand" to="/">Project Robot</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault"
                    aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/education">Education & Skills</NavLink>
                        </li>
                        <li className="nav-item" href="#">
                            <NavLink className="nav-link" to="/projects">Projects</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact and Resume</NavLink>
                        </li>

                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default SiteNavbar;