import React from 'react';

export default function Features(): React.ReactElement {
    const backgroundStyle: React.CSSProperties = {
        display: 'flex',
        height: '100svh',
        margin: 0,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        padding: '4rem',
        background: 'linear-gradient(to bottom left, #59ece2, #5fe7df, #65e1db, #6bdcd8, #70d7d4, #83d8cb, #95d9c3, #a6d9be, #c7ddbc, #e2e1c4, #f5e7d4, #ffefe7)',
        flexFlow: 'column',
        flexWrap: 'nowrap',
        alignItems: 'center',
    }

    const titleStyle: React.CSSProperties = {
        fontWeight: 600,
        fontSize: '3.5rem',
    }

    const cardsListStyle: React.CSSProperties = {
        display: 'inline-flex',
        flexWrap: 'wrap',
        maxWidth: '100svw',
    }
    const cardStyle: React.CSSProperties = {
        border: '1px solid black',
        padding: '1rem',
        margin: '1rem',
        textAlign: 'center',
    }

    const cardTitle: React.CSSProperties = {

    }

    const cardText: React.CSSProperties = {

    }

    const buttomStyle: React.CSSProperties = {
        display: 'block'
    }

    return (
        <section style={backgroundStyle}>
            <h2 style={titleStyle}>Features</h2>
            <section style={cardsListStyle}>
                <article style={cardStyle}>
                    <h3 style={cardTitle}>Feature 1</h3>
                    <p style={cardText}>This is a description of the feature</p>
                </article>
                <article style={cardStyle}>
                    <h3 style={cardTitle}>Feature 1</h3>
                    <p style={cardText}>This is a description of the feature</p>
                </article>
                <article style={cardStyle}>
                    <h3 style={cardTitle}>Feature 1</h3>
                    <p style={cardText}>This is a description of the feature</p>
                </article>
                <article style={cardStyle}>
                    <h3 style={cardTitle}>Feature 1</h3>
                    <p style={cardText}>This is a description of the feature</p>
                </article>
            </section>
            <button style={buttomStyle}>Learn More</button>
        </section>
    )
}