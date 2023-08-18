import React from 'react';
import { Card, Typography, Button } from 'antd';

const { Title } = Typography;
const { Meta } = Card;

export default function Features(): React.ReactElement {
    const backgroundStyle: React.CSSProperties = {
        display: 'flex',
        height: '100svh',
        margin: 0,
        paddingTop: '4rem',
        background: 'linear-gradient(to bottom left, #59ece2, #5fe7df, #65e1db, #6bdcd8, #70d7d4, #83d8cb, #95d9c3, #a6d9be, #c7ddbc, #e2e1c4, #f5e7d4, #ffefe7)',
        flexFlow: 'column',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'center',
    }

    const titleStyle: React.CSSProperties = {
        fontWeight: 600,
    }

    const cardsListStyle: React.CSSProperties = {
        display: 'inline-flex',
        flexWrap: 'wrap',
        maxWidth: '100svw',
        justifyContent: 'center',
    }
    const cardStyle: React.CSSProperties = {
        margin: '1rem',
        width: '15svw',
        height: 'fit-content',
        maxHeight: '70svh',
        overflow: 'hidden'
    }


    return (
        <section style={backgroundStyle} id='features'>
            <Title style={titleStyle}>Features</Title>
            <section style={cardsListStyle}>
                <Card
                    hoverable
                    style={cardStyle}
                    bordered={false}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                    <Meta title={"Europe Street beat"} description="www.instagram.com" />
                </Card>
                <Card
                    hoverable
                    style={cardStyle}
                    bordered={false}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                    <Meta title={"Europe Street beat"} description="www.instagram.com" />
                </Card>
                <Card
                    hoverable
                    style={cardStyle}
                    bordered={false}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                    <Meta title={"Europe Street beat"} description="www.instagram.com" />
                </Card>
                <Card
                    hoverable
                    style={cardStyle}
                    bordered={false}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                    <Meta title={"Europe Street beat"} description="www.instagram.com" />
                </Card>
            </section>


            <Button type='primary' size='large' shape='round'>See More</Button>
        </section>
    )
}