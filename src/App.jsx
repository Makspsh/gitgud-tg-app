import { useEffect, useReducer } from 'react';

import StartMenu from "./pages/StartMenu/StartMenu";
import CalculatorPage from "./pages/CalculatorPage/CalculatorPage";
import ChatPage from "./pages/ChatPage/ChatPage";

const tg = window.Telegram.WebApp;

const ACTIONS = {
  GO_TO_START: "GO_TO_START",
  GO_TO_CALCULATOR: "GO_TO_CALCULATOR",
  GO_TO_CHAT: "GO_TO_CHAT",
};

const initialState = {
  page: "start",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.GO_TO_START:
      return { ...state, page: "start" };
    case ACTIONS.GO_TO_CHAT:
        return { ...state, page: "chat" };
    case ACTIONS.GO_TO_CALCULATOR:
      return { ...state, page: "calculator" };
    default:
      return state;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const theme = tg.themeParams;

    if (theme) {
      document.body.style.backgroundColor = theme.bg_color;
      document.body.style.color = theme.text_color;
    }
  }, []);
  
  return (
    <>
      {state.page === "start" && (
        <StartMenu
          onOpenCalculator={() => dispatch({ type: ACTIONS.GO_TO_CALCULATOR })}
        />
      )}
      
      {state.page === "calculator" && (
        <CalculatorPage onBack={() => dispatch({ type: ACTIONS.GO_TO_START })} />
      )}

      {state.page === "chat" && (
        <ChatPage onBack={() => dispatch({ type: ACTIONS.GO_TO_START })} />
      )}

    </>
  );
}