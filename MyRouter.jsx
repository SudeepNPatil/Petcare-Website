import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./Components/MainPage";
import Consultation from "./Components/Consultation";
import Booking from "./Components/Booking";
import Petcare from "./Components/Petcare";

const MyRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />

                <Route path="/Consultation" element={<Consultation />} />

                <Route path="/Booking" element={<Booking />} />

                <Route path="/Petcare" element={<Petcare />} />

            </Routes>
        </BrowserRouter>
    );
};

export default MyRouter;


