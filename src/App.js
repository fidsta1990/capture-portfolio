import React from "react";
// import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";
// GLOBAL STYLE
import GlobalStyle from "./components/global-style/GlobalStyle";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Home />
    </div>
  );
}

export default App;
