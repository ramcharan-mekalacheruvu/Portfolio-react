import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <About />

        <section
          id="skills"
          style={{
            minHeight: "100vh",
            padding: "120px 30px",
          }}
        >
          <h2>Skills</h2>
        </section>

        <section
          id="projects"
          style={{
            minHeight: "100vh",
            padding: "120px 30px",
          }}
        >
          <h2>Projects</h2>
        </section>

        <section
          id="education"
          style={{
            minHeight: "100vh",
            padding: "120px 30px",
          }}
        >
          <h2>Education</h2>
        </section>

        <section
          id="contact"
          style={{
            minHeight: "100vh",
            padding: "120px 30px",
          }}
        >
          <h2>Contact</h2>
        </section>
      </main>
    </>
  );
}

export default App;