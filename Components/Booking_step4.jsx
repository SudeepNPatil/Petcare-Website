import React from "react";
import Payment_successful from "../Images/Payment_successful.jpg"

export default function Booking_step4() {
    return (

        <div>
            <div className=" mt-20 animate-ping text-black text-center">
                <button className="rounded-full h-5 w-5 bg-yellow-500 text-center">D</button>
                <button className="rounded-full h-5 w-5 bg-green-500 text-center">O</button>
                <button className="rounded-full h-5 w-5 bg-pink-500 text-center">N</button>
                <button className="rounded-full h-5 w-5 bg-red-500 text-center">E</button>
                <button className="rounded-full h-5 w-5 bg-blue-500 text-center">!</button>
                <button className="rounded-full h-5 w-5 bg-violet-500 text-center">!</button>
            </div>

            <div className="flex justify-center items-center flex-col">

                <h1 className="text-2xl font-bold mt-20">Booking Confirmed</h1>

                <img src={Payment_successful} alt="Payment" className=" animate-bounce h-62 w-60 mt-10 rounded-xl" />

                <p className="text-sm mt-10 w-96 opacity-70">Thank you for caring to your pet and trust Patcare services!
                    Here’s your booking information.
                    You can let our receptionist know by showing your booking ID
                </p>

            </div>



        </div>
    )
}