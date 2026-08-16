import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <About />

        <Skills />

        <Projects />

        {/* Temporary sections */}
        <section id="education"></section>

        <section id="contact"></section>
      </main>
    </>
  );
}

export default App;