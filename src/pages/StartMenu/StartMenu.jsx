import React from "react";
import "./StartMenu.css";

import calculatorIcon from "../../assets/icons/calculate-icon.svg";
import chatIcon from "../../assets/icons/chat-icon.svg";

export default function StartMenu({ onOpenCalculator, onOpenChat }) {
  return (
    <div className="menu-container">
      <h1 className="menu-title">шаблоны:</h1>
      <div className="menu-buttons">
        <button className="menu-btn" onClick={onOpenCalculator}>
          <img src={calculatorIcon} alt="calculator" />
        </button>
        <button className="menu-btn" onClick={onOpenChat}>
          <img src={chatIcon} alt="chat" />
        </button>
      </div>
    </div>
  );
}
