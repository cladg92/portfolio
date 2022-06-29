import React from "react";
import "./App.css";

import HomeView from "./components/home-view/home-view";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import AboutView from "./components/about-view/about-view";
import ContactView from "./components/contact-view/contact-view";
import WorkView from "./components/work-view/work-view";
import { projects } from "./projects";

function App() {
  return (
    <div className="App">
      <Header className="header" />
      <HomeView />
      <AboutView />
      <WorkView projects={projects} />
      <ContactView />
      <Footer />
    </div>
  );
}

export default App;
