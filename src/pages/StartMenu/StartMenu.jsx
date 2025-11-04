import React from "react";
import "./StartMenu.css";
import infoIcon from "../../assets/icons/info-icon.svg";
import questionIcon from "../../assets/icons/question-icon.svg";
import calculatorIcon from "../../assets/icons/calculate-icon.svg";

export default function StartMenu({ onOpenInfo }) {
  return (
    <div className="menu-container">
      <h1 className="menu-title">разделы</h1>
      <div className="menu-buttons">
        <button className="menu-btn blue" onClick={onOpenInfo}>
          <img src={infoIcon} alt="info" />
        </button>
        <button className="menu-btn green">
          <img src={questionIcon} alt="question" />
        </button>
        <button className="menu-btn darkgreen">
          <img src={calculatorIcon} alt="calculator" />
        </button>
      </div>
    </div>
  );
}
