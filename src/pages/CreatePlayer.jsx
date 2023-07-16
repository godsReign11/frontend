import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./All.css";
import { createGameApi } from "../Api/GameApi";
import { ToastContainer, toast } from "react-toastify";
import TopHead from "./TopHead";

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
        <div className="container-fluid">
          <TopHead name={"Create Player"} />

          {/* Usage and Limit */}

          <div className="row mt-6">
            <div className="col-sm-12 col-lg-16">
              <div className="card">
                <div className="card-body">
                  <div className="form-row"></div>
                  <div className="offers_div">
                    <div>
                      <div>
                        <label className="offer_checkbox">Player name</label>
                        <input
                          type="text"
                          value={playerName}
                          required
                          onChange={handleAllChange(setPlayerName)}
                          className="offers_input"
                          placeholder="type the name of the game"
                        />
                      </div>

                      <div>
                        <label className="offer_checkbox">
                          Player Short Name
                        </label>
                        <input
                          type="text"
                          value={playerShortName}
                          required
                          onChange={handleAllChange(setPlayerShortName)}
                          className="offers_input"
                          placeholder="type the name of the game"
                        />
                      </div>

                      <div>
                        <label className="offer_checkbox">
                          Player Game Category
                        </label>
                        <input
                          type="text"
                          value={playerCategory}
                          required
                          onChange={handleAllChange(setPlayerCategory)}
                          className="offers_input"
                          placeholder="type the name of the game"
                        />
                      </div>

                      <div>
                        <label className="offer_checkbox">Set Order</label>
                        <input
                          type="text"
                          value={playerOrder}
                          required
                          onChange={handleAllChange(setPlayerOrder)}
                          className="offers_input"
                          placeholder="type the name of the game"
                        />
                      </div>

                      <div className="cases_5000">
                        <div>
                          <label
                            className="offer_checkbox_500"
                            htmlFor="upload"
                          >
                            Set Player Image{" "}
                          </label>
                          <input
                            className="cases_DESCRIPTION_500"
                            id="file"
                            onChange={handleFileChange}
                            type="file"
                            accept="image/*"
                            multiple
                            name="files[]"
                          />
                        </div>
                      </div>
                    </div>
                    {/* <textarea value={subject} placeholder='Add Subject' /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="cases_button_div">
            <button
              onClick={handleCreatePlayerData}
              className="button-primary px-6 py-2 rounded-md text-white bg-blue-500 hover:bg-blue-600"
            >
              Create Player
            </button>
            {/* <button onClick={handleReset} className='cases_reset'>Reset Ticket</button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
