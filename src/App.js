import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./assets/styles/globalStyle";
import AppRouter from "./routes/Router";

function App() {
    return (
        <>
            <GlobalStyle />
            <Router>
                <AppRouter />
            </Router>
        </>
    );
}

export default App;
