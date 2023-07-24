import { useEffect, useState } from "react";
import moment from "moment/moment";
import { Table, Spin, Image } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { createGameApi } from "../Api/GameApi";
import { toast } from "react-toastify";
import TopHead from "./TopHead";

export default function AllBanner() {
  const [BannersData, setBannerData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllBannersData();
  }, []);

  const getAllBannersData = () => {
    createGameApi.GetAllBanners().then((data) => {
      if (data.status) {
        toast.done(data.message);
        console.log(data.data);
        setBannerData(data.data);
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
      title: "Banner Name",
      dataIndex: "BannerName",
      key: "BannerName",
    },

    {
      title: "Created At",
      dataIndex: "createdAt",
      key: "createdAt",
      render: handleDate,
    },
    {
      title: "Banner Short Name",
      dataIndex: "BannerShortName",
      key: "BannerShortName",
    },
    {
      title: "Banner Order",
      dataIndex: "order",
      key: "order",
    },

    {
      title: "Banner Image",
      dataIndex: "BannerImage",
      key: "BannerImage",
      render: (imageSrc) => (
        <Image.PreviewGroup>
          <Image src={imageSrc} width={80} height={80} />
        </Image.PreviewGroup>
      ),
    },
  ];

  return (
    <div className="wrapper">
      <div className="content-page rtl-page">
        <div className="container-fluid">
          <TopHead name={"Banners List"} />

          {isLoading ? (
            <Spin
              indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}
              size="large"
              className="my-8 items-center"
            />
          ) : (
            <Table
              columns={columns}
              dataSource={BannersData}
              rowKey={(Banners) => Banners.id}
              pagination={false}
              className="table-auto mt-6"
            />
          )}
        </div>
      </div>
    </div>
  );
}
