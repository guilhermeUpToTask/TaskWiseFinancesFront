import React from 'react';
import { Typography } from 'antd';
import { MailOutlined, GithubOutlined, LinkOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;


export default function Footer(): React.ReactElement {
    const backgroundStyle: React.CSSProperties = {
        display: 'flex',
        justifyContent: 'space-between',
        height: '100svh',
        margin: 0,
        paddingTop: '4rem',
        background: 'linear-gradient(to bottom left, #59ece2, #5fe7df, #65e1db, #6bdcd8, #70d7d4, #83d8cb, #95d9c3, #a6d9be, #c7ddbc, #e2e1c4, #f5e7d4, #ffefe7)',
        boxSizing: 'border-box',
    }

    const titleStyle: React.CSSProperties = {
        width: '45svw',
        fontSize: '3.5rem',
        margin: '0',
        padding: '2rem',
        boxSizing: 'border-box',

    }

    const contactsStyle: React.CSSProperties = {
        width: '45svw',
        textAlign: 'center',
    }
    return (
        <footer style={backgroundStyle} id='footer'>
            <Title style={titleStyle}>Contacts</Title>
            <article style={contactsStyle}>
                <Title level={2}><MailOutlined /> Email</Title>
                <Text style={{ fontSize: '1.2rem' }}>up.to.task.company@gmail.com</Text>
                <Title level={2}><GithubOutlined /> GitHub</Title>
                <Text style={{ fontSize: '1.2rem' }}>https://github.com/guilhermeUpToTask/TaskWiseFinancesFront</Text>
                <Title level={2}><LinkOutlined /> Portifolio</Title>
                <Text style={{ fontSize: '1.2rem' }}>link</Text>
            </article>
        </footer>
    )
}