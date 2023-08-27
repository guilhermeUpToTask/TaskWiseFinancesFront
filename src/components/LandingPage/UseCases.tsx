import React from 'react';
import DollarIcon from '../../assets/icons/DollarIcon';
import { Typography } from 'antd';

const { Title, Text, } = Typography;

export default function UseCases(): React.ReactElement {
    const backgroundStyle: React.CSSProperties = {
        display: 'flex',
        height: '100svh',
        margin: 0,
        paddingTop: '4rem',
        background: 'linear-gradient(to top left,  #59ece2, #5fe7df, #65e1db, #6bdcd8, #70d7d4, #83d8cb, #95d9c3, #a6d9be, #c7ddbc, #e2e1c4, #f5e7d4, #ffefe7)',
        justifyContent: 'center',
    }
    const articlesSectionStyle: React.CSSProperties = {
        width: '50svw',
        maxHeight: '100svh',
        padding: '4rem',
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'center',
        boxSizing: 'border-box',
    }
    const articleStyle: React.CSSProperties = {

    }

    const DollarIconStyle: React.CSSProperties = {
        width: '40svw',
        height: '90svh',
        padding: '1rem',
        boxSizing: 'border-box',
    }

    return (
        <section style={backgroundStyle} id='useful-cases'>
            <section style={articlesSectionStyle}>
                <article style={articleStyle}>
                    <Title >Manager your money</Title>
                    <Text style={{ fontSize: '1.2rem' }}>
                        Manage your money easily and effectively.
                    </Text>
                </article>
                <article style={articleStyle}>
                    <Title level={2}>Useful Cases</Title>
                    <ul style={{ listStyleType: 'circle' }}>
                        <li>
                            <Text style={{ fontSize: '1.2rem' }}>
                                <strong>Effortless Expense Analysis: </strong>
                                Wallet system categorizes expenses; track trends, make wiser choices.

                            </Text>
                        </li>
                        <li>
                            <Text style={{ fontSize: '1.2rem' }}>
                                <strong> Never Miss Bills:</strong>
                                Calendar-synced bill control avoids late payments; view history.

                            </Text>
                        </li>
                        <li>
                            <Text style={{ fontSize: '1.2rem' }}>
                                <strong>Goals with Precision:</strong>
                                Future projection shapes savings goals; predict future finances.
                            </Text>
                        </li>
                        <li>
                            <Text style={{ fontSize: '1.2rem' }}>
                                <strong>Visualize Financial Health:</strong>
                                Relatory system offers reports and visuals for informed decisions.
                            </Text>
                        </li>
                    </ul>
                </article>
            </section>
            <DollarIcon style={DollarIconStyle} />
        </section>
    )
}