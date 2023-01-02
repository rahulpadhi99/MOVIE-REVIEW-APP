import "./App.css";
import Login from "./app/pages/Login";
import Home from "./app/pages/Home";
import Review from "./app/pages/Review";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/review" element={<Review />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
