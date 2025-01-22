import React from "react";

export default function () {
    return (
        <div>

            <div className="flex flex-row justify-around mt-20">

                <h1 className="text-2xl font-semibold mr-52">List of Pet Shops</h1>

                <h1 className="text-2xl font-semibold mr-52">Shop details</h1>

            </div>

            <div className="flex flex-row mt-10">

                <div className="flex-shrink-0">

                    <table className="border-b-0 border-black  border w-96 ml-20 bg-yellow-300">

                        <thead>
                            <tr>
                                <th className="border-b-0 border-black border-r w-20 h-16">Place Id</th>
                                <th className="w-32 h-16">Shop Name</th>
                            </tr>
                        </thead>

                    </table>


                </div>
            </div>

        </div>
    )
}