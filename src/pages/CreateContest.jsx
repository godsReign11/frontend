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

  const [teamCount, setTeamCount] = useState(2); // Initialize teamCount with 2 for Team A and Team B.
  const [teamNames, setTeamNames] = useState(['Team A', 'Team B']); // Array to store team names
  const [teamUrls, setTeamUrls] = useState(['', '']); // Array to store team URLs
  const [teamScores, setTeamScores] = useState(['', '']); // Array to store team scores

  const handleAddTeam = () => {
    setTeamCount((prevCount) => prevCount + 1);
  };

  const handleDeleteTeam = (index) => {
    setTeamNames((prevNames) => prevNames.filter((_, i) => i !== index));
    setTeamUrls((prevUrls) => prevUrls.filter((_, i) => i !== index));
    setTeamScores((prevScores) => prevScores.filter((_, i) => i !== index));
    setTeamCount((prevCount) => prevCount - 1);
  };

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

          {/* Dynamic team cards */}
          {Array.from({ length: teamCount }).map((_, index) => (
            <div className="flex flex-col mt-6 space-y-6 sm:flex-row sm:space-y-0 sm:space-x-6" key={index}>
              <div className="flex-1">
                <div className="card bg-white rounded-lg shadow-md p-6">
                  <div className="mb-6">
                    <label
                      htmlFor={`team${index + 1}Name`}
                      className="text-lg font-medium text-gray-800 mb-1"
                    >
                      Team {String.fromCharCode(65 + index)} Name
                    </label>
                    <input
                      type="text"
                      id={`team${index + 1}Name`}
                      value={teamNames[index]}
                      onChange={(e) => {
                        const updatedNames = [...teamNames];
                        updatedNames[index] = e.target.value;
                        setTeamNames(updatedNames);
                      }}
                      className="input-field w-full px-4 py-2 border-gray-300 rounded-md focus:outline-none bg-slate-100 mt-4"
                      placeholder={`Enter the Team ${String.fromCharCode(65 + index)} Name`}
                    />
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor={`team${index + 1}Url`}
                      className="text-lg font-medium text-gray-800 mb-1"
                    >
                      Team {String.fromCharCode(65 + index)} URL
                    </label>
                    <input
                      type="text"
                      id={`team${index + 1}Url`}
                      value={teamUrls[index]}
                      onChange={(e) => {
                        const updatedUrls = [...teamUrls];
                        updatedUrls[index] = e.target.value;
                        setTeamUrls(updatedUrls);
                      }}
                      className="input-field w-full px-4 py-2 border-gray-300 rounded-md focus:outline-none bg-slate-100 mt-4"
                      placeholder={`Enter the Team ${String.fromCharCode(65 + index)} URL`}
                    />
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor={`team${index + 1}Score`}
                      className="text-lg font-medium text-gray-800 mb-1"
                    >
                      Team {String.fromCharCode(65 + index)} Score
                    </label>
                    <input
                      type="text"
                      id={`team${index + 1}Score`}
                      value={teamScores[index]}
                      onChange={(e) => {
                        const updatedScores = [...teamScores];
                        updatedScores[index] = e.target.value;
                        setTeamScores(updatedScores);
                      }}
                      className="input-field w-full px-4 py-2 border-gray-300 rounded-md focus:outline-none bg-slate-100 mt-4"
                      placeholder={`Enter the Team ${String.fromCharCode(65 + index)} Score`}
                    />
                  </div>

                  {/* "Delete Team" button */}
                  {teamCount > 2 && (
                    <button
                      onClick={() => handleDeleteTeam(index)}
                      className="button-primary px-6 py-2 rounded-md text-white bg-red-500 hover:bg-red-600"
                    >
                      Delete Team
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}


          <div className="flex mt-6 gap-3">
            <button
              onClick={handleCreateContest}
              className="button-primary px-6 py-2 rounded-md text-white bg-blue-500 hover:bg-blue-600"
            >
              Create Contest
            </button>
            <button
              onClick={handleAddTeam}
              className="button-primary px-6 py-2 rounded-md text-white bg-green-500 hover:bg-green-600"
            >
              Add Team
            </button>
          </div>

        </div>
      </div>
    </div >
  );
}
