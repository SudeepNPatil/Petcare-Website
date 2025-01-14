import React from "react"
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom"
import Footer from "./Footer"
import Navbar from "./Navbar"
import Consultation2 from "../Images/Consultation2.jpg"
import Consultation from "../Images/Consultation.jpg"
import Clinic1 from "../Images/Clinic1.jpg"
import Clinic2 from "../Images/Clinic2.jpg"
import Clinic3 from "../Images/Clinic3.jpg"

export default function Consultation() {


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
        const walk = (x - startX) * 2; // Speed of scrolling
        containerRef.current.scrollLeft = scrollLeft - walk;
    };

    // Mouse up handler
    const handleMouseUp = () => {
        setIsDragging(false);
    };


    return (
        <div className="flex flex-col">

            <div>
                <Navbar />
            </div>

            <div className="relative">
                <img src={Consultation2} alt="caring" className="w-screen h-screen " />
                <div className="absolute left-32 top-[425px]">
                    <p className="text-3xl font-bold text-white">Visit Us for Expert Pet Care</p>
                    <p className="text-2xl mt-5 font-semibold text-white">Where Compassion Meets Excellence!</p>
                    <Link to="/Booking" className="btn mt-4 text-white">Book Visit --</Link>
                </div>
            </div>

            <div className="mt-10 flex justify-center">

                <h1 className="pt-24  text-2xl font-bold w-80 mr-20">Providing The Best Services for Your Pets</h1>

                <p className="pt-20 w-96 ml-20 font-normal">At Pawcare, our in-clinic consultations offer comprehensive care to ensure your pet's health and well-being.
                    Our experienced veterinarians conduct thorough physical examinations,
                    use advanced diagnostic tools, and create personalized treatment plans tailored to your pet’s unique needs.
                </p>

            </div>

            <div>
                <img src={Consultation} alt="caring" className="mt-20 rounded-3xl h-[450px] ml-48 w-3/4 mb-16" />
            </div>

            <div className="text-2xl font-bold ml-20 mt-10">Clinic Location</div>

            <div
                ref={containerRef}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                className="flex flex-row overflow-x-hidden gap-14 select-none cursor-grab">

                <div className="flex justify-center mt-10 ml-20 w-auto flex-shrink-0">

                    <img src={Clinic3} alt="" className="rounded-3xl w-72 h-72 mr-16" onDragStart={(e) => e.preventDefault()} />

                    <div>
                        <h1 className="text-2xl font-bold mt-3">Petcare</h1>
                        <p className="w-96 mt-3">Located at the heart of Petcare,
                            our clinic at 123 Pet Care Lane offers a warm and welcoming environment for you and your pet.
                            With convenient access and ample parking, we’ve designed our space to be as comfortable and stress-free as possible.
                            Drop by and let our dedicated team provide your furry friend with top-notch care right in the heart of the community.
                        </p>
                        <button className="bg-blue-500 rounded-full w-32 h-10 mt-4">Book visit --</button>
                    </div>
                </div>

                <div className="flex justify-center mt-10 ml-5 w-auto flex-shrink-0">
                    <img src={Clinic2} alt="" className="rounded-3xl w-72 h-72 mr-16" onDragStart={(e) => e.preventDefault()} />
                    <div>
                        <h1 className="text-2xl font-bold mt-3">Barktown</h1>
                        <p className="w-96 mt-3">Find us at 456 Furry Friend Road in vibrant Barktown,
                            where our clinic stands ready to deliver outstanding veterinary services.
                            Our prime location is easily accessible with plenty of parking,
                            making your visit smooth and hassle-free.
                            Experience compassionate care and expert treatment in a facility designed with your pet’s well-being in mind.
                        </p>
                        <button className="bg-blue-500 rounded-full w-32 h-10 mt-4">Book visit --</button>
                    </div>
                </div>

                <div className="flex justify-center mt-10 ml-5 w-auto flex-shrink-0">
                    <img src={Clinic1} alt="" className="rounded-3xl w-72 h-72 mr-16" onDragStart={(e) => e.preventDefault()} />
                    <div>
                        <h1 className="text-2xl font-bold mt-3">Meow City</h1>
                        <p className="w-96 mt-3">Situated at 789 Whisker Way,
                            our clinic in Meow City is the perfect spot for your pet’s health needs.
                            Our central location ensures easy access and a friendly atmosphere,
                            with ample parking to make your visit convenient.
                            Come see us and discover how our dedicated team can make a difference in your pet’s life with exceptional care and personalized service.
                        </p>
                        <button className="bg-blue-500 rounded-full w-32 h-10 mt-4">Book visit --</button>
                    </div>
                </div>

            </div>

            <div className="mt-10 ml-20 text-2xl font-bold">
                Frequently Asked Questions
            </div>

            <div className="mt-5 border-2 border-black ml-20 mr-10 h-80">


            </div>

            <div>
                <Footer />
            </div>

        </div>
    )
}