import React from "react";
import { Link } from "react-router-dom";

export default function Booking_Header({ value }) {
    return (

        <div className="flex flex-col mb-10">

            <h1 className="text-2xl  bg-blue-950 rounded-t-3xl p-0 m-0 h-28 text-white pl-20 pt-10">Booking Visit Form</h1>

            <div className="flex flex-row gap-6 mt-10">

                <button className={`${value === 1 ? 'bg-blue-500' : value > 1 ? 'bg-green-500' : 'bg-gray-100'} rounded-full w-10 h-10 ml-20`}>1</button>
                <Link className={`${value === 1 ? 'text-blue-500' : value > 1 ? 'text-green-500' : 'text-gray-400'} inline-block pt-2 `}>Booking Details  --- </Link>

                <button className={`${value === 2 ? 'bg-blue-500' : value > 2 ? 'bg-green-500' : 'bg-gray-100'} rounded-full w-10 h-10`}>2</button>
                <Link className={`${value === 2 ? 'text-blue-500' : value > 2 ? 'text-green-500' : 'text-gray-400'} inline-block pt-2`}>Select Date&Time  --- </Link>

                <button className={`${value === 3 ? 'bg-blue-500' : value > 3 ? 'bg-green-500' : 'bg-gray-100'} rounded-full w-10 h-10`}>3</button>
                <Link className={`${value === 3 ? 'text-blue-500' : value > 3 ? 'text-green-500' : 'text-gray-400'} inline-block pt-2`}>Select Payment</Link>
            </div>

        </div>

    )
}