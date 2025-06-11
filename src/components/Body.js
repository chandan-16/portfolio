import { Routes, Route } from "react-router-dom";

import Header from "./Header"; 
import Home from "./Home";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";
import Footer from "./Footer";

const Body = () => {
    return(
        <>
        <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />}></Route>
                <Route path="/projects" element={<Project />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
            </Routes>
        <Footer/>
        </>
    )
};

export default Body;