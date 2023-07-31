import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TopHead from "./TopHead";
import { createGameApi } from "../Api/GameApi";
import { Result, Modal } from 'antd';

export default function CreateGame() {

  const [selectedFiles, setSelectedFiles] = useState([]);

  const [gameName, setGameName] = useState("");
  const [gameOrder, setGameOrder] = useState("");

  const [error, setError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);


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

  const handleCreateGameData = () => {
    if (
      gameName === "" ||
      gameOrder === ""
    ) {
      setError(true);
    } else {
      setError(false);

      const dataForm = new FormData();
      dataForm.append("name", gameName);
      dataForm.append("order", gameOrder);

      // Append selected files
      for (let i = 0; i < selectedFiles.length; i++) {
        dataForm.append("fileName", selectedFiles[i]);
      }

      createGameApi.CreateGameForApp(dataForm).then((data) => {
        if (data.status) {
          toast.success("Game Created Successfully");
          console.log(data.message);
          resetHandle()
          setIsModalOpen(true)
        } else {
          toast.error("Some Error Occured");
          console.log(data.message);
        }
      });
    }
  };

  const resetHandle = () => {
    setGameName("");
    setGameOrder("");
    setSelectedFiles("");
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
                    className={`input-field w-full px-4 py-2 border ${error && gameName === ""
                      ? "border-red-500"
                      : "border-gray-300"
                      } rounded-md focus:outline-none bg-slate-100 mt-4`}
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
                    className={`input-field w-full px-4 py-2 border ${error && gameOrder === ""
                      ? "border-red-500"
                      : "border-gray-300"
                      } rounded-md focus:outline-none bg-slate-100 mt-4`}
                    placeholder="Enter the game order"
                  />
                </div>
              </div>
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
                className="input-field w-full px-4 py-2 border rounded-md focus:outline-none bg-slate-100 mt-4"
              />
            </div>
          </div>

          <div className="flex mt-6 gap-1">
            <button
              onClick={handleCreateGameData}
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

      <Modal open={isModalOpen} footer={null} closable={false} closeIcon={false}>
        <Result
          status="success"
          title="Successfully Created the Game"
          subTitle="Redirect to the All Games"
          extra={[

          ]}>
          <Link to='/all-games' className="button-create-game">Yes, Please</Link>
        </Result>
      </Modal>
    </div>
  );
}
