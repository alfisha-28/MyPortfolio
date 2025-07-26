import Home from "../Pages/Home";
import About from "../Pages/About";
import Skills from "../Pages/Skills";
import Projects from "../Pages/Projects";
import Contact from "../Pages/Contact";

export default function LandingPage(){
    return(
        <div>
            <Home/>
            <About/>
            <Skills/>
            <Projects/>
            <Contact/>
        </div>
    );
}