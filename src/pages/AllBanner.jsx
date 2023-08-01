import { useEffect, useState } from "react";
import moment from "moment/moment";
import { Table, Spin, Image } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { toast } from "react-toastify";
import TopHead from "./TopHead";
import { BannerAPI } from "../Api/BannerAPI";

export default function AllBanner() {
  const [BannersData, setBannerData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllBannersData();
  }, []);

  const getAllBannersData = () => {
    BannerAPI.GetAllBanners().then((data) => {
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
      title: "Banner Description",
      dataIndex: "description",
      key: "description",
    },

    {
      title: "Created At",
      dataIndex: "createdAt",
      key: "createdAt",
      render: handleDate,
    },
    {
      title: "Banner Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Video",
      dataIndex: "videoUrl",
      key: "videoUrl",
    },

    {
      title: "Active",
      dataIndex: "isActive",
      key: "isActive",
      render: (status) =>
        status === true ? (
          <h6 className="bg-green-800 text-teal-50 px-2 py-1 rounded-md text-center">
            Yes
          </h6>
        ) : (
          <h6 className="bg-orange-800 text-teal-50 px-2 py-1 rounded-md text-center">
            NO
          </h6>
        ),
    },

    {
      title: "Banner Image",
      dataIndex: "bannerUrl",
      key: "bannerUrl",
      render: (imageSrc) => (
        <Image.PreviewGroup>
          <Image src={imageSrc} width={40} height={40} />
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
