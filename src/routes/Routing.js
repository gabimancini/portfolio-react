// Hooks
import {Routes, Route } from "react-router-dom";
// Pages
import Home from "../pages/Home"; 
import ConfirmForm from "../pages/ConfirmForm";
import Tutorials from "../pages/Tutorials";

const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/confirm-form" element={<ConfirmForm />} />
            <Route path="/tutorials" element={<Tutorials />} />
        </Routes>
    )
}

export default Routing;