import { Routes, Route } from "react-router-dom";

import Header from "./Header"; 
import Home from "./Home";

const Body = () => {
    return(
        <>
        <Header />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </>
    )
};

export default Body;