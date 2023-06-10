import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AudioContextProvider } from "./store/audio-context";
import { EmotionContextProvider } from "./store/emotion-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AudioContextProvider>
      <EmotionContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </EmotionContextProvider>
    </AudioContextProvider>
  </React.StrictMode>
);
