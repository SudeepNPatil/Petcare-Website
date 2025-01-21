import React from "react";

export default function Listofpetshops({ name, place_id }) {
    return (
        <div className="ml-20">

            <table className="border-black border border-b-0 w-96 bg-violet-300">
                <tbody>
                    <tr className="mt-5 ">
                        <td className="border-black border border-b-0 w-10 h-16 text-center">{place_id}</td>
                        <td className="w-32 h-16 text-center">{name}</td>
                    </tr>
                </tbody>

            </table>

        </div>
    )
}