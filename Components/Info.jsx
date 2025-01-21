import React from "react";
import { FcRating } from "react-icons/fc";

export default function Info({ name, display_name, place_rank }) {
    return (
        <div className="flex justify-center items-center gap-5 border bg-green-50 rounded-xl shadow-md transition  hover:scale-110 hover:-translate-y-1">

            <div className="flex justify-center items-center w-80 flex-shrink-0">

                <div className="flex flex-col">

                    <h1 className="font-semibold ml-2 mt-3">{name}</h1>
                    <div className="flex flex-row gap-3">
                        <FcRating size={25} className="mt-2 ml-2" /> <span className="mt-2">{place_rank}</span>
                    </div>
                    <p className="text-sm w-64 ml-2 mb-3 mt-2">{display_name}</p>

                </div>

            </div>

        </div>
    )
}