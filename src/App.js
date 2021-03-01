import React from "react";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import OurWork from "./pages/OurWork";
import Contact from "./pages/Contact";
import MovieDetail from "./pages/MovieDetail";

// GLOBAL STYLE
import GlobalStyle from "./components/global-style/GlobalStyle";

import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";


function App() {
  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />
    
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
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
      </AnimatePresence>
    </div>
  );
}

export default App;
