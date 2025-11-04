import React from "react";
import "./StartMenu.css";
import infoIcon from "../../assets/icons/info-icon.svg";
import questionIcon from "../../assets/icons/question-icon.svg";
import calculatorIcon from "../../assets/icons/calculate-icon.svg";
import { useNavigate } from "react-router-dom";

export default function StartMenu() {
  const navigate = useNavigate();

  const handleOpenInfo = () => {
    navigate("/info");
  };

  return (
    <div className="menu-container">
      <h1 className="menu-title">разделы</h1>
      <div className="menu-buttons">
        <button className="menu-btn blue" onClick={handleOpenInfo}>
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
