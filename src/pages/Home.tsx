
import MasterLayout from "@layout/MasterLayout";
import React from "react";
import { BiArrowBack } from "react-icons/all"
import { Button, Space } from "antd";

const Home = () => {
    return (
        <MasterLayout>

            <Space>
                <BiArrowBack />
                <h2 className="jp text-[19px] font-bold">N5: Tiếng Nhật hàng ngày </h2>
                <Button>Lộ Trình</Button>
            </Space>

        </MasterLayout>
    )
}

export default Home;