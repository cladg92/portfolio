import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomeView from "./components/home-view/home-view";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import AboutView from "./components/about-view/about-view";
import ContactView from "./components/contact-view/contact-view";
import WorkView from "./components/work-view/work-view";
import MeetView from "./components/meet-view/meet-view";

function App() {
  return (
    <div className="App">
      <Router>
        <Header className="header" />
        <Routes>
          <Route exact path="/" element={<HomeView className="element" />} />
          <Route
            exact
            path="/about"
            element={<AboutView className="element" />}
          />
          <Route
            exact
            path="/contact"
            element={<ContactView className="element" />}
          />
          <Route
            exact
            path="/work"
            element={<WorkView className="element" />}
          />
          <Route
            exact
            path="/meet-app"
            element={<MeetView className="element" />}
          />
        </Routes>
        <Footer className="footer" />
      </Router>
    </div>
  );
}

export default App;
