import React from "react";
import "./MenuButton.css";

export default function MenuButton({ icon, onClick }) {
  return (
    <button
      className="menu-button"
      onClick={onClick}
    >
      {icon}
    </button>
  );
}