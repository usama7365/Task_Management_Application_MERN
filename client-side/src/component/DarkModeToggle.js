import React from "react";
import { useDarkModeContext } from "../context/DarkModeContext";
import { Form } from "react-bootstrap";
import "../App.css";

const DarkModeToggle = () => {
  const { darkMode, toggleDarkMode } = useDarkModeContext();

  const handleToggle = () => {
    toggleDarkMode();
    console.log("Dark Mode Toggled");
  };
  return (
    <Form className="my-4">
      <Form.Check
        type="switch"
        id="darkModeSwitch"
        label="Dark Mode"
        checked={darkMode}
        style={{ width: "160px", cursor: "pointer" }}
        onChange={handleToggle}
      />
    </Form>
  );
};

export default DarkModeToggle;
