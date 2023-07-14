import "./All.css";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

import TopHead from "./TopHead";
import { createGameApi } from "../Api/GameApi";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import moment from "moment/moment";

export default function AllGames() {
  const [gamesData, setGameData] = useState([]);

  const handleAllChange = (setterFunction) => (e) => {
    const { value } = e.target;
    setterFunction(value);
  };

  useEffect(() => {
    getAllGamesDash();
  }, []);

  const getAllGamesDash = () => {
    createGameApi.GetAllGames().then((data) => {
      if (data.status_code) {
        toast.done(data.message);
        console.log(data.data);
        setGameData(data.data);
      } else {
        toast.error(data.message);
      }
    });
  };

  const handleDate = (date) => {
    const newDate = moment(date).format("DD/MM/YYYY");
    return newDate;
  };

  const handleReset = () => {};

  return (
    <div className="wrapper">
      <div className="content-page rtl-page">
        <div className="container-fluid">
          <TopHead name={"All Games"} />

          <div className="row">
            <div className="col-sm-12 col-lg-12">
              <div className="card">
                <div className="card-body">
                  <div className="offers_head">
                    <div className="form-row"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <form>
            <div className="row">
              <div className="col-sm-12 col-lg-12">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex flex-wrap">
                      {/* <div className='col'>
                                            <label htmlFor='name'>Coupon Title</label>
                                            <input
                                                // onChange={(e) => setTeam(e.target.value)}
                                                type='text'
                                                // value={team_name}
                                                className='form-control'
                                                placeholder='Search By Coupon Title'
                                            />
                                        </div> */}
                    </div>
                    <div>
                      <div className="form-row">
                        <div className="col">
                          <br />
                          <label htmlFor="name"></label>
                          <button
                            value="search"
                            // onClick={(e) => Filter(e)}
                            type="button"
                            className="btn btn-primary"
                            // disabled={isLoading ? true : false}
                          >
                            Search
                          </button>
                          &nbsp;
                          <input
                            type="reset"
                            className="btn btn-danger"
                            onClick={handleReset}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <div className="row">
            <div className="row">
              <div className="col-sm-12 col-lg-12">
                <div className="card">
                  <div className="card-body">
                    <div className="table-editable" id="table">
                      <div className="table-responsive">
                        <table className="table table-striped table-bordered">
                          <thead>
                            <tr>
                              <th>S.No.</th>
                              <th>Game name</th>
                              <th>Created At</th>
                              <th>Game URL</th>
                              <th>Game Order</th>
                            </tr>
                          </thead>
                          <tbody>
                            {gamesData.length > 0 &&
                              gamesData.map((game, i) => {
                                return (
                                  <tr key={i}>
                                    <td>{++i}</td>
                                    <td>{game.name}</td>
                                    <td>{handleDate(game.createdAt)}</td>
                                    <td>{game.gameUrl}</td>
                                    <td>{game.order}</td>
                                  </tr>
                                );
                              })}
                          </tbody>
                          )
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Edit Modal */}

            {/* Edit Modale */}
          </div>
        </div>
      </div>
    </div>
  );
}
