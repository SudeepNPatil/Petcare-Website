import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Petcare_background from "../Images/Petcare_background.jpg";
import Petcare_card1 from "../Images/Petcare_card1.jpg";
import Petcare_card2 from "../Images/Petcare_card2.jpg";

export default function Petcar() {
    return (
        <div className="flex flex-col">

            <Navbar />

            <div className="relative">
                <img src={Petcare_background} alt="Petcare" className="w-screen h-screen" />
                <h1 className="absolute left-40 top-3/4 text-3xl font-bold w-96 text-white">Convenient Online and Offline veterinary Services</h1>
            </div>

            <div className="mt-14 flex flex-row justify-around">

                <div className=" flex flex-col mt-14">

                    <h1 className="text-2xl font-semibold mt-5 ">Connect With A vet</h1>

                    <p className="mt-5 w-96">Get expert veterinary care from the comfort of your home.
                        Our online consultations provide convenient access to professional advice,
                        follow-up visits, and non-emergency consultations.
                        Book your online appointment today for hassle-free pet care.
                    </p>

                    <button className="bg-blue-500 w-40 h-12 rounded-full mt-2 mb-5">Consultation Online</button>

                </div>

                <img src={Petcare_card1} alt="card1" className="rounded-3xl w-64 h-64 border mt-12 mr-32" />

            </div>

            <div className="flex flex-row mt-12 justify-around">

                <img src={Petcare_card2} alt="card2" className="rounded-3xl border w-64 h-64 mt-16" />

                <div className="flex flex-col mt-12">

                    <h1 className="text-2xl font-semibold mt-5">Visit Our Clinic</h1>

                    <p className="mt-5 w-96">Visit our clinic for comprehensive veterinary care.
                        Our experienced team provides thorough physical examinations,
                        advanced diagnostics, and personalized treatments to ensure your pet's health and well-being.
                        Schedule your in-clinic appointment today for the best in pet care.

                    </p>

                    <button className="rounded-full w-40 h-12 bg-blue-500 mt-2 mb-5">Schedule a Visit</button>

                </div>

            </div>

            <Footer />

        </div>
    )
}