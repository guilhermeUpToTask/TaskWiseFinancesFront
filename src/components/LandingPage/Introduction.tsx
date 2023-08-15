import React from 'react';

export default function Introduction(): React.ReactElement {
    const backgroundStyle: React.CSSProperties = {
        display: 'flex',
        height: '100vh',
        padding:'4rem',
        margin: 0,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        background: 'linear-gradient(to top left, #59ece2, #5fe7df, #65e1db, #6bdcd8, #70d7d4, #83d8cb, #95d9c3, #a6d9be, #c7ddbc, #e2e1c4, #f5e7d4, #ffefe7)',
    }

    const iconsStyle: React.CSSProperties = {
        maxWidth: '50svw',
        maxHeight: '100svh',
    }

    const articleStyle: React.CSSProperties = {
        maxWidth: '50svw',
        padding: '5rem',
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'center',
        maxHeight: '100svh',
    }

    const titleStyle: React.CSSProperties = {
        margin: '0px',
        fontSize: ' 3.5vw',
        marginBottom: ' 2rem',
    }

    const textStyle: React.CSSProperties = {
        margin: '0px',
        fontSize: '1.5rem'
    }

    return (
        <section style={backgroundStyle} id='introduction'>
            <img style={iconsStyle} alt='This represents a cat' src='https://i.imgur.com/Jy8XKfL.jpg' />
            <article style={articleStyle}>
                <h1 style={titleStyle}>Introduction</h1>
                <p style={textStyle}>
                    This is a simple project to demonstrate the use of React and TypeScript.
                </p>
            </article>
        </section>
    )
}