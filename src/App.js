import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "./App.css";

import Navbar from "./NavBar.js";
import Footer from "./SFooter.js";
import AnimatedCursor from "react-animated-cursor";

import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Activity from "./Components/Activity";
import PageNotFound from "./Components/PageNotFound.js";

function App() {
  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={3}
        outerAlpha={0}
        hasBlendMode={true}
        clickables={[
          "h1",
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
        innerStyle={{
          backgroundColor: "red",
        }}
        outerStyle={{
          border: "3px solid black",
        }}
      />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
