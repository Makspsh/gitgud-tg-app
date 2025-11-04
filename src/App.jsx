import { useEffect } from 'react';
import React, { useReducer } from "react";

import StartMenu from "./pages/StartMenu/StartMenu";
import InfoPage from "./pages/InfoPage/InfoPage";
import QuestionPage from "./pages/QuestionPage/QuestionPage";

const tg = window.Telegram.WebApp;

const ACTIONS = {
  GO_TO_INFO: "GO_TO_INFO",
  GO_TO_START: "GO_TO_START",
  GO_TO_QUESTION: "GO_TO_QUESTION",
};

const initialState = {
  page: "start",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.GO_TO_START:
      return { ...state, page: "start" };
    case ACTIONS.GO_TO_INFO:
      return { ...state, page: "info" };
    case ACTIONS.GO_TO_QUESTION:
      return { ...state, page: "question" };
    
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
          onOpenInfo={() => dispatch({ type: ACTIONS.GO_TO_INFO })}
          onOpenQuestion={() => dispatch({ type: ACTIONS.GO_TO_QUESTION })}
        />
      )}

      {state.page === "info" && (
        <InfoPage onBack={() => dispatch({ type: ACTIONS.GO_TO_START })} />
      )}

      {state.page === "question" && (
        <QuestionPage onBack={() => dispatch({ type: ACTIONS.GO_TO_START })} />
      )}
    </>
  );
}