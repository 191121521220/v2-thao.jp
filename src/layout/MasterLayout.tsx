import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { MenuProps, Space } from 'antd';
import { Breadcrumb, Layout, Menu } from 'antd';
import React from 'react';
import { Button } from 'antd';
import Search from 'antd/lib/input/Search';
import { MenuTN, MenuKNM } from '@mockdata/MenuLotrinh';
import { GiHamburgerMenu } from 'react-icons/gi'
import Title from 'antd/lib/skeleton/Title';



const { Header, Content, Sider } = Layout;

const items1 = [
    { label: 'TRANG CHU', key: 'item-1' }, // remember to pass the key prop
    { label: 'GIOI THIEU', key: 'item-2' }, // which is required
    { label: 'LIEN HE', key: 'item-3' }, // which is required

]

interface IMasterLayoutProps {
    children: React.ReactNode
}

const MasterLayout: React.FC<IMasterLayoutProps> = ({ children }) => (
    <Layout>
        <Header className="header justify-between" >
            <Space>
                <img src='src\assets\images\Thao.JP.png' className='logo w-[86px] h-[23px]' />
                <Button type="default" className='bg-[#333] text-white mg-[10px] flex' >
                    Menu <GiHamburgerMenu />
                </Button>
            </Space>
            <div className='search'>
                <Search placeholder="input search text " style={{ width: 200 }} />
            </div>
            <Menu theme="light" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
        </Header>
        <Layout >

            <Sider width={300} className="site-layout-background custom-sider">
                <h2 className='jp text-[21px] font-bold' >TIẾNG NHẬT</h2>


                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%', borderRight: 0 }}
                    items={MenuTN}
                />
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%', borderRight: 0 }}
                    items={MenuTN}
                />
                <h2 className='jp text-[21px] font-bold' >KỸ NĂNG MỀM</h2>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%', borderRight: 0 }}
                    items={MenuKNM}
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
                    {children}
                </Content>
            </Layout>
        </Layout>
    </Layout>
);

export default MasterLayout;