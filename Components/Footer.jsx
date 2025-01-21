import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div className="bg-gray-50 h-96 mt-20 flex flex-row justify-around pt-20">

            <div>
                <h1 className="text-2xl font-bold leading-relaxed mb-2">Pet Care</h1>
                <ul className="leading-8 flex flex-col">
                    <Link to="/Consultation">Consultation</Link>
                    <Link to="/petcare">Pet Products</Link>
                    <Link to="/petcare">Shipping</Link>
                    <Link to="/petcare">Returns</Link>
                    <Link to="/petcare">About Us</Link>
                </ul>
            </div>

            <div>
                <h1 className="text-2xl font-bold leading-relaxed">Stay Connected</h1>
                <p className="mt-2">Contact</p>
                <p>hello.petcare@petcare.com</p>
            </div>

            <div>
                <h1 className="text-2xl font-bold leading-relaxed w-80">Join as a petcare family 10% off</h1>
                <p className="mt-5">Our service is wide open for you</p>
                <Link to="/MainPage" className="inline-block rounded-2xl h-14 w-48 bg-transparent border-2 mt-3 text-center pt-3">Be Petcare Family</Link>
            </div>

        </div>
    )
}