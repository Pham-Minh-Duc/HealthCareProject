import "./App.css";
import "./assets/icon/themify-icons-font/themify-icons/themify-icons.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "../src/pages/login/signUp";
import Dashboard from "../src/pages/home/home";
function App() {
  return (
    <Router>
    <Routes>
      <Route path="/login" element={<SignUp />} />
      <Route path="/admin/dashboard" element={<Dashboard />} />
    </Routes>
  </Router>
  );
}

export default App;
