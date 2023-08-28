import React, { useEffect, useState } from "react";
import { CONTESTAPI } from "../Api/ContestApi";
import { Table, Spin, Image, Card } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { toast } from "react-toastify";
import moment from "moment";
import "./All.css";

export default function AllContest() {
  const [contestData, setContestData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllContestData();
  }, []);

  const getAllContestData = () => {
    console.log("first");
    CONTESTAPI.GetContest().then((data) => {
      if (data.status) {
        toast.done(data.message);
        console.log(data.data);
        setContestData(data.data);
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
      title: "Event",
      dataIndex: "gameUrl",
      key: "gameUrl",
      render: (imageSrc) => (
        <Image.PreviewGroup>
          <Image src={imageSrc} width={80} height={80} />
        </Image.PreviewGroup>
      ),
    },

    {
      title: "Game",
      dataIndex: "contestGame",
      key: "contestGame",
    },


    {
      title: "Start At",
      dataIndex: "startDate",
      key: "startDate",
      render: handleDate,
    },

    {
      title: "Teams",
      dataIndex: "playerName",
      key: "playerName",
    },

    {
      title: "Comments",
      dataIndex: "playerName",
      key: "playerName",
    },

    {
      title: "Actions",
      dataIndex: "playerName",
      key: "playerName",
    },

    // 
    


    // {
    //   title: "Contest Url",
    //   dataIndex: "contestUrl",
    //   key: "contestUrl",
    // },

    // {
    //   title: "Description",
    //   dataIndex: "description",
    //   key: "description",
    // },

    // {
    //   title: "Subtitle",
    //   dataIndex: "subtitle",
    //   key: "subtitle",
    // },
  ];

  return (
    <div className="wrapper">
      <div className="content-page rtl-page">
        <div className="container-fluid">

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
                dataSource={contestData}
                rowKey={(contest) => contest._id}
                pagination={false}
                className="table-auto "
              />
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
