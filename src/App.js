import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/contact";
// import About from './component/about';
// import Contact from './component/contact';
import "./App.css";
import Navbar from "./component/nav";
import About from "./pages/about";
import Agritech from "./pages/agritech";
import WaterSolutions from "./pages/waterSolutions";
import CustomizedIt from "./pages/customizedIt";
import Solutions from "./pages/solutions";
import Testimonials from "./pages/Testimonial";

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <div className="App">
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/agritech" element={<Agritech />}></Route>
            <Route
              exact
              path="/customizedIt"
              element={<CustomizedIt />}
            ></Route>
            <Route
              exact
              path="/waterSolutions"
              element={<WaterSolutions />}
            ></Route>
            <Route exact path="/solutions" element={<Solutions />}></Route>
            <Route exact path="/contact" element={<Contact />}></Route>
            <Route
              exact
              path="/testimonials"
              element={<Testimonials />}
            ></Route>
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
