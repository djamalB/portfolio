import "./styles/main.css";

import NavBar from "./components/navBar/NavBar";
import Home from "./pages/Home";
import Footer from "./components/footer/Footer";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import Project from "./pages/Project";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ScrollToTop from "./utils/scrollToTop";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/project/:id" element={<Project />}></Route>
          <Route path="/contacts" element={<Contacts />}></Route>
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
