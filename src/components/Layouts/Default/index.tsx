import React from 'react';
import { Layout, theme } from 'antd';
import SiderMenu from './SiderMenu';
import UserAvatar from '../../User/UserAvatar';
import Wallet from '../../Wallet';
import { ConfigProvider } from 'antd';
import { Outlet } from "react-router";
import NotificationModal from '../../NotificationModal';

const { Header, Content, Footer, Sider } = Layout;

export default function DefaultLayout(props: any): React.ReactElement {
    
    const {
        token: { colorBgContainer },
    } = theme.useToken();


    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#00b96b',
                },
            }}
        >
            <NotificationModal />
            <Layout>
                <Header style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
                backgroundColor: '#00b96b',  }
            }>
                    <div className="demo-logo" />
                    <Wallet />
                    <UserAvatar />
                </Header>

                <Layout style={{ padding: '24px 0', background: colorBgContainer }}>
                    <Sider style={{ background: colorBgContainer }} width={200}>
                        <SiderMenu />
                    </Sider>
                    <Content style={{ padding: '0 24px', minHeight: 280 }}>
                        <Outlet/>
                    </Content>
                </Layout>

                <Footer style={{ textAlign: 'center' }}>- Uptotask -</Footer>
            </Layout>

        </ConfigProvider>
    );

}