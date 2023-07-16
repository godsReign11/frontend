import { useEffect, useState } from "react";
import "./All.css";
import { createGameApi } from "../Api/GameApi";
import { ToastContainer, toast } from "react-toastify";
import TopHead from "./TopHead";

export default function CreateGame() {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const [playerName, setPlayerName] = useState("");
  const [playerShortName, setPlayerShortName] = useState("");
  const [playerOrder, setPlayerOrder] = useState("");
  const [playerCategory, setPlayerCategory] = useState("");

  const [error, setError] = useState(false);

  const handleAllChange = (setterFunction) => (e) => {
    const { value } = e.target;
    setterFunction(value);
  };

  const handleFileChange = (event) => {
    const files = event.target.files;
    const newImages = [...selectedFiles];
    for (let i = 0; i < files.length; i++) {
      newImages.push(files[i]);
    }

    setSelectedFiles(newImages);
    console.log(selectedFiles);
  };

  const handleCreatePlayerData = () => {
    if (
      playerName === "" ||
      playerShortName === "" ||
      playerCategory === "" ||
      playerOrder === ""
    ) {
      setError(true);
    } else {
      setError(false);

      const dataForm = new FormData();
      dataForm.append("playerName", playerName);
      dataForm.append("playerShortName", playerShortName);
      dataForm.append("playerGameCategory", playerCategory);
      dataForm.append("order", playerOrder);

      // Append selected files
      for (let i = 0; i < selectedFiles.length; i++) {
        dataForm.append("playerImage", selectedFiles[i]);
      }

      createGameApi.CreatePlayerForApp(dataForm).then((data) => {
        if (data.status_code === true) {
          toast.success("Ticket Generated Successfully");
          console.log(data.message);
        } else {
          toast.error("Some Error Occured");
          console.log(data.message);
        }
      });
    }
  };

  return (
    <div className="wrapper">
      <ToastContainer />
      <div className="content-page rtl-page">
        <div className="container mx-auto">
          <TopHead name={"Create Game"} />

          <div className="flex flex-col mt-6 space-y-6 sm:flex-row sm:space-y-0 sm:space-x-6">
            <div className="flex-1">
              <div className="card bg-white rounded-lg shadow-md p-6">
                <div className="mb-6">
                  <label
                    htmlFor="gameName"
                    className="text-lg font-medium text-gray-800 mb-1"
                  >
                    Player Name
                  </label>
                  <input
                    type="text"
                    id="gameName"
                    value={playerName}
                    required
                    onChange={handleAllChange(setPlayerName)}
                    className="input-field w-full px-4 py-2 border-gray-300 rounded-md focus:outline-none bg-slate-100 mt-4"
                    placeholder="Enter the name of the player"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="playerName"
                    className="text-lg font-medium text-gray-800 mb-1"
                  >
                    Player Short Name
                  </label>
                  <input
                    type="text"
                    id="playerShortName"
                    value={playerName}
                    required
                    onChange={handleAllChange(setPlayerShortName)}
                    className="input-field w-full px-4 py-2 border-gray-300 rounded-md focus:outline-none bg-slate-100 mt-4"
                    placeholder="Enter the short name for the player"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="gameOrder"
                    className="text-lg font-medium text-gray-800 mb-1"
                  >
                    Set Player Category
                  </label>
                  <input
                    type="text"
                    id="playerCategory"
                    value={playerCategory}
                    onChange={handleAllChange(setPlayerCategory)}
                    className="input-field w-full px-4 py-2 border-gray-300 rounded-md focus:outline-none bg-slate-100 mt-4"
                    placeholder="Enter the player category"
                  />
                </div>
              </div>
            </div>

            <div className="flex-1">
              <div className="card bg-white rounded-lg shadow-md p-6">
                <div className="mb-6">
                  <label
                    htmlFor="gameURL"
                    className="text-lg font-medium text-gray-800 mb-1"
                  >
                    Set Player Order
                  </label>
                  <input
                    type="text"
                    id="gameURL"
                    value={playerOrder}
                    required
                    onChange={handleAllChange(setPlayerOrder)}
                    className="input-field w-full px-4 py-2 border-gray-300 rounded-md focus:outline-none bg-slate-100 mt-4"
                    placeholder="Enter Player Order"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="upload"
                    className="text-lg font-medium text-gray-800 mb-1"
                  >
                    Set Player Image
                  </label>
                  <input
                    id="file"
                    onChange={handleFileChange}
                    type="file"
                    accept="image/*"
                    multiple
                    name="files[]"
                    className="input-field w-full px-4 py-2 border-gray-300 rounded-md focus:outline-none bg-slate-100 mt-4"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex mt-6 gap-3">
            <button
              onClick={handleCreatePlayerData}
              className="button-primary px-6 py-2 rounded-md text-white bg-blue-500 hover:bg-blue-600"
            >
              Create Player
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
