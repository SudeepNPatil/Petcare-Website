import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Dog_Profile from "../Images/Dog_Profile.jpg";

export default function Booking_step2({ collectdata, datafrompage2 }) {

    const [selectedDate, setSelectedDate] = useState(new Date());

    const formattedDate = selectedDate.toLocaleDateString("en-GB");

    const [localdata, setlocaldata] = useState({ "Date": formattedDate, });

    const collectinfo = (e) => {
        const { name, value } = e.target;
        setlocaldata({ ...localdata, [name]: value });
    }


    const liftdata = () => {
        datafrompage2(localdata);
    }

    if (localdata != 1) {
        liftdata();
    }


    return (
        <div className="flex flex-col">

            <h1 className="text-2xl mt-16 ml-20 font-semibold">Schedule Date&Time</h1>

            <div className="flex justify-start ml-20 mt-5">

                <div className="rounded-lg p-4 w-96 bg-white text-center mt-2 border">
                    <h2 className="text-lg font-semibold text-center mb-4">Select a Date</h2>
                    <DatePicker
                        selected={selectedDate}
                        onChange={(date) => setSelectedDate(date)}
                        inline
                    />
                </div>

                <div className="rounded-3xl h-72 w-96 ml-40 flex bg-green-50">

                    <img src={Dog_Profile} alt="" className="rounded-full w-40 h-40 bg-gray-300 mt-12 ml-5" />

                    <div className="flex flex-col ml-8 mt-14">

                        <p className="text-2xl font-semibold">{collectdata.PetName}</p>

                        <button className="rounded-3xl w-32 h-10 mt-5 bg-blue-100">{collectdata.Breed}</button>

                        <button className="rounded-3xl w-32 h-10 mt-4 bg-blue-100">{collectdata.Age}</button>

                        <p className="text-sm opacity-60 mt-8">{collectdata.Problem}</p>

                    </div>

                </div>

            </div>

            <label htmlFor="Time" className="font-normal mt-4 ml-20">Time</label>

            <input type="text" name="Time" onChange={collectinfo} className="text-sm border w-96 h-10 rounded-lg mt-1 ml-20 p-2" />

            <label htmlFor="Clinic" className="font-normal mt-8 ml-20">Clinic</label>

            <select className="text-sm border w-96 h-10 rounded-lg mt-1 ml-20 p-2" name="Clinic" onChange={collectinfo}>

                <option value="Select">Select</option>
                <option value="Patcare">Patcare</option>
                <option value="Barktown">Barktown</option>
                <option value="MeowCity">MeowCity</option>

            </select>

            <label htmlFor="Consultation" className="font-normal mt-8 ml-20">Consultation With</label>

            <select className="text-sm border w-96 h-10 rounded-lg mt-1 ml-20 p-2" name="ConsultationWith" onChange={collectinfo}>

                <option value="select">Select</option>
                <option value="Jasmin miller">Jasmin miller</option>
                <option value="donald">donald</option>
                <option value="puteen">puteen</option>
                <option value="Baidan">Baidan</option>

            </select>

        </div>
    )
}