import React from "react";
import "./StartMenu.css";
import MenuButton from "../components/MenuButton/MenuButton";
import InfoIcon from "../assets/icons/info-icon.svg";
import QuestionIcon from "../assets/icons/question-icon.svg";
import CalculatorIcon from "../assets/icons/calculate-icon.svg";

export default function StartMenu() {
  return (
    <div className="start-menu">
      <h1 className="menu-title">кредитные карты</h1>
      <div className="menu-buttons">
        <MenuButton icon={<img src={InfoIcon} alt="info" />} color="#2bb4c7" />
        <MenuButton
          icon={<img src={QuestionIcon} alt="faq" />}
          color="#1e8c2f"
        />
        <MenuButton
          icon={<img src={CalculatorIcon} alt="calc" />}
          color="#1e8c2f"
        />
      </div>
    </div>
  );
}
