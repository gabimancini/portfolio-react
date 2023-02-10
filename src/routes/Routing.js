// Hooks
import {Routes, Route } from "react-router-dom";
// Pages
import Home from "../pages/Home"; 
import ConfirmForm from "../pages/ConfirmForm";

const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="confirm-form" element={<ConfirmForm />} />
        </Routes>
    )
}

export default Routing;