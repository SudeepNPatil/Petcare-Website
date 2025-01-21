import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./Components/MainPage";
import Consultation from "./Components/Consultation";
import Booking from "./Components/Booking";
import Petcare from "./Components/Petcare";
import Login from "./Components/Login";
import Cart from "./Components/Cart";
import Petshop from "./Components/Petshop"

const MyRouter = () => {


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />

                <Route path="/Consultation" element={<Consultation />} />

                <Route path="/Booking" element={<Booking />} />

                <Route path="/Petcare" element={<Petcare />} />

                <Route path="/Login" element={<Login />} />

                <Route path="/Cart" element={<Cart />} />

                <Route path="/MainPage" element={<MainPage />} />

                <Route path="/Petshop" element={<Petshop />} />

            </Routes>
        </BrowserRouter>
    );
};

export default MyRouter;


