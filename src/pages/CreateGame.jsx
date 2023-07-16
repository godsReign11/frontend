import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TopHead from "./TopHead";
import { createGameApi } from "../Api/GameApi";

export default function CreateGame() {
  const handleAllChange = (setterFunction) => (e) => {
    const { value } = e.target;
    setterFunction(value);
  };

  const [gameName, setGameName] = useState("");
  const [gameOrder, setGameOrder] = useState("");
  const [gameURL, setGameURL] = useState("");

  const [inputError, setInputError] = useState(false);

  const createGameDashboard = () => {
    const data = {
      name: gameName,
      order: gameOrder,
      gameUrl: gameURL,
    };
    if (gameName === "" || gameOrder === "" || gameURL === "") {
      setInputError(true);
    } else {
      setInputError(false);

      createGameApi.CreateGameForApp(data).then((data) => {
        if (data.status_code) {
          toast.success(data.message);
          setGameName("");
          setGameOrder("");
          setGameURL("");
        } else {
          toast.error(data.message);
        }
      });
    }
  };

  const resetHandle = () => {
    setGameName("");
    setGameOrder("");
    setGameURL("");
  };

  return (
    <div className="wrapper">
      <ToastContainer />
      <div className="content-page rtl-page">
        <div className="container mx-auto">
          <TopHead name={"Create Game"} />

          <div className="flex flex-col mt-6 sm:flex-row sm:space-y-0 sm:space-x-6">
            <div className="flex-1">
              <div className="card bg-white rounded-lg shadow-md p-6">
                <div className="mb-6">
                  <label
                    htmlFor="gameName"
                    className="text-lg font-medium text-gray-800 mb-1"
                  >
                    Game Name
                  </label>
                  <input
                    type="text"
                    id="gameName"
                    value={gameName}
                    required
                    onChange={handleAllChange(setGameName)}
                    className="input-field w-full px-4 py-2 border-gray-300 rounded-md focus:outline-none bg-slate-100 mt-4"
                    placeholder="Enter the name of the game"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="gameOrder"
                    className="text-lg font-medium text-gray-800 mb-1"
                  >
                    Set Game Order
                  </label>
                  <input
                    type="number"
                    id="gameOrder"
                    value={gameOrder}
                    onChange={handleAllChange(setGameOrder)}
                    className="input-field w-full px-4 py-2 border-gray-300 rounded-md focus:outline-none bg-slate-100 mt-4"
                    placeholder="Enter the game order"
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
                    Game URL
                  </label>
                  <input
                    type="text"
                    id="gameURL"
                    value={gameURL}
                    required
                    onChange={handleAllChange(setGameURL)}
                    className="input-field w-full px-4 py-2 border-gray-300 rounded-md focus:outline-none bg-slate-100 mt-4"
                    placeholder="Enter game URL"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex mt-6 gap-1">
            <button
              onClick={createGameDashboard}
              className="button-primary px-6 py-2 rounded-md text-white bg-blue-500 hover:bg-blue-600"
            >
              Create
            </button>

            <button
              onClick={resetHandle}
              className="button-secondary px-6 py-2 rounded-md text-blue-500 border border-blue-500 hover:text-white hover:bg-blue-500"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
