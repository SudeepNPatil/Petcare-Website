import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import Listofpetshops from "./Listofpetshops";
import Info from "./Info";



export default function Petshop() {

    const [location, setlocation] = useState()
    const [petinfo, setpetinfo] = useState([])
    const handleChange = (e) => {
        setlocation(e.target.value);
    }



    const handlekeypress = (e) => {

        if (e.key === 'Enter') {

            let url = `https://nominatim.openstreetmap.org/search?format=json&q=pet+shop+near+${location}`

            fetch(url)
                .then(response => response.json())
                .then(response => {

                    let formatdata = response.map((response) => ({
                        "name": response.name,
                        "display_name": response.display_name,
                        "place_rank": response.place_rank,
                        "place_id": response.place_id
                    }));

                    setpetinfo(formatdata);
                    //console.log(formatdata);

                })


        }
    }




    return (
        <div className="flex flex-col w-full h-full flex-nowrap">

            <h1 className="text-xl font-bold mt-5 self-center">Enter the Your City Name to Search Pet Shop Nearby </h1>
            <span className="absolute top-[75px] opacity-60 pl-3 left-96"><FiSearch size={25} /></span>
            <input type="text" name="location" onKeyDown={handlekeypress} onChange={handleChange} placeholder="Ente Your Location Name" className="self-center text-sm border w-1/2 mt-4 rounded-2xl h-12 pl-16 shadow-xl bg-blue-50" />

            <div className="flex flex-row justify-around mt-20">

                <h1 className="text-2xl font-semibold mr-72">List of Pet Shops</h1>

                <h1 className="text-2xl font-semibold mr-72">Shop details</h1>

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

                    {
                        petinfo.map((data, index) => (
                            <Listofpetshops
                                key={index}
                                name={data.name}
                                place_id={data.place_id}

                            />

                        ))}
                </div>



                <div className="flex flex-row justify-center flex-wrap gap-10">

                    {petinfo.map((data, index) => (

                        <Info
                            key={index}
                            name={data.name}
                            display_name={data.display_name}
                            place_rank={data.place_rank}

                        />

                    ))}

                </div>
            </div>
        </div>


    )
}