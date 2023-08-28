import React, { useState } from "react";
import '../pages/All.css'

export default function EventDetail() {

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
                    Event Details
                </h2>
            </div>
            <div className="flex gap-6 items-center ">
                <div className="mt-1 sm:flex-row sm:space-y-0">

                    <div className="">
                        <label
                            htmlFor="gameName"
                            className="text-gray-500 font-[16px]"
                        >
                            Select Game
                        </label>
                        <input
                            type="text"
                            required
                            onChange={handleAllChange(setPlayerName)}
                            className={`input-field w-full px-4 py-2 border ${error && playerName === ""
                                ? "border-red-500"
                                : "border-gray-300"
                                } rounded-md focus:outline-none bg-gray-50 mt-1 h-11`}
                            placeholder="Enter the name of the player"
                        />
                    </div>

                    <div className="mt-2">
                        <label
                            htmlFor="gameName"
                            className="text-gray-500 font-[16px] "
                        >
                            Title
                        </label>
                        <input
                            type="text"
                            required
                            onChange={handleAllChange(setPlayerName)}
                            className={`input-field w-full px-4 py-2 border ${error && playerName === ""
                                ? "border-red-500"
                                : "border-gray-300"
                                } rounded-md focus:outline-none bg-gray-50 mt-1 h-11`}
                            placeholder="Enter the name of the player"
                        />
                    </div>

                    <div className="">
                        <label
                            htmlFor="gameName"
                            className="text-gray-500 font-[16px]"
                        >
                            Subtitle
                        </label>
                        <input
                            type="text"
                            required
                            onChange={handleAllChange(setPlayerName)}
                            className={`input-field w-full px-4 py-2 border ${error && playerName === ""
                                ? "border-red-500"
                                : "border-gray-300"
                                } rounded-md focus:outline-none bg-gray-50 mt-1 h-11`}
                            placeholder="Enter the name of the player"
                        />
                    </div>
                </div>

                <div className="mt-3">
                    <label
                        htmlFor="gameName"
                        className="text-gray-500 font-[16px]"
                    >
                        Description
                    </label>
                    <textarea className="input-field w-[600px] h-[200px]  px-4 py-2 border rounded-md focus:outline-none bg-gray-50 mt-1" />
                </div>
            </div>
        </div>
    );
}
