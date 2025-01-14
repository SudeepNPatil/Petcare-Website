import React from "react";

export default function Footer() {
    return (
        <div className="bg-gray-50 h-96 mt-20 flex flex-row justify-around pt-20">

            <div>
                <h1 className="text-2xl font-bold leading-relaxed mb-2">Pet Care</h1>
                <ul className="leading-8">
                    <li>Consultation</li>
                    <li>Pet Products</li>
                    <li>Shipping</li>
                    <li>Returns</li>
                    <li>About Us</li>
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
                <button className="rounded-2xl  bg-transparent border-2 w-48 h-14 mt-3">Be Petcare Family</button>
            </div>

        </div>
    )
}