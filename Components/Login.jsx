import { Link } from "react-router-dom"
import Background_Login from "../Images/Background_Login.jpg"
import { useState } from "react"
export default function Login() {


    return (
        <form>

            <div className="flex absolute inset-0 justify-center border-2">

                <div className="flex flex-col items-center mt-5 bg-white w-1/4 h-fit rounded">

                    <p className="text-center tracking-wide text-3xl text-blue-800 font-bold mt-5">PETCARE</p>

                    <p className="text-center text-sm mt-2">Login to Continue</p>

                    <input type="Email" placeholder="Enter Your Email" className=" border h-10 text-sm border-gray w-64 mt-3 rounded" required />

                    <Link to="/Petcare" type="submit" className="bg-blue-700 w-64 h-10 rounded-md mt-4 text-center pt-2">Continue</Link>

                    <p className="text-center text-sm mt-2 opacity-50">Or Continue With:</p>

                    <button className="border w-64 h-10 rounded-md bg-gray-100 mt-2">Google</button>

                    <button className="border w-64 h-10 rounded-md bg-gray-100 mt-4">Microsoft</button>

                    <button className="border w-64 h-10 rounded-md bg-gray-100 mt-4">Github</button>

                    <button className="border w-64 h-10 rounded-md bg-gray-100 mt-4">Facebook</button>

                    <p className="text-center text-sm mt-4">Can't login? . Create an Account</p>

                    <hr className="border-t border-gray-500 mt-4 mx-auto w-3/4" />

                    <p className="text-center text-3xl font-bold mt-4 tracking-wide opacity-60">PETCARE</p>

                    <p className="text-center text-sm mb-1 opacity-50 mt-1">If you care Your Pet, Pet will Care about You</p>


                </div>
            </div>

            <img src={Background_Login} alt="Background Image" className="w-screen h-screen" />

        </form>
    )
}