import React, { useEffect, useState } from 'react'
import { CONTESTAPI } from '../Api/ContestApi';
import TopHead from './TopHead';
import { Table, Spin, Image } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { toast } from 'react-toastify';
import moment from 'moment';


export default function AllContest() {

    const [contestData, setContestData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getAllContestData();
      }, []);

    const getAllContestData = () => {
        console.log('first')
        CONTESTAPI.GetContest().then((data) => {
            if (data.status_code) {
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
          title: "Player Name",
          dataIndex: "playerName",
          key: "playerName",
        },
        {
          title: "Contest Game",
          dataIndex: "contestGame",
          key: "contestGame",
        },
        {
          title: "Team A url",
          dataIndex: "teamAurl",
          key: "teamAurl",
        },
        {
          title: "Team A Name",
          dataIndex: "teamAname",
          key: "teamAname",
        },
    
        {
          title: "Team A score",
          dataIndex: "teamAscore",
          key: "teamAscore",
          
        },

        {
            title: "Team B Name",
            dataIndex: "teamBname",
            key: "teamBname",
            
          },

          {
            title: "Team B Url",
            dataIndex: "teamBurl",
            key: "teamBurl",
            
          },

          {
            title: "Team B Score",
            dataIndex: "teamBscore",
            key: "teamBscore",
            
          },

          {
            title: "Start Date",
            dataIndex: "startDate",
            key: "startDate",
            render: handleDate,
            
          },

          {
            title: "Title",
            dataIndex: "title",
            key: "title",
            
          },

          {
            title: "Contest Url",
            dataIndex: "contestUrl",
            key: "contestUrl",
            
          },

          {
            title: "Description",
            dataIndex: "description",
            key: "description",
            
          },

          {
            title: "Subtitle",
            dataIndex: "subtitle",
            key: "subtitle",
            
          },
      ];

    return (
        <div className="wrapper">
          <div className="content-page rtl-page">
            <div className="container-fluid">
              <TopHead name={"All Contest"} />
    
              {isLoading ? (
                <Spin
                  indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}
                  size="large"
                  className="my-8 items-center"
                />
              ) : (
                <Table
                  columns={columns}
                  dataSource={contestData}
                  rowKey={(contest) => contest._id}
                  pagination={false}
                  className="table-auto mt-6"
                />
              )}
            </div>
          </div>
        </div>
      );
}
