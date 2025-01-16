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
    const [activeQuestion, setActiveQuestion] = useState(null);

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


    const toggleAccordion = (question) => {
        setActiveQuestion(activeQuestion === question ? null : question);
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

            <div className="mt-20 ml-20 text-2xl font-bold">
                Frequently Asked Questions
            </div>

            <div className="mt-4 ml-20 mr-20 ">

                <div
                    className={`transition-all duration-200 overflow-hidden border-b ${activeQuestion === 'question1' ? 'w-full p-8 bg-gray-50' : 'w-full p-5 bg-gray-50'
                        }`}
                    onClick={() => toggleAccordion('question1')}
                >
                    <h1 className="font-medium text-gray-800 cursor-pointer">
                        What is Patcare?
                    </h1>
                    {activeQuestion === 'question1' && (
                        <p className="mt-2 text-gray-600">
                            Pet care is the act of providing for an animal's physical, emotional, and medical needs.
                            <a href="https://avma.org/resources-tools/pet-owners/petcare">for more info </a>
                        </p>
                    )}
                </div>


                <div
                    className={`transition-all duration-300 overflow-hidden border-b ${activeQuestion === 'question2' ? 'w-full p-8 bg-gray-50' : 'w-full p-5 bg-gray-50'
                        }`}
                    onClick={() => toggleAccordion('question2')}
                >
                    <h1 className="font-medium text-gray-800 cursor-pointer">
                        How can I book consultation?
                    </h1>
                    {activeQuestion === 'question2' && (
                        <p className="mt-2 text-gray-600 leading-normal">
                            Booking a consultation is simple and can be done in just a few steps:

                            <p> 1. Navigate to the Consultation tab on the main menu of our website.</p>
                            <p>2. On the Consultation page, you'll find detailed information about our services and how we can assist you and your pet.</p>
                            <p> 3. Click the "Book Consultation" button on the page.</p>
                            <p>4. Fill out the required details in the booking form, including your contact information, your pet's details, and your preferred date and time.</p>
                            <p>5. Submit the form, and you will receive a confirmation email or message with the details of your scheduled consultation.</p>

                            If you encounter any issues while booking, feel free to reach out to our support team for assistance!
                        </p>
                    )}
                </div>

                <div
                    className={`transition-all duration-300 overflow-hidden border-b ${activeQuestion === 'question3' ? 'w-full p-8 bg-gray-50' : 'w-full p-5 bg-gray-50'
                        }`}
                    onClick={() => toggleAccordion('question3')}
                >
                    <h1 className="font-medium text-gray-800 cursor-pointer">
                        What’s the differences between online and offline consultation?
                    </h1>
                    {activeQuestion === 'question3' && (
                        <p className="mt-2 text-gray-600 leading-normal">

                            Examination:
                            <p> Online: Limited to visual assessments and verbal communication, which may restrict accurate diagnosis.</p>
                            <p>Offline: Allows for thorough physical examination and hands-on treatment, providing more precise results.</p>

                            Convenience:
                            <p>Online: Easily accessible from anywhere, saving time and effort.</p>
                            <p>Offline: Requires travel and more time investment but may be essential for serious issues.</p>
                        </p>
                    )}
                </div>

                <div
                    className={`transition-all duration-300 overflow-hidden  border-b ${activeQuestion === 'question4' ? 'w-full p-8 bg-gray-50' : 'w-full p-5 bg-gray-50'
                        }`}
                    onClick={() => toggleAccordion('question4')}
                >
                    <h1 className="font-medium text-gray-800 cursor-pointer">
                        How do I pay for the scheduling my visit?
                    </h1>
                    {activeQuestion === 'question4' && (
                        <p className="mt-2 text-gray-600 leading-normal">
                            <p>1. Go to the Consultation page and click the "Book Consultation" button.</p>
                            <p>2. Fill out the booking form and proceed to the payment section.</p>
                            <p>3. Choose your preferred payment method (credit/debit card, UPI, net banking, etc).</p>
                            <p> 4. Complete the payment securely through our trusted payment gateway.</p>
                            <p>5. Once the payment is successful, you’ll receive a confirmation email or message.</p>
                        </p>
                    )}
                </div>

                <div
                    className={`transition-all duration-300 overflow-hidden border-b ${activeQuestion === 'question5' ? 'w-full p-8 bg-gray-50' : 'w-full p-5 bg-gray-50'
                        }`}
                    onClick={() => toggleAccordion('question5')}
                >
                    <h1 className="font-medium text-gray-800 cursor-pointer">
                        Do you provide telemedicine? How much does it cost?
                    </h1>
                    {activeQuestion === 'question5' && (
                        <p className="mt-2 text-gray-600 leading-normal">
                            <p> 1. Telemedicine allows you to consult with our experts online via video or chat, ensuring your pet's needs are met without visiting in person.</p>
                            <p>2. The cost of telemedicine varies depending on the type of consultation and duration, starting at an affordable base rate.</p>
                            <p> 3. You can check the exact pricing details on our Consultation page before booking.</p>
                            <p> 4. Payment is made online during the booking process, and you’ll receive a confirmation instantly.</p>
                            <p> 5. Feel free to reach out for more details about telemedicine or specific services.</p>
                        </p>
                    )}
                </div>

                <div
                    className={`transition-all duration-300 overflow-hidden border-b ${activeQuestion === 'question6' ? 'w-full p-8 bg-gray-50' : 'w-full p-5 bg-gray-50'
                        }`}
                    onClick={() => toggleAccordion('question6')}
                >
                    <h1 className="font-medium text-gray-800 cursor-pointer">
                        How is the shipping for buying pet products?
                    </h1>
                    {activeQuestion === 'question6' && (
                        <p className="mt-2 text-gray-600 leading-normal">
                            <p> 1. Orders are processed quickly and shipped through trusted delivery partners.</p>
                            <p> 2. Shipping costs and delivery times depend on your location and the product size.</p>
                            <p>3. You’ll receive tracking details to monitor your order until it reaches your doorstep.</p>
                        </p>
                    )}
                </div>

                <div
                    className={`transition-all duration-300 overflow-hidden border-b ${activeQuestion === 'question7' ? 'w-full p-8 bg-gray-50' : 'w-full p-5 bg-gray-50'
                        }`}
                    onClick={() => toggleAccordion('question7')}
                >
                    <h1 className="font-medium text-gray-800 cursor-pointer">
                        How can I get refund?
                    </h1>
                    {activeQuestion === 'question7' && (
                        <p className="mt-2 text-gray-600 leading-normal">

                            Here’s how you can get a refund:

                            <p> 1. Go to the Support or Contact Us section on our website.</p>
                            <p> 2. Submit a refund request by providing your order details and the reason for the refund.</p>
                            <p> 3. Refunds are processed as per our policy, typically within 5-7 business days after approval.</p>
                            <p>4. For more details, refer to our Refund Policy page or contact customer support.</p>
                        </p>
                    )}
                </div>

            </div>

            <div>
                <Footer />
            </div>

        </div>
    )
}