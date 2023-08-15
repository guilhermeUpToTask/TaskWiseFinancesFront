import React from 'react';
import { Anchor, Button, Space, Typography } from 'antd';

export default function HeaderNavBar(): React.ReactElement {
    const HeaderNavBarStyle: React.CSSProperties = {
        position: 'fixed',
        display: 'flex',
        justifyContent: 'space-between',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: 'white',
        zIndex: 999,

    }
    const AnchorItemTitleStyle: React.CSSProperties = {
        fontSize: '1rem',
        fontWeight: 600,
        padding: '0.2rem',
        margin: '0',
     }


    return (


        <header style={HeaderNavBarStyle}>
            <>Icon - TaskWise Financial Calendar</>
            <Anchor
                bounds={100}
                direction="horizontal"
                items={[
                    {
                        key: 'part-1',
                        href: '#banner',
                        title: <p style={AnchorItemTitleStyle}>Home</p>,
                    },
                    {
                        key: 'part-2',
                        href: '#introduction',
                        title: <p style={AnchorItemTitleStyle}>Introduction</p>,
                    },
                    {
                        key: 'part-3',
                        href: '#features',
                        title: <p style={AnchorItemTitleStyle}>Features</p>,
                    },
                    {
                        key: 'part-4',
                        href: '#useful-cases',
                        title: <p style={AnchorItemTitleStyle}>Useful Cases</p>,
                    },
                    {
                        key: 'part-5',
                        href: '#footer',
                        title: <p style={AnchorItemTitleStyle}>Contacts</p>,
                    },
                ]}
            />
            <Space>
                <Button type='primary' size='middle' shape='round'>Sign In</Button>
                <Button size='middle' shape='round'>Sign Up</Button>
            </Space>
        </header>
    )
}