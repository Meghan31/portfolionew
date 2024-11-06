import "./app.scss";
import Details from "./components/hero/Details";
import Face from "./components/rive/Face";
import Navbar from "./components/navbar/navbar";
import Parallax from "./parallax/Parallax";
// import Projects from "./projects/Projects";

const App = () => {
  return (
    <div>
      <section id="Home">
        <Navbar />
        <div id="profile">
          <div className="face">
            <Face />
          </div>
          <Details />
        </div>
      </section>
      <section id="Parallax">
        <div className="bgimage"></div>
      </section>
      <section>
        <Parallax />
      </section>
      {/* <section id="About">
        <div>
          <Projects />
        </div>
      </section> */}
      {/*<section id="Projects">Projects</section>
      <section id="Experience">Experience</section>

      <section id="Contact">Contact</section>
      <section id=""></section> */}
    </div>
  );
};

export default App;
