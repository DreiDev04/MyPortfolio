import "./Styles/App.css";
import NavBar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import TechStacks from "./Components/TechStacks";
import Projects from "./Components/Projects";
import Contacts from "./Components/Contacts";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <br />
      <TechStacks />
      <br />
      <br />
      <br />


      <About />
      <br />
      <Projects />
      <br />
      <br />
      <Contacts />

      <Footer />


    </>
  );
}

export default App;
