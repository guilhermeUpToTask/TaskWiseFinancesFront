import React from 'react';

export default function UseCases(): React.ReactElement {
    const backgroundStyle: React.CSSProperties = {
        display: 'flex',
        height: '100svh',
        margin: 0,
        padding: '4rem',
        background: 'linear-gradient(to top left,  #59ece2, #5fe7df, #65e1db, #6bdcd8, #70d7d4, #83d8cb, #95d9c3, #a6d9be, #c7ddbc, #e2e1c4, #f5e7d4, #ffefe7)',
        justifyContent: 'center'
    }
    const articlesSectionStyle : React.CSSProperties = {
        maxWidth: '50svw',
        maxHeight: '100svh',
        padding: 0,
        paddingRight: '5rem',
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'center',
    }
    const articleStyle : React.CSSProperties = {

    }
    const h2Style: React.CSSProperties = {
        fontSize: '3.5rem',
        margin: '0px',
        textAlign: 'center',
    }
    const h3Style: React.CSSProperties = {
        fontSize: '2rem',
    }
    const IconStyle: React.CSSProperties = {
        maxWidth: '50svw',
        maxHeight: '100svh',
    }

    return (
        <section style={backgroundStyle} id='useful-cases'>
            <section style={articlesSectionStyle}>
                <article style={articleStyle}>
                    <h2 style={h2Style}>Manager your money</h2>
                    <p>
                        Manage your money easily and effectively.
                    </p>
                </article>
                <article style={articleStyle}>
                    <h3>Useful Cases</h3>
                    <ul>
                        <li>one case</li>
                        <li>one case</li>
                        <li>one case</li>
                        <li>one case</li>
                    </ul>
                </article>
            </section>
            <img style={IconStyle} alt='This represents a cat' src='https://i.imgur.com/Jy8XKfL.jpg' />
        </section>
    )
}