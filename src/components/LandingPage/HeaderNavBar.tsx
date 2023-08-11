import React from 'react';

export default function HeaderNavBar(): React.ReactElement {
    const HeaderNavBarStyle: React.CSSProperties = {
        position: 'fixed',
        display: 'flex-block',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: 'transparent',
        zIndex: 999
    }

    const NavLinkStyle = {
        padding: '2rem',
    }

    return (
        <header style={HeaderNavBarStyle}>
            <nav style={{ display: 'flex', justifyContent: 'space-between' }}>

                <a href="#" style={NavLinkStyle}> Home</a>
                <a href="#" style={NavLinkStyle}>Logo</a>
                <a href="#" style={NavLinkStyle}>Contact</a>
                <a href="#" style={NavLinkStyle}>Login</a>
                <a href="#" style={NavLinkStyle}>Register</a>
                <a href="#" style={NavLinkStyle}>About</a>

            </nav>
        </header>
    )
}