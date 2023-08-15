import React from 'react';
import Authentication from '../User/Authentication';
import Banner from './Banner';
import Features from './Features';
import HeaderNavBar from './HeaderNavBar';
import Introduction from './Introduction';
import UseCases from './UseCases';
import Footer from './Footer';
import { ConfigProvider } from 'antd';


export default function LandingPage(): React.ReactElement {

    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#00b96b',
                },
            }}
        >
            <div style={{ display: 'grid' }}>
                <HeaderNavBar />
                <Banner />
                <Introduction />
                <Features />
                <UseCases />
                <Footer />
            </div>
        </ConfigProvider>
    )
}