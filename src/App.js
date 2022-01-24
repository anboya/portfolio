import "./App.css";
import { Route, Navigate, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Work from "./components/Work/Work";
import About from "./components/About/About";
import UX_D from "./components/Work/UX_D/UX_D";
import Logo_D from "./components/Work/Logo_D/Logo_D";
import Motion_D from "./components/Work/Motion_D/Motion_D";
import Video_D from "./components/Work/Video_D/Video_D";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/work" element={<Work />} />
        <Route path="/work/ux" element={<UX_D />} />
        <Route path="/work/logo" element={<Logo_D />} />
        <Route path="/work/motion" element={<Motion_D />} />
        <Route path="/work/video" element={<Video_D />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Navigate replace to="/work" />} />
      </Routes>
    </div>
  );
}

export default App;
