import React from "react";
import "./InfoPage.css";
import homePageIcon from "../../assets/icons/homepage-icon.svg";
import WaitImage from "../../assets/wait-img.webp";

export default function InfoPage({ onBack }) {
  return (
    <div className="info-container">
      <h2 className="info-title">Справочник</h2>
      <img className="info-image" src={WaitImage} alt="wait" />
      <p className="info-text">Здесь будут карточки</p>
      <button className="home-btn blue" onClick={onBack}>
        <img src={homePageIcon} alt="home" />
      </button>
    </div>
  );
}