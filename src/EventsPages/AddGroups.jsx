import React, { useState } from "react";
import '../pages/All.css'

export default function AddGroups() {

    const [playerName, setPlayerName] = useState("");
    const [error, setError] = useState(false);
    const handleAllChange = (setterFunction) => (e) => {
        const { value } = e.target;
        setterFunction(value);
    };

    return (

        <div className="bg-white p-6 rounded-md">
            <div className="flex items-center justify-between">
                <h2 className="text-black text-base font-semibold leading-normal">
                    Groups
                </h2>

                <button className="w-46 h-9 px-6 py-2 rounded-lg border border-neutral-700 justify-start items-center gap-2.5 inline-flex">Create Groups</button>
            </div>

            <div className="flex gap-4">

                {/* CARD 1 */}
                <div className="flex gap-6 items-center mt-4">
                    <div className="flex-col items-center justify-center mt-1 sm:flex-row sm:space-y-0">
                        <div className="w-[225px] h-[45px] px-2.5 py-3 bg-gray-100 border-none rounded-lg border border-violet-200 justify-between items-center gap-2.5">
                            <h5 className="ml-[33%] font-bold">Group A</h5>
                        </div>
                        <div class8ame="">
                            <div className="w-[225px]  mt-2 h-[425px] px-2.5 py-3 bg-gray-100 border-none rounded-lg border border-violet-200 justify-between items-center gap-2.5 inline-flex">
                                <button className="ml-[25%] text-gray-600">Select Teams</button>
                            </div>
                        </div>
                        <button className="text-red-500 ml-[35%] mt-[10px]">Remove</button>

                    </div>
                </div>

                {/* CARD 2 */}
                <div className="flex gap-6 items-center mt-4">
                    <div className="flex-col items-center justify-center mt-1 sm:flex-row sm:space-y-0">
                        <div className="w-[225px] h-[45px] px-2.5 py-3 bg-gray-100 border-none rounded-lg border border-violet-200 justify-between items-center gap-2.5">
                            <h5 className="ml-[33%] font-bold">Group B</h5>
                        </div>
                        <div class8ame="">
                            <div className="w-[225px] mt-2 h-[425px] px-2.5 py-3 bg-gray-100 border-none rounded-lg border border-violet-200 justify-between items-center gap-2.5 inline-flex">
                                <button className="ml-[25%] text-gray-600">Select Teams</button>
                            </div>
                        </div>
                        <button className="text-red-500 ml-[35%] mt-[10px]">Remove</button>
                    </div>
                </div>

                {/* CARD 3 */}
                <div className="flex gap-6 items-center mt-4">
                    <div className="flex-col items-center justify-center mt-1 sm:flex-row sm:space-y-0">
                        <div className="w-[225px] h-[45px] px-2.5 py-3 bg-gray-100 border-none rounded-lg border border-violet-200 justify-between items-center gap-2.5">
                            <h5 className="ml-[33%] font-bold">Group C</h5>
                        </div>

                        <div class8ame="">
                            <div className="w-[225px] mt-2 h-[425px] px-2.5 py-3 bg-gray-100 border-none rounded-lg border border-violet-200 justify-between items-center gap-2.5 inline-flex">
                                <button className="ml-[25%] text-gray-600">Select Teams</button>
                            </div>
                        </div>

                        <button className="text-red-500 ml-[35%] mt-[10px]">Remove</button>

                    </div>
                </div>

                {/* CARD 4 */}
                <div className="flex gap-6 items-center mt-4">
                    <div className="flex-col items-center justify-center mt-1 sm:flex-row sm:space-y-0">
                        <div className="w-[225px] h-[45px] px-2.5 py-3 bg-gray-100 border-none rounded-lg border border-violet-200 justify-between items-center gap-2.5">
                            <h5 className="ml-[33%] font-bold">Group D</h5>
                        </div>

                        <div class8ame="">
                            <div className="w-[225px] mt-2 h-[425px] px-2.5 py-3 bg-gray-100 border-none rounded-lg border border-violet-200 justify-between items-center gap-2.5 inline-flex">
                                <button className="ml-[25%] text-gray-600">Select Teams</button>
                            </div>
                        </div>

                        <button className="text-red-500 ml-[35%] mt-[10px]">Remove</button>

                    </div>
                </div>


            </div>
        </div>
    );
}
