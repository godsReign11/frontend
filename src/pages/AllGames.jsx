import { useEffect, useState } from "react";
import moment from "moment/moment";
import { Table, Spin, Card, Image } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { createGameApi } from "../Api/GameApi";
import { toast } from "react-toastify";
import TopHead from "./TopHead";


export default function AllGames() {
  const [gamesData, setGameData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllGamesDash();
  }, []);

  const getAllGamesDash = () => {
    createGameApi.GetAllGames().then((data) => {
      if (data.status) {
        toast.done(data.message);
        // console.log(data.data);
        setGameData(data.data);
        setIsLoading(false);
      } else {
        toast.error(data.message);
        setIsLoading(false);
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
      width: 80,
    },
    {
      title: "Game Name",
      dataIndex: "name",
      key: "name",
      width: 200,
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      key: "createdAt",
      render: handleDate,
      width: 150,
    },
    {
      title: "Game Image",
      dataIndex: "gameUrl",
      key: "gameUrl",
      render: (imageSrc) => (
        <Image.PreviewGroup>
          <Image src={imageSrc} width={80} height={80} loading="lazy" />
        </Image.PreviewGroup>
      ),
    },
    {
      title: "Game Order",
      dataIndex: "order",
      key: "order",
      width: 120,
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
            <Card className="table-card mt-6">
              <Table
                columns={columns}
                dataSource={gamesData}
                rowKey={(game) => game.id}
                pagination={false}
                className="mt-6"
                scroll={{ x: "max-content" }} // Enable fixed table layout
              />
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
