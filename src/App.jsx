import Home from "./Pages/Home/Home";
import "./App.css";
import NavBar from "./components/Nav/NavBar";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CoursesPage from "./Pages/Courses/CoursesPage";
const App = () => {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/about" element={<h1>About</h1>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
