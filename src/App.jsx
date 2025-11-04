import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainMenu from "./pages/StartMenu/StartMenu";
import InfoPage from "./pages/InfoPage/InfoPage";
const tg = window.Telegram.WebApp;

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/info" element={<InfoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
