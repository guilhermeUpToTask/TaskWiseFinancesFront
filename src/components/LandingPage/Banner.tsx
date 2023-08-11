import React from 'react';
import { GREEN } from '../../lib/constants/colors';

export default function Banner(): React.ReactElement {
    const backgroundStyle: React.CSSProperties = {
        display: 'inline-flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: '100svh',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        background: 'linear-gradient(to bottom left,  #59ece2, #5fe7df, #65e1db, #6bdcd8, #70d7d4, #83d8cb, #95d9c3, #a6d9be, #c7ddbc, #e2e1c4, #f5e7d4, #ffefe7)',
    }

    const articleStyle: React.CSSProperties = {
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        maxWidth: '50svw',
        maxHeight: '100svh'
    }

    const calendarStyle: React.CSSProperties = {
        width: '30vw',
        height: '30vw',
        backgroundColor: GREEN,
        transform: 'rotate(9deg)',
    }
    return (
        <section style={backgroundStyle}>
            <article style={articleStyle}>
                <h1 style={{ fontSize: '5.5vw' }}>Title Explaining the Banner</h1>
                <section>
                    <button>Button</button>
                    <button>Button</button>
                </section>
            </article>
            <section style={{
                maxWidth: '45svw',
                maxHeight: '100svh'
            }}>
                <div style={calendarStyle}></div>
            </section>
        </section>
    )
}