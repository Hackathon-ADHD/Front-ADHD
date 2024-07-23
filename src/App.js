import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./assets/styles/globalStyle";
import AppRouter from "./routes/Router";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <>
      <RecoilRoot>
        <GlobalStyle />
        <Router>
          <AppRouter />
        </Router>
      </RecoilRoot>
    </>
  );
}

export default App;
