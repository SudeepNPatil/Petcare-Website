import React from "react";
import { useState } from "react";

export default function Booking_step1({ setcollectdata }) {

    const [data, setdata] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target;
        setdata({ ...data, [name]: value });
    }

    const datalift = () => {
        setcollectdata(data);
    }

    if (data != 0) {
        datalift()
    }

    return (
        <div className="flex flex-col">

            <div className="ml-20 text-2xl font-semibold mt-10">
                Personal Information
            </div>

            <form className="flex flex-row justify-start ml-20 mb-3">

                <div className="flex flex-col">

                    <label htmlFor="firstName" className="font-normal mt-8">First Name</label>
                    <input type="text" className="text-sm border w-96 h-10 rounded-lg mt-1 p-2" required />

                    <label htmlFor="Mobile number" className="font-normal mt-8">Mobile Number</label>
                    <input type="Number" className="text-sm border w-96 h-10 rounded-lg mt-1 p-2" required />

                    <label htmlFor="Address" className="font-normal mt-8">Address</label>
                    <input type="text" className="text-sm border w-96 h-10 rounded-lg mt-1 p-2" required />

                </div>


                <div className="flex flex-col">

                    <label htmlFor="LastName" className="font-normal mt-8 ml-14">Last Name</label>
                    <input type="text" className="text-sm border w-96 h-10 rounded-lg mt-1 ml-14 p-2" required />

                    <label htmlFor="Email" className="font-normal mt-8 ml-14">Email</label>
                    <input type="text" className="text-sm border w-96 h-10 rounded-lg mt-1 ml-14 p-2" required />


                </div>

            </form>

            <hr className="w-2/3 bg-gray-500 self-center mt-10 mb-10 border" />

            <div className=" ml-20 text-2xl font-semibold">
                Pet Information
            </div>

            <form className="flex flex-row justify-start ml-20">

                <div className="flex flex-col">

                    <label htmlFor="Pet Name" className="font-normal mt-8">Pet Name</label>
                    <input type="text" name="PetName" onChange={handleChange} className="p-2 text-sm border w-96 h-10 rounded-lg mt-1" required />

                    <label htmlFor="Breed" className="font-normal mt-8">Breed</label>
                    <input type="text" name="Breed" onChange={handleChange} className="p-2 text-sm border w-96 h-10 rounded-lg mt-1" required />

                    <label htmlFor="Period Of illeness" className="font-normal mt-8">Period Of illeness</label>
                    <select className="text-sm border w-96 h-10 rounded-lg mt-1 p-2">
                        <option value="1day">Select</option>
                        <option value="1day">1 day</option>
                        <option value="1day">2 day</option>
                        <option value="1day">3 day</option>
                        <option value="1day">4 day</option>
                        <option value="1day">5 day</option>
                        <option value="1day">6 day</option>
                    </select>

                </div>

                <div className="flex flex-col">

                    <label htmlFor="Type" className="font-normal mt-8 ml-14">Type</label>
                    <select className="text-sm border w-96 h-10 rounded-lg mt-1 ml-14 p-2" >
                        <option value="Select">Select</option>
                        <option value="Dog">Dog</option>
                        <option value="Cat">Cat</option>
                        <option value="Rabbit">Rabbit</option>
                        <option value="Parrot">Parrot</option>

                    </select>


                    <label htmlFor="Age" className="font-normal mt-8 ml-14">Age</label>
                    <input type="text" className="text-sm border w-96 h-10 rounded-lg mt-1 ml-14 p-2" name="Age" onChange={handleChange} required />



                    <label htmlFor="Problem" className="font-normal mt-8 ml-14">Problem</label>
                    <input type="text" className="text-sm border w-96 h-10 rounded-lg mt-1 ml-14 p-2" name="Problem" onChange={handleChange} required />

                </div>

            </form>


        </div>
    )
}