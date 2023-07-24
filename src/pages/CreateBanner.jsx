import { useEffect, useState } from "react";
import "./All.css";
import { ToastContainer, toast } from "react-toastify";
import TopHead from "./TopHead";
import { BannerAPI } from "../Api/BannerAPI";

export default function CreateBanner() {
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

      BannerAPI.CreateBanner(dataForm).then((data) => {
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
          <TopHead name={"Create Banner"} />

          <div className="flex flex-col mt-6 space-y-6 sm:flex-row sm:space-y-0 sm:space-x-6">
            <div className="flex-1">
              <div className="card bg-white rounded-lg shadow-md p-6">
                <div className="mb-6">
                  <label
                    htmlFor="gameName"
                    className="text-lg font-medium text-gray-800 mb-1"
                  >
                    Banner Title
                  </label>
                  <input
                    type="text"
                    id="gameName"
                    value={playerName}
                    required
                    onChange={handleAllChange(setPlayerName)}
                    className={`input-field w-full px-4 py-2 border rounded-md focus:outline-none bg-slate-100 mt-4 ${
                      error && playerName === ""
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                    placeholder="Enter the name of the player"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="playerName"
                    className="text-lg font-medium text-gray-800 mb-1"
                  >
                    Banner Description
                  </label>
                  <textarea
                    type="text"
                    id="playerShortName"
                    value={playerShortName}
                    required
                    onChange={handleAllChange(setPlayerShortName)}
                    className={`input-field w-full px-4 py-2 border rounded-md focus:outline-none bg-slate-100 mt-4 ${
                      error && playerShortName === ""
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                    placeholder="Enter the short name for the player"
                  />
                </div>
              </div>
            </div>

            <div className="flex-1">
              <div className="card bg-white rounded-lg shadow-md p-6">
                <div className="mb-6">
                  <label
                    htmlFor="upload"
                    className="text-lg font-medium text-gray-800 mb-1"
                  >
                    Banner Image
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

                <div className="mb-6">
                  <label
                    htmlFor="gameOrder"
                    className="text-lg font-medium text-gray-800 mb-0.2"
                  >
                    Banner URL
                  </label>
                  <textarea
                    type="text"
                    id="playerCategory"
                    value={playerCategory}
                    onChange={handleAllChange(setPlayerCategory)}
                    className={`input-field w-full px-4 py-2 border rounded-md focus:outline-none bg-slate-100 mt-3 ${
                      error && playerCategory === ""
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                    placeholder="Enter the player category"
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
              Create Banner
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
