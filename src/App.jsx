import Balatro from "./components/Balatro/Balatro.jsx";
import NavBar from "./components/Navbar.jsx";
import Education from "./components/Education.jsx";
import Project from "./components/Projects.jsx";
import Experience from "./components/Experience.jsx";
import TechStack from "./components/TechStack.jsx";
import ContactMe from "./components/ContactMe.jsx";
import Hero from "./components/Hero.jsx";

function App() {
  return (
    <div className="flex flex-col min-h-screen w-screen overflow-x-hidden">

      {/* Background animation */}
      <div className="fixed inset-0 -z-10">
        <Balatro
          color3="#000000"
          color2="#444444"
          color1="#222222"
          isRotate={false}
          mouseInteraction={false}
          pixelFilter={7000}
        />
      </div>
      {/* Foreground text */}
      <NavBar />
      <Hero/>
      <Education/>
      <Project/>
      <Experience/>
      <TechStack/>
      <ContactMe/>
    </div>
  );
}

export default App;