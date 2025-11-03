import React from "react";
import "./StartMenu.css";
import MenuButton from "../components/MenuButton/MenuButton";
import { FaInfo, FaQuestion, FaCalculator } from "react-icons/fa";

export default function StartMenu() {
  return (
    <div className="start-menu">
      <h1 className="menu-title">кредитные карты</h1>
      <div className="menu-buttons">
        <MenuButton color="#2bb4c7" icon={<FaInfo />} onClick={() => console.log("info")} />
        <MenuButton color="#1e8c2f" icon={<FaQuestion />} onClick={() => console.log("faq")} />
        <MenuButton color="#1e8c2f" icon={<FaCalculator />} onClick={() => console.log("calc")} />
      </div>
    </div>
  );
}