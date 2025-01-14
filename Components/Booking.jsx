import React from "react";
import Booking_Header from "./Booking_Header";
import { useState } from "react";
import Booking_step1 from "./Booking_step1";
import Booking_step2 from "./Booking_step2";
import Booking_step3 from "./Booking_step3";
import Booking_step4 from "./Booking_step4";


export default function Booking() {

    const [step, setStep] = useState(1)

    const [collectdata, setcollectdata] = useState({})
    const [page2data, datafrompage2] = useState({});

    const nextStep = () => setStep((prev => prev + 1));
    const prevStep = () => setStep((prev) => (prev > 1 ? prev - 1 : prev));



    return (

        <div>

            <div className="flex flex-col w-4/5 place-self-center border rounded-3xl">

                <div>
                    <Booking_Header value={step} />
                </div>

                <div>

                    {step === 1 && <Booking_step1 setcollectdata={setcollectdata} />}
                    {step === 2 && <Booking_step2 collectdata={collectdata} datafrompage2={datafrompage2} />}
                    {step === 3 && <Booking_step3 collectdata={collectdata} page2data={page2data} />}
                    {step === 4 && <Booking_step4 />}

                </div>





                <div className="bg-green-50 rounded-b-3xl h-20 flex justify-between mt-20">

                    <button onClick={prevStep} disabled={step === 1} className={`${step === 1 ? 'opacity-50 cursor-not-allowed' : ''} w-32 h-10 bg-gray-400 rounded-full self-center ml-5 `}>Back</button>
                    <button onClick={nextStep} disabled={step === 4} className={`${step === 4 ? 'opacity-50 cursor-not-allowed' : ''} w-32 h-10 bg-blue-600 rounded-full self-center mr-5 `}>Continue</button>

                </div>

            </div>

        </div>
    )
}