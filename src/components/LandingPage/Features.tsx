import React from 'react';
import { Card, Typography, Button } from 'antd';
import featuresList from './featuresList';

const { Title } = Typography;
const { Meta } = Card;

export default function Features(): React.ReactElement {


    const backgroundStyle: React.CSSProperties = {
        display: 'flex',
        height: '100svh',
        margin: 0,
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
        width: '18svw',
        height: 'fit-content',
        maxHeight: '70svh',
        overflow: 'hidden'
    }

    const IconStyle: React.CSSProperties = {
        height: '7rem',
        width: '7rem',
        margin: 'auto',
        marginTop: '1rem',
    }

    const displayFeaturesList = (): React.ReactElement[] => {
        return featuresList.map(feature => {
            return (
                <Card
                    hoverable
                    style={cardStyle}
                    bordered={false}
                    cover={<feature.Icon style={IconStyle} />}
                    key={feature.title}
                >
                    <Meta
                        title={<Title level={4} style={{ textAlign: 'center' }}>{feature.title}</Title>}
                        description={feature.description} />
                </Card>
            )
        })
    };

    return (
        <section style={backgroundStyle} id='features'>
            <Title style={titleStyle}>Features</Title>
            <section style={cardsListStyle}>
                {displayFeaturesList()}
            </section>


            <Button type='primary' size='large' shape='round'>See Details</Button>
        </section>
    )
}