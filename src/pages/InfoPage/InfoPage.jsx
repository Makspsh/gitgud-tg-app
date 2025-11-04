import React from "react";
import "./InfoPage.css";

export default function InfoPage({ onBack }) {
  return (
    <div className="info-container">
      <h2 className="info-title">Справочник</h2>
      <p className="info-text">Здесь будут карточки</p>
      <button onClick={onBack}>Назад</button>
    </div>
  );
}