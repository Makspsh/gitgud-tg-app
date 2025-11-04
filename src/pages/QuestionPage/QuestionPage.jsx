import React from "react";
import "./QuestionPage.css";
import homePageIcon from "../../assets/icons/homepage-icon.svg";
import WaitImage from "../../assets/wait-img.webp";

export default function QuestionPage({ onBack }) {
  return (
    <div className="question-container">
      <h2 className="question-title">Вопросник</h2>
      <img className="question-image" src={WaitImage} alt="wait" />
      <p className="question-text">Здесь будут вопросы</p>
      <button className="home-btn blue" onClick={onBack}>
        <img src={homePageIcon} alt="home" />
      </button>
    </div>
  );
}