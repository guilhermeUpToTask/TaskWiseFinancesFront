import React from 'react';

export default function Footer(): React.ReactElement {
    const backgroundStyle: React.CSSProperties = {
        display: 'flex',
        justifyContent: 'space-between',
        height: '100svh',
        margin: 0,
        padding: '4rem',
        background: 'linear-gradient(to bottom left, #59ece2, #5fe7df, #65e1db, #6bdcd8, #70d7d4, #83d8cb, #95d9c3, #a6d9be, #c7ddbc, #e2e1c4, #f5e7d4, #ffefe7)',
    }

    const titleStyle: React.CSSProperties = {
        width: '45svw',
        fontSize: '3.5rem',

    }

    const contactsStyle : React.CSSProperties = {
        width: '45svw',
        textAlign: 'center',
    }
    return (
        <footer style={backgroundStyle}>
            <h1 style={titleStyle}>Contacts</h1>
            <article style={contactsStyle}>
                <h2>Contact Phone</h2>
                <p>+38 (096) 123-45-67</p>
                <h2>Email</h2>
                <p>XXXXXXXXXXXXXXXX</p>
                <h2>GitHub</h2>
                <a>link</a>
                <h2>Portifolio</h2>
                <a>link</a>
            </article>
        </footer>
    )
}