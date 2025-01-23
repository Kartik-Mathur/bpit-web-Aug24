import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import './index.css'
import { configureStore } from "@reduxjs/toolkit";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { counterSlice } from "./slices/counterSlice.jsx";

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
