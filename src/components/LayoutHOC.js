import React from 'react'
import { NavLink } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd'
import 'antd/dist/antd.css';
import '../styles/components/_layout.scss'
import {
    ControlOutlined,
    AppstoreOutlined,
    UserOutlined
} from '@ant-design/icons'

const { Header, Content, Footer, Sider } = Layout

const LayoutHOC = (props) => {
    return (
        <Layout>
            <Layout>
                <Header
                    className="site-layout-sub-header-background"
                    style={{ padding: 0 }}
                />
                <Content
                    className='content'
                >
                    <div
                        className="site-layout-background"
                        style={{ padding: 24, minHeight: 680 }}
                    >
                        {props.component}
                    </div>
                </Content>
                <Footer
                    style={{ textAlign: 'center' }}
                >
                    Hanon3D @2020 Created by Hadi Samadzad
                </Footer>
            </Layout>
            <Sider
                theme={'light'}
                breakpoint={'lg'}
                collapsedWidth={'0'}
                reverseArrow={true}
                width={'250px'}
                onBreakpoint={broken => {
                    //console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    //console.log(collapsed, type);
                }}
            >
                <div
                    className="logo"
                >
                    Hanon3D
                </div>
                <Menu
                    theme="light"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                >
                    <Menu.Item
                        key="1"
                        className={'sider-menu'}
                    >
                        <ControlOutlined className={'sider-menu-icon'} />
                        <NavLink
                            to="/"
                            className='nav-text'
                            activeClassName="is-active"
                            exact={true}
                        >
                            Dashboard
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item
                        key="2"
                        className={'sider-menu'}
                    >
                        <UserOutlined className={'sider-menu-icon'} />
                        <NavLink
                            to="/users"
                            className='nav-text'
                            activeClassName="is-active"
                        >
                            Users
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item
                        key="3"
                        className={'sider-menu'}
                    >
                        <AppstoreOutlined className={'sider-menu-icon'} />
                        <NavLink
                            to="/assets"
                            className='nav-text'
                            activeClassName="is-active"
                        >
                            Assets
                        </NavLink>
                    </Menu.Item>
                </Menu>
            </Sider>
        </Layout>
    )
}

export default LayoutHOC