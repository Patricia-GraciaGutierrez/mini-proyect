import { Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import About from "../src/pages/About";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import Sidebar from "../src/components/Sidebar";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="main-layout">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<h2>404 Not Found</h2>} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;