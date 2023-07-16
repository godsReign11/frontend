import { useEffect, useState } from "react";
import moment from "moment/moment";
import { Table, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { createGameApi } from "../Api/GameApi";
import { toast } from "react-toastify";
import TopHead from "./TopHead";

export default function AllGames() {
  const [gamesData, setGameData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const cachedData = localStorage.getItem("gamesData");
    if (cachedData) {
      setGameData(JSON.parse(cachedData));
      setIsLoading(false);
    } else {
      getAllGamesDash();
    }
  }, []);

  useEffect(() => {
    if (gamesData.length > 0) {
      localStorage.setItem("gamesData", JSON.stringify(gamesData));
    }
  }, [gamesData]);

  const getAllGamesDash = () => {
    createGameApi
      .GetAllGames()
      .then((data) => {
        if (data.status_code) {
          toast.done(data.message);
          console.log(data.data);
          setGameData(data.data);
        } else {
          toast.error(data.message);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleAddRow = (newRow) => {
    createGameApi.AddGame(newRow).then((data) => {
      if (data.status_code) {
        toast.success(data.message);
        const updatedGamesData = [...gamesData, data.data];
        setGameData(updatedGamesData);
        localStorage.setItem("gamesData", JSON.stringify(updatedGamesData));
      } else {
        toast.error(data.message);
      }
    });
  };

  const handleDate = (date) => {
    return moment(date).format("DD/MM/YYYY");
  };

  const columns = [
    {
      title: "Index",
      dataIndex: "index",
      key: "index",
      render: (_, record, index) => index + 1,
    },
    {
      title: "Game Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      key: "createdAt",
      render: handleDate,
    },
    {
      title: "Game URL",
      dataIndex: "gameUrl",
      key: "gameUrl",
    },
    {
      title: "Game Order",
      dataIndex: "order",
      key: "order",
    },
  ];

  return (
    <div className="wrapper">
      <div className="content-page rtl-page">
        <div className="container-fluid">
          <TopHead name={"All Games"} />

          {isLoading ? (
            <Spin
              indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}
              size="large"
              className="my-8 items-center"
            />
          ) : (
            <Table
              columns={columns}
              dataSource={gamesData}
              rowKey={(record) => record.id}
              pagination={false}
              className="table-auto mt-6"
            />
          )}
        </div>
      </div>
    </div>
  );
}
