import React from "react";
import Dog_Profile from "../Images/Dog_Profile.jpg";

export default function Booking_step3({ collectdata, page2data }) {
    return (

        <div>
            <h1 className="text-2xl font-semibold ml-20 mt-5">Payment</h1>

            <div className="flex flex-row">

                <div className="flex flex-col">

                    <label htmlFor="method" className="font-normal mt-10 ml-20">Choose the Payment method</label>

                    <select className="text-sm border w-96 h-10 rounded-lg mt-1 ml-20">

                        <option value="select">Select</option>
                        <option value="Credit Card">Credit Card</option>
                        <option value="Debit card">Debit Card</option>

                    </select>

                    <label htmlFor="Card" className="font-normal mt-8 ml-20">Card Name</label>

                    <input type="text" className="text-sm border w-96 h-10 rounded-lg mt-1 ml-20" />

                    <label htmlFor="card number" className="font-normal mt-8 ml-20">Card Number</label>

                    <input type="number" className="text-sm border w-96 h-10 rounded-lg mt-1 ml-20" />

                    <div className="flex flex-row ml-20 gap-16">

                        <div className="flex flex-col">

                            <label htmlFor="Expiry date" className="font-normal mt-8">Expiry date</label>

                            <input type="number" className="text-sm border w-40 h-10 rounded-lg mt-1" />


                        </div>

                        <div className="flex flex-col">

                            <label htmlFor="CVV" className="font-normal mt-8">CVV</label>

                            <input type="number" className="text-sm border w-40 h-10 rounded-lg mt-1" />


                        </div>

                    </div>

                </div>

                <div className="border w-96 h-96 rounded-3xl ml-40 bg-green-50 mt-12 flex ">

                    <img src={Dog_Profile} alt="" className="rounded-full w-40 h-40 bg-gray-300 mt-12 ml-5" />

                    <div className="flex flex-col ml-8 mt-14">

                        <p className="text-2xl font-semibold">{collectdata.PetName}</p>

                        <button className="rounded-3xl w-32 h-10 mt-5 bg-blue-100">{collectdata.Breed}</button>

                        <button className="rounded-3xl w-32 h-10 mt-4 bg-blue-100">{collectdata.Age}</button>

                        <p className="text-sm opacity-60 mt-6">{collectdata.Problem}</p>

                        <hr className="text-gray-50 text-center w-40 border mt-3" />

                        <p className="mt-3">{page2data.Date}, {page2data.Time}</p>

                        <p className="mt-2">{page2data.Clinic}</p>

                        <p className="mt-2 mb-2">{page2data.ConsultationWith}</p>

                    </div>

                </div>

            </div>

        </div>
    )
}