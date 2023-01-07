import "./App.css";
import Login from "./app/pages/Login";
import Home from "./app/pages/Home";
import Review from "./app/pages/Review";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./app/pages/Welcome";
import Signup from "./app/pages/Signup";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/review" element={<Review />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
