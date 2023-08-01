import { useEffect, useState } from "react";
import moment from "moment/moment";
import { Table, Spin, Image } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { createGameApi } from "../Api/GameApi";
import { toast } from "react-toastify";
import TopHead from "./TopHead";

export default function AllPlayerList() {
  const [playersData, setPlayersData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllPlayersData();
  }, []);

  const getAllPlayersData = () => {
    createGameApi.GetAllPlayers().then((data) => {
      if (data.status) {
        toast.done(data.message);
        console.log(data.data);
        setPlayersData(data.data);
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
    },
    {
      title: "Player Name",
      dataIndex: "playerName",
      key: "playerName",
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      key: "createdAt",
      render: handleDate,
    },
    {
      title: "Player Short Name",
      dataIndex: "playerShortName",
      key: "playerShortName",
    },
    {
      title: "Player Order",
      dataIndex: "order",
      key: "order",
    },

    {
      title: "Player Image",
      dataIndex: "playerImage",
      key: "playerImage",
      render: (imageSrc) => (
        <Image.PreviewGroup>
          <Image src={imageSrc} width={20} height={20} />
        </Image.PreviewGroup>
      ),
    },
  ];

  return (
    <div className="wrapper">
      <div className="content-page rtl-page">
        <div className="container-fluid">
          <TopHead name={"Players List"} />

          {isLoading ? (
            <Spin
              indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}
              size="large"
              className="my-8 items-center"
            />
          ) : (
            <div className="overflow-x-auto">
              {/* Wrap the Table inside a div with overflow-x-auto class */}
              <Table
                columns={columns}
                dataSource={playersData}
                rowKey={(players) => players.id}
                pagination={false}
                className="table-auto mt-6"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
