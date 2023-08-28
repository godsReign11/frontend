import React, { useState } from "react";
import '../pages/All.css'

export default function AddPlayers() {

    const [playerName, setPlayerName] = useState("");
    const [error, setError] = useState(false);
    const handleAllChange = (setterFunction) => (e) => {
        const { value } = e.target;
        setterFunction(value);
    };

    return (

        <div className="bg-white p-6 rounded-md">
            <div>
                <h2 className="text-black text-base font-semibold leading-normal">
                    Add Players
                </h2>
            </div>

            <div className="flex gap-4">

                {/* CARD 1 */}
                <div className="flex gap-6 items-center ">
                    <div className="flex-col items-center justify-center mt-1 sm:flex-row sm:space-y-0">

                        <div className="mt-3">
                            <div className="w-[180px] h-[225px] px-2.5 py-3 bg-white rounded-lg border border-violet-200 justify-between items-center gap-2.5 inline-flex">
                                <button className="ml-[25%] text-gray-600">Select Player</button>
                            </div>
                        </div>

                        <button className="text-red-500 ml-[35%] mt-[10px]">Remove</button>

                    </div>
                </div>

                {/* CARD 2 */}
                <div className="flex gap-6 items-center ">
                    <div className="flex-col items-center justify-center mt-1 sm:flex-row sm:space-y-0">

                        <div className="mt-3">
                            <div className="w-[180px] h-[225px] px-2.5 py-3 bg-white rounded-lg border border-violet-200 justify-between items-center gap-2.5 inline-flex">
                            <button className="ml-[25%] text-gray-600">Select Player</button>
                            
                            </div>
                        </div>

                        <button className="text-red-500 ml-[35%] mt-[10px]">Remove</button>

                    </div>
                </div>

                {/* CARD 3 */}
                <div className="flex gap-6 items-center ">
                    <div className="flex-col items-center justify-center mt-1 sm:flex-row sm:space-y-0">

                        <div className="mt-3">
                            <div className="w-[180px] h-[225px] px-2.5 py-3 bg-white rounded-lg border border-violet-200 justify-between items-center gap-2.5 inline-flex">
                            <button className="ml-[25%] text-gray-600">Select Player</button>
                            
                            </div>
                        </div>

                        <button className="text-red-500 ml-[35%] mt-[10px]">Remove</button>

                    </div>
                </div>

                {/* CARD 4 */}
                <div className="flex gap-6 items-center ">
                    <div className="flex-col items-center justify-center mt-1 sm:flex-row sm:space-y-0">

                        <div className="mt-3">
                            <div className="w-[180px] h-[225px] px-2.5 py-3 bg-white rounded-lg border border-violet-200 justify-between items-center gap-2.5 inline-flex">
                            <button className="ml-[25%] text-gray-600">Select Player</button>
                            
                            </div>
                        </div>

                        <button className="text-red-500 ml-[35%] mt-[10px]">Remove</button>

                    </div>
                </div>

                {/* CARD 5 */}
                <div className="flex gap-6 items-center ">
                    <div className="flex-col items-center justify-center mt-1 sm:flex-row sm:space-y-0">

                        <div className="mt-3">
                            <div className="w-[180px] h-[225px] px-2.5 py-3 bg-white rounded-lg border border-violet-200 justify-between items-center gap-2.5 inline-flex">
                            <button className="ml-[25%] text-gray-600">Select Player</button>
                            
                            </div>
                        </div>

                        <button className="text-red-500 ml-[35%] mt-[10px]">Remove</button>

                    </div>
                </div>
            </div>
        </div>
    );
}
