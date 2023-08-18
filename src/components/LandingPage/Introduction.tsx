import React from 'react';
import {Typography } from 'antd';
import IconsGroup from '../../assets/icons/IconsGroup';


const {Title, Text} = Typography;


export default function Introduction(): React.ReactElement {
    const backgroundStyle: React.CSSProperties = {
        display: 'flex',
        height: '100vh',
        paddingTop:'4rem',
        overflow: 'hidden',
        margin: 0,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        background: 'linear-gradient(to top left, #59ece2, #5fe7df, #65e1db, #6bdcd8, #70d7d4, #83d8cb, #95d9c3, #a6d9be, #c7ddbc, #e2e1c4, #f5e7d4, #ffefe7)',
    }


    const articleStyle: React.CSSProperties = {
        width: '50svw',
        padding: '4rem',
        boxSizing: 'border-box',
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'center',
        height: '100svh',
    }

    const titleStyle: React.CSSProperties = {
        margin: '0px',
        marginBottom: ' 2rem',
    }

    const IconsGroupStyle: React.CSSProperties = {
        height: '100svh',
        width: '50svw',
        padding: '1rem',
        boxSizing:'border-box',
    }


    return (
        <section style={backgroundStyle} id='introduction'>
            <IconsGroup style={IconsGroupStyle} />
            <article style={articleStyle}>
                <Title level={1} style={titleStyle}>Introduction</Title>
                <Text>
                    TaskWiseFinances is a simple project to demonstrate the use of React and TypeScript.
                </Text> 
            </article>
        </section>
    )
}