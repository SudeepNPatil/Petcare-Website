import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {

    return (
        <div className="flex flex-row justify-evenly rounded-full bg-white absolute left-72 top-16 items-center h-16 z-10 w-3/5 shadow-lg">
            <Link to="/Petcare" className="font-semibold">Petcare</Link>
            <Link to="/Consultation">Consultation</Link>
            <Link to="/Petshop">Pet Shop</Link>
            <Link>Deals</Link>
            <Link to="/Login" className="rounded-full w-24 h-8 bg-blue-600 text-center text-sm pt-1">Sign Up</Link>
            <Link to="/Cart" className="rounded-full w-24 h-8 bg-gray-200 text-center text-sm pt-1">Cart</Link>
        </div>
    )
}