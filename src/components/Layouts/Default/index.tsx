import React from 'react';
import { Layout, theme } from 'antd';
import SiderMenu from './SiderMenu';
import UserAvatar from '../../User/UserAvatar';
import Wallet from '../../Wallet';
import { ConfigProvider } from 'antd';
import { Outlet } from "react-router";
import NotificationModal from '../../NotificationModal';
import { MAIN_COLOR } from '../../../lib/constants/colors';
import MoneyPrediction from '../../MoneyPrediction';

const { Header, Content, Footer, Sider } = Layout;

export default function DefaultLayout(): React.ReactElement {

    const {
        token: { colorBgContainer },
    } = theme.useToken();


    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: MAIN_COLOR,
                },
            }}
        >
            <NotificationModal />
            <Layout>
                <Header style={{
                    width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    backgroundColor: MAIN_COLOR,
                }
                }>
                    <div className="demo-logo" />
                    <Wallet />
                    <MoneyPrediction/>
                    <UserAvatar />
                </Header>

                <Layout style={{ padding: '24px 0', background: colorBgContainer }}>
                    <Sider style={{ background: colorBgContainer }} width={200}>
                        <SiderMenu />
                    </Sider>
                    <Content style={{ padding: '0 24px', minHeight: 280 }}>
                        <Outlet />
                    </Content>
                </Layout>

                <Footer style={{ textAlign: 'center' }}>- Uptotask -</Footer>
            </Layout>

        </ConfigProvider>
    );

}