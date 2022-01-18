import "./App.css";
import { Route, Navigate, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Work from "./components/Work/Work";
import About from "./components/About/About";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Navigate replace to="/work" />} />
      </Routes>
    </div>
  );
}

export default App;
