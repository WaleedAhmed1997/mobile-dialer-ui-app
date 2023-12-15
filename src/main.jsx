import App from "./App.jsx";

import React from "react";
import ReactDOM from "react-dom";
import { reducer } from "./store";
import StoreProvider from "./components/StoreProvider";

// import "./styles.css";

const initialState = { dialerOpened: false };
// const TeravozDialer = () => (
//   <StoreProvider initialState={initialState} reducer={reducer}>
//     <ToggleDialer />
//     <Dialer />
//   </StoreProvider>
// );

// ReactDOM.render(<TeravozDialer />, document.querySelector("#root"));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StoreProvider initialState={initialState} reducer={reducer}>
      <App />
    </StoreProvider>
  </React.StrictMode>
);
