import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { MATCHESAPI } from "../src/Api/MatchesAPI";

export default function CreateMatches() {
    const [selectMap, setSelectMap] = useState('');
    const [startDate, setStartDate] = useState('');
    const [matchName, setMatchName] = useState('');
    const [selectMatchStatus, setSelectMatchStatus] = useState('');

    const handleAllChange = (setterFunction) => (e) => {
        const { value } = e.target;
        setterFunction(value);
    };

    const handleCreateMatches = () => {

        const typeGame = 'pubg';

        const data = {
            gameType: typeGame,
            startDate: startDate,
            map: selectMap,
            matchName: matchName,
            matchStatusStr: selectMatchStatus,
        }
        MATCHESAPI.CreateMatches(data).then((res) => {
            if (res.status_code) {
                toast.success(res.message);
                clearForm();
            } else {
                toast.error(res.message);
            }
        });
    };

    const clearForm = () => {

    };

    return (
        <div className="wrapper">
            <ToastContainer />
            <div className="content-page rtl-page">
                <div className="container mx-auto">
                    {/* <div className="flex flex-col mt-6 space-y-6 sm:flex-row sm:space-y-0 sm:space-x-6">
                        <div className="flex-1">
                            <div className="card bg-white rounded-lg shadow-md p-6">
                                <div className="mb-6">
                                    <label
                                        htmlFor="game Name"
                                        className="text-lg font-medium text-gray-800 mb-1"
                                    >
                                        Match Name
                                    </label>
                                    <div className="relative w-full lg:max-w-sm">
                                        <input
                                            onChange={(e) => setMatchName(e.target.value)}
                                            value={matchName}
                                            className="input-field w-full px-4 py-2 border-gray-300 rounded-md focus:outline-none bg-slate-100 mt-4"
                                        >
                                            <option value="" disabled>
                                                Select Game
                                            </option>
                                            {gamesData.map((data) => (
                                                <option key={data._id} value={data._id}>
                                                    {data.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}

                    <div className="flex flex-col mt-6 space-y-6 sm:flex-row sm:space-y-0 sm:space-x-6">
                        <div className="flex-1">
                            <div className="card bg-white rounded-lg shadow-md p-6">
                                <div className="mb-6">
                                    <label
                                        htmlFor="playerName"
                                        className="text-lg font-medium text-gray-800 mb-1"
                                    >
                                        Start Date
                                    </label>
                                    <input
                                        type="date"
                                        id="startDate"
                                        value={startDate}
                                        required
                                        onChange={handleAllChange(setStartDate)}
                                        className="input-field w-full px-4 py-2 border-gray-300 rounded-md focus:outline-none bg-slate-100 mt-4"
                                        placeholder="Enter Start Date"
                                    />
                                </div>

                                <div className="mb-6">
                                    <label
                                        htmlFor="gameOrder"
                                        className="text-lg font-medium text-gray-800 mb-1"
                                    >
                                        Match Title
                                    </label>
                                    <input
                                        type="text"
                                        id="matchName"
                                        value={matchName}
                                        onChange={handleAllChange(setMatchName)}
                                        className="input-field w-full px-4 py-2 border-gray-300 rounded-md focus:outline-none bg-slate-100 mt-4"
                                        placeholder="Enter Title"
                                    />
                                </div>

                                <div className="mb-6">
                                    <label
                                        htmlFor="gameOrder"
                                        className="text-lg font-medium text-gray-800 mb-1"
                                    >
                                        Select Map
                                    </label>
                                    <input
                                        value={selectMap}
                                        id="map"
                                        onChange={handleAllChange(setSelectMap)}
                                        type="text"
                                        className="input-field w-full px-4 py-2 border rounded-md focus:outline-none bg-slate-100 mt-4"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex-1">
                            <div className="card bg-white rounded-lg shadow-md p-6">
                                <div className="mb-6">
                                    <label
                                        htmlFor="gameOrder"
                                        className="text-lg font-medium text-gray-800 mb-1"
                                    >
                                        Match Status
                                    </label>
                                    <input
                                        type="text"
                                        id="matchStatus"
                                        value={selectMatchStatus}
                                        onChange={handleAllChange(setSelectMatchStatus)}
                                        className="input-field w-full px-4 py-2 border-gray-300 rounded-md focus:outline-none bg-slate-100 mt-4"
                                        placeholder="Enter Match Status"
                                    />
                                </div>

                                {/* <div className="mb-6">
                                    <label
                                        htmlFor="gameOrder"
                                        className="text-lg font-medium text-gray-800 mb-1"
                                    >
                                        Subtitle
                                    </label>
                                    <input
                                        type="text"
                                        id="playerCategory"
                                        value={subtitle}
                                        onChange={handleAllChange(setSubtitle)}
                                        className="input-field w-full px-4 py-2 border-gray-300 rounded-md focus:outline-none bg-slate-100 mt-4"
                                        placeholder="Enter Subtitle"
                                    />
                                </div> */}
                            </div>
                        </div>
                    </div>




                    <div className="flex mt-6 gap-3">
                        <button
                            onClick={handleCreateMatches}
                            className="button-primary px-6 py-2 rounded-md text-white bg-blue-500 hover:bg-blue-600"
                        >
                            Create Matches
                        </button>
                    </div>

                </div>
            </div>
        </div >
    );
}
