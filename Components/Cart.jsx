import React from "react";
import { BsCart4 } from "react-icons/bs";
import Navbar from "./Navbar";

export default function Cart() {
    return (
        <div className="text-center flex-col flex">

            <Navbar />
            <BsCart4 size={150} className="opacity-60 mt-80 self-center" />
            <p className="opacity-50 text-4xl mt-10">Your Cart is Empty Now</p>
        </div>
    )
}