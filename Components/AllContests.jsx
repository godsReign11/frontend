import { useEffect, useState } from "react";
import moment from "moment/moment";
import { Table, Spin, Image } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { toast } from "react-toastify";
import { CONTESTAPI } from "../src/Api/ContestApi";

export default function AllContests() {
    const [contestsData, setContestsData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getContestData();
    }, []);

    const getContestData = () => {
        CONTESTAPI.GetContest().then((data) => {
            if (data.status_code) {
                toast.done(data.message);
                console.log(data.Data);
                setContestsData(data.Data);
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
            title: "Created Date",
            dataIndex: "createdAt",
            key: "createdAt",
            render: handleDate,
        },

        {
            title: "First Prize",
            dataIndex: "firstPrize",
            key: "firstPrize",
        },
        {
            title: "Joining Fees",
            dataIndex: "joiningFee",
            key: "title",
        },
        {
            title: "Total Pool Price",
            dataIndex: "totalPoolPrice",
            key: "totalPoolPrice",
        },
        {
            title: "Total Spots",
            dataIndex: "totalSpots",
            key: "totalSpots",
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
                    {isLoading ? (
                        <Spin
                            indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}
                            size="large"
                            className="my-8 items-center"
                        />
                    ) : (
                        <Table
                            columns={columns}
                            dataSource={contestsData}
                            rowKey={(contest) => contest.id}
                            pagination={false}
                            className="table-auto mt-6"
                        />
                    )}
                </div>
            </div>
        </div>
    );
}
