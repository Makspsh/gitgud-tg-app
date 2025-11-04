import { useEffect } from 'react';
import React, { useReducer } from "react";
import InfoPage from "./pages/InfoPage/InfoPage";
import StartMenu from "./pages/StartMenu/StartMenu";
const tg = window.Telegram.WebApp;

const ACTIONS = {
  GO_TO_INFO: "GO_TO_INFO",
  GO_TO_START: "GO_TO_START",
};

const initialState = {
  page: "start",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.GO_TO_INFO:
      return { ...state, page: "info" };
    case ACTIONS.GO_TO_START:
      return { ...state, page: "start" };
    default:
      return state;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      {state.page === "start" && (
        <StartMenu onOpenInfo={() => dispatch({ type: ACTIONS.GO_TO_INFO })} />
      )}

      {state.page === "info" && (
        <InfoPage onBack={() => dispatch({ type: ACTIONS.GO_TO_START })} />
      )}
    </>
  );
}