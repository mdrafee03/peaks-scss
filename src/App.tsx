import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Topbar from "./components/Topbar/Topbar";

function App() {
  return (
    <BrowserRouter>
      <Topbar />
      <div className="content-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
