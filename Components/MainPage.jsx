import React from "react";
import React, { useRef, useState } from "react";
import MainPage1 from "../Images/MainPage1.jpg"
import dog from "../Images/dog.jpg"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Card1 from "../Images/Card1.jpg"
import Card2 from "../Images/Card2.jpg"
import Card3 from "../Images/Card3.jpg"
import Card4 from "../Images/Card4.jpg"
import Doctor from "../Images/Doctor.jpg"



export default function MainPage() {

    const containerRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    // Mouse down handler
    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - containerRef.current.offsetLeft);
        setScrollLeft(containerRef.current.scrollLeft);
    };

    // Mouse move handler
    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - containerRef.current.offsetLeft;
        const walk = (x - startX); // Speed of scrolling
        containerRef.current.scrollLeft = scrollLeft - walk;
    };

    // Mouse up handler
    const handleMouseUp = () => {
        setIsDragging(false);
    };




    return (

        <div className=" flex flex-col">
            <div>
                <Navbar />
            </div>

            <div className="relative">
                <img src={MainPage1} alt="Petcare" className="w-screen h-screen" />

                <p className="text-5xl text-pink-700 absolute left-28 top-96 font-bold w-1/3 leading-normal">Ensuring your pets live their best lives</p>

            </div>

            <div className="bg-gray-50 w-full mt-5">

                <img src={dog} alt="dog" className="float-right rounded-3xl mt-20 mr-32 mb-14 w-96 h-96" />

                <p className="ml-32 text-4xl font-bold w-96 mt-24">Prioritizing your pet companion</p>

                <p className="ml-32 mt-8 w-1/3 leading-tight">At pawcare, our primary goal is to ensure that every pet we care for leads a happy,
                    healthy life. We are dedicated to providing the highest standard of veterinary care,
                    delivered with compassion and professionalism.
                </p>

                <p className="ml-32 w-1/3 mt-6 leading-tight">Our team of experienced veterinarians and support staff work tirelessly to promote preventive care for your lovely pet,
                    providing comprehensive treatments and supporting through all life stages
                </p>

            </div>

            <p className="text-4xl font-bold ml-20 mt-10">BENEFITS</p>

            <div
                ref={containerRef}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}

                className="overflow-x-hidden cursor-grab w-full flex flex-row gap-32 select-none">

                <div className="ml-20 mt-10 rounded-3xl w-72 h-96 flex flex-shrink-0 relative">
                    <img src={Card1} alt="Card1" className="w-full h-full rounded-3xl" onDragStart={(e) => e.preventDefault()} />

                    <button className="absolute left-5 top-80 h-14 w-40 bg-white rounded-full border font-semibold">Professional Team</button>

                </div>

                <div className="mt-10 rounded-3xl w-72 h-96 flex flex-shrink-0 relative">
                    <img src={Card3} alt="Card3" className="w-full h-full rounded-3xl" onDragStart={(e) => e.preventDefault()} />

                    <button className="absolute left-5 top-80 h-14 w-40 bg-white rounded-full border font-semibold">Treate with!</button>

                </div>

                <div className="mt-10 rounded-3xl w-72 h-96 flex relative flex-shrink-0">
                    <img src={Card2} alt="Card2" className="w-full h-full rounded-3xl" onDragStart={(e) => e.preventDefault()} />

                    <button className="absolute left-5 top-80 h-14 w-48 bg-white rounded-full border font-semibold">Emergency call services</button>
                </div>

                <div className="mt-10 rounded-3xl w-72 h-96 flex relative flex-shrink-0">
                    <img src={Card4} alt="Card4" className="w-full h-full rounded-3xl" onDragStart={(e) => e.preventDefault()} />

                    <button className="absolute left-5 top-80 h-14 w-44 bg-white rounded-full border font-semibold">Best Product Use only</button>
                </div>

            </div>

            <div className="bg-blue-950 mt-14 ml-4 mr-4 rounded-xl">
                <img src={Doctor} alt="Doctor" className="float-right w-96 h-96 rounded-3xl mr-32 mt-14 mb-14" />
                <p className="mt-28 ml-32 leading-normal w-96 text-4xl text-white font-bold">Our Experts are Avaleble for you 24/7</p>
                <p className="mt-5 ml-32  text-white font-bold">Ph no : 123456789</p>
                <p className="mt-2 ml-32  text-white font-bold">Ph no : 9876543210  (for emergency service)</p>
                <p className="mt-2 ml-32  text-white font-bold">mail@expert.com</p>
            </div>
            <div>
                <Footer />
            </div>

        </div>

    )
}