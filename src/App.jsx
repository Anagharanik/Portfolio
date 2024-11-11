
import About from "./About";
import Skills from "./Skills";
 import Projects from "./Projects";
 import Contact from "./Contact";
 import Footer from "./Footer";
 import Header from "./Header";

import "./App.css";


function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
