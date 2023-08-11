import React from 'react';
import Authentication from '../User/Authentication';
import Banner from './Banner';
import Features from './Features';
import HeaderNavBar from './HeaderNavBar';
import Introduction from './Introduction';
import UseCases from './UseCases';
import Footer from './Footer';

export default function LandingPage(): React.ReactElement {

    return (
        <div style={{display:'grid'}}>
                <HeaderNavBar />
                <Banner />
                <Introduction />
                <Features />
                <UseCases />
                <Footer />
        </div>
    )
}