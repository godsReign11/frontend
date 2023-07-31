import React, { useEffect, useState } from "react";
import "./All.css";
import { ToastContainer, toast } from "react-toastify";
import TopHead from "./TopHead";
import { createGameApi } from "../Api/GameApi";
import { CONTESTAPI } from "../Api/ContestApi";

export default function CreateContest() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [gamesData, setGameData] = useState([]);
  const [teamAurl, setTeamAurl] = useState("");
  const [teamAscore, setTeamAscore] = useState("");
  const [teamAname, setTeamAname] = useState("");
  const [teamBname, setTeamBname] = useState("");
  const [teamBurl, setTeamBurl] = useState("");
  const [contestGame, setContestGame] = useState("");
  const [startDate, setStartDate] = useState("");
  const [title, setTitle] = useState("");
  const [teamBscore, setTeamBscore] = useState("");
  const [description, setDescription] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [contestGameId, setContestGameId] = useState("");

  useEffect(() => {
    getAllGamesDash();
  }, []);

  const getAllGamesDash = () => {
    createGameApi.GetAllGames().then((data) => {
      if (data.status) {
        setGameData(data.data);
      } else {
        toast.error(data.message);
      }
    });
  };

  const handleAllChange = (setterFunction) => (e) => {
    const { value } = e.target;
    setterFunction(value);
  };

  const handleGameChange = (e) => {
    setContestGameId(e.target.value);
  };

  const handleFileChange = (event) => {
    const files = event.target.files;
    setSelectedFiles([...selectedFiles, ...files]);
  };

  const handleCreateContest = () => {
    const formData = new FormData();
    formData.append("teamAurl", teamAurl);
    formData.append("teamAscore", teamAscore);
    formData.append("teamAname", teamAname);
    formData.append("teamBname", teamBname);
    formData.append("teamBurl", teamBurl);
    formData.append("contestGame", contestGame);
    formData.append("startDate", startDate);
    formData.append("title", title);
    formData.append("teamBscore", teamBscore);
    formData.append("description", description);
    formData.append("subtitle", subtitle);
    formData.append("contestGameId", contestGameId);

    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append("fileName", selectedFiles[i]);
    }

    CONTESTAPI.CreateContest(formData).then((res) => {
      if (res.status) {
        toast.success("Contest Created Successfully");
        clearForm();
      } else {
        toast.error(res.message);
      }
    });
  };

  const clearForm = () => {
    setTeamAurl("");
    setTeamAscore("");
    setTeamAname("");
    setTeamBname("");
    setTeamBurl("");
    setContestGame("");
    setStartDate("");
    setTitle("");
    setTeamBscore("");
    setSelectedFiles([]);
    setDescription("");
    setSubtitle("");
    setContestGameId("");
  };

  return (
    <div className="wrapper">
      <ToastContainer />
      <div className="content-page rtl-page">
        <div className="container mx-auto">
          <TopHead name={"Create Contest"} />
          <div className="flex flex-col mt-6 space-y-6 sm:flex-row sm:space-y-0 sm:space-x-6">
            <div className="flex-1">
              <div className="card bg-white rounded-lg shadow-md p-6">
                <div className="mb-6">
                  <label
                    htmlFor="game Name"
                    className="text-lg font-medium text-gray-800 mb-1"
                  >
                    Select Game
                  </label>
                  <div className="relative w-full lg:max-w-sm">
                    <select
                      onChange={handleGameChange}
                      value={contestGameId}
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
          </div>

          {/* Rest of the form input sections here... */}
          <div className="flex flex-col mt-6 space-y-6 sm:flex-row sm:space-y-0 sm:space-x-6">
            <div className="flex-1">
              <div className="card bg-white rounded-lg shadow-md p-6">
                <div className="mb-6">
                  <label
                    htmlFor="playerName"
                    className="text-lg font-medium text-gray-800 mb-1"
                  >
                    Team A Name
                  </label>
                  <input
                    type="text"
                    id="playerShortName"
                    value={teamAname}
                    required
                    onChange={handleAllChange(setTeamAname)}
                    className="input-field w-full px-4 py-2 border-gray-300 rounded-md focus:outline-none bg-slate-100 mt-4"
                    placeholder="Enter the Team A URL"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="gameOrder"
                    className="text-lg font-medium text-gray-800 mb-1"
                  >
                    Team A URL
                  </label>
                  <input
                    type="text"
                    id="playerCategory"
                    value={teamAurl}
                    onChange={handleAllChange(setTeamAurl)}
                    className="input-field w-full px-4 py-2 border-gray-300 rounded-md focus:outline-none bg-slate-100 mt-4"
                    placeholder="Enter the Team A Url"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="gameOrder"
                    className="text-lg font-medium text-gray-800 mb-1"
                  >
                    Team A Score
                  </label>
                  <input
                    type="text"
                    id="playerCategory"
                    value={teamAscore}
                    onChange={handleAllChange(setTeamAscore)}
                    className="input-field w-full px-4 py-2 border-gray-300 rounded-md focus:outline-none bg-slate-100 mt-4"
                    placeholder="Enter the Team B Name"
                  />
                </div>
              </div>
            </div>

            <div className="flex-1">
              <div className="card bg-white rounded-lg shadow-md p-6">
                <div className="mb-6">
                  <label
                    htmlFor="playerName"
                    className="text-lg font-medium text-gray-800 mb-1"
                  >
                    Team B Name
                  </label>
                  <input
                    type="text"
                    id="playerShortName"
                    value={teamBname}
                    required
                    onChange={handleAllChange(setTeamBname)}
                    className="input-field w-full px-4 py-2 border-gray-300 rounded-md focus:outline-none bg-slate-100 mt-4"
                    placeholder="Enter the Team B Name"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="gameOrder"
                    className="text-lg font-medium text-gray-800 mb-1"
                  >
                    Team B URL
                  </label>
                  <input
                    type="text"
                    id="playerCategory"
                    value={teamBurl}
                    onChange={handleAllChange(setTeamBurl)}
                    className="input-field w-full px-4 py-2 border-gray-300 rounded-md focus:outline-none bg-slate-100 mt-4"
                    placeholder="Enter the Team B URL"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="gameOrder"
                    className="text-lg font-medium text-gray-800 mb-1"
                  >
                    Team B Score
                  </label>
                  <input
                    type="text"
                    id="playerCategory"
                    value={teamBscore}
                    onChange={handleAllChange(setTeamBscore)}
                    className="input-field w-full px-4 py-2 border-gray-300 rounded-md focus:outline-none bg-slate-100 mt-4"
                    placeholder="Enter the Team B Score"
                  />
                </div>
              </div>
            </div>
          </div>

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
                    id="playerShortName"
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
                    Title
                  </label>
                  <input
                    type="text"
                    id="playerCategory"
                    value={title}
                    onChange={handleAllChange(setTitle)}
                    className="input-field w-full px-4 py-2 border-gray-300 rounded-md focus:outline-none bg-slate-100 mt-4"
                    placeholder="Enter Title"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="gameOrder"
                    className="text-lg font-medium text-gray-800 mb-1"
                  >
                    Contest Url
                  </label>
                  <input
                    id="file"
                    onChange={handleFileChange}
                    type="file"
                    accept="image/*"
                    multiple
                    name="files[]"
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
                    Description
                  </label>
                  <input
                    type="text"
                    id="playerCategory"
                    value={description}
                    onChange={handleAllChange(setDescription)}
                    className="input-field w-full px-4 py-2 border-gray-300 rounded-md focus:outline-none bg-slate-100 mt-4"
                    placeholder="Enter Description"
                  />
                </div>

                <div className="mb-6">
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
                </div>
              </div>
            </div>
          </div>

          <div className="flex mt-6 gap-3">
            <button
              onClick={handleCreateContest}
              className="button-primary px-6 py-2 rounded-md text-white bg-blue-500 hover:bg-blue-600"
            >
              Create Contest
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
