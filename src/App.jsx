import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <About />

        <Skills />

        {/* Temporary sections - will be replaced */}
        <section id="projects"></section>

        <section id="education"></section>

        <section id="contact"></section>
      </main>
    </>
  );
}

export default App;