import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaSignOutAlt } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import DarkModeToggle from "./DarkModeToggle";
import { useDarkModeContext } from "../context/DarkModeContext";
import "../App.css";

const NavigationBar = () => {
  const { darkMode } = useDarkModeContext();

  const handleLogout = () => {
    localStorage.removeItem("token");

    window.location.replace("/");
  };

  return (
    <Navbar
      bg={darkMode ? "dark" : "light"}
      variant={darkMode ? "dark" : "light"}
      expand="lg"
      className={darkMode ? "dark-mode" : "light-mode"}
    >
      <Container>
        <Navbar.Brand href="/dashboard">
          Task Management Application
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <DarkModeToggle />
          </Nav>
        </Navbar.Collapse>
        <button
          className="btn btn-info"
          style={{ display: "flex", alignItems: "center" }}
          onClick={handleLogout}
        >
          <FaSignOutAlt style={{ color: "white" }} />
          <span style={{ color: "white" }}>Log Out</span>
        </button>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
