import React from 'react';
import { Layout, theme } from 'antd';
import SiderMenu from './SiderMenu';
import HeaderMenu from './HeaderMenu';


const { Header, Content, Footer, Sider } = Layout;

export default function (props: any): React.ReactElement {
    const {
        token: { colorBgContainer},
    } = theme.useToken();


    return (
        <Layout>
            <Header style={{width: '100%', display: 'flex', alignItems: 'center', background:'transparent' }}>
                <div className="demo-logo" />
                <HeaderMenu />
            </Header>

            <Layout style={{ padding: '24px 0', background: colorBgContainer }}>
                <Sider style={{ background: colorBgContainer }} width={200}>
                    <SiderMenu />
                </Sider>
                <Content style={{ padding: '0 24px', minHeight: 280 }}>
                    {props.children}
                </Content>
            </Layout>
            
            <Footer style={{ textAlign: 'center' }}>- Uptotask -</Footer>
        </Layout>
    );

}