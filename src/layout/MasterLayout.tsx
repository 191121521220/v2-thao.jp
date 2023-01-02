import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { MenuProps, Space } from 'antd';
import { Breadcrumb, Layout, Menu } from 'antd';
import React from 'react';
import { Button } from 'antd';
import Search from 'antd/lib/input/Search';




const { Header, Content, Sider } = Layout;

// const items1: MenuProps['items'] = ['TRANG CHU', 'GIOI THIEU', 'LIEN HE'].map(key => ({
//   key,
//   label: `nav ${key}`,
// }));

const items1 = [
    { label: 'TRANG CHU', key: 'item-1' }, // remember to pass the key prop
    { label: 'GIOI THIEU', key: 'item-2' }, // which is required
    { label: 'LIEN HE', key: 'item-3' }, // which is required

]
const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
    (icon, index) => {
        const key = String(index + 1);

        return {
            key: `sub${key}`,
            icon: React.createElement(icon),
            label: `subnav ${key}`,

            children: new Array(4).fill(null).map((_, j) => {
                const subKey = index * 4 + j + 1;
                return {
                    key: subKey,
                    label: `option${subKey}`,
                };
            }),
        };
    },
);

const MasterLayout: React.FC = () => (
    <Layout>
        <Header className="header justify-between" >
            <Space>
                <img src='src\assets\images\Thao.JP.png' className='logo w-[86px] h-[23px]' />
                <Button type="default" className='bg-[#333] text-white mg-[10px] flex' >
                    Menu
                </Button>
            </Space>
            <div className='search'>
                <Search placeholder="input search text " style={{ width: 200 }} />
            </div>
            <Menu theme="white" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
        </Header>
        <Layout >
            <Sider width={200} className="site-layout-background">
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%', borderRight: 0 }}
                    items={items2}
                />
            </Sider>
            <Layout style={{ padding: '0 24px 24px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>MasterLayout</Breadcrumb.Item>
                </Breadcrumb>
                <Content
                    className="site-layout-background"
                    style={{
                        padding: 24,
                        margin: 0,
                        minHeight: 280,
                    }}
                >
                    Content
                </Content>
            </Layout>
        </Layout>
    </Layout>
);

export default MasterLayout;