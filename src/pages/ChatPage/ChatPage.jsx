import React, { useState } from "react";
import "./ChatPage.css";

export default function ChatPage({ onBack }) {
  const [messages, setMessages] = useState([
    { from: "bot", text: "какой-то вопрос" },
    { from: "user", text: "какой-то ответ" },
    { from: "bot", text: "какой-то вопрос" },
    { from: "user", text: "какой-то ответ" },
    { from: "bot", text: "спасибо" },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSend = () => {
    if (!inputValue.trim()) return;
    setMessages([...messages, { from: "user", text: inputValue }]);
    setInputValue("");
  };

  return (
    <div className="chatpage-wrapper">
      <div className="chatpage-header">
        <button className="chatpage-back-btn" onClick={onBack}>
          ←
        </button>
        <h2>чат</h2>
        <button
          className="chatpage-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      <div className="chatpage-body">
        {messages.map((msg, i) => (
          <div key={i} className={`chatpage-msg ${msg.from}`}>
            <div className="chatpage-bubble">{msg.text}</div>
          </div>
        ))}
      </div>

      <div className="chatpage-footer">
        <input
          type="text"
          placeholder="ответ..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button className="chatpage-send-btn" onClick={handleSend}>
          ➤
        </button>
      </div>

      {menuOpen && (
        <div
          className="chatpage-menu-overlay"
          onClick={() => setMenuOpen(false)}
        >
          <div
            className="chatpage-menu-panel"
            onClick={(e) => e.stopPropagation()}
          >
            <h4>*промпты для нейронки*</h4>
            <ul>
              <li>выбор тем вопросов</li>
              <li>кредиты, блокировка учёток...</li>
            </ul>
            <hr />
            <div className="chatpage-archive">
              <p>архивы завершённых чатов:</p>
              <div className="chatpage-archive-item">
                тема : дата : <button>удалить</button>
              </div>
              <div className="chatpage-archive-item">
                тема : дата : <button>удалить</button>
              </div>
              <div className="chatpage-archive-item">
                тема : дата : <button>удалить</button>
              </div>
              <button className="chatpage-delete-all">dell all</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
