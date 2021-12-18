import { Avatar } from "@mui/material";
import React from "react";
import User from "../images/avatar.jpg";

// React bootstrap UI Components
import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap";
import "../css/index.css";

// Material Icons
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import WhatshotIcon from "@mui/icons-material/Whatshot";
// import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";

const ResponsiveNavbar = () => {
  return (
    <>
      {/* header  */}
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">BLOCK-STARS</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Market</Nav.Link>
              <Nav.Link href="#pricing">Spot</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Deriviatives
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Menu Item
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Menu Item
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Menu Item
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Deriviatives" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Menu Items
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Menu Item
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Menu Item
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Menu Item
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Deriviatives" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Menu Item
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Menu Item
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Menu Item
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Menu Item
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <NavDropdown title="Assets" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Menu Item
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Menu Item
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Menu Item
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Menu Item
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Orders & Trades" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Menu Item
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Menu Item
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Menu Item
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Menu Item
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>

            <NavDropdown title="EN/USD" >
              <NavDropdown.Item>Unread notification</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title={<NotificationsNoneIcon />}>
              <NavDropdown.Item>Unread notification</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link>
              <Avatar
                // alt="user's image"
                sx={{ width: 30, height: 30 }}
                src={User}
              />
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default ResponsiveNavbar;
