import {BrowserRouter, Routes, Route} from "react-router"
import Dashboard from "./pages/Dashboard"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Aboutus from "./pages/Aboutus"
import Contact from "./pages/Contact"
import Courses from "./pages/Courses"
import Layout from "./components/Layout"
import './App.css'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/home" element={<Home />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}