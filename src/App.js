import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import HomeView from "./components/home-view/home-view";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import AboutView from "./components/about-view/about-view";
import ContactView from "./components/contact-view/contact-view";
import WorkView from "./components/work-view/work-view";
import Impressum from "./components/impressum/impressum";
import { projects } from "./projects";

function App() {
  return (
    <Router>
      <Header className="header" />
      <Routes>
        <Route
          exact
          path="/portfolio"
          element={
            <div className="App">
              <HomeView />
              <AboutView />
              <WorkView projects={projects} />
              <ContactView />
            </div>
          }
        />
        <Route path="/portfolio/impressum" element={<Impressum />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
