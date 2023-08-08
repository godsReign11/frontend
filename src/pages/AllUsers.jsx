import { useEffect, useState } from "react";
import moment from "moment/moment";
import { Table, Spin, Card, Image } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { toast } from "react-toastify";
import TopHead from "./TopHead";
import { allUsersAPI } from "../Api/UserAPI";
import { Link } from "react-router-dom";


export default function AllUsers() {
  const [usersData, setUsersData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllUserDetails();
  }, []);

  const getAllUserDetails = () => {
    allUsersAPI.ViewlAllUsersData().then((data) => {
      if (data.status) {
        toast.done(data.message);
        // console.log(data.data);
        setUsersData(data.data);
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
      title: "Users ID",
      dataIndex: "_id",
      key: "_id",
      render: (id) => (
        <Link className="bg-gray-300 text-gray-950 py-1 px-2 rounded-md hover:text-gray-100 hover:bg-gray-950" to={`/user_details`} state={{ userId: id }}>
          {id}
        </Link>
      ),
      width: 200,
    },
    {
      title: "User Name",
      dataIndex: "userName",
      key: "userName",
      // render: handleDate,
      width: 150,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email"
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
      width: 120,
    },

    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
      width: 120,
    },

    {
      title: "Profile Image",
      dataIndex: "profileImage",
      key: "profileImage",
      render: (imageSrc) => (
        <Image.PreviewGroup>
          <Image src={imageSrc} width={80} height={80} />
        </Image.PreviewGroup>
      ),
      width: 120,
    },

    {
      title: "isActive",
      dataIndex: "isActive",
      key: "isActive",
      render: (item) => (
        item === true ? 'YES' : 'NO'
      ),
      width: 120,
    },

    {
      title: "isBlock",
      dataIndex: "isBlock",
      key: "isBlock",
      render: (item) => (
        item === true ? 'YES' : 'NO'
      ),
      width: 120,
    },


    {
      title: "isDeleted",
      dataIndex: "isDeleted",
      key: "isDeleted",
      render: (item) => (
        item === true ? 'YES' : 'NO'
      ),
      width: 120,
    },

    {
      title: "Created At",
      dataIndex: "createdAt",
      key: "createdAt",
      render: handleDate,
      width: 120,
    },
  ];

  return (
    <div className="wrapper">
      <div className="content-page rtl-page">
        <div className="container-fluid">
          <TopHead name={"All Users List"} />

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
                dataSource={usersData}
                rowKey={(user) => user.id}
                pagination={false}
                className="mt-6"
                scroll={{ x: "max-content" }}
              />
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
