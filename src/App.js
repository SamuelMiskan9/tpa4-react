import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { About } from "./pages/About";
import Navbar from "./pages/Navbar";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import AOS from "aos";

AOS.init();

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home
              info="Well hello people, Good Morning. Welcome to my simple Personal
            Website, hope you enjoy your stay Here"
            />
          }
        />
        <Route
          path="/About"
          element={
            <About
              about="Hello, my name is Samuel Miskan, an Undergraduate Informatics
        Engineering student that has interest in Front End Development. Now
        I'm currently trying to master things like (ReactJS, NodeJs, Html,
        Css, JS, etc). I study on Raja Ali Haji Maritime University or in
        local pronounce we called it Universitas Maritim Raja Ali Haji. I
        lived in Indonesia, nice to meet you !"
            />
          }
        />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Blog" element={<Blog />} />
      </Routes>
    </>
  );
}

export default App;
