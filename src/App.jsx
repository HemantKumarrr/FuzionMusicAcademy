import "./App.css";
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const Home = lazy(() => import("./Pages/Home/Home"));
const NavBar = lazy(() => import("./components/Nav/NavBar"));
const Footer = lazy(() => import("./components/Footer/Footer"));
const CoursesPage = lazy(() => import("./Pages/Courses/CoursesPage"));
import Loader from "./components/Loader/Loader";

const App = () => {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <NavBar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/courses"
            element={
              <Suspense fallback={<Loader />}>
                <CoursesPage />
              </Suspense>
            }
          />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
};

export default App;
