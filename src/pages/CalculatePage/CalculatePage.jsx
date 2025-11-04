import React from "react";
import "./CalculatePage.css";
import homePageIcon from "../../assets/icons/homepage-icon.svg";
import WaitImage from "../../assets/wait-img.webp";

export default function CalculatePage({ onBack }) {
  return (
    <div className="calculate-container">
      <h2 className="calculate-title">Калькулятор</h2>
      <img className="calculate-image" src={WaitImage} alt="wait" />
      <p className="calculate-text">Здесь будет калькулятор</p>
      <button className="home-btn blue" onClick={onBack}>
        <img src={homePageIcon} alt="home" />
      </button>
    </div>
  );
}