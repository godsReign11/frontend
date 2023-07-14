import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./All.css";
import TopHead from "./TopHead";
import { createGameApi } from "../Api/GameApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        <div className="container-fluid">
          <TopHead name={"Create Game"} />

          <div className="row create-row">
            <div className="col-sm-12 col-lg-16">
              <div className="card">
                <div className="card-body">
                  <div className="form-row"></div>
                  <div className="offers_div">
                    <div>
                      <label className="offer_checkbox">Game Name</label>
                      <input
                        type="text"
                        value={gameName}
                        required
                        onChange={handleAllChange(setGameName)}
                        className="offers_input"
                        placeholder="type the name of the game"
                      />
                    </div>

                    <div>
                      <label className="offer_checkbox">Set Game Order</label>
                      <input
                        type="number"
                        value={gameOrder}
                        onChange={handleAllChange(setGameOrder)}
                        className="offers_input"
                        placeholder="type the game order"
                      />
                    </div>

                    <div className="cases_button_div"></div>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-body">
                  <div className="form-row"></div>
                  <div className="offers_div">
                    <div>
                      <label className="offer_checkbox">Game URL</label>
                      <input
                        type="text"
                        value={gameURL}
                        required
                        onChange={handleAllChange(setGameURL)}
                        className="offers_input"
                        placeholder="enter game url"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-body">
                  <div className="form-row"></div>
                  <div className="offers_div">
                    <div className="create-button-div">
                      <button
                        onClick={createGameDashboard}
                        className="cases_verify_button"
                      >
                        Create
                      </button>

                      <button
                        onClick={resetHandle}
                        className="cases_verify_button-reset"
                      >
                        Reset
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
