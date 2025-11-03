import React from "react";
import "./MenuButton.css";

export default function MenuButton({ icon, color, onClick }) {
  return (
    <button
      className="menu-button"
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      {icon}
    </button>
  );
}