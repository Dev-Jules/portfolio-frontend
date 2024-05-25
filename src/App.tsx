import { BrowserRouter as Router} from 'react-router-dom';
import { Element } from 'react-scroll';
import { Box } from '@chakra-ui/react';
import './App.scss';
import Home from "./core/home/home";
import Projects from "./core/projects/projects";
import About from "./core/about/about";
import Contact from "./core/contact/contact";
import Menubar from "./core/menu/menubar";

function App() {
    return (
        <Router>
            <Menubar />

            <Box>
                <Element name="home" id="home" className="section">
                    <Home />
                </Element>
                <Element name="projects" id="projects" className="section">
                    <Projects />
                </Element>
                <Element name="about" id="about" className="section">
                    <About />
                </Element>
                <Element name="contact" id="contact" className="section">
                    <Contact />
                </Element>
            </Box>
        </Router>
    );
}

export default App;
