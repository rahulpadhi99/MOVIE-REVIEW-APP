import "./App.css";
import Home from "./app/pages/Home";
import Login from "./app/pages/Login";
import Signup from "./app/pages/Signup";
import Review from "./app/pages/Review";
import Welcome from "./app/pages/Welcome";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./app/authentication/ProtectedRoute";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<ProtectedRoute />}>
              <Route path="/home" element={<Home />} />
              <Route path="/review" element={<Review />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
};

export default App;
