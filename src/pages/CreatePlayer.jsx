import { useEffect, useState } from "react";
import "./All.css";
import { createGameApi } from "../Api/GameApi";
import { ToastContainer, toast } from "react-toastify";
import TopHead from "./TopHead";
import { PlusOutlined } from "@ant-design/icons";


export default function CreatePlayer() {
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
        dataForm.append("fileName", selectedFiles[i]);
      }

      createGameApi.CreatePlayerForApp(dataForm).then((data) => {
        if (data.status) {
          toast.success("Player Created Successfully");
          console.log(data.message);
        } else {
          toast.error(data.message);
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
          <TopHead name={"Player"} />
          <div className="bg-white p-6 rounded-md">
            <div>
              <h2 className="text-black text-base font-semibold leading-normal">Add new Players</h2>
            </div>
            <div className="flex flex-wrap flex-col mt-1 sm:flex-row sm:space-y-0 gap-3">

              {/* Label 1 */}
              <div className="">

                <label
                  htmlFor="gameName"
                  className="text-gray-500 font-[16px]"
                >
                  Player Name
                </label>
                <input
                  type="text"
                  id="gameName"
                  value={playerName}
                  required
                  onChange={handleAllChange(setPlayerName)}
                  className={`input-field w-full px-4 py-2 border ${error && gameName === ""
                    ? "border-red-500"
                    : "border-gray-300"
                    } rounded-md focus:outline-none bg-slate-100 mt-1 h-11}`}
                  placeholder="Enter the name of the player"
                />
              </div>

              {/* Label 2 */}

              <div className="flex-1">
                <label
                  htmlFor=""
                  className="text-gray-500 font-[16px]"
                >
                  Game Category
                </label>
                <input
                  type="text"
                  id="playerCategory"
                  value={playerCategory}
                  onChange={handleAllChange(setPlayerCategory)}
                  className={`input-field w-full px-4 py-2 border ${error && gameName === ""
                    ? "border-red-500"
                    : "border-gray-300"
                    } rounded-md focus:outline-none bg-slate-100 mt-1 h-11}`}
                  placeholder="Enter the player category"
                />
              </div>


              {/* Label 3 */}

              <div className="">
                <label
                  htmlFor="playerName"
                  className="text-gray-500 font-[16px]"
                >
                  In Game Name
                </label>
                <input
                  type="text"
                  id="playerShortName"
                  value={playerShortName}
                  required
                  onChange={handleAllChange(setPlayerShortName)}
                  className={`input-field w-full px-4 py-2 border ${error && gameName === ""
                    ? "border-red-500"
                    : "border-gray-300"
                    } rounded-md focus:outline-none bg-slate-100 mt-1 h-11}`}
                  placeholder="Enter the short name for the player"
                />
              </div>

              {/* Label 3 */}

              <div>
                <div className="mt-3 mb-1 main-create-game-div">
                  <label
                    htmlFor="upload"
                    className="text-gray-500 font-[16px]"
                  >
                    Choose Game Image
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      id="file"
                      onChange={handleFileChange}
                      type="file"
                      accept="image/*"
                      multiple
                      name="files[]"
                      className="input-field h-11 w-full px-4 py-2 border rounded-md focus:outline-none bg-slate-100 mt-1"
                    />
                    <div className="mt-1">
                      <button className="w-[133px] h-11 px-6 py-3 rounded-lg border border-neutral-700 justify-start items-center gap-2.5 inline-flex ml-2 mr-2">Add to draft</button>
                    </div>

                    <div className="mt-1">
                      <button onClick={handleCreatePlayerData} className="w-[170px] h-11 px-6 py-2.5 bg-neutral-900 rounded-lg  items-center text-white">
                        <div className="flex gap-3">
                          <PlusOutlined color="white" className="mt-1" />
                          Add Player
                        </div>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="text-xs">
                  *Only Png filetype is allowed
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
