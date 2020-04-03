import React from 'react'
import 'antd/dist/antd.css';
import '../styles/components/_dashboardLayout.scss'
import { Layout, Menu, Breadcrumb } from 'antd'
import {
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
    AppstoreOutlined
} from '@ant-design/icons';
import { NavLink } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;

const DashboardLayout = () => {
    return (
        <Layout>
            <Layout>
                <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
                <Content style={{ margin: '24px 16px 0' }}>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                        content
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Hanon3D @2020 Created by Hadi Samadzad</Footer>
            </Layout>
            <Sider
                theme={'light'}
                breakpoint={'lg'}
                collapsedWidth={'0'}
                reverseArrow={true}
                width={'250px'}
                onBreakpoint={broken => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
            >
                <div className="logo">
                    Hanon3D
                </div>
                <Menu
                    theme="light"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                >
                    <Menu.Item key="1" className={'sider-menu'}>
                        <AppstoreOutlined className={'sider-menu-icon'} />
                        <NavLink
                            to="/"
                            className='nav-text'
                            activeClassName="is-active"
                            exact={true}
                        >
                            Dashboard
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <VideoCameraOutlined />
                        <NavLink
                            to="/create"
                            className='nav-text'
                            activeClassName="is-active">
                            Create Asset
                            </NavLink>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <UploadOutlined />
                        <NavLink
                            to="/help"
                            className='nav-text'
                            activeClassName="is-active">
                            Help
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <UserOutlined />
                        <span className="nav-text">nav 4</span>
                    </Menu.Item>
                </Menu>
            </Sider>

        </Layout >
    )
}

export default DashboardLayout