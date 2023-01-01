import "./App.css";
import Login from "./app/pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./app/pages/Home";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
