import React from "react";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import OurWork from "./pages/OurWork";
import Contact from "./pages/Contact";
import MovieDetail from "./pages/MovieDetail";

// GLOBAL STYLE
import GlobalStyle from "./components/global-style/GlobalStyle";

import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route exact path="/">
          <About />
        </Route>
        <Route exact path="/work">
          <OurWork />
        </Route>
        <Route path="/work/:id">
          <MovieDetail />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
